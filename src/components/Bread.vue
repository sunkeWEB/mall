<template>
    <div class="nav-breadcrumb-wrap">
        <div class="container">
            <nav class="nav-breadcrumb">
                <a href="/">首页</a>
                <slot name="listA"></slot>
            </nav>
        </div>
    </div>
</template>
<style>
    .nav-breadcrumb{
        text-align: left;
    }
</style>