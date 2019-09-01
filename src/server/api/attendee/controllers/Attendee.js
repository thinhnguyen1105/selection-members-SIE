'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const hostName = 'http://localhost:1337'

module.exports = {
    
    email: async function(ctx){
        const msg = {
        to: `${ctx.request.body.email}`,
        from: 'dattran1997@gmail.com',
        subject: 'Tuyển Thành Viên',
        html: `
            <p>hello ch&uacute;c mừng bạn đến với tiểu bản bla bla .....</p>
            <p><strong>h&atilde;y click link dưới để x&aacute;c nhận tham gia nh&eacute;</strong></p>
            <a href=${hostName}/email/confirm/${ctx.request.body.id}>confirm here</a>
            <p><img src="https://donghoeverest.vn/wp-content/uploads/2018/03/Tr%E1%BB%8Dn-b%E1%BB%99-s%C6%B0u-t%E1%BA%ADp-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BB%99ng-%C4%91%E1%BA%B9p-l%E1%BA%A1-cho-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-4.jpg" alt="" /></p>
        `,
        };
        try{
            await sgMail.send(msg);
            return 'successful';
        }catch(e){
            return 'error';
        }
        
    },

    abc: function(){
        return 'hello';
    },
    
    checked: async function(ctx){
        let new_data = {
            "attend":1
        };

        try{
            let updated_data = await strapi.services.attendee.update({id: ctx.params.id}, new_data);
            return 'tks u for confirm :>';
            // return updated_data;
        }catch(e){
            return 'error try again';
        }
    }
};
