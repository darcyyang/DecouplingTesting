import React, {Component} from 'react'
import $ from 'jquery';

export default class CommonJs extends Component {
    static ajaxLoader() {
        var pageLoadingDom = '<div id="af-page-loading"><img src="/images/ajax-loader.gif" /></div>';
        $('body').append(pageLoadingDom);
    }

    static ajaxLoadComplete() {
        $('body').find('#af-page-loading').remove();
    }

    static disableButton(loginBtn){
        $(loginBtn).isDisabled = true
    }
}
