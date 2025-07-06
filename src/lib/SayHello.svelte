<script>
// @ts-nocheck
    // jadi ketika menggunakan $state.raw() dan mengubah isi attributnya saja tanpa mengubah variablenya maka statenya tidak akan mereaksi apapun
    let data = $state.raw({
        firstName : "",
        lastName : "",
    });
    const sayHello = () => {
        // tanpa menggunakan $state.raw()
    //    const firstname = document.getElementById('firstname');
    //    const lastName = document.getElementById("lastname");

    //    data.firstname = firstname.value ?? "";
    //    data.lastName = lastName.value ?? "";

       // menggunakan $state.raw();
       data =  {
        firstname : document.getElementById('firstname').value,
        lastName : document.getElementById('lastname').value,
       };
    }
    const number = 80;
    console.log(number);
</script>


<div>
    <input type="text" name="firstname" id="firstname" placeholder="FirstName"> <br />
    <input type="text" name="lastname" id="lastname" placeholder="LastName"> <br />
    <button onclick={sayHello}>Say Hello</button>

    <h1>Person : {data?.firstname} {data?.lastName}</h1>
</div>