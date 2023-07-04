<template>
    <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content:space-between; height:100%;">
        <h3 style="margin-top: 10%;">Dossier: </h3><p>{{ dossier.id_User }}</p>
        <h3 style="margin-bottom: 9%;">Prêt demandé:</h3>
    </div>
</template>

<script>
export default {
    name: 'DCardClient',
    props: ['dossier']
}
</script>