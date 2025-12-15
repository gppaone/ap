<script>
    import { fade, fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    const noop = () => {};

    export let open = false;
    export let backdrop = true;
    export let ignoreBackdrop = false;
    export let keyboard = true;
    export let onOpened = noop;
    export let onClosed = noop;
    export let error = '';

    let _keyboardEvent;

    function attachEvent(target, ...args) {
        target.addEventListener(...args);
        return {
            remove: () => target.removeEventListener(...args)
        };
    }

    function checkClass(className) {
        return document.body.classList.contains(className);
    }

    function modalOpen() {
        if (!checkClass("modal-open")) {
            document.body.classList.add("modal-open");
        }
    }
    function modalClose() {
        if (checkClass("modal-open")) {
            document.body.classList.remove("modal-open");
        }
    }

    function handleBackdrop(event) {
        if (backdrop && !ignoreBackdrop) {
            event.stopPropagation();
            open = false;
        }
    }

    function onModalOpened() {
        if (keyboard) {
            _keyboardEvent = attachEvent(document, "keydown", e => {
                if (event.key === "Escape") {
                    open = false;
                }
            });
        }
        onOpened();
    }

    function onModalClosed() {
        if (_keyboardEvent) {
            _keyboardEvent.remove();
        }
        onClosed();
    }

    // Watching changes for Open vairable
    $: {
        if (open) {
            modalOpen();
        } else {
            modalClose();
        }
    }
</script>


{#if open}
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div class="p-6">
            <h2 id="modal-title" class="text-2xl font-bold text-slate-900 dark:text-white mb-4"><slot name="modal-title"></slot></h2>  
            <div class="bg-slate-100 dark:bg-slate-700 rounded p-3 mb-4 max-h-90">
                <div class="modal-body">
                    <slot name="modal-body"></slot>
                </div>
                {#if error != ''}
                    <div class="alert alert-danger ms-2 me-2" role="alert">
                        An error has occured: <br />
                        {error}
                    </div>
                {/if}
                <div class="modal-footer">
                    
                </div>
            </div> 
            <div class="flex gap-3 justify-end">
                <slot name="modal-footer"></slot>
            </div>
        </div>
    </div>
</div>
{/if}