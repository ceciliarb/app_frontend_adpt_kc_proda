<template>
    <div class="container d-flex">
        <div class="row flex-1 align-items-center">
            <div class="col text-center text-muted mx-4">
                <div style="margin-bottom: -2.3rem;">
                    <i class="fa fa-cog fa-5x" aria-hidden="true"></i>
                </div>
                <div style="padding-left: 5.6rem;">
                    <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
                </div>
                <h4>Funcionalidade indisponível</h4>
                <p>
                    <b-btn variant="primary" @click="$router.go(-1)"><i class="fa fa-arrow-left" aria-hidden="true"></i> voltar</b-btn>
                </p>
            </div>
        </div>
    </div>
</template>
