<script>
  let count = $state(0)
  const increment = () => {
    count ++;
  }
  
  // tanpa menggunakan rune state / reactive state
  // let count = 0;
  // const increment = () => {
  //   count += 1;
  //   document.getElementById('count').innerText = "Count" + count + "";
  // }
</script>

<h1 id="count">Counter : {count}</h1>

<button onclick={increment}>
  count is {count}
</button>
