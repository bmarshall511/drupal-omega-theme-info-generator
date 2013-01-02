$(function(){
  $('h3.section').live('click',function(e) {
    e.preventDefault();
    $(this).next('.section-box').slideToggle();
  });
  $("textarea").live('click',function() {
    var $this = $(this);
    $this.select();
    $this.mouseup(function() {
        $this.unbind("mouseup");
        return false;
    });
  });
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
    if(count > 2) {
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
    var element = $(this).parent().parent().parent();
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
    var toggle_node_user_picture = $("input[name='toggle_node_user_picture']").val();
    var toggle_comment_user_picture = $("input[name='toggle_comment_user_picture']").val();
    var toggle_comment_user_verification = $("input[name='toggle_comment_user_verification']").val();
    var default_logo = $("input[name='default_logo']").val();
    var logo_path = $("input[name='logo_path']").val();
    var logo_upload = $("input[name='logo_upload']").val();
    var default_favicon = $("input[name='default_favicon']").val();
    var favicon_path = $("input[name='favicon_path']").val();
    var favicon_upload = $("input[name='favicon_upload']").val();
    var alpha_grid = $("select[name='alpha_grid']").val();
    var toggle_favicon = $("input[name='toggle_favicon']").val();
    var toggle_main_menu = $("input[name='toggle_main_menu']").val();
    var toggle_secondary_menu = $("input[name='toggle_secondary_menu']").val();
    var alpha_responsive = $("input[name='alpha_responsive']").val();
    var alpha_viewport = $("input[name='alpha_viewport']").val();
    var alpha_viewport_initial_scale = $("select[name='alpha_viewport_initial_scale']").val();
    var alpha_viewport_min_scale = $("select[name='alpha_viewport_min_scale']").val();
    var alpha_viewport_max_scale = $("select[name='alpha_viewport_max_scale']").val();
    var alpha_viewport_user_scaleable = $("input[name='alpha_viewport_user_scaleable']").val();
    var alpha_primary_alpha_default = $("select[name='alpha_primary_alpha_default']").val();
    var alpha_layouts_alpha_default_narrow_responsive = $("input[name='alpha_layouts_alpha_default_narrow_responsive']").val();
    var alpha_layouts_alpha_default_narrow_weight = $("select[name='alpha_layouts_alpha_default_narrow_weight']").val();
    var alpha_layouts_alpha_default_narrow_media = $("input[name='alpha_layouts_alpha_default_narrow_media']").val();
    var alpha_layouts_alpha_default_normal_responsive = $("input[name='alpha_layouts_alpha_default_normal_responsive']").val();
    var alpha_layouts_alpha_default_normal_weight = $("select[name='alpha_layouts_alpha_default_normal_weight']").val();
    var alpha_layouts_alpha_default_normal_media = $("input[name='alpha_layouts_alpha_default_normal_media']").val();
    var alpha_layouts_alpha_default_fluid_responsive = $("input[name='alpha_layouts_alpha_default_fluid_responsive']").val();
    var alpha_layouts_alpha_default_fluid_weight = $("select[name='alpha_layouts_alpha_default_fluid_weight']").val();
    var alpha_layouts_alpha_default_fluid_media = $("input[name='alpha_layouts_alpha_default_fluid_media']").val();
    var alpha_layouts_alpha_default_wide_responsive = $("input[name='alpha_layouts_alpha_default_wide_responsive']").val();
    var alpha_layouts_alpha_default_wide_weight = $("select[name='alpha_layouts_alpha_default_wide_weight']").val();
    var alpha_layouts_alpha_default_wide_media = $("input[name='alpha_layouts_alpha_default_wide_media']").val();
    var alpha_primary_alpha_fluid = $("select[name='alpha_primary_alpha_fluid']").val();
    var alpha_layouts_alpha_fluid_normal_responsive = $("input[name='alpha_layouts_alpha_fluid_normal_responsive']").val();
    var alpha_layouts_alpha_fluid_normal_weight = $("select[name='alpha_layouts_alpha_fluid_normal_weight']").val();
    var alpha_layouts_alpha_fluid_normal_media = $("input[name='alpha_layouts_alpha_fluid_normal_media']").val();

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
    txt = txt + "settings[toggle_node_user_picture] = '"+toggle_node_user_picture+"'\n";
    txt = txt + "settings[toggle_comment_user_picture] = '"+toggle_comment_user_picture+"'\n";
    txt = txt + "settings[toggle_comment_user_verification] = '"+toggle_comment_user_verification+"'\n";
    txt = txt + "settings[toggle_favicon] = '"+toggle_favicon+"'\n";
    txt = txt + "settings[toggle_main_menu] = '"+toggle_main_menu+"'\n";
    txt = txt + "settings[toggle_secondary_menu] = '"+toggle_secondary_menu+"'\n";
    txt = txt + "settings[default_logo] = '"+default_logo+"'\n";
    txt = txt + "settings[logo_path] = '"+logo_path+"'\n";
    txt = txt + "settings[logo_upload] = '"+logo_upload+"'\n";
    txt = txt + "settings[default_favicon] = '"+default_favicon+"'\n";
    txt = txt + "settings[favicon_path] = '"+favicon_path+"'\n";
    txt = txt + "settings[favicon_upload] = '"+favicon_upload+"'\n";
    txt = txt + "settings[alpha_grid] = '"+alpha_grid+"'\n";
    txt = txt + "settings[alpha_responsive] = '"+alpha_responsive+"'\n";
    txt = txt + "settings[alpha_viewport] = '"+alpha_viewport+"'\n";
    txt = txt + "settings[alpha_viewport_initial_scale] = '"+alpha_viewport_initial_scale+"'\n";
    txt = txt + "settings[alpha_viewport_min_scale] = '"+alpha_viewport_min_scale+"'\n";
    txt = txt + "settings[alpha_viewport_max_scale] = '"+alpha_viewport_max_scale+"'\n";
    txt = txt + "settings[alpha_viewport_user_scaleable] = '"+alpha_viewport_user_scaleable+"'\n";
    txt = txt + "settings[alpha_primary_alpha_default] = '"+alpha_primary_alpha_default+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_narrow_responsive] = '"+alpha_layouts_alpha_default_narrow_responsive+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_narrow_weight] = '"+alpha_layouts_alpha_default_narrow_weight+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_narrow_media] = '"+alpha_layouts_alpha_default_narrow_media+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_normal_responsive] = '"+alpha_layouts_alpha_default_normal_responsive+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_normal_weight] = '"+alpha_layouts_alpha_default_normal_weight+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_normal_media] = '"+alpha_layouts_alpha_default_normal_media+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_fluid_responsive] = '"+alpha_layouts_alpha_default_fluid_responsive+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_fluid_weight] = '"+alpha_layouts_alpha_default_fluid_weight+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_fluid_media] = '"+alpha_layouts_alpha_default_fluid_media+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_wide_responsive] = '"+alpha_layouts_alpha_default_wide_responsive+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_wide_weight] = '"+alpha_layouts_alpha_default_wide_weight+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_default_wide_media] = '"+alpha_layouts_alpha_default_wide_media+"'\n";
    txt = txt + "settings[alpha_primary_alpha_fluid] = '"+alpha_primary_alpha_fluid+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_fluid_normal_responsive] = '"+alpha_layouts_alpha_fluid_normal_responsive+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_fluid_normal_weight] = '"+alpha_layouts_alpha_fluid_normal_weight+"'\n";
    txt = txt + "settings[alpha_layouts_alpha_fluid_normal_media] = '"+alpha_layouts_alpha_fluid_normal_media+"'\n";






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