(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={Contact_form:"ContactForm_Contact_form__1feFa"}},16:function(e,t,n){},22:function(e,t,n){e.exports=n(34)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=n(18),u=n(5),m=n(6),l=n(9),s=n(8),p=n(35),f=n(17),b=n(19),v=n(12),d=n.n(v),h={name:"",number:""},E=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=h,e.inputName=function(t){var n=t.target;e.setState({name:n.value})},e.inputNumber=function(t){var n=t.target;e.setState({number:n.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;(0,e.props.addContact)({name:a,number:r}),e.setState(Object(b.a)({},h))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:d.a.Contact_form},r.a.createElement("label",null,"Name",r.a.createElement("input",{className:d.a.inputName,type:"text",value:t,onChange:this.inputName})),r.a.createElement("label",null,"Number",r.a.createElement("input",{placeholder:"XXX-XX-XX",type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",value:n,onChange:this.inputNumber})),r.a.createElement("button",{type:"submit"},"ADD CONTACT"))}}]),n}(a.Component),C=n(20),N=n(36);n(16);function g(e){var t=e.name,n=e.number,a=e.onDeleteContact;return r.a.createElement("li",{className:"phone_Item"},r.a.createElement("span",{className:"phone_name"},t),r.a.createElement("span",{className:"phone_number"},n),r.a.createElement("button",{type:"button",onClick:a}))}function O(e){var t=e.items,n=e.onRemove;return r.a.createElement(N.a,{component:"ul",className:"contact_list"},t.map((function(e){var t=e.id,a=Object(C.a)(e,["id"]);return r.a.createElement(p.a,{key:t,timeout:250,classNames:"list"},r.a.createElement(g,Object.assign({},a,{onDeleteContact:function(){return n(t)}})))})))}n(31);var y=function(e){var t=e.value,n=e.inputFilter;return r.a.createElement(p.a,{in:!0,appear:!0,classNames:"find",timeout:500,unmountOnExit:!0},r.a.createElement("div",{className:"findContact"},r.a.createElement("p",null,"Find contacts by name or number"),r.a.createElement("input",{className:"inputName",type:"text",value:t,onChange:function(e){var t=e.target;return n(t.value)}})))},_=(n(32),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{in:!0,appear:!0,timeout:500,classNames:"anim",unmountOnExit:!0},r.a.createElement("div",{className:"alert"},"Contact already exist")))}),S=(n(33),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),j=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:S,filter:"",alert_contact:!1},e.addContact=function(t){var n=t.name,a=t.number,r={id:Object(f.v4)(),name:n,number:a};e.state.contacts.map((function(e){return e.name})).includes(n)?e.setState({alert_contact:!0}):e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(i.a)(t)),alert_contact:!1}}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.onChangeFilter=function(t){e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){var t=e.name,n=e.number;return t.toLowerCase().includes(a.toLowerCase())||n.toLowerCase().includes(a.toLowerCase())}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.contacts;t.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state,t=e.filter,n=e.contacts,a=e.alert_contact,c=this.getVisibleContacts();return r.a.createElement("div",{className:"phoneBook_container"},r.a.createElement(p.a,{in:!0,appear:!0,classNames:"title_anim",timeout:500,unmountOnExit:!0},r.a.createElement("h1",{className:"title"},"Phonebook")),a&&r.a.createElement(_,null),r.a.createElement(p.a,{in:!0,appear:!0,classNames:"form_fade",timeout:500,unmountOnExit:!0},r.a.createElement(E,{addContact:this.addContact})),n.length>1&&r.a.createElement(y,{value:t,inputFilter:this.onChangeFilter}),r.a.createElement(O,{items:c,onRemove:this.removeContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3ff5d684.chunk.js.map