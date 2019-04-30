<template>
    <div>
        <ul>
            <li v-for="m in getMembers()" :key="m.name">{{ m.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Member from '@/models/Member';

@Component
export default class Vote extends Vue {
    private getMembers(): Member[] {
        const m1 = new Member('foo');
        const m2 = new Member('bar');
        const m3 = new Member('foobar');
        return [m1, m2, m3];
    }
}
</script>
