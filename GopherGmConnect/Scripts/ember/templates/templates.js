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
  data.buffer.push("\n  <span class=\"first-name text\">\n    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </span>\n  <span class=\"last-name\">\n    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n  </span>\n  <span class=\"position-tick\">\n    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </span>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-4\">\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortOverall:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 player-age sortAge:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 :potentialColor sortPotential:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-star player.potentialColorString")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.potential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 sortSalary:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  $");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 sortTradeValue:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <div class=\"progress\">\n    <div class=\"progress-bar\" role=\"progressbar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("player.tradeValuePercent"),
    'aria-valuenow': ("unbound player.tradeValue")
  },hashTypes:{'style': "STRING",'aria-valuenow': "STRING"},hashContexts:{'style': depth0,'aria-valuenow': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" aria-valuemin=\"0\" aria-valuemax=\"1000\">\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/player-listitemrating"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"first-name\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n    <span class=\"last-name\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n\n    ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"col-xs-4\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortHandEye:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.playerRatings.handEye", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortSpeed:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.playerRatings.speed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortPassing:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.playerRatings.passing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortFaceoffs:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.playerRatings.faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortDeking:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.playerRatings.deking", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortWristPower:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.playerRatings.wristShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortWristAcc:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.playerRatings.wristShotAccuracy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortPuckControl:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.playerRatings.puckControl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/player-listitemstat"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <span class=\"first-name text\">\n      ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </span>\n    <span class=\"last-name\">\n        ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </span>\n  <span class=\"position-tick\">\n    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </span>\n\n    ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"col-xs-3\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n\n\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortPoints:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortGoals:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortAssists:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortGames:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortMinutes:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.minutesPerGameAverage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortShotPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortFaceoffPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 sortPlusMinus:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/player-salarylistitem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <span class=\"last-name\">\n        ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </span>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div class=\"col-xs-2 visible-md visible-lg\">\n    <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":contractStatus year.salaryClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "year.salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</span>\n</div>\n<div class=\"col-xs-2 visible-xs visible-sm\">\n    <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":contractStatus year.salaryClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "year.salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</span>\n</div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-2\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "link-to", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n    ");
  stack1 = helpers.each.call(depth0, "year", "in", "player.salaryYears", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
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
  data.buffer.push(">\n    <div class=\"icon hidden-xs\">\n        <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa iconName")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n    </div>\n    <span class=\"value-label\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/team-calendar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n    <div class=\"col-xs-3 schedule-game\">\n        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":triangle game.isEstimatedNextPush game.isCurrentPush")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\n        <div class=\"schedule-logo\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "team", "game.opposingTeam", options) : helperMissing.call(depth0, "link-to", "team", "game.opposingTeam", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n		<div class=\"schedule-name\">\n			");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n		<div class=\"schedule-record\">\n			(");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n		</div>\n		<div class=\"schedule-twitter\">\n			");
  stack1 = helpers._triageMustache.call(depth0, "game.opposingTeam.twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n    </div>\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("game.opposingTeam.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"row schedule\">\n    ");
  stack1 = helpers.each.call(depth0, "game", "in", "team.schedule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
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
  data.buffer.push("\">\n      <h4>");
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


  data.buffer.push("<div class=\"col-xs-3 hidden-xs hidden-sm name\">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-xs-3 visible-xs visible-sm name\">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-xs-2\">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-xs-2\">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-xs-2 points\">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-xs-2\">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-xs-1\">\n  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.singleYearStats.minutesPerGameAverage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/team-rosterlist"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <i class=\"fa fa-caret-down\"></i>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n    <i class=\"fa fa-caret-down\"> </i>\n    ");
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers['player-listitem'] || (depth0 && depth0['player-listitem']),options={hash:{
    'player': ("player"),
    'sortAge': ("sortAge"),
    'sortOverall': ("sortOverall"),
    'sortPotential': ("sortPotential"),
    'sortTradeValue': ("sortTradeValue"),
    'sortSalary': ("sortSalary")
  },hashTypes:{'player': "ID",'sortAge': "ID",'sortOverall': "ID",'sortPotential': "ID",'sortTradeValue': "ID",'sortSalary': "ID"},hashContexts:{'player': depth0,'sortAge': depth0,'sortOverall': depth0,'sortPotential': depth0,'sortTradeValue': depth0,'sortSalary': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "player-listitem", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row player-row header roster-seperator\">\n  <div class=\"col-xs-4\">");
  stack1 = helpers._triageMustache.call(depth0, "header", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n  <div class=\"col-xs-1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-trophy\"> </i>\n    <span class=\"text\">Ovr</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortOverall", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n\n  <div class=\"col-xs-1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n\n    <i class=\"fa fa-clock-o\"></i>\n    <span class=\"text\">Age</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortAge", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n\n  <div class=\"col-xs-2\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "potential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-star-half-o\"></i>\n    <span class=\"text\">Potential</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortPotential", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n\n\n\n  <div class=\"col-xs-2\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-usd\"> </i>\n    <span class=\"text\">Salary</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortSalary", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n\n  <div class=\"col-xs-2\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "tradeValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-thumbs-o-up\"> </i>\n    <span class=\"text\">Value</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortTradeValue", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n\n  \n\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/team-rosterlistratings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <i class=\"fa fa-chevron-down\"></i>\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "player.isForward", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n");
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
  data.buffer.push("\n");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "player.isDefence", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "player.isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{
    'groupedRows': (true)
  },hashTypes:{'groupedRows': "BOOLEAN"},hashContexts:{'groupedRows': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers.unless.call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row player-row header\">\n  <div class=\"col-xs-4\">Name</div>\n  \n  <div class=\"col-xs-1 visible-lg visible-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "handEye", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    HandEye\n    ");
  stack1 = helpers['if'].call(depth0, "sortHandEye", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "handEye", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    HE\n  </div>\n\n  <div class=\"col-xs-1 visible-lg visible-md\">\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "speed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Speed</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortSpeed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "speed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    SPD\n  </div>\n\n  <div class=\"col-xs-1 visible-lg visible-md\">\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "passing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Passing</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortPassing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "passing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    PAS\n  </div>\n\n  <div class=\"col-xs-1 visible-lg visible-md\">\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Faceoffs</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortFaceoffs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    FO\n  </div>\n\n\n\n  <div class=\"col-xs-1 visible-lg visible-md\">\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "deking", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Deking</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortDeking", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "deking", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    DK\n  </div>\n\n\n  <div class=\"col-xs-1 visible-lg visible-md\">\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "wristShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Wrist Pwr</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortWristPower", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "wristShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    WSP\n  </div>\n\n\n  <div class=\"col-xs-1 visible-lg visible-md\">\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "wristShotAccuracy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Wrist Acc</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortWristAcc", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "wristShotAccuracy", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    WSA\n  </div>\n\n\n  <div class=\"col-xs-1 visible-lg visible-md\">\n    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "puckControl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Puck Control</span>\n    ");
  stack1 = helpers['if'].call(depth0, "sortPuckControl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-1 hidden-lg hidden-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortRating", "puckControl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    PC\n  </div>\n  \n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12 roster-seperator\">\n    Forwards\n  </div>\n</div>\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-xs-12 roster-seperator\">\n    Defense\n  </div>\n</div>\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"row\">\n  <div class=\"col-xs-12 roster-seperator\">\n    Goalies\n  </div>\n</div>\n");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}
  if (helper = helpers.group) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.group); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, 'group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"row\">\n  <div class=\"col-xs-12 roster-seperator\">\n    Prospects\n  </div>\n</div>\n");
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
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "player.isOnMainRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers.unless.call(depth0, "player.isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n");
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
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row player-row header\">\n    <div class=\"col-xs-3\">Name</div>\n  \n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortPoints:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Points</div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortPoints:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n        P\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortGoals:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Goals</div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortGoals:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n        G\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortAssists:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Assists</div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortAssists:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n        A\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortGames:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Games</div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortGames:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n        GP\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortMinutes:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "minutes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Minutes</div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortMinutes:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "minutes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n        Mins\n    </div>\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortShotPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Shot%</div>\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortShotPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    SH%\n  </div>\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortFaceoffPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Faceoff%</div>\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortFaceoffPercent:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    FO%\n  </div>\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :visible-lg :visible-md sortPlusMinus:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">PlusMinus</div>\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :hidden-lg :hidden-md sortPlusMinus:highlight")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n    +/-\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12 roster-seperator\">\n        Team\n    </div>\n</div>\n");
  stack1 = helpers.each.call(depth0, "player", "in", "team.roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
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
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['player-salarylistitem'] || (depth0 && depth0['player-salarylistitem']),options={hash:{
    'player': ("player")
  },hashTypes:{'player': "ID"},hashContexts:{'player': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "player-salarylistitem", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n    <div class=\"col-xs-12 roster-seperator\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "header", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/team-smallplayer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div class=\"row\">\n    <div class=\"col-xs-6\">\n        <div class=\"image-container picture-border-team\">\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("player.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n        </div>\n    </div>\n    <div class=\"col-xs-6\">\n        <h3>Top Rated Player</h3>\n        <h4>");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    </div>\n</div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers._triageMustache.call(depth0, "app-loader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
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


  data.buffer.push("       <div class=\"number\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <span class=\"value-label\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>");
  return buffer;
  
});

Ember.TEMPLATES["components/team-tweet"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"col-xs-1 tweet-logo\">\n    <i class=\"fa fa-twitter\"></i>\n</div>\n<div class=\"col-xs-10 tweet-text\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "tweet.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<small class=\"tweet-date\"><i class=\"fa fa-clock-o\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "tweet.date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small>\n</div>\n<div class=\"col-xs-1 tweet-link\">\n    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("tweet.url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><i class=\"fa fa-location-arrow\"></i></a>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["dpair"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n              ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-md-4\">\n    <div class=\"panel panel-info\">\n        <!-- Default panel contents -->\n        <div class=\"panel-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "leftD", options) : helperMissing.call(depth0, "link-to", "player", "leftD", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <p class=\"list-group-item-text\">LW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n          <li  class=\"list-group-item\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "rightD", options) : helperMissing.call(depth0, "link-to", "player", "rightD", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <p class=\"list-group-item-text\">RW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n        </ul>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["fwdline"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("  \n              <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n              ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n            ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"col-md-3\">\n    <div class=\"panel panel-success\">\n        <!-- Default panel contents -->\n        <div class=\"panel-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n        <ul class=\"list-group\">\n            <li  class=\"list-group-item\">\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "leftW", options) : helperMissing.call(depth0, "link-to", "player", "leftW", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <p class=\"list-group-item-text\">LW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n          <li class=\"list-group-item\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "center", options) : helperMissing.call(depth0, "link-to", "player", "center", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <p class=\"list-group-item-text\">C, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" </p>\n            <p class=\"text\">Faceoffs: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.playerRatings.faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n          <li class=\"list-group-item\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "rightW", options) : helperMissing.call(depth0, "link-to", "player", "rightW", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <p class=\"list-group-item-text\">RW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n        </ul>\n    </div>\n</div>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  \n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":row :team-row team.idWithUnderscore")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    \n    <div class=\"col-xs-2 col-sm-1 logo-box\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "team", "team", options) : helperMissing.call(depth0, "link-to", "team", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"col-xs-4 team-name-box\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "team", "team", options) : helperMissing.call(depth0, "link-to", "team", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat pointsSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <span>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </div>\n\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat winsSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <span>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </div>\n\n\n\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat lossesSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <span>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </div>\n    \n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat overtimeLossesSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <span>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </div>\n\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :team-stat gamesPlayedSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <span>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </div>\n    \n    <div class=\"col-xs-1 hidden-xs team-stat\">\n      <span>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "team.lastTenRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </div>\n\n\n\n\n\n\n\n  </div>\n\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <img style=\"width: 39px; height: 39px;\"");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("team.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></img>\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <h1>");
  stack1 = helpers._triageMustache.call(depth0, "team.twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      <p>");
  stack1 = helpers._triageMustache.call(depth0, "team.teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n\n\n\n\n  <div class=\"row team-row-basic\">\n    <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterConference", "3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 :col-sm-1 :filterButton allFilter:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <span>All</span>\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterConference", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 :filterButton westFilter:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <span>West</span>\n\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterConference", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-2 :filterButton eastFilter:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <span>East</span>\n    </div>\n\n\n\n    \n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton pointsSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n      P\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton winsSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n      W\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton lossesSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n      L\n    </div>\n\n\n    \n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton overtimeLossesSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n      OTL\n    </div>\n\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":col-xs-1 :filterButton gamesPlayedSort:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sort", "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n      GP\n    </div>\n\n    <div class=\"col-xs-1 hidden-xs filterButton\">\n      Last 10\n    </div>\n  </div>\n  ");
  stack1 = helpers.each.call(depth0, "team", "in", "teams", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["line"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"well well-small\" style=\"display: inline-block\">\n       LW: ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "leftW", options) : helperMissing.call(depth0, "linkTo", "player", "leftW", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        (");
  stack1 = helpers._triageMustache.call(depth0, "leftW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n   </div>\n   ");
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
  data.buffer.push("<div class=\"well well-small\" style=\"display: inline-block\">\n   C:  ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "centre", options) : helperMissing.call(depth0, "linkTo", "player", "centre", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n       (");
  stack1 = helpers._triageMustache.call(depth0, "centre.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n</div>\n");
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
  data.buffer.push("\n<div class=\"well well-small\" style=\"display: inline-block\">\n    RW: ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "rightW", options) : helperMissing.call(depth0, "linkTo", "player", "rightW", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    (");
  stack1 = helpers._triageMustache.call(depth0, "rightW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n</div>\n");
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
  data.buffer.push("<div class=\"well well-small\" style=\"display: inline-block\">\nLD:  ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "leftD", options) : helperMissing.call(depth0, "linkTo", "player", "leftD", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    (");
  stack1 = helpers._triageMustache.call(depth0, "leftD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n</div>\n");
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
  data.buffer.push("<div class=\"well well-small\" style=\"display: inline-block\">\nRD:  ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "rightD", options) : helperMissing.call(depth0, "linkTo", "player", "rightD", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    (");
  stack1 = helpers._triageMustache.call(depth0, "rightD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n</div>\n");
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
  data.buffer.push("\n<div class=\"well well-small\" style=\"display: inline-block\">\n   G:  ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "goalie", options) : helperMissing.call(depth0, "linkTo", "player", "goalie", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    (");
  stack1 = helpers._triageMustache.call(depth0, "goalie.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n</div>\n");
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
  data.buffer.push("\n   ");
  stack1 = helpers['if'].call(depth0, "centre", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "rightW", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "leftD", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "rightD", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "goalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

  data.buffer.push("<nav class=\"top-bar\" data-topbar=\"\">\r\n  <ul class=\"title-area\">\r\n    <li class=\"name\">\r\n      <h1>\r\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </h1>\r\n    </li>\r\n    <li class=\"toggle-topbar menu-icon\">\r\n      <a href=\"#\">Menu</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <section class=\"top-bar-section\">\r\n    <!-- Right Nav Section -->\r\n    <ul class=\"right\">\r\n      <li class=\"active\">\r\n        <a href=\"#\">Right Button Active</a>\r\n      </li>\r\n      <li class=\"has-dropdown\">\r\n        <a href=\"#\">Right Button with Dropdown</a>\r\n        <ul class=\"dropdown\">\r\n          <li>\r\n            <a href=\"#\">First link in dropdown</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n\r\n    <!-- Left Nav Section -->\r\n    <ul class=\"left\">\r\n      <li>\r\n        <a href=\"#\">Left Nav Button</a>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n</nav>");
  return buffer;
  
});

Ember.TEMPLATES["player"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"container\">\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"stats-box contract\">\n                <span class=\"title\">Contract</span>\n                <div class=\"numberBox\">\n                    <span>Years</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearsLeft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n                <div class=\"numberBox salary\">\n                    <span>Salary</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">$");
  stack1 = helpers._triageMustache.call(depth0, "salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n\n                <div class=\"numberBox contracttype\">\n                    <span>Type</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "contractType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n            <div class=\"stats-box basicinfo\">\n                <span class=\"title\">Info</span>\n                <div class=\"numberBox\">\n                    <span>Overall</span>\n                    <div class=\"numberBoxValueContainer\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.playeroverall || (depth0 && depth0.playeroverall),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "overall", options) : helperMissing.call(depth0, "playeroverall", "overall", options))));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"numberBox\">\n                    <span>Potential</span>\n                    <div class=\"numberBoxValueContainer\">\n                      ");
  data.buffer.push(escapeExpression((helper = helpers.playerpotential || (depth0 && depth0.playerpotential),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "potential", "potentialColorString", options) : helperMissing.call(depth0, "playerpotential", "potential", "potentialColorString", options))));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"numberBox\">\n                    <span>Age</span>\n                    <div class=\"numberBoxValueContainer\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.playerage || (depth0 && depth0.playerage),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "age", options) : helperMissing.call(depth0, "playerage", "age", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"numberBox\">\n                    <span>Position</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n\n                <div class=\"numberBox\">\n                    <span>Shoots</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"row\">\n        ");
  stack1 = helpers.each.call(depth0, "yearStat", "in", "playerStats", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <hr />\n    <div class=\"row\">\n        ");
  stack1 = helpers['if'].call(depth0, "isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"col-lg-4\">\n            <div class=\"stats-box careerstats\">\n                <span class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.year", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Stats</span>\n              ");
  stack1 = helpers['if'].call(depth0, "isGoalie", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"numberBox\">\n                    <span>Games</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              \n              <div class=\"numberBox\">\n              <span>Wins</span>\n              <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n              </div>\n            </div>\n\n              <div class=\"numberBox\">\n                <span>Losses</span>\n                <div class=\"numberBoxValueContainer\">\n                  <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                </div>\n              </div>\n\n              <div class=\"numberBox\">\n                <span>GAA</span>\n                <div class=\"numberBoxValueContainer\">\n                  <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.goalsAgainstAverage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                </div>\n              </div>\n              \n              \n              \n              \n              ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              \n              <div class=\"numberBox\">\n                    <span>Goals</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n\n                <div class=\"numberBox\">\n                    <span>Assists</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n\n                <div class=\"numberBox points\">\n                    <span>Points</span>\n                    <div class=\"numberBoxValueContainer\">\n                        <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearStat.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    </div>\n                </div>\n\n              ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"col-lg-4\">\n            <table class=\"table table-bordered table-condensed\">\n                <caption>Goalie</caption>\n                <tbody>\n                    <tr>\n                        <td>Vision</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.vision", options) : helperMissing.call(depth0, "stat", "playerRatings.vision", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Poke Check</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.pokeCheck", options) : helperMissing.call(depth0, "stat", "playerRatings.pokeCheck", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>ShotRecovery</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.shotRecovery", options) : helperMissing.call(depth0, "stat", "playerRatings.shotRecovery", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>ReboundControl</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.reboundControl", options) : helperMissing.call(depth0, "stat", "playerRatings.reboundControl", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>PuckPlayingFreq</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.puckPlayingFreq", options) : helperMissing.call(depth0, "stat", "playerRatings.puckPlayingFreq", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>StickLow</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.stickHigh", options) : helperMissing.call(depth0, "stat", "playerRatings.stickHigh", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>StickHigh</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.stickHigh", options) : helperMissing.call(depth0, "stat", "playerRatings.stickHigh", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>GloveLow</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.gloveLow", options) : helperMissing.call(depth0, "stat", "playerRatings.gloveLow", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>GloveHigh</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.gloveHigh", options) : helperMissing.call(depth0, "stat", "playerRatings.gloveHigh", options))));
  data.buffer.push("</td>\n                    </tr>\n\n                    <tr>\n                        <td>Angles</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.angles", options) : helperMissing.call(depth0, "stat", "playerRatings.angles", options))));
  data.buffer.push("</td>\n\n                    </tr>\n                    <tr>\n                        <td>FiveHole</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.fiveHole", options) : helperMissing.call(depth0, "stat", "playerRatings.fiveHole", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Breakaways</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.breakaways", options) : helperMissing.call(depth0, "stat", "playerRatings.breakaways", options))));
  data.buffer.push("</td>\n\n                    </tr>\n                    <tr>\n                        <td>Puck Control</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.puckControl", options) : helperMissing.call(depth0, "stat", "playerRatings.puckControl", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Passing</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.passing", options) : helperMissing.call(depth0, "stat", "playerRatings.passing", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Aggressiveness</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.aggressiveness", options) : helperMissing.call(depth0, "stat", "playerRatings.aggressiveness", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Speed</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.speed", options) : helperMissing.call(depth0, "stat", "playerRatings.speed", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Agility</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.agility", options) : helperMissing.call(depth0, "stat", "playerRatings.agility", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Endurance</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.endurance", options) : helperMissing.call(depth0, "stat", "playerRatings.endurance", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Durability</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.durability", options) : helperMissing.call(depth0, "stat", "playerRatings.durability", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Poise</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.poise", options) : helperMissing.call(depth0, "stat", "playerRatings.poise", options))));
  data.buffer.push("</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n\n\n\n        <div class=\"col-lg-4\">\n            <table class=\"table table-bordered table-condensed\">\n                <caption>Offensive</caption>\n                <tbody>\n                    <tr>\n                        <td>Aggressiveness</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.aggressiveness", options) : helperMissing.call(depth0, "stat", "playerRatings.aggressiveness", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Wrist Shot Power</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.wristShotPower", options) : helperMissing.call(depth0, "stat", "playerRatings.wristShotPower", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Wrist Shot Accuracy</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.wristShotAccuracy", options) : helperMissing.call(depth0, "stat", "playerRatings.wristShotAccuracy", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Slap Shot Power</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.slapShotPower", options) : helperMissing.call(depth0, "stat", "playerRatings.slapShotPower", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Slap Shot Accuracy</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.slapShotAccuracy", options) : helperMissing.call(depth0, "stat", "playerRatings.slapShotAccuracy", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Puck Control</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.puckControl", options) : helperMissing.call(depth0, "stat", "playerRatings.puckControl", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Offensive Awareness</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.offAwareness", options) : helperMissing.call(depth0, "stat", "playerRatings.offAwareness", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Hand Eye</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.handEye", options) : helperMissing.call(depth0, "stat", "playerRatings.handEye", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Deking</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.deking", options) : helperMissing.call(depth0, "stat", "playerRatings.deking", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Passing</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.passing", options) : helperMissing.call(depth0, "stat", "playerRatings.passing", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr></tr>\n\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-lg-4\">\n            <table class=\"table table-bordered table-condensed\">\n                <caption>Defensive</caption>\n                <tbody>\n                    <tr>\n                        <td>Faceoffs</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.faceoffs", options) : helperMissing.call(depth0, "stat", "playerRatings.faceoffs", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Discipline</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.discipline", options) : helperMissing.call(depth0, "stat", "playerRatings.discipline", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Defensive Awareness</td>\n                        <td> ");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.defAwareness", options) : helperMissing.call(depth0, "stat", "playerRatings.defAwareness", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Body Checking</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.bodyChecking", options) : helperMissing.call(depth0, "stat", "playerRatings.bodyChecking", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Fighting</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.fighting", options) : helperMissing.call(depth0, "stat", "playerRatings.fighting", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Shot Blocking</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.shotBlocking", options) : helperMissing.call(depth0, "stat", "playerRatings.shotBlocking", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Stick Checking</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.stickChecking", options) : helperMissing.call(depth0, "stat", "playerRatings.stickChecking", options))));
  data.buffer.push("</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-lg-4\">\n            <table class=\"table table-bordered table-condensed\">\n                <caption>Athletic</caption>\n                <tbody>\n                    <tr>\n                        <td>Speed</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.speed", options) : helperMissing.call(depth0, "stat", "playerRatings.speed", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Agility</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.agility", options) : helperMissing.call(depth0, "stat", "playerRatings.agility", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Endurance</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.endurance", options) : helperMissing.call(depth0, "stat", "playerRatings.endurance", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Durability</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.durability", options) : helperMissing.call(depth0, "stat", "playerRatings.durability", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Acceleration</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.acceleration", options) : helperMissing.call(depth0, "stat", "playerRatings.acceleration", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Strength</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.strength", options) : helperMissing.call(depth0, "stat", "playerRatings.strength", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Poise</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.poise", options) : helperMissing.call(depth0, "stat", "playerRatings.poise", options))));
  data.buffer.push("</td>\n                    </tr>\n                    <tr>\n                        <td>Balance</td>\n                        <td>");
  data.buffer.push(escapeExpression((helper = helpers.stat || (depth0 && depth0.stat),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "playerRatings.balance", options) : helperMissing.call(depth0, "stat", "playerRatings.balance", options))));
  data.buffer.push("</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n    <div class=\"loader\">\n        <div class=\"duo duo1\">\n            <div class=\"dot dot-a\"></div>\n            <div class=\"dot dot-b\"></div>\n        </div>\n        <div class=\"duo duo2\">\n            <div class=\"dot dot-a\"></div>\n            <div class=\"dot dot-b\"></div>\n        </div>\n    </div>\n\n</div>\n           ");
  }

  data.buffer.push("\n\n\n<div class=\"row\" >\n  <div class=\"small-4 columns\">\n    <div class=\"player-image\">\n      <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n    </div>\n  </div>\n  <div class=\"small-8 columns player-basic-block\">\n    <div class=\"row\">\n      <div class=\"small-3 columns jersey\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "jersey", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div class=\"small-9 columns name\">\n        <div class=\"first-name\">\n          ");
  stack1 = helpers._triageMustache.call(depth0, "firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"last-name\">\n          ");
  stack1 = helpers._triageMustache.call(depth0, "lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n        ");
  stack1 = helpers['if'].call(depth0, "isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["playerbasicinfobox"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"col-6\">\n    <div class=\"stats-box basicinfo\">\n        <span class=\"stats-box-title\">Info</span>\n        <div class=\"numberBox\">\n            <span>Overall</span>\n            <div class=\"numberBoxValueContainer\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.playeroverall || (depth0 && depth0.playeroverall),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "overall", options) : helperMissing.call(depth0, "playeroverall", "overall", options))));
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"numberBox\">\n            <span>Potential</span>\n            <div class=\"numberBoxValueContainer\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.playerpotential || (depth0 && depth0.playerpotential),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "potential", "potentialColor", options) : helperMissing.call(depth0, "playerpotential", "potential", "potentialColor", options))));
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"numberBox\">\n            <span>Age</span>\n            <div class=\"numberBoxValueContainer\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.playerage || (depth0 && depth0.playerage),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "age", options) : helperMissing.call(depth0, "playerage", "age", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        <div class=\"numberBox\">\n            <span>Position</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div>\n\n        <div class=\"numberBox\">\n            <span>Shoots</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["playercompare"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playerprofile", "aPlayer", options) : helperMissing.call(depth0, "render", "playerprofile", "aPlayer", options))));
  data.buffer.push("\n        </div>\n        <div class=\"col-xs-6\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playerprofile", "bPlayer", options) : helperMissing.call(depth0, "render", "playerprofile", "bPlayer", options))));
  data.buffer.push("\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"hidden-lg\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "aPlayer.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playerbasicinfobox", "aPlayer", options) : helperMissing.call(depth0, "render", "playerbasicinfobox", "aPlayer", options))));
  data.buffer.push("\n        <div class=\"hidden-lg\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "bPlayer.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playerbasicinfobox", "bPlayer", options) : helperMissing.call(depth0, "render", "playerbasicinfobox", "bPlayer", options))));
  data.buffer.push("\n    </div>\n    <div class=\"row\">\n        <div class=\"hidden-lg\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "aPlayer.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playercontractbox", "aPlayer", options) : helperMissing.call(depth0, "render", "playercontractbox", "aPlayer", options))));
  data.buffer.push("\n        <div class=\"hidden-lg\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "bPlayer.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "playercontractbox", "bPlayer", options) : helperMissing.call(depth0, "render", "playercontractbox", "bPlayer", options))));
  data.buffer.push("\n    </div>\n\n    ");
  stack1 = helpers.each.call(depth0, "pr", "in", "aPlayer.playerRates", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "pr.rating", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"row\">\n        <div class=\"col-lg-10 col-offset-1\">\n            <p class=\"text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "pr.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "pr", options) : helperMissing.call(depth0, "compare", "pr", options))));
  data.buffer.push("\n        </div>\n    </div>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n\n    <div class=\"loader\">\n        <div class=\"duo duo1\">\n            <div class=\"dot dot-a\"></div>\n            <div class=\"dot dot-b\"></div>\n        </div>\n        <div class=\"duo duo2\">\n            <div class=\"dot dot-a\"></div>\n            <div class=\"dot dot-b\"></div>\n        </div>\n    </div>\n\n\n    ");
  }

  data.buffer.push("<div class=\"container\">\n    ");
  stack1 = helpers['if'].call(depth0, "compareLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["playercontractbox"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"col-6\">\n    <div class=\"stats-box contract\">\n        <span class=\"stats-box-title\">Contract</span>\n        <div class=\"numberBox\">\n            <span>Years</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "yearsLeft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div>\n        <div class=\"numberBox salary\">\n            <span>Salary</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">$");
  stack1 = helpers._triageMustache.call(depth0, "salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div>\n\n        <div class=\"numberBox contracttype\">\n            <span>Type</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "contractType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["playerprofile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"player-profile\">\n    <div class=\"player-bio\">\n        <div class=\"player-image-container\">\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\n        </div>\n        <div class=\"player-info\">\n            <p class=\"player-name\">");
  stack1 = helpers._triageMustache.call(depth0, "firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" #");
  stack1 = helpers._triageMustache.call(depth0, "jersey", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["ppunit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(" <div class=\"col-md-6\">\n    <div class=\"panel panel-warning\">\n  <!-- Default panel contents -->\n  <div class=\"panel-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n                <p class=\"list-group-item-text\">LW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftW.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n          <li class=\"list-group-item\">\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n                <p class=\"list-group-item-text\">C, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            <p class=\"text\">Faceoffs: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "center.playerRatings.faceoffs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n          <li class=\"list-group-item\">\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n                <p class=\"list-group-item-text\">RW, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightW.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n          <li class=\"list-group-item\">\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n                <p class=\"list-group-item-text\">LD, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            <p class=\"text\">SlapShot Power: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "leftD.playerRatings.slapShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n          <li class=\"list-group-item\">\n                <h5 class=\"list-group-item-heading\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h5>\n                <p class=\"list-group-item-text\">RD, OVR: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" Shoots ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.handed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            <p class=\"text\">SlapShot Power: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rightD.playerRatings.slapShotPower", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </li>\n\n        \n        </ul>\n      </div>\n    </div>");
  return buffer;
  
});

Ember.TEMPLATES["roster"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n<div class=\"row roster-player-row\">\r\n    <div class=\"small-2 columns player-image-list\">\r\n        <div class=\"circle-image\" style=\"background-image: url('");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.imageUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("')\"></div>\r\n\r\n    </div>\r\n    <div class=\"small-8 columns\">\r\n        <div class=\"row\">\r\n            <div class=\"small-12 columns player-name\">\r\n                ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.displayStat", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("  ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"small-12 columns\">\r\n                <div class=\"progress\">\r\n                    <span class=\"meter\" style=\"width: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.tradeValuePercent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("%\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"small-12 columns potentialColor\">\r\n                ");
  stack1 = helpers.each.call(depth0, "player.potentialStars", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"small-12 columns salary\">\r\n                ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "player.salaryString", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                ");
  stack1 = helpers.each.call(depth0, "player.salaryYears", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"small-2 columns link-arrow\">\r\n        <i class=\"fa fa-chevron-right\"></i>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa isFullStar:fa-star:fa-star-half-o color")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\r\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <i class=\"fa fa-circle-o ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "salaryClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"></i>\r\n                ");
  return buffer;
  }

  data.buffer.push("\r\n\r\n<ul class=\"inline-list\">\r\n	<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByProperty", "overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Overall</li>\r\n	<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByProperty", "potential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Potential</li>\r\n	<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByProperty", "salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Salary</li>\r\n	<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByProperty", "age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Age</li>\r\n	<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByProperty", "tradeValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Value</li>\r\n	<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByProperty", "position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Position</li>\r\n</ul>\r\n\r\n\r\n\r\n");
  stack1 = helpers.each.call(depth0, "player", "in", "roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["team"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-chevron-left\"></i>");
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"small-3 columns team-tab-button\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTab", "teamstats", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"small-3 columns team-tab-button\">\n    <i class=\"fa fa-bar-chart-o\"></i>\n  </div>\n  <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTab", "roster", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"small-3 columns team-tab-button\">\n    <i class=\"fa fa-group\"></i>\n  </div>\n  <div class=\"small-3 columns team-tab-button\">\n    <i class=\"fa fa-calendar-o\"></i>\n  </div>\n</div>\r\n\r\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "teammain", options) : helperMissing.call(depth0, "outlet", "teammain", options))));
  data.buffer.push("\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["team2"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" \n          <small>Cap Space:</small> <small class=\"lead\">");
  stack1 = helpers._triageMustache.call(depth0, "capSpace", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small>           \n          ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push(" <small class=\"lead\"> Loading Team Info...</small>");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n        <p class=\"lead\">Filter by Position</p> \n        <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "f", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">F</button>\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "LW", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">LW</button>\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "C", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">C</button>\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "RW", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">RW</button>\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "D", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">D</button>\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "G", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">G</button>\n            <button type=\"button\" class=\"btn btn-default btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterPosition", "all", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">All</button>\n            </div>\n\n            <table class=\"table table-responsive\">\n                <thead>\n                    <tr class=\"playerTableHeaders\">\n                        <td class=\"text-info\">Name</td>\n                        <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Age</td>\n                        <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Overall</td>\n                        <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Salary</td>\n                        <td class=\"text-info\">Position</td>\n                        <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "potential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Potential</td>\n                        <td class=\"text-info hidden-lg\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "tradeValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Value</td>\n                        <td class=\"text-info visible-lg\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortProperty", "tradeValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Trade Value</td>\n                        \n                    </tr>\n                </thead>\n                <tbody>\n                    ");
  stack1 = helpers.each.call(depth0, "player", "in", "filteredRoster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </tbody>\n            </table>\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <tr>\n                        <td class=\"hidden-lg\">\n                            ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "linkTo", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  stack1 = helpers['if'].call(depth0, "player.isInjured", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                        <td class=\"visible-lg\">\n                  \n\n                            ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "linkTo", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  stack1 = helpers['if'].call(depth0, "player.isInjured", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "player.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "player.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td class=\"hidden-lg\">\n                            $");
  stack1 = helpers._triageMustache.call(depth0, "player.salarySmall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                        <td class=\"visible-lg\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "player.salaryReadable", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "player.position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td><span ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":label player.readPotentialColor")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "player.readPotential", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></td>\n                        <td>\n                            <div class=\"progress progress-info\">\n                                <div class=\"progress-bar\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'style': ("player.tradeValuePercent")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("></div>\n                            </div>\n                        </td>\n                        <td></td>\n                        \n                    </tr>\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <small>(out ");
  stack1 = helpers._triageMustache.call(depth0, "player.injuryLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" games)</small>\n                            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"loader\">\n                <div class=\"duo duo1\">\n                    <div class=\"dot dot-a\"></div>\n                    <div class=\"dot dot-b\"></div>\n                </div>\n                <div class=\"duo duo2\">\n                    <div class=\"dot dot-a\"></div>\n                    <div class=\"dot dot-b\"></div>\n                </div>\n            </div>\n        ");
  }

function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "schedule", "schedule", options) : helperMissing.call(depth0, "render", "schedule", "schedule", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program17(depth0,data) {
  
  
  data.buffer.push("\n        Schedule is loading...\n        ");
  }

  data.buffer.push(" <div class=\"row team-banner\">\n                            <h1>");
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
  data.buffer.push(")</a></small></h1>\n\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"page-header\">\n                    <h1>");
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
  data.buffer.push(")</a></small></h1>\n                </div>         \n        </div>\n            </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n        <div class=\"well well-small\">\n          ");
  stack1 = helpers['if'].call(depth0, "statsIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n</div>\n  </div>\n   \n\n        <div class=\"row\">\n            <div class=\"col-xs-4\">\n            <canvas id=\"winloss-chart\" width=\"100%\" height=\"100%\"></canvas>\n                </div>\n        </div>\n\n        <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <div class=\" stats-box contract\">\n        <span class=\"stats-box-title\">Record</span>\n        <div class=\"numberBox\">   \n            <span>Wins</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div>  \n        <div class=\"numberBox\">   \n            <span>Losses</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div> \n        \n        <div class=\"numberBox\">   \n            <span>OTL</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div>    \n                    \n                    <div class=\"numberBox\">   \n            <span>Points</span>\n            <div class=\"numberBoxValueContainer\">\n                <span class=\"numberBoxValue\">");
  stack1 = helpers._triageMustache.call(depth0, "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n        </div>  \n                    </div>           \n    </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n\n\n  <ul class=\"nav nav-tabs nav-justified teamTabs\">\n    <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Roster</a></li>\n    <li><a href=\"#tab2\" data-toggle=\"tab\">Lines</a></li>\n    <li><a href=\"#tab3\" data-toggle=\"tab\">Schedule</a></li>\n</ul>\n<div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"tab1\">\n        ");
  stack1 = helpers['if'].call(depth0, "rosterIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"tab-pane\" id=\"tab2\">\n \n\n\n        \n        </div>\n    <div class=\"tab-pane\" id=\"tab3\">\n        ");
  stack1 = helpers['if'].call(depth0, "scheduleIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    </script>\n\n    <script type=\"text/x-handlebars\" data-template-name=\"schedule\">\n        <div id=\"calendar\">\n\n        </div>");
  return buffer;
  
});

