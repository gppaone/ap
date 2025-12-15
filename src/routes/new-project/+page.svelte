<script>
    import DatePicker from '$lib/components/DatePicker.svelte';
    let selectedDate = '';
    // start with x rows
    let rows = Array(5).fill(null).map(() => ({
        jack: '',
        outlet: '',
        switchPort: '',
        switch: '',
        aKips: false,
        infoBlox: false,
        epic: false,
        controller: false
    }));

    let lastRowJackPrevious = '';

    $: {
        const lastRow = rows[rows.length - 1];
        const lastRowJack = lastRow ? lastRow.jack : '';
        
        // add new row if data is ented into last jack
        if (lastRowJackPrevious === '' && lastRowJack.length > 0) {
            rows = [...rows, {
                jack: '',
                outlet: '',
                switchPort: '',
                switch: '',
                aKips: false,
                infoBlox: false,
                epic: false,
                controller: false
            }];
        }
        
        lastRowJackPrevious = lastRowJack;
    }
    function saveProject() {
        console.log('saved project');
    }
</script>
<div class="px-4 mb-2">
    <h1 class="text-xl text-slate-700 dark:text-slate-400 font-bold mb-1">Project:</h1>
    <select class="w-full px-2 py-1 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded">
        <option value="1">Administrative Services I (122)</option>
        <option value="1">Administrative Services II (121)</option>
        <option value="3">Administrative Services III (215)</option>
        <option value="2">Albright Innovation Hall-Wolf Ridge-Building 3 (780C)</option>
        <option value="4">Alexander Residence Hall (097)</option>
    </select>
</div>
<div class="flex w-full justify-between items-center gap-2 px-4 mb-2">
    <div class="flex-1">
        <label for="name" class="block text-sm/6 font-bold text-gray-900 dark:text-gray-100">Engineer Name</label>
        <input type="text" id="name" class="block w-full grow px-2 py-1 dark:bg-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded" autocomplete="off" placeholder="Enter engineer name" />
    </div>
    <div class="flex-1">
        <label for="date" class="block text-sm/6 font-bold text-gray-900 dark:text-gray-100">Project Date</label>
        <DatePicker bind:value={selectedDate} format="MM/DD/YYYY" placeholder="MM/DD/YYYY" />
    </div>
    <div class="flex-1">
        <label for="soNumber" class="block text-sm/6 font-bold text-gray-900 dark:text-gray-100">Project SO#</label>
        <input type="text" id="soNumber" class="block w-full grow px-2 py-1 dark:bg-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded" autocomplete="off" placeholder="Enter project SO#" />
    </div>
</div>
<div class="w-full p-4">
    <div class="flex justify-end">
        <button on:click={() => {saveProject()}} type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="fa-solid fa-plus"></i> Save Project</button>
    </div>
    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">Jack</th>
                    <th scope="col" class="px-6 py-3">Outlet</th>
                    <th scope="col" class="px-6 py-3">Switch Port</th>
                    <th scope="col" class="px-6 py-3">Switch</th>
                    <th scope="col" class="px-6 py-3">AKiPs</th>
                    <th scope="col" class="px-6 py-3">infoBlox</th>
                    <th scope="col" class="px-6 py-3">EPIC</th>
                    <th scope="col" class="px-6 py-3">Controller</th>
                </tr>
            </thead>
            <tbody>

                {#each rows as row, rowIndex}
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                        <td class="px-6 py-4">
                            <input 
                                type="text" 
                                bind:value={row.jack}
                                class="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="Enter jack"
                            />
                        </td>
                        <td class="px-6 py-4">
                            <input 
                                type="text" 
                                bind:value={row.outlet}
                                class="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="Enter outlet"
                            />
                        </td>
                        <td class="px-6 py-4">
                            <input 
                                type="text" 
                                value=""
                                class="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="---"
                                disabled
                            />
                        </td>
                        <td class="px-6 py-4">
                            <input 
                                type="text" 
                                value=""
                                class="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="---"
                                disabled
                            />
                        </td>
                        <td class="px-6 py-4 text-center align-middle">
                            {#if row.aKips}
                                <!-- Checkbox SVG -->
                                <svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                            {:else}
                                <!-- Red circle with line through it -->
                                <svg class="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                </svg>
                            {/if}
                        </td>
                        <td class="px-6 py-4 text-center align-middle">
                            {#if row.infoBlox}
                                <!-- Checkbox SVG -->
                                <svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                            {:else}
                                <!-- Red circle with line through it -->
                                <svg class="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                </svg>
                            {/if}
                        </td>
                        <td class="px-6 py-4 text-center align-middle">
                            {#if row.epic}
                                <!-- Checkbox SVG -->
                                <svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                            {:else}
                                <!-- Red circle with line through it -->
                                <svg class="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                </svg>
                            {/if}
                        </td>
                        <td class="px-6 py-4 text-center align-middle">
                            {#if row.controller}
                                <!-- Checkbox SVG -->
                                <svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                            {:else}
                                <!-- Red circle with line through it -->
                                <svg class="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                </svg>
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
    <div class="pt-3 flex justify-end">
        <button on:click={() => {saveProject()}} type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="fa-solid fa-plus"></i> Save Project</button>
    </div>
</div>