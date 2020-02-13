<template>
    <div class="container d-flex">
        <div class="row flex-1 align-items-center">
            <div class="col text-center text-muted mx-4">
                <div class="m-2">
                    <i class="fa fa-ban fa-5x" aria-hidden="true"></i>
                </div>
                <h3>Acesso restrito</h3>
                <p class="help text-muted">
                    Se você deveria ter acesso a essa página, gentileza entrar em contato com o administrador.
                </p>
                <p>
                    <b-btn variant="primary" @click="$router.back()"><i class="fa fa-arrow-left" aria-hidden="true"></i> voltar</b-btn>
                </p>
            </div>
        </div>
    </div>
</template>
