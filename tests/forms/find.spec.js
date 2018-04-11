let jsdom = require("jsdom");
let { click, enter } = require('../../tests/utils');
import React from 'react';
import ReactDOM from 'react-dom';
import Find from '../../src/forms/find';

describe('Find', function() {

    let document;
    let sut;
    let serviceWasCalledCorrectly;
    let received;

    beforeEach(function() {
        document = jsdom.jsdom('<div id="root"></div>');
        serviceWasCalledCorrectly = false;
        sut = <Find service={{ searchForm7:function(file, callback){
                        serviceWasCalledCorrectly = (file == '42');
                        callback({ any:'value' });
                    } }} 
                    callback={function(data) { received = data; }} />;
        ReactDOM.render(sut, document.getElementById('root'));
    });

    test('renders without crashing', ()=> {        
        expect(document.getElementById('find-button').innerHTML).toEqual('Find');
    });
    test('triggers fetch on click', ()=> {
        enter('42', '#file-no', document);
        click('#find-button', document);
        
        expect(serviceWasCalledCorrectly).toEqual(true);
    });
    test('calls back when found', ()=> {
        click('#find-button', document);

        expect(received).toEqual({ any:'value' });
    });

});