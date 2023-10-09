# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Mymodule(models.Model):
    _name = "mymodule.mymodule"
    _description= "Mymodule"

    name= fields.Char(string="Name")
    content = fields.Text(string='Content', readonly=True)

    @api.multi
    def process_content(self):
        for record in self:
            record.content = record.name