<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="6">
                <slot name="col-01"></slot>
            </v-col>
            <v-col cols="12" sm="6">
                <slot name="col-02"></slot>
            </v-col>
        </v-row>
    </v-container>
</template>