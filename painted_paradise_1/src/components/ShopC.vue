<template>
    <div class="container p-4">
        <div class="jumbotron jumbotron-fluid bg-paintings">
            <div class="container sections">
                <div class="row">
                    <div class="col">
                    <h5 class="display-5">Paintings</h5>
                    <p class="lead">View our collection of paintings.</p>
                    <a href="/paintings" class="btn btn-primary">Shop Paintings</a>
                </div>
                </div>
            </div>
        </div>
        <div class="jumbotron jumbotron-fluid bg-tools">
            <div class="container sections">
                <div class="row">
                    <div class="col">
                        <h5 class="display-5">Tools</h5>
                        <p class="lead">Browse our selection of tools.</p>
                        <a href="/tools" class="btn btn-primary">Shop Tools</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'ShopC'
    }
</script>

<style scoped>
.bg-paintings {
    background-image: url(https://i.postimg.cc/G3kDqTBF/pexels-sevenstorm-juhaszimrus-1604991.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 50vh;
}
.bg-tools {
    background-image: url(https://i.postimg.cc/fR79QmGY/pexels-antoni-shkraba-4348074.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 50vh;
}

.sections{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    text-align: center;
    font-family: 'Philosopher', sans-serif;
}
.sections:hover{
    backdrop-filter: blur(5px);
    cursor: pointer;
}
.display-5{
    color: #FD6162;
    font-size: 4vw;
    text-shadow: 3px 3px 3px black;
}

.lead{
    color: white;
    font-size: 2.5vw;
}
.btn{
    background-color: #FD6162;
    border: #FD6162;
    font-size: 1.5vw;
}
.btn:hover{
    background-color: rgb(84, 201, 84);
    border: rgb(84, 201, 84);
}

@media (max-width:768px){
    .display-5,.lead,.btn{
        font-size: 3vw;
    }
}
@media (max-width:410px){
    .display-5,.lead,.btn{
        font-size: 4vw;
    }
}
</style>