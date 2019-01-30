import { Component, Vue, Prop } from 'vue-property-decorator';
import NavLink from './NavLink';

@Component
export default class Parent extends Vue {
    protected render() {
        return <NavLink href={6} widget='widget' toggle='toggle'>Slots.default</NavLink>;
    }
}
