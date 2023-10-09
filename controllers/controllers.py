# -*- coding: utf-8 -*-
from odoo import http

class Mymodule(http.Controller):
    @http.route('/mymodule/mymodule/', auth='public')
    def index(self, **kwargs):
        # return  "Hello, world....."
        Teachers = http.request.env['mymodule.teachers']
        return http.request.render('mymodule.index', {
            'teachers': Teachers.search([])
        })