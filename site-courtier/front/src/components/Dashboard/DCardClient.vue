<template>
        <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content:space-between; height:100%;">
            <h3 style="margin-top: 10%;">Client: </h3><p>{{ dossier.id_User }}</p><!--<p>{{ client.id_User }}</p>-->
        </div>
</template>

<script>

export default {
    name: 'DCardClient',
    props: ['dossier'],

}
</script>