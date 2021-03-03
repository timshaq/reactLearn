import * as React from 'react';
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from './Layout';
import {Header} from './Header';
import {Content} from './Content';
import {CardsList} from './CardsList';
import { EIcon, Icon } from './Icon';

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <br/>
                {"test Icon component: name={EIcon.save} size={30}"}
                <br/>
                result: <Icon name={EIcon.save} size={30}/>
                <br/>

                <CardsList />
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent);