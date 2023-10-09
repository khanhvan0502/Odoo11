from odoo import http
from odoo.http import request

class MyWeb(http.Controller):
    @http.route('/myweb', type='http', auth="public", website=True)
    def index(self, **kw):
        return request.render('my-module.layout')

    @http.route('/myweb/home', type='http', auth="public", website=True)
    def home(seft, **kw):
        return request.render('my-module.home_page')

    @http.route('/myweb/about', type='http', auth="public", website=True)
    def about(seft, **kw):
        return request.render('my-module.about_page')

    @http.route('/myweb/about/beginner', type='http', auth="public", website=True)
    def beginner(seft, **kw):
        return request.render('my-module.beginner_page')
        
    @http.route('/myweb/contact', type='http', auth="public", website=True)
    def contact(seft, **kw):
        return request.render('my-module.contact_page')