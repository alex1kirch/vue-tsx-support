import { Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

// see https://github.com/Microsoft/TypeScript-Vue-Starter#using-decorators-to-define-a-component
// see https://github.com/wonderful-panda/vue-tsx-support#component-1

interface Props {
    widget: string;
    href?: number;
    toggle: string;
}

// see https://github.com/vuejs/vue-cli/issues/2417#issuecomment-436829272
// export default class NavLink extends tsx.Component<Props> implements Props {

@Component
export default class NavLink extends tsx.Component<Props> {
    @Prop()
    public widget!: string;

    @Prop({ default: '#' })
    public href!: string;

    @Prop()
    public toggle!: string;

    protected render() {
        return (
            <a class='nav-link' data-widget={this.widget} href={this.href} data-toggle={this.toggle}>
                {this.$slots.default}
            </a>
        );
    }
}
