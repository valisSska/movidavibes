<?php
if( isset($general_font['font-family'] ) && $general_font['font-family']!=''){
    echo 'body, h1, h2, h3, h4, h5, h6, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a,.info_details,.wpestate_tabs .ui-widget-content,.ui-widget,.wpestate_accordion_tab .ui-widget-content,.price_unit{
        font-family:"'.$general_font['font-family'].'";
}';
}

