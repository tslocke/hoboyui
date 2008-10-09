require 'fileutils'

HOBO_YUI_HOME = File.dirname(__FILE__)

FileUtils.cp_r("#{HOBO_YUI_HOME}/public", RAILS_ROOT)
