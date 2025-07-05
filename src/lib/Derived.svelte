<script>
    const count = $state([]);
    const total = $derived(count.reduce((a,b) => a + b, 0));
    function increment () {
        count.push(1);
    }
</script>

<h1>Count : {count.join(" + ")} = {total}</h1>
<button onclick={increment}>increment</button>