Ember.TEMPLATES["compareratings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "compare", "", options))));
  return buffer;
  
});

Ember.TEMPLATES["components/app-loader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"loading spin-2\"></div>");
  
});

Ember.TEMPLATES["components/player-listitem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n  <span class=\"first-name\">\r\n    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n  </span>\r\n  <span class=\"last-name\">\r\n    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n  </span>\r\n\r\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n  <span class=\"last-name\">\r\n    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n  </span>\r\n\r\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-4 visible-md visible-lg\">\r\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div class=\"col-xs-4 visible-xs visible-sm\">\r\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortOverall:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 player-age sortAge:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 :potentialColor sortPotential:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-star player.potentialColorString")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.potential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 sortSalary:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  $");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 sortTradeValue:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("player.tradeValuePercent"),
    'aria-valuenow': ("unbound player.tradeValue")
  },hashTypes:{'style': "STRING",'aria-valuenow': "STRING"},hashContexts:{'style': depth0,'aria-valuenow': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" aria-valuemin=\"0\" aria-valuemax=\"1000\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/player-listitemrating"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <span class=\"first-name\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </span>\r\n    <span class=\"last-name\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </span>\r\n\r\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <span class=\"last-name\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </span>\r\n\r\n    ");
  return buffer;
  }

  data.buffer.push("\r\n<div class=\"col-xs-4 visible-md visible-lg\">\r\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div class=\"col-xs-4 visible-xs visible-sm\">\r\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortHandEye:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "player.playerRatings.handEye", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortSpeed:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "player.playerRatings.speed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortPassing:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "player.playerRatings.passing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortFaceoffs:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "player.playerRatings.faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortDeking:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "player.playerRatings.deking", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortWristPower:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "player.playerRatings.wristShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortWristAcc:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "player.playerRatings.wristShotAccuracy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortPuckControl:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "player.playerRatings.puckControl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/player-listitemstat"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n    <span class=\"first-name\">\r\n      ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </span>\r\n    <span class=\"last-name\">\r\n        ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </span>\r\n\r\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n    <span class=\"last-name\">\r\n      ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </span>\r\n    ");
  return buffer;
  }

  data.buffer.push("\r\n<div class=\"col-xs-3 visible-md visible-lg\">\r\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div class=\"col-xs-3 visible-xs visible-sm\">\r\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortPoints:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortGoals:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortAssists:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortGames:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortMinutes:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.minutesPerGameAverage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortShotPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortFaceoffPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortPlusMinus:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/player-salarylistitem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n    <span class=\"last-name\">\r\n        ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </span>\r\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n<div class=\"col-xs-2 visible-md visible-lg\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":contractStatus year.salaryClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "year.salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</span>\r\n</div>\r\n<div class=\"col-xs-2 visible-xs visible-sm\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":contractStatus year.salaryClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "year.salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</span>\r\n</div>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-2\">\r\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n    ");
  stack1 = helpers.each.call(depth0, "year", "in", "player.salaryYears", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/player-search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["components/team-bigbutton"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showTab", "sort", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-sm-2 designClass isCurrent")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    <div class=\"icon hidden-xs\">\r\n        <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa iconName")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\r\n    </div>\r\n    <span class=\"value-label\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </span>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/team-calendar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n\r\n    <div class=\"col-xs-3 schedule-game\">\r\n        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":triangle game.isEstimatedNextPush game.isCurrentPush")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\r\n        <div class=\"schedule-logo\">\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "team", "game.opposingTeam", options) : helperMissing.call(depth0, "link-to", "team", "game.opposingTeam", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n		<div class=\"schedule-name\">\r\n			");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n		<div class=\"schedule-record\">\r\n			(");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\r\n		</div>\r\n		<div class=\"schedule-twitter\">\r\n			");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n    </div>\r\n\r\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("game.opposingTeam.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\r\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"row schedule\">\r\n    ");
  stack1 = helpers.each.call(depth0, "game", "in", "team.schedule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/team-circularstat"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(" <input type=\"text\" class=\"dial\" data-width=\"90%\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'value': ("bad"),
    'id': ("circleName")
  },hashTypes:{'value': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\">\r\n      <h4>");
  stack1 = helpers._triageMustache.call(depth0, "good", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "bad", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "total", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </h4>    ");
  return buffer;
  
});

