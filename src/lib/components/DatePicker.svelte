<script>
    import { onMount } from 'svelte';

    export let value = '';
    export let placeholder = 'MM/DD/YYYY';
    export let format = 'MM/DD/YYYY'; // Date format for display


    let selectedDate = null;
    let displayDate = new Date();
    let isOpen = false;
    let inputValue = value;
    let containerRef;

    $: if (value !== inputValue) {
        inputValue = value;
        const parsed = parseDate(value);
        if (parsed) {
            selectedDate = parsed;
            displayDate = parsed;
        }
    }

    const formatDate = (date) => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        // custom format from prop
        return format
        .replace('YYYY', year)
        .replace('YY', String(year).slice(-2))
        .replace('MM', month)
        .replace('DD', day);
    };

    const parseDate = (str) => {
        if (!str) return null;
        
        let year, month, day;
        
        const formatPattern = format
        .replace('YYYY', '(\\d{4})')
        .replace('YY', '(\\d{2})')
        .replace('MM', '(\\d{1,2})')
        .replace('DD', '(\\d{1,2})');
        
        const regex = new RegExp(formatPattern);
        const match = str.match(regex);
        
        if (!match) return null;
        
        const parts = format.match(/YYYY|YY|MM|DD/g);
        const values = match.slice(1);
        
        parts.forEach((part, index) => {
            const val = parseInt(values[index], 10);
            if (part === 'YYYY') year = val;
            else if (part === 'YY') year = 2000 + val; 
            else if (part === 'MM') month = val - 1;
            else if (part === 'DD') day = val;
        });
        
        const date = new Date(year, month, day);
        return isNaN(date.getTime()) ? null : date;
    };

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const isSameDay = (date1, date2) => {
        if (!date1 || !date2) return false;
        return date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate();
    };

    const isToday = (date) => {
        const today = new Date();
        return isSameDay(date, today);
    };

    const handlePrevMonth = () => {
        displayDate = new Date(displayDate.getFullYear(), displayDate.getMonth() - 1);
    };

    const handleNextMonth = () => {
        displayDate = new Date(displayDate.getFullYear(), displayDate.getMonth() + 1);
    };

    const handleDateSelect = (day) => {
        const newDate = new Date(displayDate.getFullYear(), displayDate.getMonth(), day);
        selectedDate = newDate;
        inputValue = formatDate(newDate);
        value = inputValue;
        isOpen = false;
    };

    const handleInputChange = (e) => {
        inputValue = e.target.value;
        value = inputValue;
        const parsed = parseDate(inputValue);
        if (parsed) {
            selectedDate = parsed;
            displayDate = parsed;
        }
    };

    const handleInputClick = () => {
        isOpen = !isOpen;
        if (selectedDate) {
            displayDate = selectedDate;
        }
    };

    const handleClickOutside = (e) => {
        if (containerRef && !containerRef.contains(e.target)) {
            isOpen = false;
        }
    };

    onMount(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    $: calendarDays = (() => {
        const daysInMonth = getDaysInMonth(displayDate);
        const firstDay = getFirstDayOfMonth(displayDate);
        const days = [];
    
        for (let i = 0; i < firstDay; i++) {
            days.push({ type: 'empty', key: `empty-${i}` });
        }
    
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(displayDate.getFullYear(), displayDate.getMonth(), day);
            days.push({
            type: 'day',
            day,
            date,
            isSelected: isSameDay(date, selectedDate),
            isToday: isToday(date),
            key: `day-${day}`
            });
        }
    
        return days;
    })();
</script>

<div bind:this={containerRef} class="relative">
    <div class="relative">
        <input
        type="text"
        value={inputValue}
        on:input={handleInputChange}
        on:click={handleInputClick}
        {placeholder}
        class="block w-full grow px-2 py-1 dark:bg-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded"
        />
        <button
        type="button"
        on:click={handleInputClick}
        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        title="Open date picker"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
        </button>
    </div>

    {#if isOpen}
        <div class="absolute top-full mt-2 w-3/4 bg-white dark:bg-slate-800 dark:text-white rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 p-4 z-10">
            <!-- popup header -->
            <div class="flex items-center justify-between mb-2">
                <button
                type="button"
                on:click={handlePrevMonth}
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Previous month"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <div class="font-semibold text-gray-800 dark:text-white">
                    {monthNames[displayDate.getMonth()]} {displayDate.getFullYear()}
                </div>
                <button
                type="button"
                on:click={handleNextMonth}
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Next month"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            <!-- days -->
            <div class="grid grid-cols-7 gap-1 mb-2">
                {#each dayNames as dayName}
                <div class="h-10 flex items-center justify-center text-sm font-semibold text-gray-600">
                    {dayName}
                </div>
                {/each}
            </div>

            <!-- calendar grid -->
            <div class="grid grid-cols-7 gap-1">
                {#each calendarDays as item (item.key)}
                    {#if item.type === 'empty'}
                        <div class="h-10"></div>
                    {:else}
                        <button
                        type="button"
                        on:click={() => handleDateSelect(item.day)}
                        class="h-10 flex items-center justify-center rounded-lg transition-colors {item.isSelected
                            ? 'bg-blue-600 text-white font-semibold'
                            : item.isToday
                            ? 'bg-blue-100 text-blue-700 font-semibold'
                            : 'hover:bg-gray-100 dark:hover:bg-slate-700'}"
                        >
                        {item.day}
                        </button>
                    {/if}
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>

</style>