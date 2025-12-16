<script>
    import Modal from '$lib/components/Modal.svelte';
    import { base } from '$app/paths';

    export let open = false;
    export let onClosed;
    export let item;

    let error = '';
    let spinner = false;
    let email = '';
    let name = '';

    function close(data) {
        open = false;
        name = ''
        email = '';
        if (onClosed) {
            onClosed(data);
        }
    }

    function loadProject(projectId) {
        window.location.href = `${base}/project-view?id=${projectId}`;
    }
    function newProject() {
        window.location.href = `${base}/new-project`;
    }


    async function submit(event) {
        console.log('archived project');
        close();
    }
</script>
<div class="w-full p-4">
    <div class="flex justify-end">
        <button on:click={() => {newProject()}} type="button" class="focus:outline-none text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"><i class="fa-solid fa-plus"></i> New Project</button>
    </div>
    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Building
                    </th>
                    <th scope="col" class="px-6 py-3">
                        SO #
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 hover:bg-gray-100">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        272 Avent Ferry Technology Center
                    </th>
                    <td class="px-6 py-4">
                        SO1234567890
                    </td>
                    <td class="px-6 py-4">
                        <div class="relative w-1/2 h-6 bg-slate-300 rounded-full overflow-hidden">
                            <div
                            class="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
                            style="width: 75%"
                            ></div>
                        
                            <div class="absolute top-0 left-0 h-full flex items-center pl-2">
                            <span class="text-white font-bold text-xs">75%</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button on:click={() => {loadProject('272')}} type="button" class="focus:outline-none text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"><i class="fa-solid fa-magnifying-glass"></i> View</button>
                        <button on:click={() => {open = true}} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"><i class="fa-solid fa-box-archive"></i> Archive</button>
                    </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 hover:bg-gray-100">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        102 Talley Student Union
                    </th>
                    <td class="px-6 py-4">
                        SO1234567891
                    </td>
                    <td class="px-6 py-4">
                        <div class="relative w-1/2 h-6 bg-slate-300 rounded-full overflow-hidden">
                            <div
                            class="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
                            style="width: 30%"
                            ></div>
                        
                            <div class="absolute top-0 left-0 h-full flex items-center pl-2">
                            <span class="text-white font-bold text-xs">30%</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button on:click={() => {loadProject('102')}} type="button" class="focus:outline-none text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"><i class="fa-solid fa-magnifying-glass"></i> View</button>
                        <button on:click={() => {open = true}} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"><i class="fa-solid fa-box-archive"></i> Archive</button>
                    </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 hover:bg-gray-100">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        032A SAS Hall
                    </th>
                    <td class="px-6 py-4">
                        SO1234567892
                    </td>
                    <td class="px-6 py-4">
                        <div class="relative w-1/2 h-6 bg-slate-300 rounded-full overflow-hidden">
                            <div
                            class="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
                            style="width: 95%"
                            ></div>
                        
                            <div class="absolute top-0 left-0 h-full flex items-center pl-2">
                            <span class="text-white font-bold text-xs">95%</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button on:click={() => {loadProject('032A')}} type="button" class="focus:outline-none text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"><i class="fa-solid fa-magnifying-glass"></i> View</button>
                        <button on:click={() => {open = true}} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"><i class="fa-solid fa-box-archive"></i> Archive</button>
                    </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 hover:bg-gray-100">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        050 Polk Hall
                    </th>
                    <td class="px-6 py-4">
                        SO1234567893
                    </td>
                    <td class="px-6 py-4">
                        <div class="relative w-1/2 h-6 bg-slate-300 rounded-full overflow-hidden">
                            <div
                            class="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
                            style="width: 100%"
                            ></div>
                        
                            <div class="absolute top-0 left-0 h-full flex items-center pl-2">
                            <span class="text-white font-bold text-xs">100%</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button on:click={() => {loadProject('050')}} type="button" class="focus:outline-none text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"><i class="fa-solid fa-magnifying-glass"></i> View</button>
                        <button on:click={() => {open = true}}  type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"><i class="fa-solid fa-box-archive"></i> Archive</button>
                    </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 hover:bg-gray-100">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        075 David Clark Lab
                    </th>
                    <td class="px-6 py-4">
                        SO1234567894
                    </td>
                    <td class="px-6 py-4">
                        <div class="relative w-1/2 h-6 bg-slate-300 rounded-full overflow-hidden">
                            <div
                            class="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
                            style="width: 0%"
                            ></div>
                        
                            <div class="absolute top-0 left-0 h-full flex items-center pl-2">
                            <span class="text-white font-bold text-xs">0%</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button on:click={() => {loadProject('075')}} type="button" class="focus:outline-none text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"><i class="fa-solid fa-magnifying-glass"></i> View</button>
                        <button type="button" class="focus:outline-none text-white bg-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2"><i class="fa-solid fa-box-archive"></i> Archive</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

{#if open}
<Modal bind:open={open} onClosed={close} bind:error={error} keyboard="false" ignoreBackdrop="true" modalClasses="modal-md">
    <svelte:fragment slot="modal-title">Confirm project archive</svelte:fragment>
    <svelte:fragment slot="modal-body">
        <div class="text-slate-700 dark:text-slate-300">
            Are you sure you want to archive this project?
        </div>
    </svelte:fragment>
    <svelte:fragment slot="modal-footer">
        <button type="button" class="px-4 py-2 text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 rounded hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500" data-bs-dismiss="modal" on:click={() => close()}>Cancel</button>
        <button type="button" class="inline-flex gap-2 items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 px-4 py-2 text-white rounded focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed" on:click={(e) => submit(e)}>
            <svg class="mr-3 -ml-1 size-5 animate-spin text-white {spinner ? 'visible' : 'hidden'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {spinner ? 'Archiving...' : 'Archive'}
        </button>
    </svelte:fragment>
</Modal>
{/if}