Ember.TEMPLATES["components/team-leaders"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"col-xs-3 hidden-xs hidden-sm name\">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n<div class=\"col-xs-3 visible-xs visible-sm name\">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n<div class=\"col-xs-2\">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n<div class=\"col-xs-2\">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n<div class=\"col-xs-2 points\">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n<div class=\"col-xs-2\">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n<div class=\"col-xs-1\">\r\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.minutesPerGameAverage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/team-rosterlist"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <i class=\"fa fa-chevron-down\"></i>\r\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n    <i class=\"fa fa-chevron-down\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("></i>\r\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isForward", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n\r\n");
  data.buffer.push(escapeExpression((helper = helpers['player-listitem'] || (depth0 && depth0['player-listitem']),options={hash:{
    'player': ("player"),
    'sortAge': ("sortAge"),
    'sortOverall': ("sortOverall"),
    'sortPotential': ("sortPotential"),
    'sortTradeValue': ("sortTradeValue"),
    'sortSalary': ("sortSalary")
  },hashTypes:{'player': "ID",'sortAge': "ID",'sortOverall': "ID",'sortPotential': "ID",'sortTradeValue': "ID",'sortSalary': "ID"},hashContexts:{'player': depth0,'sortAge': depth0,'sortOverall': depth0,'sortPotential': depth0,'sortTradeValue': depth0,'sortSalary': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "player-listitem", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isDefence", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression((helper = helpers['player-listitem'] || (depth0 && depth0['player-listitem']),options={hash:{
    'player': ("player"),
    'sortAge': ("sortAge"),
    'sortOverall': ("sortOverall"),
    'sortPotential': ("sortPotential"),
    'sortTradeValue': ("sortTradeValue"),
    'sortSalary': ("sortSalary")
  },hashTypes:{'player': "ID",'sortAge': "ID",'sortOverall': "ID",'sortPotential': "ID",'sortTradeValue': "ID",'sortSalary': "ID"},hashContexts:{'player': depth0,'sortAge': depth0,'sortOverall': depth0,'sortPotential': depth0,'sortTradeValue': depth0,'sortSalary': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "player-listitem", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.unless.call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row player-row header\">\r\n  <div class=\"col-xs-4\">Name</div>\r\n  <div class=\"col-xs-1 visible-lg visible-md\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Overall</span>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortOverall", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\">\r\n    <i class=\"fa fa-trophy\"></i>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortOverall", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 visible-lg visible-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    Age\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortAge", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    <i class=\"fa fa-clock-o\"></i>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortAge", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-2 visible-lg visible-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "potential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    Potential\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortPotential", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-2 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "potential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    <i class=\"fa fa-star-half-o\"></i>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortPotential", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-2 visible-lg visible-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    Salary\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortSalary", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-2 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    <i class=\"fa fa-usd\"></i>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortSalary", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-2 visible-lg visible-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "tradeValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    Value\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortTradeValue", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-2 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "tradeValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    <i class=\"fa fa-thumbs-o-up\"></i>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortTradeValue", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 roster-seperator\">\r\n    Forwards\r\n  </div>\r\n</div>\r\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 roster-seperator\">\r\n    Defense\r\n  </div>\r\n</div>\r\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 roster-seperator\">\r\n    Goalies\r\n  </div>\r\n</div>\r\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 roster-seperator\">\r\n    Non-Roster Players\r\n  </div>\r\n</div>\r\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/team-rosterlistratings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <i class=\"fa fa-chevron-down\"></i>\r\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isForward", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression((helper = helpers['player-listitemrating'] || (depth0 && depth0['player-listitemrating']),options={hash:{
    'player': ("player"),
    'sortSpeed': ("sortSpeed"),
    'sortPassing': ("sortPassing"),
    'sortHandEye': ("sortHandEye"),
    'sortDeking': ("sortDeking"),
    'sortFaceoffs': ("sortFaceoffs"),
    'sortWristPower': ("sortWristPower"),
    'sortWristAcc': ("sortWristAcc"),
    'sortPuckControl': ("sortPuckControl")
  },hashTypes:{'player': "ID",'sortSpeed': "ID",'sortPassing': "ID",'sortHandEye': "ID",'sortDeking': "ID",'sortFaceoffs': "ID",'sortWristPower': "ID",'sortWristAcc': "ID",'sortPuckControl': "ID"},hashContexts:{'player': depth0,'sortSpeed': depth0,'sortPassing': depth0,'sortHandEye': depth0,'sortDeking': depth0,'sortFaceoffs': depth0,'sortWristPower': depth0,'sortWristAcc': depth0,'sortPuckControl': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "player-listitemrating", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isDefence", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.unless.call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row player-row header\">\r\n  <div class=\"col-xs-4\">Name</div>\r\n  \r\n  <div class=\"col-xs-1 visible-lg visible-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "handEye", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    HandEye\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortHandEye", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "handEye", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    HE\r\n  </div>\r\n\r\n  <div class=\"col-xs-1 visible-lg visible-md\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "speed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Speed</span>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortSpeed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "speed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    SPD\r\n  </div>\r\n\r\n  <div class=\"col-xs-1 visible-lg visible-md\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "passing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Passing</span>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortPassing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "passing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    PAS\r\n  </div>\r\n\r\n  <div class=\"col-xs-1 visible-lg visible-md\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Faceoffs</span>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortFaceoffs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    FO\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"col-xs-1 visible-lg visible-md\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "deking", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Deking</span>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortDeking", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "deking", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    DK\r\n  </div>\r\n\r\n\r\n  <div class=\"col-xs-1 visible-lg visible-md\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "wristShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Wrist Pwr</span>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortWristPower", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "wristShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    WSP\r\n  </div>\r\n\r\n\r\n  <div class=\"col-xs-1 visible-lg visible-md\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "wristShotAccuracy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Wrist Acc</span>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortWristAcc", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "wristShotAccuracy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    WSA\r\n  </div>\r\n\r\n\r\n  <div class=\"col-xs-1 visible-lg visible-md\">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "puckControl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Puck Control</span>\r\n    ");
  stack1 = helpers['if'].call(depth0, "sortPuckControl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "puckControl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    PC\r\n  </div>\r\n  \r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 roster-seperator\">\r\n    Forwards\r\n  </div>\r\n</div>\r\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 roster-seperator\">\r\n    Defense\r\n  </div>\r\n</div>\r\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 roster-seperator\">\r\n    Goalies\r\n  </div>\r\n</div>\r\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 roster-seperator\">\r\n    Prospects\r\n  </div>\r\n</div>\r\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/team-rosterliststats"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.unless.call(depth0, "player.isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression((helper = helpers['player-listitemstat'] || (depth0 && depth0['player-listitemstat']),options={hash:{
    'player': ("player"),
    'sortPoints': ("sortPoints"),
    'sortGoals': ("sortGoals"),
    'sortAssists': ("sortAssists"),
    'sortGames': ("sortGames"),
    'sortMinutes': ("sortMinutes"),
    'sortShotPercent': ("sortShotPercent"),
    'sortFaceoffPercent': ("sortFaceoffPercent"),
    'sortPlusMinus': ("sortPlusMinus")
  },hashTypes:{'player': "ID",'sortPoints': "ID",'sortGoals': "ID",'sortAssists': "ID",'sortGames': "ID",'sortMinutes': "ID",'sortShotPercent': "ID",'sortFaceoffPercent': "ID",'sortPlusMinus': "ID"},hashContexts:{'player': depth0,'sortPoints': depth0,'sortGoals': depth0,'sortAssists': depth0,'sortGames': depth0,'sortMinutes': depth0,'sortShotPercent': depth0,'sortFaceoffPercent': depth0,'sortPlusMinus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "player-listitemstat", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row player-row header\">\r\n    <div class=\"col-xs-3\">Name</div>\r\n  \r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortPoints:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Points</div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortPoints:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n        P\r\n    </div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortGoals:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Goals</div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortGoals:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n        G\r\n    </div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortAssists:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Assists</div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortAssists:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n        A\r\n    </div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortGames:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Games</div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortGames:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n        GP\r\n    </div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortMinutes:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "minutes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Minutes</div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortMinutes:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "minutes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n        Mins\r\n    </div>\r\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortShotPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Shot%</div>\r\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortShotPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    SH%\r\n  </div>\r\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortFaceoffPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Faceoff%</div>\r\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortFaceoffPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    FO%\r\n  </div>\r\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortPlusMinus:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">PlusMinus</div>\r\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortPlusMinus:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n    +/-\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 roster-seperator\">\r\n        Team\r\n    </div>\r\n</div>\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "team.roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/team-salarychart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<canvas width=\"400\" height=\"400\"></canvas>");
  
});

Ember.TEMPLATES["components/team-salaryrosterlist"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isForward", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression((helper = helpers['player-salarylistitem'] || (depth0 && depth0['player-salarylistitem']),options={hash:{
    'player': ("player")
  },hashTypes:{'player': "ID"},hashContexts:{'player': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "player-salarylistitem", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isDefence", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "player.isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers.unless.call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row player-row\">\r\n    <div class=\"col-xs-4\"></div>\r\n\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 roster-seperator\">\r\n        Forwards\r\n    </div>\r\n</div>\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 roster-seperator\">\r\n        Defense\r\n    </div>\r\n</div>\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 roster-seperator\">\r\n        Goalies\r\n    </div>\r\n</div>\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 roster-seperator\">\r\n        Prospects\r\n    </div>\r\n</div>\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/team-smallplayer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n<div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n        <div class=\"image-container picture-border-team\">\r\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("player.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n        <h3>Top Rated Player</h3>\r\n        <h4>");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\r\n    </div>\r\n</div>\r\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n      ");
  stack1 = helpers._triageMustache.call(depth0, "app-loader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      ");
  return buffer;
  }

  data.buffer.push("  ");
  stack1 = helpers['if'].call(depth0, "player", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/team-stats"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("       <div class=\"number\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        <span class=\"value-label\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </span>");
  return buffer;
  
});

Ember.TEMPLATES["components/team-tweet"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"col-xs-1 tweet-logo\">\r\n    <i class=\"fa fa-twitter\"></i>\r\n</div>\r\n<div class=\"col-xs-10 tweet-text\">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "tweet.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<small class=\"tweet-date\"><i class=\"fa fa-clock-o\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "tweet.date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small>\r\n</div>\r\n<div class=\"col-xs-1 tweet-link\">\r\n    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("tweet.url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><i class=\"fa fa-location-arrow\"></i></a>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["dpair"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n              ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-md-4\">\r\n    <div class=\"panel panel-info\">\r\n        <!-- Default panel contents -->\r\n        <div class=\"panel-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "leftD", options) : helperMissing.call(depth0, "link-to", "player", "leftD", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"list-group-item-text\">LW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n          <li  class=\"list-group-item\">\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "rightD", options) : helperMissing.call(depth0, "link-to", "player", "rightD", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"list-group-item-text\">RW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["fwdline"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("  \r\n              <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n              ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n            ");
  return buffer;
  }

  data.buffer.push("\r\n<div class=\"col-md-3\">\r\n    <div class=\"panel panel-success\">\r\n        <!-- Default panel contents -->\r\n        <div class=\"panel-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\r\n        <ul class=\"list-group\">\r\n            <li  class=\"list-group-item\">\r\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "leftW", options) : helperMissing.call(depth0, "link-to", "player", "leftW", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"list-group-item-text\">LW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n          <li class=\"list-group-item\">\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "center", options) : helperMissing.call(depth0, "link-to", "player", "center", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"list-group-item-text\">C, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" </p>\r\n            <p class=\"text\">Faceoffs: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.playerRatings.faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n          <li class=\"list-group-item\">\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "rightW", options) : helperMissing.call(depth0, "link-to", "player", "rightW", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"list-group-item-text\">RW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n  \r\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":row :team-row team.idWithUnderscore")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    \r\n    <div class=\"col-xs-2 col-sm-1 logo-box\">\r\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "team", "team", options) : helperMissing.call(depth0, "link-to", "team", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n\r\n    <div class=\"col-xs-4 team-name-box\">\r\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "team", "team", options) : helperMissing.call(depth0, "link-to", "team", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat pointsSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n      <span>\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </span>\r\n    </div>\r\n\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat winsSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n      <span>\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </span>\r\n    </div>\r\n\r\n\r\n\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat lossesSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n      <span>\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </span>\r\n    </div>\r\n    \r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat overtimeLossesSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n      <span>\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </span>\r\n    </div>\r\n\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat gamesPlayedSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n      <span>\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </span>\r\n    </div>\r\n    \r\n    <div class=\"col-xs-1 hidden-xs team-stat\">\r\n      <span>\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.lastTenRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </span>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n      <img style=\"width: 39px; height: 39px;\"");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("team.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></img>\r\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n      <h1>");
  stack1 = helpers._triageMustache.call(depth0, "team.twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\r\n      <p>");
  stack1 = helpers._triageMustache.call(depth0, "team.teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\r\n\r\n\r\n\r\n\r\n  <div class=\"row team-row-basic\">\r\n    <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterConference", "3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 :col-sm-1 :filterButton allFilter:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n      <span>All</span>\r\n    </div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterConference", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 :filterButton westFilter:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n      <span>West</span>\r\n\r\n    </div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterConference", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 :filterButton eastFilter:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n      <span>East</span>\r\n    </div>\r\n\r\n\r\n\r\n    \r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton pointsSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n      P\r\n    </div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton winsSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n      W\r\n    </div>\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton lossesSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n      L\r\n    </div>\r\n\r\n\r\n    \r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton overtimeLossesSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n      OTL\r\n    </div>\r\n\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton gamesPlayedSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n      GP\r\n    </div>\r\n\r\n    <div class=\"col-xs-1 hidden-xs filterButton\">\r\n      Last 10\r\n    </div>\r\n  </div>\r\n  ");
  stack1 = helpers.each.call(depth0, "team", "in", "teams", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["line"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    <div class=\"well well-small\" style=\"display: inline-block\">\r\n       LW: ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "leftW", options) : helperMissing.call(depth0, "linkTo", "player", "leftW", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        (");
  stack1 = helpers._triageMustache.call(depth0, "leftW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\r\n   </div>\r\n   ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "leftW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "leftW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<div class=\"well well-small\" style=\"display: inline-block\">\r\n   C:  ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "centre", options) : helperMissing.call(depth0, "linkTo", "player", "centre", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n       (");
  stack1 = helpers._triageMustache.call(depth0, "centre.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\r\n</div>\r\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "centre.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "centre.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n<div class=\"well well-small\" style=\"display: inline-block\">\r\n    RW: ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "rightW", options) : helperMissing.call(depth0, "linkTo", "player", "rightW", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    (");
  stack1 = helpers._triageMustache.call(depth0, "rightW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\r\n</div>\r\n");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "rightW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "rightW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<div class=\"well well-small\" style=\"display: inline-block\">\r\nLD:  ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "leftD", options) : helperMissing.call(depth0, "linkTo", "player", "leftD", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    (");
  stack1 = helpers._triageMustache.call(depth0, "leftD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\r\n</div>\r\n");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "leftD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "leftD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<div class=\"well well-small\" style=\"display: inline-block\">\r\nRD:  ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "rightD", options) : helperMissing.call(depth0, "linkTo", "player", "rightD", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    (");
  stack1 = helpers._triageMustache.call(depth0, "rightD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\r\n</div>\r\n");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "rightD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "rightD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n<div class=\"well well-small\" style=\"display: inline-block\">\r\n   G:  ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "goalie", options) : helperMissing.call(depth0, "linkTo", "player", "goalie", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    (");
  stack1 = helpers._triageMustache.call(depth0, "goalie.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\r\n</div>\r\n");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "goalie.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "goalie.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "leftW", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n   ");
  stack1 = helpers['if'].call(depth0, "centre", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "rightW", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "leftD", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "rightD", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "goalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n  <!-- Brand and toggle get grouped for better mobile display -->\r\n  <div class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n    <ul class=\"nav navbar-nav\">\r\n\r\n      <li>\r\n        <a href=\"http://issuu.com/mhenderson95/docs/mag_4f2d02299bead9\">Magazine (!)</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"http://offthestanchion.wordpress.com/\">Blog</a>\r\n      </li>\r\n\r\n      <form class=\"navbar-form navbar-left\" role=\"search\">\r\n        <div class=\"form-group\">\r\n          ");
  stack1 = helpers._triageMustache.call(depth0, "player-search", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        <!--<button type=\"submit\" class=\"btn btn-default\">Submit</button>-->\r\n      </form>\r\n\r\n\r\n    </ul>\r\n\r\n\r\n  </div>\r\n  <!-- /.navbar-collapse -->\r\n</nav>");
  return buffer;
  
});

Ember.TEMPLATES["player"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n<div class=\"container\">\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"stats-box contract\">\r\n                <span class=\"title\">Contract</span>\r\n                <div class=\"numberBox\">\r\n                    <span>Years</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearsLeft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"numberBox salary\">\r\n                    <span>Salary</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">$");
  stack1 = helpers._triageMustache.call(depth0, "salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"numberBox contracttype\">\r\n                    <span>Type</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "contractType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"stats-box basicinfo\">\r\n                <span class=\"title\">Info</span>\r\n                <div class=\"numberBox\">\r\n                    <span>Overall</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.playeroverall || (depth0 && depth0.playeroverall),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "overall", options) : helperMissing.call(depth0, "playeroverall", "overall", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n                <div class=\"numberBox\">\r\n                    <span>Potential</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                      ");
  data.buffer.push(escapeExpression((helper = helpers.playerpotential || (depth0 && depth0.playerpotential),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "potential", "potentialColorString", options) : helperMissing.call(depth0, "playerpotential", "potential", "potentialColorString", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n                <div class=\"numberBox\">\r\n                    <span>Age</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.playerage || (depth0 && depth0.playerage),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "age", options) : helperMissing.call(depth0, "playerage", "age", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"numberBox\">\r\n                    <span>Position</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"numberBox\">\r\n                    <span>Shoots</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        ");
  stack1 = helpers.each.call(depth0, "yearStat", "in", "playerStats", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n\r\n    <hr />\r\n    <div class=\"row\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n\r\n\r\n\r\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"stats-box careerstats\">\r\n                <span class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.year", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Stats</span>\r\n              ");
  stack1 = helpers['if'].call(depth0, "isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <div class=\"numberBox\">\r\n                    <span>Games</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n              \r\n              <div class=\"numberBox\">\r\n              <span>Wins</span>\r\n              <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n              </div>\r\n            </div>\r\n\r\n              <div class=\"numberBox\">\r\n                <span>Losses</span>\r\n                <div class=\"numberBoxValueContainer\">\r\n                  <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"numberBox\">\r\n                <span>GAA</span>\r\n                <div class=\"numberBoxValueContainer\">\r\n                  <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.goalsAgainstAverage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                </div>\r\n              </div>\r\n              \r\n              \r\n              \r\n              \r\n              ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n              \r\n              <div class=\"numberBox\">\r\n                    <span>Goals</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"numberBox\">\r\n                    <span>Assists</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"numberBox points\">\r\n                    <span>Points</span>\r\n                    <div class=\"numberBoxValueContainer\">\r\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                    </div>\r\n                </div>\r\n\r\n              ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        <div class=\"col-lg-4\">\r\n            <table class=\"table table-bordered table-condensed\">\r\n                <caption>Goalie</caption>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>Vision</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.vision", options) : helperMissing.call(depth0, "stat", "playerRatings.vision", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Poke Check</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.pokeCheck", options) : helperMissing.call(depth0, "stat", "playerRatings.pokeCheck", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ShotRecovery</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.shotRecovery", options) : helperMissing.call(depth0, "stat", "playerRatings.shotRecovery", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ReboundControl</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.reboundControl", options) : helperMissing.call(depth0, "stat", "playerRatings.reboundControl", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>PuckPlayingFreq</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.puckPlayingFreq", options) : helperMissing.call(depth0, "stat", "playerRatings.puckPlayingFreq", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>StickLow</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.stickHigh", options) : helperMissing.call(depth0, "stat", "playerRatings.stickHigh", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>StickHigh</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.stickHigh", options) : helperMissing.call(depth0, "stat", "playerRatings.stickHigh", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>GloveLow</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.gloveLow", options) : helperMissing.call(depth0, "stat", "playerRatings.gloveLow", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>GloveHigh</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.gloveHigh", options) : helperMissing.call(depth0, "stat", "playerRatings.gloveHigh", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td>Angles</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.angles", options) : helperMissing.call(depth0, "stat", "playerRatings.angles", options))));
  data.buffer.push("</td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                        <td>FiveHole</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.fiveHole", options) : helperMissing.call(depth0, "stat", "playerRatings.fiveHole", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Breakaways</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.breakaways", options) : helperMissing.call(depth0, "stat", "playerRatings.breakaways", options))));
  data.buffer.push("</td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Puck Control</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.puckControl", options) : helperMissing.call(depth0, "stat", "playerRatings.puckControl", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Passing</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.passing", options) : helperMissing.call(depth0, "stat", "playerRatings.passing", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Aggressiveness</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.aggressiveness", options) : helperMissing.call(depth0, "stat", "playerRatings.aggressiveness", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Speed</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.speed", options) : helperMissing.call(depth0, "stat", "playerRatings.speed", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Agility</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.agility", options) : helperMissing.call(depth0, "stat", "playerRatings.agility", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Endurance</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.endurance", options) : helperMissing.call(depth0, "stat", "playerRatings.endurance", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Durability</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.durability", options) : helperMissing.call(depth0, "stat", "playerRatings.durability", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Poise</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.poise", options) : helperMissing.call(depth0, "stat", "playerRatings.poise", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n\r\n\r\n\r\n\r\n        <div class=\"col-lg-4\">\r\n            <table class=\"table table-bordered table-condensed\">\r\n                <caption>Offensive</caption>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>Aggressiveness</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.aggressiveness", options) : helperMissing.call(depth0, "stat", "playerRatings.aggressiveness", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Wrist Shot Power</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.wristShotPower", options) : helperMissing.call(depth0, "stat", "playerRatings.wristShotPower", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Wrist Shot Accuracy</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.wristShotAccuracy", options) : helperMissing.call(depth0, "stat", "playerRatings.wristShotAccuracy", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Slap Shot Power</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.slapShotPower", options) : helperMissing.call(depth0, "stat", "playerRatings.slapShotPower", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Slap Shot Accuracy</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.slapShotAccuracy", options) : helperMissing.call(depth0, "stat", "playerRatings.slapShotAccuracy", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Puck Control</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.puckControl", options) : helperMissing.call(depth0, "stat", "playerRatings.puckControl", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Offensive Awareness</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.offAwareness", options) : helperMissing.call(depth0, "stat", "playerRatings.offAwareness", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Hand Eye</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.handEye", options) : helperMissing.call(depth0, "stat", "playerRatings.handEye", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Deking</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.deking", options) : helperMissing.call(depth0, "stat", "playerRatings.deking", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Passing</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.passing", options) : helperMissing.call(depth0, "stat", "playerRatings.passing", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr></tr>\r\n\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <table class=\"table table-bordered table-condensed\">\r\n                <caption>Defensive</caption>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>Faceoffs</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.faceoffs", options) : helperMissing.call(depth0, "stat", "playerRatings.faceoffs", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Discipline</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.discipline", options) : helperMissing.call(depth0, "stat", "playerRatings.discipline", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Defensive Awareness</td>\r\n                        <td> ");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.defAwareness", options) : helperMissing.call(depth0, "stat", "playerRatings.defAwareness", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Body Checking</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.bodyChecking", options) : helperMissing.call(depth0, "stat", "playerRatings.bodyChecking", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Fighting</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.fighting", options) : helperMissing.call(depth0, "stat", "playerRatings.fighting", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Shot Blocking</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.shotBlocking", options) : helperMissing.call(depth0, "stat", "playerRatings.shotBlocking", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Stick Checking</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.stickChecking", options) : helperMissing.call(depth0, "stat", "playerRatings.stickChecking", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <table class=\"table table-bordered table-condensed\">\r\n                <caption>Athletic</caption>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>Speed</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.speed", options) : helperMissing.call(depth0, "stat", "playerRatings.speed", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Agility</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.agility", options) : helperMissing.call(depth0, "stat", "playerRatings.agility", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Endurance</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.endurance", options) : helperMissing.call(depth0, "stat", "playerRatings.endurance", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Durability</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.durability", options) : helperMissing.call(depth0, "stat", "playerRatings.durability", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Acceleration</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.acceleration", options) : helperMissing.call(depth0, "stat", "playerRatings.acceleration", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Strength</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.strength", options) : helperMissing.call(depth0, "stat", "playerRatings.strength", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Poise</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.poise", options) : helperMissing.call(depth0, "stat", "playerRatings.poise", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Balance</td>\r\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.balance", options) : helperMissing.call(depth0, "stat", "playerRatings.balance", options))));
  data.buffer.push("</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\r\n    <div class=\"loader\">\r\n        <div class=\"duo duo1\">\r\n            <div class=\"dot dot-a\"></div>\r\n            <div class=\"dot dot-b\"></div>\r\n        </div>\r\n        <div class=\"duo duo2\">\r\n            <div class=\"dot dot-a\"></div>\r\n            <div class=\"dot dot-b\"></div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n           ");
  }

  data.buffer.push("<div class=\"player-header\">\r\n    <div class=\"container\">\r\n        <div class=\"player-profile\">\r\n            <div class=\"image-container\">\r\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\r\n            </div>\r\n        </div>\r\n        <h1 class=\"small-name\">");
  stack1 = helpers._triageMustache.call(depth0, "team.city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" #");
  stack1 = helpers._triageMustache.call(depth0, "jersey", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"big-name\">");
  stack1 = helpers._triageMustache.call(depth0, "lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></h1>\r\n\r\n\r\n    </div>\r\n</div>\r\n        ");
  stack1 = helpers['if'].call(depth0, "isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["playerbasicinfobox"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\r\n<div class=\"col-6\">\r\n    <div class=\"stats-box basicinfo\">\r\n        <span class=\"stats-box-title\">Info</span>\r\n        <div class=\"numberBox\">\r\n            <span>Overall</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.playeroverall || (depth0 && depth0.playeroverall),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "overall", options) : helperMissing.call(depth0, "playeroverall", "overall", options))));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"numberBox\">\r\n            <span>Potential</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.playerpotential || (depth0 && depth0.playerpotential),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "potential", "potentialColor", options) : helperMissing.call(depth0, "playerpotential", "potential", "potentialColor", options))));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"numberBox\">\r\n            <span>Age</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.playerage || (depth0 && depth0.playerage),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "age", options) : helperMissing.call(depth0, "playerage", "age", options))));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"numberBox\">\r\n            <span>Position</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"numberBox\">\r\n            <span>Shoots</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["playercompare"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-6\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playerprofile", "aPlayer", options) : helperMissing.call(depth0, "render", "playerprofile", "aPlayer", options))));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playerprofile", "bPlayer", options) : helperMissing.call(depth0, "render", "playerprofile", "bPlayer", options))));
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"hidden-lg\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "aPlayer.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playerbasicinfobox", "aPlayer", options) : helperMissing.call(depth0, "render", "playerbasicinfobox", "aPlayer", options))));
  data.buffer.push("\r\n        <div class=\"hidden-lg\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "bPlayer.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playerbasicinfobox", "bPlayer", options) : helperMissing.call(depth0, "render", "playerbasicinfobox", "bPlayer", options))));
  data.buffer.push("\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"hidden-lg\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "aPlayer.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playercontractbox", "aPlayer", options) : helperMissing.call(depth0, "render", "playercontractbox", "aPlayer", options))));
  data.buffer.push("\r\n        <div class=\"hidden-lg\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "bPlayer.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playercontractbox", "bPlayer", options) : helperMissing.call(depth0, "render", "playercontractbox", "bPlayer", options))));
  data.buffer.push("\r\n    </div>\r\n\r\n    ");
  stack1 = helpers.each.call(depth0, "pr", "in", "aPlayer.playerRates", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    ");
  stack1 = helpers['if'].call(depth0, "pr.rating", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-10 col-offset-1\">\r\n            <p class=\"text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "pr.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "pr", options) : helperMissing.call(depth0, "compare", "pr", options))));
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\r\n\r\n    <div class=\"loader\">\r\n        <div class=\"duo duo1\">\r\n            <div class=\"dot dot-a\"></div>\r\n            <div class=\"dot dot-b\"></div>\r\n        </div>\r\n        <div class=\"duo duo2\">\r\n            <div class=\"dot dot-a\"></div>\r\n            <div class=\"dot dot-b\"></div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    ");
  }

  data.buffer.push("<div class=\"container\">\r\n    ");
  stack1 = helpers['if'].call(depth0, "compareLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["playercontractbox"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"col-6\">\r\n    <div class=\"stats-box contract\">\r\n        <span class=\"stats-box-title\">Contract</span>\r\n        <div class=\"numberBox\">\r\n            <span>Years</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearsLeft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"numberBox salary\">\r\n            <span>Salary</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">$");
  stack1 = helpers._triageMustache.call(depth0, "salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"numberBox contracttype\">\r\n            <span>Type</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "contractType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["playerprofile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"player-profile\">\r\n    <div class=\"player-bio\">\r\n        <div class=\"player-image-container\">\r\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\r\n        </div>\r\n        <div class=\"player-info\">\r\n            <p class=\"player-name\">");
  stack1 = helpers._triageMustache.call(depth0, "firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" #");
  stack1 = helpers._triageMustache.call(depth0, "jersey", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["ppunit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(" <div class=\"col-md-6\">\r\n    <div class=\"panel panel-warning\">\r\n  <!-- Default panel contents -->\r\n  <div class=\"panel-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n                <p class=\"list-group-item-text\">LW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n          <li class=\"list-group-item\">\r\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n                <p class=\"list-group-item-text\">C, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            <p class=\"text\">Faceoffs: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.playerRatings.faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n          <li class=\"list-group-item\">\r\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n                <p class=\"list-group-item-text\">RW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n          <li class=\"list-group-item\">\r\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n                <p class=\"list-group-item-text\">LD, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            <p class=\"text\">SlapShot Power: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.playerRatings.slapShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n          <li class=\"list-group-item\">\r\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\r\n                <p class=\"list-group-item-text\">RD, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            <p class=\"text\">SlapShot Power: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.playerRatings.slapShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\r\n            </li>\r\n\r\n        \r\n        </ul>\r\n      </div>\r\n    </div>");
  return buffer;
  
});

Ember.TEMPLATES["team"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" \r\n                  ");
  stack1 = helpers._triageMustache.call(depth0, "salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <a href=\"http://pastebin.com/MNLpsGr8\" class=\"salary-explanation\">(How'd you get this number!?)</a>\r\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                  loading....\r\n                  ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                  ");
  stack1 = helpers.each.call(depth0, "tweet", "in", "tweets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                  ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['team-tweet'] || (depth0 && depth0['team-tweet']),options={hash:{
    'tweet': ("tweet")
  },hashTypes:{'tweet': "ID"},hashContexts:{'tweet': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-tweet", options))));
  data.buffer.push("\r\n                  ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                  ");
  stack1 = helpers._triageMustache.call(depth0, "app-loader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                  <h1 class=\"loading-text\">Loading Tweets....</h1>\r\n                  ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                  ");
  stack1 = helpers.each.call(depth0, "player", "in", "leadingScorers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n                  <div class=\"row leaders\">\r\n                    <div class=\"col-xs-3\">\r\n\r\n                    </div>\r\n                    <div class=\"col-xs-2\">\r\n                      GAA\r\n                    </div>\r\n                    <div class=\"col-xs-2\">\r\n                      Save %\r\n                    </div>\r\n                    <div class=\"col-xs-2\">\r\n                      Shutouts\r\n                    </div>\r\n                    <div class=\"col-xs-2\">\r\n                      Wins\r\n                    </div>\r\n                    <div class=\"col-xs-1\">\r\n                      Losses\r\n                    </div>\r\n                  </div>\r\n\r\n                  ");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                  ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['team-leaders'] || (depth0 && depth0['team-leaders']),options={hash:{
    'player': ("player"),
    'title': ("Leading Scorers")
  },hashTypes:{'player': "ID",'title': "STRING"},hashContexts:{'player': depth0,'title': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-leaders", options))));
  data.buffer.push("\r\n                  ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers['if'].call(depth0, "player.isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                  ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                      ");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <div class=\"row leaders\">\r\n                          <div class=\"col-xs-3\">\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                          </div>\r\n                          <div class=\"col-xs-2\">\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.goalsAgainstAverage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                          </div>\r\n                          <div class=\"col-xs-2\">\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.savePercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                          </div>\r\n                          <div class=\"col-xs-2\">\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.shutouts", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                          </div>\r\n                          <div class=\"col-xs-2\">\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                          </div>\r\n                          <div class=\"col-xs-1\">\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                          </div>\r\n                        </div>\r\n                      ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n                  ");
  stack1 = helpers._triageMustache.call(depth0, "app-loader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                  <h1 class=\"loading-text\">Loading Leaders...</h1>\r\n                  ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <div class=\"tab-content\">\r\n        <div id=\"tab-content-roster\" class=\"tab-pane fade in active\">\r\n          ");
  stack1 = helpers['if'].call(depth0, "showRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        </div>\r\n      \r\n      <div id=\"tab-content-salaries\" class=\"tab-pane fade\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "showSalaries", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n\r\n      <div id=\"tab-content-stats\" class=\"tab-pane fade\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "showStats", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(24, program24, data),fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n\r\n      <div id=\"tab-content-ratings\" class=\"tab-pane fade\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "showRatings", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(24, program24, data),fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n\r\n      <div id=\"tab-content-schedule\" class=\"tab-pane fade\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "showCalendar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(24, program24, data),fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n      <div id=\"tab-content-lines\" class=\"tab-pane fade\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "showLines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(24, program24, data),fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n    </div>\r\n    ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['team-rosterlist'] || (depth0 && depth0['team-rosterlist']),options={hash:{
    'roster': ("roster"),
    'sort': ("sortByProperty"),
    'currentSort': ("currentSortProperty")
  },hashTypes:{'roster': "ID",'sort': "STRING",'currentSort': "ID"},hashContexts:{'roster': depth0,'sort': depth0,'currentSort': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-rosterlist", options))));
  data.buffer.push("\r\n\r\n\r\n          ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['team-salaryrosterlist'] || (depth0 && depth0['team-salaryrosterlist']),options={hash:{
    'roster': ("roster")
  },hashTypes:{'roster': "ID"},hashContexts:{'roster': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-salaryrosterlist", options))));
  data.buffer.push("\r\n        ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "app-loader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['team-rosterliststats'] || (depth0 && depth0['team-rosterliststats']),options={hash:{
    'team': ("content"),
    'sort': ("sortByStat"),
    'currentSortStat': ("currentSortStat")
  },hashTypes:{'team': "ID",'sort': "STRING",'currentSortStat': "ID"},hashContexts:{'team': depth0,'sort': depth0,'currentSortStat': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-rosterliststats", options))));
  data.buffer.push("\r\n        ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['team-rosterlistratings'] || (depth0 && depth0['team-rosterlistratings']),options={hash:{
    'roster': ("roster"),
    'sort': ("sortByRating"),
    'currentSortRating': ("speed")
  },hashTypes:{'roster': "ID",'sort': "STRING",'currentSortRating': "STRING"},hashContexts:{'roster': depth0,'sort': depth0,'currentSortRating': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-rosterlistratings", options))));
  data.buffer.push("\r\n        ");
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['team-calendar'] || (depth0 && depth0['team-calendar']),options={hash:{
    'team': ("content"),
    'teams': ("teams")
  },hashTypes:{'team': "ID",'teams': "ID"},hashContexts:{'team': depth0,'teams': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-calendar", options))));
  data.buffer.push("\r\n        ");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        ");
  stack1 = helpers['if'].call(depth0, "linesIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <div class=\"row\">\r\n          ");
  stack1 = helpers.each.call(depth0, "line", "in", "lines.fwd", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(34, program34, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          ");
  stack1 = helpers.each.call(depth0, "line", "in", "lines.dpair", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(36, program36, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          ");
  stack1 = helpers.each.call(depth0, "line", "in", "lines.pp", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(38, program38, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n\r\n        ");
  return buffer;
  }
function program34(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "fwdline", "line", options) : helperMissing.call(depth0, "render", "fwdline", "line", options))));
  data.buffer.push("\r\n\r\n          ");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "dpair", "line", options) : helperMissing.call(depth0, "render", "dpair", "line", options))));
  data.buffer.push("\r\n\r\n          ");
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "ppunit", "line", options) : helperMissing.call(depth0, "render", "ppunit", "line", options))));
  data.buffer.push("\r\n\r\n          ");
  return buffer;
  }

function program40(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "app-loader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    <h1 class=\"loading-text\">Loading Roster....</h1>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"team-header\">\r\n    <div class=\"container\">\r\n        <h1 class=\"small-name\">");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"big-name\">");
  stack1 = helpers._triageMustache.call(depth0, "teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></h1>\r\n        <p>(");
  stack1 = helpers._triageMustache.call(depth0, "wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</p>\r\n    </div>\r\n</div>\r\n<div class=\"team-minibar\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                ");
  stack1 = helpers._triageMustache.call(depth0, "twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \r\n                ");
  stack1 = helpers['if'].call(depth0, "isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 team-toprow\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  ");
  stack1 = helpers['if'].call(depth0, "twitterIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                </div>\r\n\r\n                <div class=\"col-md-6 team-summary-box\">\r\n                    <div class=\"row\">\r\n                      ");
  data.buffer.push(escapeExpression((helper = helpers['team-bigbutton'] || (depth0 && depth0['team-bigbutton']),options={hash:{
    'tabContentId': ("tab-content-roster"),
    'data-toggle': ("tab"),
    'designClass': ("roster"),
    'label': ("Roster"),
    'iconName': ("fa-group"),
    'sort': ("potential"),
    'isCurrent': ("true"),
    'tabToShow': ("showRoster"),
    'showTab': ("showTab")
  },hashTypes:{'tabContentId': "STRING",'data-toggle': "STRING",'designClass': "STRING",'label': "STRING",'iconName': "STRING",'sort': "STRING",'isCurrent': "STRING",'tabToShow': "STRING",'showTab': "STRING"},hashContexts:{'tabContentId': depth0,'data-toggle': depth0,'designClass': depth0,'label': depth0,'iconName': depth0,'sort': depth0,'isCurrent': depth0,'tabToShow': depth0,'showTab': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-bigbutton", options))));
  data.buffer.push("\r\n                      ");
  data.buffer.push(escapeExpression((helper = helpers['team-bigbutton'] || (depth0 && depth0['team-bigbutton']),options={hash:{
    'tabContentId': ("tab-content-salaries"),
    'data-toggle': ("tab"),
    'designClass': ("salaries"),
    'label': ("Salaries"),
    'iconName': ("fa-money"),
    'sort': ("salary"),
    'tabToShow': ("showSalaries"),
    'showTab': ("showTab")
  },hashTypes:{'tabContentId': "STRING",'data-toggle': "STRING",'designClass': "STRING",'label': "STRING",'iconName': "STRING",'sort': "STRING",'tabToShow': "STRING",'showTab': "STRING"},hashContexts:{'tabContentId': depth0,'data-toggle': depth0,'designClass': depth0,'label': depth0,'iconName': depth0,'sort': depth0,'tabToShow': depth0,'showTab': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-bigbutton", options))));
  data.buffer.push("\r\n                      ");
  data.buffer.push(escapeExpression((helper = helpers['team-bigbutton'] || (depth0 && depth0['team-bigbutton']),options={hash:{
    'tabContentId': ("tab-content-schedule"),
    'data-toggle': ("tab"),
    'designClass': ("schedule"),
    'label': ("Schedule"),
    'iconName': ("fa-calendar"),
    'tabToShow': ("showCalendar"),
    'showTab': ("showTab")
  },hashTypes:{'tabContentId': "STRING",'data-toggle': "STRING",'designClass': "STRING",'label': "STRING",'iconName': "STRING",'tabToShow': "STRING",'showTab': "STRING"},hashContexts:{'tabContentId': depth0,'data-toggle': depth0,'designClass': depth0,'label': depth0,'iconName': depth0,'tabToShow': depth0,'showTab': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-bigbutton", options))));
  data.buffer.push("\r\n                      ");
  data.buffer.push(escapeExpression((helper = helpers['team-bigbutton'] || (depth0 && depth0['team-bigbutton']),options={hash:{
    'tabContentId': ("tab-content-lines"),
    'data-toggle': ("tab"),
    'designClass': ("lines"),
    'label': ("Lines"),
    'iconName': ("fa-rocket"),
    'tabToShow': ("showLines"),
    'showTab': ("showTab")
  },hashTypes:{'tabContentId': "STRING",'data-toggle': "STRING",'designClass': "STRING",'label': "STRING",'iconName': "STRING",'tabToShow': "STRING",'showTab': "STRING"},hashContexts:{'tabContentId': depth0,'data-toggle': depth0,'designClass': depth0,'label': depth0,'iconName': depth0,'tabToShow': depth0,'showTab': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-bigbutton", options))));
  data.buffer.push("\r\n                      ");
  data.buffer.push(escapeExpression((helper = helpers['team-bigbutton'] || (depth0 && depth0['team-bigbutton']),options={hash:{
    'tabContentId': ("tab-content-stats"),
    'data-toggle': ("tab"),
    'designClass': ("stats"),
    'label': ("Stats"),
    'iconName': ("fa-check"),
    'tabToShow': ("showStats"),
    'showTab': ("showTab")
  },hashTypes:{'tabContentId': "STRING",'data-toggle': "STRING",'designClass': "STRING",'label': "STRING",'iconName': "STRING",'tabToShow': "STRING",'showTab': "STRING"},hashContexts:{'tabContentId': depth0,'data-toggle': depth0,'designClass': depth0,'label': depth0,'iconName': depth0,'tabToShow': depth0,'showTab': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-bigbutton", options))));
  data.buffer.push("\r\n                      ");
  data.buffer.push(escapeExpression((helper = helpers['team-bigbutton'] || (depth0 && depth0['team-bigbutton']),options={hash:{
    'tabContentId': ("tab-content-ratings"),
    'data-toggle': ("tab"),
    'designClass': ("ratings"),
    'label': ("Ratings"),
    'iconName': ("fa-tachometer"),
    'tabToShow': ("showRatings"),
    'showTab': ("showTab")
  },hashTypes:{'tabContentId': "STRING",'data-toggle': "STRING",'designClass': "STRING",'label': "STRING",'iconName': "STRING",'tabToShow': "STRING",'showTab': "STRING"},hashContexts:{'tabContentId': depth0,'data-toggle': depth0,'designClass': depth0,'label': depth0,'iconName': depth0,'tabToShow': depth0,'showTab': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-bigbutton", options))));
  data.buffer.push("\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['team-stats'] || (depth0 && depth0['team-stats']),options={hash:{
    'value': ("penaltyKillPercent"),
    'label': ("PK %"),
    'colClass': ("col-xs-3")
  },hashTypes:{'value': "ID",'label': "STRING",'colClass': "STRING"},hashContexts:{'value': depth0,'label': depth0,'colClass': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-stats", options))));
  data.buffer.push("\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['team-stats'] || (depth0 && depth0['team-stats']),options={hash:{
    'value': ("powerPlayPercent"),
    'label': ("PP %"),
    'colClass': ("col-xs-3")
  },hashTypes:{'value': "ID",'label': "STRING",'colClass': "STRING"},hashContexts:{'value': depth0,'label': depth0,'colClass': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-stats", options))));
  data.buffer.push("\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['team-stats'] || (depth0 && depth0['team-stats']),options={hash:{
    'value': ("goalsFor"),
    'label': ("Goals For"),
    'colClass': ("col-xs-3")
  },hashTypes:{'value': "ID",'label': "STRING",'colClass': "STRING"},hashContexts:{'value': depth0,'label': depth0,'colClass': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-stats", options))));
  data.buffer.push("\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['team-stats'] || (depth0 && depth0['team-stats']),options={hash:{
    'value': ("goalsAgainst"),
    'label': ("Goals Against"),
    'colClass': ("col-xs-3")
  },hashTypes:{'value': "ID",'label': "STRING",'colClass': "STRING"},hashContexts:{'value': depth0,'label': depth0,'colClass': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "team-stats", options))));
  data.buffer.push("\r\n                    </div>\r\n\r\n                    <div class=\"row leaders\">\r\n                        <div class=\"col-xs-3\">\r\n\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            Goals\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            Assists\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            Points\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            Games\r\n                        </div>\r\n                      <div class=\"col-xs-1\">\r\n                        Minutes\r\n                      </div>\r\n                    </div>\r\n\r\n                  ");
  stack1 = helpers['if'].call(depth0, "rosterIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n    </div>\r\n    ");
  stack1 = helpers['if'].call(depth0, "isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(40, program40, data),fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["team2"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" \r\n          <small>Cap Space:</small> <small class=\"lead\">");
  stack1 = helpers._triageMustache.call(depth0, "capSpace", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small>           \r\n          ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push(" <small class=\"lead\"> Loading Team Info...</small>");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n        <p class=\"lead\">Filter by Position</p> \r\n        <div class=\"btn-group\">\r\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "f", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">F</button>\r\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "LW", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">LW</button>\r\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "C", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">C</button>\r\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "RW", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">RW</button>\r\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "D", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">D</button>\r\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "G", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">G</button>\r\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "all", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">All</button>\r\n            </div>\r\n\r\n            <table class=\"table table-responsive\">\r\n                <thead>\r\n                    <tr class=\"playerTableHeaders\">\r\n                        <td class=\"text-info\">Name</td>\r\n                        <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Age</td>\r\n                        <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Overall</td>\r\n                        <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Salary</td>\r\n                        <td class=\"text-info\">Position</td>\r\n                        <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "potential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Potential</td>\r\n                        <td class=\"text-info hidden-lg\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "tradeValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Value</td>\r\n                        <td class=\"text-info visible-lg\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "tradeValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Trade Value</td>\r\n                        \r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, "player", "in", "filteredRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </tbody>\r\n            </table>\r\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <tr>\r\n                        <td class=\"hidden-lg\">\r\n                            ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "linkTo", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  stack1 = helpers['if'].call(depth0, "player.isInjured", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </td>\r\n                        <td class=\"visible-lg\">\r\n                  \r\n\r\n                            ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "linkTo", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  stack1 = helpers['if'].call(depth0, "player.isInjured", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "player.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "player.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td class=\"hidden-lg\">\r\n                            $");
  stack1 = helpers._triageMustache.call(depth0, "player.salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </td>\r\n                        <td class=\"visible-lg\">\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "player.salaryReadable", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "player.position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td><span ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":label player.readPotentialColor")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "player.readPotential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></td>\r\n                        <td>\r\n                            <div class=\"progress progress-info\">\r\n                                <div class=\"progress-bar\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'style': ("player.tradeValuePercent")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("></div>\r\n                            </div>\r\n                        </td>\r\n                        <td></td>\r\n                        \r\n                    </tr>\r\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                            <small>(out ");
  stack1 = helpers._triageMustache.call(depth0, "player.injuryLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" games)</small>\r\n                            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\r\n            <div class=\"loader\">\r\n                <div class=\"duo duo1\">\r\n                    <div class=\"dot dot-a\"></div>\r\n                    <div class=\"dot dot-b\"></div>\r\n                </div>\r\n                <div class=\"duo duo2\">\r\n                    <div class=\"dot dot-a\"></div>\r\n                    <div class=\"dot dot-b\"></div>\r\n                </div>\r\n            </div>\r\n        ");
  }

function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "schedule", "schedule", options) : helperMissing.call(depth0, "render", "schedule", "schedule", options))));
  data.buffer.push("\r\n        ");
  return buffer;
  }

function program17(depth0,data) {
  
  
  data.buffer.push("\r\n        Schedule is loading...\r\n        ");
  }

  data.buffer.push(" <div class=\"row team-banner\">\r\n                            <h1>");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /><small><a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("twitterLink")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">(");
  stack1 = helpers._triageMustache.call(depth0, "twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</a></small></h1>\r\n\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"page-header\">\r\n                    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /><small><a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("twitterLink")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">(");
  stack1 = helpers._triageMustache.call(depth0, "twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</a></small></h1>\r\n                </div>         \r\n        </div>\r\n            </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n        <div class=\"well well-small\">\r\n          ");
  stack1 = helpers['if'].call(depth0, "statsIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n</div>\r\n  </div>\r\n   \r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-4\">\r\n            <canvas id=\"winloss-chart\" width=\"100%\" height=\"100%\"></canvas>\r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\" stats-box contract\">\r\n        <span class=\"stats-box-title\">Record</span>\r\n        <div class=\"numberBox\">   \r\n            <span>Wins</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div>  \r\n        <div class=\"numberBox\">   \r\n            <span>Losses</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div> \r\n        \r\n        <div class=\"numberBox\">   \r\n            <span>OTL</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div>    \r\n                    \r\n                    <div class=\"numberBox\">   \r\n            <span>Points</span>\r\n            <div class=\"numberBoxValueContainer\">\r\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n            </div>\r\n        </div>  \r\n                    </div>           \r\n    </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n\r\n\r\n  <ul class=\"nav nav-tabs nav-justified teamTabs\">\r\n    <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Roster</a></li>\r\n    <li><a href=\"#tab2\" data-toggle=\"tab\">Lines</a></li>\r\n    <li><a href=\"#tab3\" data-toggle=\"tab\">Schedule</a></li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n    <div class=\"tab-pane active\" id=\"tab1\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "rosterIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n    <div class=\"tab-pane\" id=\"tab2\">\r\n \r\n\r\n\r\n        \r\n        </div>\r\n    <div class=\"tab-pane\" id=\"tab3\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "scheduleIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </script>\r\n\r\n    <script type=\"text/x-handlebars\" data-template-name=\"schedule\">\r\n        <div id=\"calendar\">\r\n\r\n        </div>");
  return buffer;
  
});

Ember.TEMPLATES["test"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div>test</div>s");
  
});

Ember.TEMPLATES["topplayers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr class=\"playerTableHeaders\">\r\n                            <td>\r\n                                Name\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                Games\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                Assists\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                Goals\r\n                                </>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                Points\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                +/-\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "shots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                Shots\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                Shot%\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "hits", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                Hits\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                FO%\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffsWon", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                FO/W\r\n                            </td>\r\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffsTaken", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                                FO/T\r\n                            </td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        ");
  stack1 = helpers.each.call(depth0, "player", "in", "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                        <tr>\r\n                            <td class=\"hidden-lg\">\r\n\r\n\r\n                                ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "linkTo", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                ");
  stack1 = helpers['if'].call(depth0, "player.isInjured", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td class=\"visible-lg\">\r\n                                <img style=\"height: 22px; width: auto;\" class=\"home-team-image\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("player.team.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\r\n\r\n\r\n\r\n\r\n                                ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "linkTo", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                ");
  stack1 = helpers['if'].call(depth0, "player.isInjured", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.shots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.hits", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.faceoffsWon", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td>\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.faceoffsTaken", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                        </tr>\r\n                        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                <small>(out ");
  stack1 = helpers._triageMustache.call(depth0, "player.injuryLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" games)</small>\r\n                                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\r\n            <div class=\"loader\">\r\n                <div class=\"duo duo1\">\r\n                    <div class=\"dot dot-a\"></div>\r\n                    <div class=\"dot dot-b\"></div>\r\n                </div>\r\n                <div class=\"duo duo2\">\r\n                    <div class=\"dot dot-a\"></div>\r\n                    <div class=\"dot dot-b\"></div>\r\n                </div>\r\n            </div>\r\n            ");
  }

  data.buffer.push("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-10 col-offset-1\">\r\n            ");
  stack1 = helpers['if'].call(depth0, "playersIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["trade"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <div class=\"col-sm-3\">\r\n\r\n            <div class=\"list-group\">\r\n                ");
  stack1 = helpers.each.call(depth0, "p", "in", "aTeam.roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <h4>On Block: ");
  stack1 = helpers._triageMustache.call(depth0, "aTeam.tradeSalary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n            <div class=\"list-group\">\r\n                ");
  stack1 = helpers.each.call(depth0, "p", "in", "aTeam.tradeBlock", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "playerselected", "p", "ateam", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(" class=\"list-group-item\"> ");
  stack1 = helpers._triageMustache.call(depth0, "p.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "p.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "p.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <a href=\"#\" class=\"list-group-item\">\r\n                    <h4 class=\"list-group-item-heading\">");
  stack1 = helpers._triageMustache.call(depth0, "p.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "p.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n                    <img style=\"width: 50px\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("p.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\r\n                    <p class=\"list-group-item-text\"> ");
  stack1 = helpers._triageMustache.call(depth0, "p.salaryReadable", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "p.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n                </a>\r\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <div class=\"col-sm-3\">\r\n            <h4>On Block: ");
  stack1 = helpers._triageMustache.call(depth0, "bTeam.tradeSalary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n            <div class=\"list-group\">\r\n                ");
  stack1 = helpers.each.call(depth0, "p", "in", "bTeam.tradeBlock", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"list-group\">\r\n                ");
  stack1 = helpers.each.call(depth0, "p", "in", "bTeam.roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "playerselected", "p", "bteam", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(" class=\"list-group-item\"> ");
  stack1 = helpers._triageMustache.call(depth0, "p.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "p.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "p.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "aTeam.city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "aTeam.teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "bTeam.city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "bTeam.teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Tradeteamselect", {hash:{
    'contentBinding': ("allTeams"),
    'valueBinding': ("randomTeam.id"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.teamname"),
    'selectionBinding': ("aTeam"),
    'itemController': ("Team")
  },hashTypes:{'contentBinding': "STRING",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'itemController': "STRING"},hashContexts:{'contentBinding': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'itemController': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("aTeam.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\r\n            <h3>Cap Space: ");
  stack1 = helpers._triageMustache.call(depth0, "aTeam.capSpace", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\r\n            <h4>Salary After trade: ");
  stack1 = helpers._triageMustache.call(depth0, "aTeamSalaryAfterTrade", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Tradeteamselect", {hash:{
    'contentBinding': ("allTeams"),
    'valueBinding': ("randomTeamB.id"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.teamname"),
    'selectionBinding': ("bTeam"),
    'itemController': ("Team")
  },hashTypes:{'contentBinding': "STRING",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'itemController': "STRING"},hashContexts:{'contentBinding': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'itemController': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("bTeam.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\r\n            <h3>Current Cap: ");
  stack1 = helpers._triageMustache.call(depth0, "bTeam.capSpace", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\r\n            <h4>Salary Avail After trade: ");
  stack1 = helpers._triageMustache.call(depth0, "bTeamSalaryAfterTrade", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "aTeam.rosterIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        ");
  stack1 = helpers['if'].call(depth0, "bTeam.rosterIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n\r\n\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["tradeteaminfo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"col-lg-6\">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" of ");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});