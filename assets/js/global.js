$(function(){
  $('.tooltip').hover(function() {
    var txt = $(this).attr('data-description');
    $(this).append('<span class="tt">'+txt+'</span>').fadeIn();
  }, function(){
    $('.tt',this).fadeOut(function(){
      $('.tt',this).remove();
    });
  });
  
  $('.new-zone').live('click',function(e) {
    e.preventDefault();
    var html = $('#zones li:last-child').html();
    $("#zones li:last-child h4").click();
    $("#zones").append('<li>'+html);
    $("#zones li:last-child h4").html('<span>- Untitled -</span>');
  });
  $('.new-region').live('click',function(e) {
    e.preventDefault();
    var html = $('#regions li:last-child').html();
    $("#regions li:last-child h4").click();
    $("#regions").append('<li>'+html);
    $("#regions li:last-child h4").html('<span>- Untitled -</span>');
  });

  $('.remove-region').live('click',function(e) {
    e.preventDefault();
    var count = $("#regions li").length;
    if(count > 1) {
       $("#regions li:last-child").slideUp('fast', function(){
        $(this).remove();
        $("#regions li:last-child h4").click();
      });
    }
  });
  $('.remove-zone').live('click',function(e) {
    e.preventDefault();
    var count = $("#zones li").length;
    if(count > 1) {
      $("#zones li:last-child").slideUp('fast', function(){
        $(this).remove();
        $("#zones li:last-child h4").click();
      });
    }
  });
  $(".box-name").live('keyup',function(){
    var value = $(this).val();
    var element = $(this).parent().parent();
    if(value == '' || value == 'undefined') {
      $('h4',element).html('<span>- Undefined -</span>');
    } else {
      $('h4',element).text(value);
    }
  });
  $('.box-title').live('click', function() {
    $('.fields',$(this).parent()).slideToggle();
  });
  $('.generate').live('click',function(e) {
    e.preventDefault();
    var txt = '';
    
    var theme_name = $("input[name='theme_name']").val();
    var theme_description = $("input[name='theme_description']").val();
    var core = $("input[name='core']").val();
    var engine = $("input[name='engine']").val();
    var screenshot = $("input[name='screenshot']").val();
    var base_theme = $("input[name='base_theme']").val();
    var global_styles_name = $("input[name='global_styles_name']").val();
    var global_styles_description = $("input[name='global_styles_description']").val();
    var global_styles_weight = $("input[name='global_styles_weight']").val();
    var toggle_logo = $("input[name='toggle_logo']").val();
    var toggle_name = $("input[name='toggle_name']").val();
    var toggle_slogan = $("input[name='toggle_slogan']").val();
    
    txt = txt + "name = '"+theme_name+"'\n";
    txt = txt + "description = '"+theme_description+"'\n";
    txt = txt + "core = '"+core+"'\n";
    txt = txt + "engine = '"+engine+"'\n";
    txt = txt + "sceenshot = '"+screenshot+"'\n";
    txt = txt + "base theme = '"+base_theme+"'\n";
    txt = txt + "css[global.css][name] = '"+global_styles_name+"'\n";
    txt = txt + "css[global.css][description] = '"+global_styles_description+"'\n";
    txt = txt + "css[global.css][options][weight] = '"+global_styles_weight+"'\n";
    txt = txt + "settings[toggle_logo] = '"+toggle_logo+"'\n";
    txt = txt + "settings[toggle_name] = '"+toggle_name+"'\n";
    txt = txt + "settings[toggle_slogan] = '"+toggle_slogan+"'\n";
    
    
    
    
    txt = txt + "settings[toggle_node_user_picture] = '1'\n";
    txt = txt + "settings[toggle_comment_user_picture] = '1'\n";
    txt = txt + "settings[toggle_comment_user_verification] = '1'\n";
    txt = txt + "settings[toggle_favicon] = '1'\n";
    txt = txt + "settings[toggle_main_menu] = '1'\n";
    txt = txt + "settings[toggle_secondary_menu] = '1'\n";
    txt = txt + "settings[default_logo] = '1'\n";
    txt = txt + "settings[logo_path] = ''\n";
    txt = txt + "settings[logo_upload] = ''\n";
    txt = txt + "settings[default_favicon] = '1'\n";
    txt = txt + "settings[favicon_path] = ''\n";
    txt = txt + "settings[favicon_upload] = ''\n";
    txt = txt + "settings[alpha_grid] = 'alpha_default'\n";
    txt = txt + "settings[alpha_responsive] = '1'\n";
    txt = txt + "settings[alpha_viewport] = '1'\n";
    txt = txt + "settings[alpha_viewport_initial_scale] = '1'\n";
    txt = txt + "settings[alpha_viewport_min_scale] = '1'\n";
    txt = txt + "settings[alpha_viewport_max_scale] = '1'\n";
    txt = txt + "settings[alpha_viewport_user_scaleable] = '0'\n";
    txt = txt + "settings[alpha_primary_alpha_default] = 'normal'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_narrow_responsive] = '1'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_narrow_weight] = '1'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_narrow_media] = 'all and (min-width: 740px) and (min-device-width: 740px), (max-device-width: 800px) and (min-width: 740px) and (orientation:landscape)'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_normal_responsive] = '1'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_normal_weight] = '2'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_normal_media] = 'all and (min-width: 980px) and (min-device-width: 980px), all and (max-device-width: 1024px) and (min-width: 1024px) and (orientation:landscape)'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_fluid_responsive] = '0'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_fluid_weight] = '0'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_fluid_media] = 'all and (min-width: 740px) and (min-device-width: 740px), (max-device-width: 800px) and (min-width: 740px) and (orientation:landscape)'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_wide_responsive] = '0'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_wide_weight] = '3'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_wide_media] = 'all and (min-width: 1220px)'\n";
    txt = txt + "settings[alpha_primary_alpha_fluid] = 'normal'\n";
    txt = txt + "settings[alpha_layouts_alpha_fluid_normal_responsive] = '0'\n";
    txt = txt + "settings[alpha_layouts_alpha_fluid_normal_weight] = '0'\n";
    txt = txt + "settings[alpha_layouts_alpha_fluid_normal_media] = 'all and (min-width: 740px) and (min-device-width: 740px), (max-device-width: 800px) and (min-width: 740px) and (orientation:landscape)'\n";
    txt = txt + "settings[alpha_libraries][omega_formalize] = 'omega_formalize'\n";
    txt = txt + "settings[alpha_libraries][omega_mediaqueries] = 'omega_mediaqueries'\n";
    txt = txt + "settings[alpha_libraries][omega_equalheights] = '0'\n";
    txt = txt + "settings[alpha_css][alpha-reset.css] = 'alpha-reset.css'\n";
    txt = txt + "settings[alpha_css][alpha-mobile.css] = 'alpha-mobile.css'\n";
    txt = txt + "settings[alpha_css][alpha-alpha.css] = 'alpha-alpha.css'\n";
    txt = txt + "settings[alpha_css][omega-menu.css] = 'omega-menu.css'\n";
    txt = txt + "settings[alpha_css][omega-forms.css] = 'omega-forms.css'\n";
    txt = txt + "settings[alpha_css][omega-visuals.css] = 'omega-visuals.css'\n";
    txt = txt + "settings[alpha_css][global.css] = 'global.css'\n";
    txt = txt + "settings[alpha_css][omega-text.css] = '0'\n";
    txt = txt + "settings[alpha_css][omega-branding.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][profiles/openpublish/modules/contrib/date/date_api/date.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/field/theme/field.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][sites/all/modules/contrib/logintoboggan/logintoboggan.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/node/node.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/search/search.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/user/user.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][sites/all/modules/contrib/views/css/views.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][misc/vertical-tabs.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/aggregator/aggregator.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/block/block.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/dblog/dblog.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/file/file.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/filter/filter.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/help/help.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/menu/menu.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/openid/openid.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/profile/profile.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/statistics/statistics.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/syslog/syslog.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/admin.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/maintenance.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/system.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/system.admin.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/system.base.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/system.maintenance.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/system.menus.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/system.messages.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/system/system.theme.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/taxonomy/taxonomy.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/tracker/tracker.css] = '0'\n";
    txt = txt + "settings[alpha_exclude][modules/update/update.css] = '0'\n";
    txt = txt + "settings[alpha_debug_block_toggle] = '1'\n";
    txt = txt + "settings[alpha_debug_block_active] = '1'\n";
    txt = txt + "settings[alpha_debug_grid_toggle] = '1'\n";
    txt = txt + "settings[alpha_debug_grid_active] = '1'\n";
    txt = txt + "settings[alpha_debug_grid_roles][2] = '2'\n";
    txt = txt + "settings[alpha_debug_grid_roles][3] = '3'\n";
    txt = txt + "settings[alpha_debug_grid_roles][1] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][8] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][6] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][4] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][5] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][10] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][9] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][7] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][11] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][12] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][13] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][15] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][14] = '0'\n";
    txt = txt + "settings[alpha_debug_grid_roles][16] = '0'\n";
    txt = txt + "settings[alpha_toggle_messages] = '1'\n";
    txt = txt + "settings[alpha_toggle_action_links] = '1'\n";
    txt = txt + "settings[alpha_toggle_tabs] = '1'\n";
    txt = txt + "settings[alpha_toggle_breadcrumb] = '1'\n";
    txt = txt + "settings[alpha_toggle_page_title] = '1'\n";
    txt = txt + "settings[alpha_toggle_feed_icons] = '1'\n";
    txt = txt + "settings[alpha_hidden_title] = '0'\n";
    txt = txt + "settings[alpha_hidden_site_name] = '0'\n";
    txt = txt + "settings[alpha_hidden_site_slogan] = '0'\n";
    
    $('#zones li').each(function() {
      var key = $("input[name='key']", this).val();
      var name = $("input[name='name']", this).val();
      var display = $("input[name='display']", this).val();
      var section = $("select[name='section']", this).val();
      var weight = $("input[name='weight']", this).val();
      var columns = $("input[name='columns']", this).val();
      var wrapper = $("input[name='wrapper']", this).val();
      var order = $("input[name='order']", this).val();
      var primary = $("input[name='primary']", this).val();
      var css = $("input[name='css']", this).val();
      var wrapper_css = $("input[name='wrapper_css']", this).val();
      var equal_height_container = $("input[name='equal_height_container']", this).val();
      
      txt = txt + "zones["+key+"] = '"+name+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_wrapper] = '"+wrapper+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_force] = '"+display+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_order] = '"+order+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_section] = '"+section+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_weight] = '"+weight+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_columns] = '"+columns+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_primary] = '"+primary+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_css] = '"+css+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_wrapper_css] = '"+wrapper_css+"'\n";
      txt = txt + "settings[alpha_zone_"+key+"_equal_height_container] = '"+equal_height_container+"'\n";
      
    });
    
    $('#regions li').each(function() {
      var key = $("input[name='key']", this).val();
      var name = $("input[name='name']", this).val();
      var display = $("input[name='display']", this).val();
      var zone = $("input[name='zone']", this).val();
      var columns = $("input[name='columns']", this).val();
      var weight = $("input[name='weight']", this).val();
      var prefix = $("input[name='prefix']", this).val();
      var suffix = $("input[name='suffix']", this).val();
      var position = $("input[name='position']", this).val();
      var css = $("input[name='css']", this).val();
      var equal_height_element = $("input[name='equal_height_element']", this).val();
      var equal_height_container = $("input[name='equal_height_container']", this).val();
      
      txt = txt + "regions["+key+"] = '"+name+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_force] = '"+display+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_zone] = '"+zone+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_prefix] = '"+prefix+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_columns] = '"+columns+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_suffix] = '"+suffix+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_weight] = '"+weight+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_position] = '"+position+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_css] = '"+css+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_equal_height_element] = '"+equal_height_element+"'\n";
      txt = txt + "settings[alpha_region_"+key+"_equal_height_container] = '"+equal_height_container+"'\n";
    });
    $('#output').val(txt);
  });
});