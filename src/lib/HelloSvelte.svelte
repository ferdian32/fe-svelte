<script>
    import Logo from "./Logo.svelte";
    const name = 'Svelte';
    const paragrafElement = '<p>Membuat html tags</p>';
</script>   


<style>

</style>

<section>
    <!-- gunakan sebuah @html agar tag htmlnya merender sebuah value -->
    {@html paragrafElement}
    <h1>Hello {name.toUpperCase()}!</h1>
    <Logo />
</section>