<template>
    <div class="mt-10">
        <v-list density="compact">
        <v-list-subheader>Dashboard</v-list-subheader>

        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            :to="item.to"
        >
            <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
        </v-list>
        <v-container class="mt-10">
            <slot name="logout"></slot>
        </v-container>
    </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { text: 'Post', icon: 'mdi-clock' , to: '/login/directory/posts'},
        { text: 'Audience', icon: 'mdi-account', to: '/login/directory/audience' },
        { text: 'Account Settings', icon: 'mdi-cog-outline', to: '/login/directory/settings' },
      ],
    }),
  }
</script>