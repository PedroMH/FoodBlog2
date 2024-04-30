<template>
    <header>
        <nav>
            <ul class="left-menu">
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul class="right-menu">
                <li><a href="#">App</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #f2f2f2;
    padding: 10px;
}

nav {
    display: flex;
    justify-content: space-between;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.left-menu li,
.right-menu li {
    display: inline-block;
    margin-right: 10px;
}

a {
    text-decoration: none;
    color: #333;
}

a:hover {
    color: #666;
}
</style>