Ember.TEMPLATES["teamstats"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "salary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n			Loading...\r\n            ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n\r\n<div class=\"row\">\r\n    <div class=\"small-2 columns\">\r\n        <img class=\"player-image-crop\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("startingGoalie.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\r\n    </div>\r\n    <div class=\"small-6 columns\">\r\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "startingGoalie", options) : helperMissing.call(depth0, "link-to", "player", "startingGoalie", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n    <div class=\"small-4 columns\">\r\n        ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "startingGoalie.singleYearStats.goalsAgainstAverage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "startingGoalie.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        ");
  return buffer;
  }

  data.buffer.push("\r\n\r\n\r\n<div class=\"row stat-row\">\r\n    <div class=\"small-4 columns\">\r\n        <div class=\"stat-box\">\r\n            <img src=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "imageUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"></img>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"small-8 columns stat-box\">\r\n        <div class=\"stat-box\">\r\n            ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row stat-row\">\r\n    <div class=\"small-3 columns stat-box\">\r\n        <div class=\"team-number\">\r\n            ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"team-number-label\">\r\n            Points\r\n        </div>\r\n    </div>\r\n    <div class=\"small-3 columns stat-box\">\r\n        <div class=\"team-number\">\r\n            ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rankOverall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"team-number-label\">\r\n            Overall\r\n        </div>\r\n    </div>\r\n    <div class=\"small-3 columns stat-box\">\r\n        <div class=\"team-number\">\r\n            ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rankConference", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"team-number-label\">\r\n            conf\r\n        </div>\r\n    </div>\r\n    <div class=\"small-3 columns stat-box\">\r\n        <div class=\"team-number\">\r\n            ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "rankDivision", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"team-number-label\">\r\n            Div\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row stat-row\">\r\n    <div class=\"small-12 columns stat-box\">\r\n        <div class=\"team-number \">\r\n            ");
  stack1 = helpers['if'].call(depth0, "isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        <div class=\"team-number-label\">\r\n            team salary\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row stat-row\">\r\n    <div class=\"small-3 columns\">\r\n        <div class=\"row\">\r\n            <div class=\"small-12 columns stat-box\">\r\n                <div class=\"team-number\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"team-number-label\">\r\n                    wins\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"small-12 columns stat-box\">\r\n                <div class=\"team-number\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"team-number-label\">\r\n                    losses\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"small-12 columns stat-box\">\r\n                <div class=\"team-number\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "overtimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"team-number-label\">\r\n                    OTL\r\n                </div>\r\n            </div>\r\n        </div>\r\n		<div class=\"row\">\r\n            <div class=\"small-12 columns stat-box\">\r\n                <div class=\"team-number\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"team-number-label\">\r\n                    Games\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"small-9 columns chart-container\">\r\n        <ul class=\"hide\" data-pie-id=\"my-cool-pie-chart\">\r\n            <li data-value=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "lastTenWins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">Wins</li>\r\n            <li data-value=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "lastTenLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">Losses</li>\r\n            <li data-value=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "lastTenOvertimeLosses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">OTL</li>\r\n        </ul>\r\n		<h2>Last Ten Games</h2>\r\n        <div class=\"chart-main\" id=\"my-cool-pie-chart\"></div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"small-6 columns\">\r\n        <div class=\"stats-bar-container\">\r\n            <span class=\"stats-bar wins\" style=\"width: 70%\">\r\n\r\n            </span>\r\n            <span class=\"stats-bar losses\" style=\"width: 20%\">\r\n\r\n            </span>\r\n            <span class=\"stats-bar otl\" style=\"width: 10%\">\r\n\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row stat-row\">\r\n    <div class=\"small-6 columns stat-box\">\r\n        <div class=\"team-number\">\r\n			");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "goalsAgainstPerGame", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"team-number-label\">\r\n            Goals Against / Game\r\n        </div>\r\n    </div>\r\n	    <div class=\"small-6 columns stat-box\">\r\n        <div class=\"team-number\">\r\n			");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "goalsForPerGame", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"team-number-label\">\r\n            Goals For / game\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n");
  stack1 = helpers['if'].call(depth0, "isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
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
  data.buffer.push("\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                        <tr class=\"playerTableHeaders\">\n                            <td>\n                                Name\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                Games\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                Assists\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                Goals\n                                </>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                Points\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                +/-\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "shots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                Shots\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                Shot%\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "hits", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                Hits\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                FO%\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffsWon", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                FO/W\n                            </td>\n                            <td class=\"text-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortStat", "faceoffsTaken", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                FO/T\n                            </td>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        ");
  stack1 = helpers.each.call(depth0, "player", "in", "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </tbody>\n                </table>\n            </div>\n\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <tr>\n                            <td class=\"hidden-lg\">\n\n\n                                ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "linkTo", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  stack1 = helpers['if'].call(depth0, "player.isInjured", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td class=\"visible-lg\">\n                                <img style=\"height: 22px; width: auto;\" class=\"home-team-image\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("player.team.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\n\n\n\n\n                                ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "player", "player", options) : helperMissing.call(depth0, "linkTo", "player", "player", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  stack1 = helpers['if'].call(depth0, "player.isInjured", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.gamesPlayed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.assists", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.goals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.points", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.plusMinus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.shots", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.shootingPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.hits", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.faceoffPercentage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.faceoffsWon", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                            <td>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.singleYearStats.faceoffsTaken", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                        </tr>\n                        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <small>(out ");
  stack1 = helpers._triageMustache.call(depth0, "player.injuryLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" games)</small>\n                                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "player.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "player.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"loader\">\n                <div class=\"duo duo1\">\n                    <div class=\"dot dot-a\"></div>\n                    <div class=\"dot dot-b\"></div>\n                </div>\n                <div class=\"duo duo2\">\n                    <div class=\"dot dot-a\"></div>\n                    <div class=\"dot dot-b\"></div>\n                </div>\n            </div>\n            ");
  }

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-10 col-offset-1\">\n            ");
  stack1 = helpers['if'].call(depth0, "playersIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["trade"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"col-sm-3\">\n\n            <div class=\"list-group\">\n                ");
  stack1 = helpers.each.call(depth0, "p", "in", "aTeam.roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"col-sm-3\">\n            <h4>On Block: ");
  stack1 = helpers._triageMustache.call(depth0, "aTeam.tradeSalary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n            <div class=\"list-group\">\n                ");
  stack1 = helpers.each.call(depth0, "p", "in", "aTeam.tradeBlock", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <a ");
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
  data.buffer.push("</a>\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <a href=\"#\" class=\"list-group-item\">\n                    <h4 class=\"list-group-item-heading\">");
  stack1 = helpers._triageMustache.call(depth0, "p.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "p.lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                    <img style=\"width: 50px\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("p.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\n                    <p class=\"list-group-item-text\"> ");
  stack1 = helpers._triageMustache.call(depth0, "p.salaryReadable", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "p.overall", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                </a>\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"col-sm-3\">\n            <h4>On Block: ");
  stack1 = helpers._triageMustache.call(depth0, "bTeam.tradeSalary", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n            <div class=\"list-group\">\n                ");
  stack1 = helpers.each.call(depth0, "p", "in", "bTeam.tradeBlock", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n        </div>\n        <div class=\"col-sm-3\">\n            <div class=\"list-group\">\n                ");
  stack1 = helpers.each.call(depth0, "p", "in", "bTeam.roster", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n\n    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <a ");
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
  data.buffer.push("</a>\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "aTeam.city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "aTeam.teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"col-sm-6\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "bTeam.city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "bTeam.teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Tradeteamselect", {hash:{
    'contentBinding': ("allTeams"),
    'valueBinding': ("randomTeam.id"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.teamname"),
    'selectionBinding': ("aTeam"),
    'itemController': ("Team")
  },hashTypes:{'contentBinding': "STRING",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'itemController': "STRING"},hashContexts:{'contentBinding': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'itemController': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("aTeam.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\n            <h3>Cap Space: ");
  stack1 = helpers._triageMustache.call(depth0, "aTeam.capSpace", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n            <h4>Salary After trade: ");
  stack1 = helpers._triageMustache.call(depth0, "aTeamSalaryAfterTrade", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n        </div>\n        <div class=\"col-sm-6\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Tradeteamselect", {hash:{
    'contentBinding': ("allTeams"),
    'valueBinding': ("randomTeamB.id"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.teamname"),
    'selectionBinding': ("bTeam"),
    'itemController': ("Team")
  },hashTypes:{'contentBinding': "STRING",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'itemController': "STRING"},hashContexts:{'contentBinding': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'itemController': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindattr || (depth0 && depth0.bindattr),options={hash:{
    'src': ("bTeam.imageUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindattr", options))));
  data.buffer.push(" />\n            <h3>Current Cap: ");
  stack1 = helpers._triageMustache.call(depth0, "bTeam.capSpace", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n            <h4>Salary Avail After trade: ");
  stack1 = helpers._triageMustache.call(depth0, "bTeamSalaryAfterTrade", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n\n        </div>\n    </div>\n    <div class=\"row\">\n        ");
  stack1 = helpers['if'].call(depth0, "aTeam.rosterIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "bTeam.rosterIsLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["tradeteaminfo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"col-lg-6\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "teamname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" of ");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});