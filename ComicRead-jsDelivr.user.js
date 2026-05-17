// ==UserScript==
// @name            ComicRead
// @namespace       ComicRead
// @version         12.5.2
// @description     涓烘极鐢荤珯澧炲姞鍙岄〉闃呰銆佺炕璇戠瓑浼樺寲浣撻獙鐨勫寮哄姛鑳姐€傜櫨鍚堜細锛堣褰曢槄璇诲巻鍙层€佽嚜鍔ㄧ鍒扮瓑锛夈€佺櫨鍚堜細鏂扮珯銆丒-Hentai锛堝叧鑱斿绔欍€佸揩鎹锋敹钘忋€佹爣绛炬煋鑹层€佽瘑鍒箍鍛婇〉绛夛級銆乶hentai锛堝交搴曞睆钄芥极鐢汇€佹棤闄愭粴鍔級銆乊urifans锛堣嚜鍔ㄧ鍒帮級銆佹嫹璐濇极鐢?copymanga)锛堟樉绀烘渶鍚庨槄璇昏褰曘€佽В閿侀殣钘忔极鐢伙級銆佸啀婕敾銆佹极鐢绘煖(manhuagui)銆佸姩婕眿(dm5)銆乵angabz銆乲omiic銆佺劇闄愬嫊婕€佺粎澹极鐢?wnacg)銆佺婕ぉ鍫傘€丯oyAcg銆佺啽杈ｆ极鐣€乭anime1銆乭itomi銆乭doujin銆丼chaleNetwork銆乶ude-moon銆丠entaiZap銆両MHentai銆丠entaiEra銆丠entaiEnvy銆丮angaDex銆亀elovemanga銆乲isslove(klz9)銆乲emono銆乶ekohouse銆丳ixiv銆佹槑鏃ユ柟鑸熸嘲鎷夎浜嬬ぞ銆佹渶鍓嶇窔銆佽姼鑳姐儗銉笺儔銆乀achidesk銆丩ANraragi
// @description:en  Add enhanced features to the comic site for optimized experience, including dual-page reading and translation. E-Hentai (Associate nhentai, Quick favorite, Colorize tags, Floating tag list, etc.) | nhentai (Totally block comics, Auto page turning) | hitomi | hdoujin | SchaleNetwork | nude-moon | HentaiZap | IMHentai | HentaiEra | HentaiEnvy | kemono | nekohouse | MangaDex | welovemanga | kisslove(klz9)
// @description:ru  袛芯斜邪胁谢褟械褌 褉邪褋褕懈褉械薪薪褘械 褎褍薪泻褑懈懈 写谢褟 褍写芯斜褋褌胁邪 薪邪 褋邪泄褌, 褌邪泻懈械 泻邪泻 写胁褍褏褋褌褉邪薪懈褔薪褘泄 褉械卸懈屑 懈 锌械褉械胁芯写.
// @author          hymbz
// @license         AGPL-3.0-or-later
// @noframes
// @match           *://*/*
// @connect         yamibo.com
// @connect         exhentai.org
// @connect         e-hentai.org
// @connect         hath.network
// @connect         nhentai.net
// @connect         gold-usergeneratedcontent.net
// @connect         hypergryph.com
// @connect         mangabz.com
// @connect         2025copy.com
// @connect         mangacopy.com
// @connect         copy20.com
// @connect         mangacopy.com
// @connect         xsskc.com
// @connect         schale.network
// @connect         touhou.ai
// @connect         jsdelivr.net
// @connect         npmmirror.com
// @connect         self
// @connect         127.0.0.1
// @connect         *
// @grant           GM_addElement
// @grant           GM_getResourceText
// @grant           GM_xmlhttpRequest
// @grant           GM.addValueChangeListener
// @grant           GM.removeValueChangeListener
// @grant           GM.getResourceText
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM.listValues
// @grant           GM.deleteValue
// @grant           GM.registerMenuCommand
// @grant           GM.unregisterMenuCommand
// @grant           unsafeWindow
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUxpcWB9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i////198il17idng49DY3PT297/K0MTP1M3X27rHzaCxupmstbTByK69xOfr7bfFy3WOmqi4wPz9/X+XomSBjqW1vZOmsN/l6GmFkomeqe7x8vn6+kv+1vUAAAAOdFJOUwDsAoYli9zV+lIqAZEDwV05SQAAAUZJREFUOMuFk+eWgjAUhGPBiLohjZACUqTp+z/gJkqJy4rzg3Nn+MjhwB0AANjv4BEtdITBHjhtQ4g+CIZbC4Qb9FGb0J4P0YrgCezQqgIA14EDGN8fYz+f3BGMASFkTJ+GDAYMUSONzrFL7SVvjNQIz4B9VERRmV0rbJWbrIwidnsd6ACMlEoip3uad3X2HJmqb3gCkkJELwk5DExRDxA6HnKaDEPSsBnAsZoANgJaoAkg12IJqBiPACImXQKF9IDULIHUkOk7kDpeAMykHqCEWACy8ACdSM7LGSg5F3HtAU1rrkaK9uGAshXS2lZ5QH/nVhmlD8rKlmbO3ZsZwLe8qnpdxJRnLaci1X1V5R32fjd5CndVkfYdGpy3D+htU952C/ypzPtdt3JflzZYBy7fi/O1euvl/XH1Pp+Cw3/1P1xOZwB+AWMcP/iw0AlKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGl0cGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC
// @resource        solid-js https://cdn.jsdelivr.net/npm/solid-js@1.9.8/dist/solid.cjs
// @resource        fflate https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js
// @resource        jsqr https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js
// @resource        comlink https://cdn.jsdelivr.net/npm/comlink@4.4.2/dist/umd/comlink.min.js
// @resource        solid-js|store https://cdn.jsdelivr.net/npm/solid-js@1.9.8/store/dist/store.cjs
// @resource        solid-js|web https://cdn.jsdelivr.net/npm/solid-js@1.9.8/web/dist/web.cjs
// @resource        _tensorflow|tfjs https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js
// @resource        _tensorflow|tfjs-backend-webgpu https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgpu@4.22.0/dist/tf-backend-webgpu.js
// @supportURL      https://github.com/hymbz/ComicReadScript/issues
// @updateURL       https://github.com/hymbz/ComicReadScript/raw/master/ComicRead.user.js
// @downloadURL     https://github.com/hymbz/ComicReadScript/raw/master/ComicRead.user.js
// ==/UserScript==
//#region \0virtual:lib-code
const libCodeMap = {
	"helper/languages": `\n//#region src/helper/languages.ts
const langList = [
	"zh",
	"en",
	"ru"
];
/** 鍒ゆ柇浼犲叆鐨勫瓧绗︿覆鏄惁鏄敮鎸佺殑璇█绫诲瀷浠ｇ爜 */
const isLanguages = (lang) => Boolean(lang) && langList.includes(lang);
/** 杩斿洖娴忚鍣ㄥ亸濂借瑷€ */
const getBrowserLang = () => {
	for (const language of navigator.languages) {
		const matchLang = langList.find((l) => l === language.split("-")[0]);
		if (matchLang) return matchLang;
	}
};
const getSaveLang = () => typeof GM === "undefined" ? "zh" : GM.getValue("@Languages");
const setSaveLang = (val) => typeof GM === "undefined" || GM.setValue("@Languages", val);
const getInitLang = async () => {
	const saveLang = await getSaveLang();
	if (isLanguages(saveLang)) return saveLang;
	const lang = getBrowserLang() ?? "zh";
	setSaveLang(lang);
	return lang;
};
//#endregion
exports.getInitLang = getInitLang;
exports.isLanguages = isLanguages;
exports.langList = langList;
exports.setSaveLang = setSaveLang;
`,
	"helper": `\nlet solid_js_web = require("solid-js/web");
let helper_languages = require("helper/languages");
let solid_js = require("solid-js");
let solid_js_store = require("solid-js/store");
//#region src/helper/components.ts
const getDom = (id) => {
	let dom = document.getElementById(id);
	if (dom) {
		dom.innerHTML = "";
		return dom;
	}
	dom = document.createElement("div");
	dom.id = id;
	document.body.append(dom);
	return dom;
};
/** 鎸傝浇 solid-js 缁勪欢 */
const mountComponents = (id, fc) => {
	const dom = getDom(id);
	dom.style.setProperty("display", "unset", "important");
	solid_js_web.render(fc, dom.attachShadow({ mode: "closed" }));
	return dom;
};
//#endregion
//#region src/helper/faviconProgress.ts
var FaviconProgress = class {
	initLink;
	color;
	canvas;
	ctx;
	link;
	constructor(color = "#607D8B") {
		this.color = color;
		this.canvas = document.createElement("canvas");
		this.canvas.width = 32;
		this.canvas.height = 32;
		this.ctx = this.canvas.getContext("2d");
		const existingLink = document.querySelector("link[rel~='icon']");
		if (existingLink) this.link = existingLink;
		else {
			const link = document.createElement("link");
			link.type = "image/x-icon";
			link.rel = "icon";
			document.head.append(link);
			this.link = link;
		}
		this.initLink = this.link.href || "/favicon.ico";
	}
	update(progress) {
		this.ctx.clearRect(0, 0, 32, 32);
		this.ctx.beginPath();
		this.ctx.arc(16, 16, 16, 0, Math.PI * 2);
		this.ctx.fillStyle = "#FAFAFA";
		this.ctx.fill();
		const startAngle = -Math.PI / 2;
		const endAngle = Math.PI * 2 * progress + startAngle;
		this.ctx.beginPath();
		this.ctx.moveTo(16, 16);
		this.ctx.arc(16, 16, 16, startAngle, endAngle);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
		this.updateFavicon();
	}
	updateFavicon() {
		if (!this.link || !this.canvas) return;
		this.link.href = this.canvas.toDataURL("image/png");
	}
	/** 鎭㈠榛樿鍥炬爣 */
	recover() {
		if (!this.link || !this.initLink) return;
		this.link.href = this.initLink;
	}
};
const useFaviconProgress = () => {};
//#endregion
//#region locales/en.json
var en_default = {
	alert: {
		"comic_load_error": "Comic loading error",
		"download_failed": "Download failed",
		"fetch_comic_img_failed": "Failed to fetch comic images",
		"img_load_failed": "Image loading failed",
		"no_img_download": "No images available for download",
		"repeat_load": "Loading image, please wait",
		"retry_get_img_url": "Retrieve the URL of the image on page {{i}} again",
		"server_connect_failed": "Unable to connect to the server"
	},
	button: {
		"auto_scroll": "Auto scroll",
		"close_current_page_translation": "Close translation of the current page",
		"download_completed": "Download completed",
		"download_completed_error": "Download complete, but {{errorNum}} images failed to download",
		"downloading": "Downloading",
		"fullscreen": "Fullscreen",
		"fullscreen_exit": "Exit Fullscreen",
		"grid_mode": "Grid mode",
		"packaging": "Packaging",
		"page_fill": "Page fill",
		"page_mode_double": "Double page mode",
		"page_mode_single": "Single page mode",
		"scroll_mode": "Scroll mode",
		"translate_current_page": "Translate current page",
		"zoom_in": "Zoom in",
		"zoom_out": "Zoom out"
	},
	description: "Add enhanced features to the comic site for optimized experience, including dual-page reading and translation.",
	eh_tag_lint: {
		"combo": "[tag]: In most cases, Should coexist with [tag]",
		"conflict": "[tag]: Should not coexist with [tag]",
		"correct_tag": "Should be the correct tag",
		"miss_female": "Missing male tag, might need",
		"miss_parody": "Missing parody tag, might need",
		"possible_conflict": "[tag]: In most cases, Should not coexist with [tag]",
		"prerequisite": "[tag]: The prerequisite tag [tag] does not exist"
	},
	end_page: {
		"next_button": "Next chapter",
		"prev_button": "Prev chapter",
		"tip": {
			"end_jump": "Reached the last page, scrolling down will jump to the next chapter",
			"exit": "Reached the last page, scrolling down will exit",
			"start_jump": "Reached the first page, scrolling up will jump to the previous chapter"
		}
	},
	hotkeys: {
		"enter_read_mode": "Enter reading mode",
		"float_tag_list": "Floating tag list",
		"jump_next": "Jump to next chap",
		"jump_prev": "Jump to previous chap",
		"jump_to_end": "Jump to the last page",
		"jump_to_home": "Jump to the first page",
		"multi_select_load": "Multi-select load",
		"page_down": "Turn the page to the down",
		"page_up": "Turn the page to the up",
		"reload_current_error_img": "Reload current error image",
		"repeat_tip": "This hotkey has been bound to \\"{{hotkey}}\\"",
		"scroll_down": "Scroll down",
		"scroll_left": "Scroll left",
		"scroll_right": "Scroll right",
		"scroll_up": "Scroll up",
		"switch_auto_enlarge": "Switch auto image enlarge option",
		"switch_dir": "Switch reading direction",
		"switch_grid_mode": "Switch grid mode",
		"switch_page_fill": "Switch page fill",
		"switch_scroll_mode": "Switch scroll mode",
		"switch_single_double_page_mode": "Switch single/double page mode"
	},
	img_status: {
		"error": "Load Error",
		"loading": "Loading",
		"wait": "Waiting for load"
	},
	other: {
		"auto": "Auto",
		"custom": "Custom",
		"disable": "Disable",
		"distance": "distance",
		"download": "Download",
		"enabled": "Enabled",
		"enter_comic_read_mode": "Enter comic reading mode",
		"exit": "Exit",
		"fab_hidden": "Hide floating button",
		"fab_show": "Show floating button",
		"fill_page": "Fill Page",
		"hotkeys": "Hotkeys",
		"img_loading": "Image loading",
		"interval": "interval",
		"loading_img": "Loading image",
		"multi_select_mode": "Multi-select mode",
		"none": "None",
		"or": "or",
		"other": "Other",
		"page_range": "Please enter the page range.:\\n (e.g., 1, 3-5, 9-)",
		"read_mode": "Reading mode",
		"selected": "Selected",
		"setting": "Settings",
		"clear": "Clear"
	},
	pwa: {
		"alert": {
			"img_data_error": "Image data error",
			"img_not_found": "Image not found",
			"img_not_found_files": "Please select an image file or a compressed file containing image files",
			"img_not_found_folder": "No image files or compressed files containing image files in the folder",
			"not_valid_url": "Not a valid URL",
			"parse_error": "Parsing error",
			"password_error": "Incorrect password",
			"repeat_load": "Loading other files鈥?,
			"userscript_not_installed": "ComicRead userscript not installed"
		},
		"button": {
			"enter_url": "Enter URL",
			"install": "Install",
			"no_more_prompt": "Do not prompt again",
			"resume_read": "Restore reading",
			"select_files": "Select File",
			"select_folder": "Select folder"
		},
		"install_md": "### Tired of opening this webpage every time?\\nIf you wish to:\\n1. Have an independent window, as if using local software\\n1. Add to the local compressed file opening method for easy direct opening\\n1. Use offline\\n### Welcome to install this page as a PWA app on your computer馃槂馃憤",
		"message": {
			"enter_password": "Please enter your password",
			"parsing": "Parsing"
		},
		"tip_enter_url": "Please enter the URL of the compressed file",
		"tip_md": "# ComicRead PWA\\nRead **local** comics using [ComicRead](https://github.com/hymbz/ComicReadScript) reading mode.\\n---\\n### Drag and drop image files, folders, or compressed files directly to start reading\\n*You can also choose to **paste directly** or **enter** the URL of the compressed file for downloading and reading*"
	},
	setting: {
		"hotkeys": {
			"add": "Add new hotkeys",
			"restore": "Restore default hotkeys"
		},
		"language": "Language",
		"option": {
			"abreast_duplicate": "Column duplicates ratio",
			"abreast_mode": "Abreast scroll mode",
			"adjust_to_width": "Adaptive Width",
			"align_edge": "Align to edge when turning page",
			"always_load_all_img": "Always load all images",
			"autoFullscreen": "Auto fullscreen",
			"autoHiddenMouse": "Auto hide mouse",
			"auto_scale": "Auto Scale",
			"auto_scroll_trigger_end": "Continue scrolling on the end page",
			"auto_switch_page_mode": "Auto switch single/double page mode by aspect ratio",
			"background_color": "Background Color",
			"click_page_turn_area": "Touch area",
			"click_page_turn_enabled": "Click to turn page",
			"click_page_turn_swap_area": "Swap LR clickable areas",
			"dark_mode": "Dark mode",
			"dark_mode_auto": "Dark mode follow system",
			"dir_ltr": "LTR (American comics)",
			"dir_rtl": "RTL (Japanese manga)",
			"disable_auto_enlarge": "Disable automatic image enlarge",
			"first_page_fill": "Enable first page fill by default",
			"full_width": "Viewport Width",
			"img_recognition": "Image Recognition",
			"img_recognition_background": "Recognition background color",
			"img_recognition_pageFill": "Auto switch page fill",
			"img_recognition_warn": "鉂?The current browser does not support Web Workers. Enabling this feature may cause page lag. It's recommended to upgrade or switch browsers.",
			"img_recognition_warn_2": "鉂?The current website does not support Web Workers. Enabling this feature may cause page lag.",
			"paragraph_appearance": "Appearance",
			"paragraph_dir": "Reading direction",
			"paragraph_display": "Display",
			"paragraph_scrollbar": "Scrollbar",
			"paragraph_translation": "Translation",
			"preload_page_num": "Preload page number",
			"scroll_end": "After reaching the End",
			"scroll_end_auto": "First jump to previous/next chapter, else exit",
			"scroll_mode_img_scale": "Scroll mode image zoom ratio",
			"scroll_mode_img_spacing": "Scroll mode image spacing",
			"scrollbar_auto_hidden": "Auto hide",
			"scrollbar_easy_scroll": "Easy scroll",
			"scrollbar_position": "position",
			"scrollbar_position_bottom": "Bottom",
			"scrollbar_position_hidden": "Hidden",
			"scrollbar_position_right": "Right",
			"scrollbar_position_top": "Top",
			"scrollbar_show_img_status": "Show image loading status",
			"show_clickable_area": "Show clickable areas",
			"show_comments": "Show comments on the end page",
			"shrink_menu": "Enable menu area",
			"swap_page_turn_key": "Swap LR page-turning keys",
			"zoom": "Image zoom ratio"
		},
		"sync_options_other_site": "Sync read options to other sites",
		"translation": {
			"cotrans_tip": "<p>Using the interface provided by <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> to translate images, which is maintained by its maintainer at their own expense.</p>\\n<p>When multiple people use it at the same time, they need to queue and wait. If the waiting queue reaches its limit, uploading new images will result in an error. Please try again after a while.</p>\\n<p>So please <b>mind the frequency of use</b>.</p>\\n<p>It is highly recommended to locally deploy Manga Image Translator, as it does not consume server resources and does not require queuing.</p>",
			"options": {
				"box_threshold": "Box threshold",
				"detection_resolution": "Text detection resolution",
				"direction": "Render text orientation",
				"direction_auto": "Follow source",
				"direction_horizontal": "Horizontal only",
				"direction_vertical": "Vertical only",
				"force_retry": "Force retry (ignore cache)",
				"inpainter": "Inpainter",
				"inpainting_size": "Inpainting size",
				"local_url": "customize server URL",
				"mask_dilation_offset": "Mask dilation offset",
				"only_download_translated": "Download only the translated images",
				"target_language": "Target language",
				"text_detector": "Text detector",
				"translator": "Translator",
				"unclip_ratio": "Unclip ratio"
			},
			"range": "Scope of Translation",
			"provider": "Translator",
			"translate_all": "Translate all images",
			"translate_to_end": "Translate the current page to the end"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "Add hotkeys actions",
			"auto_adjust_option": "Auto adjust reading option",
			"auto_page_turn": "Infinite scroll",
			"auto_show": "Auto enter reading mode",
			"block_totally": "Totally block comics",
			"colorize_tag": "Colorize tags",
			"cross_site_link": "Cross-site Link",
			"detect_ad": "Detect advertise page",
			"expand_tag_list": "Expand tag list",
			"float_tag_list": "Floating tag list",
			"load_original_image": "Load original image",
			"lock_option": "Lock site option",
			"open_link_new_page": "Open links in a new page",
			"quick_favorite": "Quick favorite",
			"quick_rating": "Quick rating",
			"quick_tag_define": "Quick view tag define",
			"remember_current_site": "Remember the current site",
			"tag_lint": "Tag Lint"
		},
		"changed_load_failed": "The website has undergone changes, unable to load comics",
		"ehentai": {
			"change_favorite_failed": "Failed to change the favorite",
			"change_favorite_success": "Successfully changed the favorite",
			"change_rating_failed": "Failed to change the rating",
			"change_rating_success": "Successfully changed the rating",
			"fetch_favorite_failed": "Failed to get favorite info",
			"fetch_img_page_source_failed": "Failed to get the source code of the image page",
			"fetch_img_page_url_failed": "Failed to get the image page address from the detail page",
			"fetch_img_url_failed": "Failed to get the image address from the image page",
			"hitomi_error": "hitomi matching error",
			"html_changed_link_failed": "The page structure has changed, and the associated external site features are not functioning properly",
			"ip_banned": "IP address is banned",
			"nhentai_error": "nhentai matching error",
			"nhentai_failed": "Matching failed, please refresh after confirming login to {{nhentai}}"
		},
		"nhentai": {
			"fetch_next_page_failed": "Failed to get next page of comic data",
			"tag_blacklist_fetch_failed": "Failed to fetch tag blacklist"
		},
		"show_settings_menu": "Show settings menu",
		"simple": {
			"auto_read_mode_message": "\\"Auto enter reading mode\\" is enabled by default",
			"no_img": "No suitable comic images were found.\\nIf necessary, you can click here to close the simple reading mode.",
			"simple_read_mode": "Enter simple reading mode"
		}
	},
	touch_area: {
		"menu": "Menu",
		"type": {
			"edge": "Edge",
			"l": "L",
			"left_right": "Left Right",
			"up_down": "Up Down"
		}
	},
	translation: {
		"status": {
			"after-translating": "Post-translation processing",
			"cancelled": "Translation cancelled",
			"colorizing": "Colorizing",
			"default": "Unknown status",
			"detection": "Detecting text",
			"downloading": "Downloading",
			"downscaling": "Downscaling",
			"error": "Error during translation",
			"error-download": "Download error",
			"error-lang": "The target language is not supported by the chosen translator",
			"error-translating": "Did not get any text back from the text translation service",
			"error-too-large": "Image size too large (greater than 8000x8000 px)",
			"error-upload": "Upload error",
			"error-disconnect": "Lost connection to server",
			"error-with-id": "Error during translation",
			"finished": "Finishing",
			"inpainting": "Inpainting",
			"mask-generation": "Generating mask",
			"ocr": "Scanning text",
			"pending": "Pending",
			"pending-pos": "Pending",
			"preparing": "Waiting for idle window",
			"rendering": "Rendering",
			"running_pre_translation_hooks": "Running pre-translation hooks",
			"saved": "Saved",
			"saving": "Saving",
			"skip-no-regions": "No text regions detected in the image",
			"skip-no-text": "No text detected in the image",
			"textline_merge": "Merging text lines",
			"translating": "Translating",
			"upload": "Uploading",
			"upscaling": "Upscaling",
			"uploading": "Uploading"
		},
		"tip": {
			"check_img_status_failed": "Failed to check image status",
			"download_img_failed": "Failed to download image",
			"get_translator_list_error": "Error occurred while getting the list of available translation services",
			"id_not_returned": "No id returned",
			"img_downloading": "Downloading images",
			"img_not_fully_loaded": "Image has not finished loading",
			"pending": "Pending, {{pos}} in queue",
			"resize_img_failed": "Failed to resize image",
			"translating": "Translating image",
			"translation_completed": "Translation completed",
			"upload": "Uploading image",
			"upload_error": "Image upload error",
			"upload_return_error": "Error during server translation",
			"wait_translation": "Waiting for translation"
		},
		"translator": {
			"baidu": "baidu",
			"deepl": "DeepL",
			"google": "Google",
			"gpt3.5": "GPT-3.5",
			"none": "Remove texts",
			"offline": "offline translator",
			"original": "Original",
			"papago": "Papago",
			"youdao": "youdao"
		}
	},
	upscale: {
		"module_download_complete": "Image Upscaling Model Download Complete",
		"module_download_failed": "Image Upscaling Model Download Failed",
		"module_downloading": "Image Upscaling Model Downloading...",
		"title": "Upscale Image",
		"upscaled": "upscaled",
		"upscaling": "upscaling",
		"webgpu_tip": "Unable to upscale images using WebGPU, processing will be slower"
	}
};
//#endregion
//#region locales/ru.json
var ru_default = {
	alert: {
		"comic_load_error": "袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈 泻芯屑懈泻褋邪",
		"download_failed": "袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈",
		"fetch_comic_img_failed": "袧械 褍写邪谢芯褋褜 蟹邪谐褉褍蟹懈褌褜 懈蟹芯斜褉邪卸械薪懈褟",
		"img_load_failed": "袧械 褍写邪谢芯褋褜 蟹邪谐褉褍蟹懈褌褜 懈蟹芯斜褉邪卸械薪懈械",
		"no_img_download": "袧械褌 写芯褋褌褍锌薪褘褏 泻邪褉褌懈薪芯泻 写谢褟 蟹邪谐褉褍蟹泻懈",
		"repeat_load": "袟邪谐褉褍蟹泻邪 懈蟹芯斜褉邪卸械薪懈褟, 锌芯卸邪谢褍泄褋褌邪 锌芯写芯卸写懈褌械",
		"retry_get_img_url": "袩芯胁褌芯褉薪芯 锌芯谢褍褔懈褌褜 邪写褉械褋 懈蟹芯斜褉邪卸械薪懈褟 薪邪 褋褌褉邪薪懈褑械 {{i}}",
		"server_connect_failed": "袧械 褍写邪谢芯褋褜 锌芯写泻谢褞褔懈褌褜褋褟 泻 褋械褉胁械褉褍"
	},
	button: {
		"auto_scroll": "袗胁褌芯锌褉芯泻褉褍褌泻邪",
		"close_current_page_translation": "小泻褉褘褌褜 锌械褉械胁芯写 褌械泻褍褖械泄 褋褌褉邪薪懈褑褘",
		"download_completed": "袟邪谐褉褍蟹泻邪 蟹邪胁械褉褕械薪邪",
		"download_completed_error": "袟邪谐褉褍蟹泻邪 蟹邪胁械褉褕械薪邪, 薪芯 {{errorNum}} 懈蟹芯斜褉邪卸械薪懈泄 薪械 褍写邪谢芯褋褜 蟹邪谐褉褍蟹懈褌褜",
		"downloading": "小泻邪褔懈胁邪薪懈械",
		"fullscreen": "锌芯谢薪芯褝泻褉邪薪薪褘泄",
		"fullscreen_exit": "胁褘泄褌懈 懈蟹 锌芯谢薪芯褝泻褉邪薪薪芯谐芯 褉械卸懈屑邪",
		"grid_mode": "袪械卸懈屑 褋械褌泻懈",
		"packaging": "校锌邪泻芯胁泻邪",
		"page_fill": "袟邪锌芯谢薪懈褌褜 褋褌褉邪薪懈褑褍",
		"page_mode_double": "袛胁褍褏褔邪褋褌懈褔薪褘泄 褉械卸懈屑",
		"page_mode_single": "袨写薪芯褋褌褉邪薪懈褔薪褘泄 褉械卸懈屑",
		"scroll_mode": "袪械卸懈屑 锌褉芯泻褉褍褌泻懈",
		"translate_current_page": "袩械褉械胁械褋褌懈 褌械泻褍褖褍褞 褋褌褉邪薪懈褑褍",
		"zoom_in": "袩褉懈斜谢懈蟹懈褌褜",
		"zoom_out": "校屑械薪褜褕懈褌褜"
	},
	description: "袛芯斜邪胁谢褟械褌 褉邪褋褕懈褉械薪薪褘械 褎褍薪泻褑懈懈 写谢褟 褍写芯斜褋褌胁邪 薪邪 褋邪泄褌, 褌邪泻懈械 泻邪泻 写胁褍褏褋褌褉邪薪懈褔薪褘泄 褉械卸懈屑 懈 锌械褉械胁芯写.",
	eh_tag_lint: {
		"combo": "[褌械谐]: 袙 斜芯谢褜褕懈薪褋褌胁械 褋谢褍褔邪械胁 写芯谢卸械薪 褋芯褋褍褖械褋褌胁芯胁邪褌褜 褋 [褌械谐芯屑]",
		"conflict": "[tag]: 袧械 写芯谢卸械薪 褋芯褋褍褖械褋褌胁芯胁邪褌褜 褋 [tag]",
		"correct_tag": "袛芯谢卸械薪 斜褘褌褜 锌褉邪胁懈谢褜薪褘泄 褌械谐",
		"miss_female": "袨褌褋褍褌褋褌胁褍械褌 屑褍卸褋泻芯泄 褌械谐, 胁芯蟹屑芯卸薪芯, 锌芯薪邪写芯斜懈褌褋褟",
		"miss_parody": "袨褌褋褍褌褋褌胁褍械褌 褌械谐 锌邪褉芯写懈懈, 胁芯蟹屑芯卸薪芯, 锌芯薪邪写芯斜懈褌褋褟",
		"possible_conflict": "[tag]: 袙 斜芯谢褜褕懈薪褋褌胁械 褋谢褍褔邪械胁 薪械 写芯谢卸械薪 褋芯褋褍褖械褋褌胁芯胁邪褌褜 褋 [tag]",
		"prerequisite": "[tag]: 袩褉械写胁邪褉懈褌械谢褜薪褘泄 褌械谐 [tag] 薪械 褋褍褖械褋褌胁褍械褌"
	},
	end_page: {
		"next_button": "小谢械写褍褞褖邪褟 谐谢邪胁邪",
		"prev_button": "袩褉械写褘写褍褖邪褟 谐谢邪胁邪",
		"tip": {
			"end_jump": "袩芯褋谢械写薪褟褟 褋褌褉邪薪懈褑邪, 褋谢械写褍褞褖邪褟 谐谢邪胁邪 薪懈卸械",
			"exit": "袩芯褋谢械写薪褟褟 褋褌褉邪薪懈褑邪, 薪懈卸械 泻芯屑懈泻褋 斜褍写械褌 蟹邪泻褉褘褌",
			"start_jump": "袩械褉胁邪褟 褋褌褉邪薪懈褑邪, 胁褘褕械 斜褍写械褌 蟹邪谐褉褍卸械薪邪 锌褉械写褘写褍褖邪褟 谐谢邪胁邪"
		}
	},
	hotkeys: {
		"enter_read_mode": "袪械卸懈屑 褔褌械薪懈褟",
		"float_tag_list": "袩谢邪胁邪褞褖懈泄 褋锌懈褋芯泻 褌械谐芯胁",
		"jump_next": "袩械褉械泄褌懈 泻 褋谢械写褍褞褖械泄 谐谢邪胁械",
		"jump_prev": "袩械褉械泄褌懈 泻 锌褉械写褘写褍褖械泄 谐谢邪胁械",
		"jump_to_end": "袩械褉械泄褌懈 泻 锌芯褋谢械写薪械泄 褋褌褉邪薪懈褑械",
		"jump_to_home": "袩械褉械泄褌懈 泻 锌械褉胁芯泄 褋褌褉邪薪懈褑械",
		"multi_select_load": "袦薪芯卸械褋褌胁械薪薪邪褟 蟹邪谐褉褍蟹泻邪",
		"page_down": "袩械褉械谢懈褋褌薪褍褌褜 褋褌褉邪薪懈褑褍 胁薪懈蟹",
		"page_up": "袩械褉械谢懈褋褌薪褍褌褜 褋褌褉邪薪懈褑褍 胁胁械褉褏",
		"reload_current_error_img": "袩械褉械蟹邪谐褉褍蟹懈褌褜 褌械泻褍褖械械 芯褕懈斜芯褔薪芯械 懈蟹芯斜褉邪卸械薪懈械",
		"repeat_tip": "协褌邪 谐芯褉褟褔邪褟 泻谢邪胁懈褕邪 斜褘谢邪 薪邪蟹薪邪褔械薪邪 薪邪 \\"{{hotkey}}\\"",
		"scroll_down": "袩褉芯泻褉褍褌懈褌褜 胁薪懈蟹",
		"scroll_left": "袩褉芯泻褉褍褌懈褌褜 胁谢械胁芯",
		"scroll_right": "袩褉芯泻褉褍褌懈褌械 胁锌褉邪胁芯",
		"scroll_up": "袩褉芯泻褉褍褌懈褌械 胁胁械褉褏",
		"switch_auto_enlarge": "袗胁褌芯屑邪褌懈褔械褋泻芯械 锌褉懈斜谢懈卸械薪懈械",
		"switch_dir": "袧邪锌褉邪胁谢械薪懈械 褔褌械薪懈褟",
		"switch_grid_mode": "袪械卸懈屑 褋械褌泻懈",
		"switch_page_fill": "袟邪锌芯谢薪械薪懈械 褋褌褉邪薪懈褑褘",
		"switch_scroll_mode": "袪械卸懈屑 锌褉芯泻褉褍褌泻懈",
		"switch_single_double_page_mode": "袨写薪芯褋褌褉邪薪懈褔薪褘泄/袛胁褍褏褋褌褉邪薪懈褔薪褘泄 褉械卸懈屑"
	},
	img_status: {
		"error": "袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈",
		"loading": "袟邪谐褉褍蟹泻邪",
		"wait": "袨卸懈写邪薪懈械 蟹邪谐褉褍蟹泻懈"
	},
	other: {
		"auto": "袗胁褌芯",
		"custom": "Custom",
		"disable": "袨褌泻谢褞褔懈褌褜",
		"distance": "褉邪褋褋褌芯褟薪懈械",
		"download": "小泻邪褔邪褌褜",
		"enabled": "袙泻谢褞褔械薪芯",
		"enter_comic_read_mode": "袪械卸懈屑 褔褌械薪懈褟 泻芯屑懈泻褋芯胁",
		"exit": "袙褘褏芯写",
		"fab_hidden": "小泻褉褘褌褜 锌谢邪胁邪褞褖褍褞 泻薪芯锌泻褍",
		"fab_show": "袩芯泻邪蟹邪褌褜 锌谢邪胁邪褞褖褍褞 泻薪芯锌泻褍",
		"fill_page": "袟邪锌芯谢薪懈褌褜 褋褌褉邪薪懈褑褍",
		"hotkeys": "袚芯褉褟褔懈械 泻谢邪胁懈褕懈",
		"img_loading": "袠蟹芯斜褉邪卸械薪懈械 蟹邪谐褉褍卸邪械褌褋褟",
		"interval": "懈薪褌械褉胁邪谢",
		"loading_img": "袟邪谐褉褍蟹泻邪 懈蟹芯斜褉邪卸械薪懈褟",
		"multi_select_mode": "袪械卸懈屑 屑薪芯卸械褋褌胁械薪薪芯谐芯 胁褘斜芯褉邪",
		"none": "袨褌褋褍褌褋褌胁褍械褌",
		"or": "懈谢懈",
		"other": "袛褉褍谐芯械",
		"page_range": "袙胁械写懈褌械 写懈邪锌邪蟹芯薪 褋褌褉邪薪懈褑.:\\n (薪邪锌褉懈屑械褉, 1, 3-5, 9-)",
		"read_mode": "袪械卸懈屑 褔褌械薪懈褟",
		"selected": "袙褘斜褉邪薪芯",
		"setting": "袧邪褋褌褉芯泄泻懈",
		"clear": "袨褔懈褋褌懈褌褜"
	},
	pwa: {
		"alert": {
			"img_data_error": "袨褕懈斜泻邪 写邪薪薪褘褏 懈蟹芯斜褉邪卸械薪懈褟",
			"img_not_found": "袠蟹芯斜褉邪卸械薪懈械 薪械 薪邪泄写械薪芯",
			"img_not_found_files": "袩芯卸邪谢褍泄褋褌邪 胁褘斜械褉懈褌械 褎邪泄谢 懈谢懈 邪褉褏懈胁 褋 懈蟹芯斜褉邪卸械薪懈褟屑懈",
			"img_not_found_folder": "袙 锌邪锌泻械 薪械 薪邪泄写械薪褘 懈蟹芯斜褉邪卸械薪懈褟 懈谢懈 邪褉褏懈胁褘 褋 懈蟹芯斜褉邪卸械薪懈褟屑懈",
			"not_valid_url": "袧械胁邪谢懈写薪褘泄 URL",
			"parse_error": "袨褕懈斜泻邪 邪薪邪谢懈蟹邪",
			"password_error": "袧械胁械褉薪褘泄 锌邪褉芯谢褜",
			"repeat_load": "袟邪谐褉褍蟹泻邪 写褉褍谐懈褏 褎邪泄谢芯胁鈥?,
			"userscript_not_installed": "ComicRead 薪械 褍褋褌邪薪芯胁谢械薪"
		},
		"button": {
			"enter_url": "袙胁械褋褌懈 URL",
			"install": "校褋褌邪薪芯胁懈褌褜",
			"no_more_prompt": "袘芯谢褜褕械 薪械 锌芯泻邪蟹褘胁邪褌褜",
			"resume_read": "袩褉芯写芯谢卸懈褌褜 褔褌械薪懈械",
			"select_files": "袙褘斜褉邪褌褜 褎邪泄谢",
			"select_folder": "袙褘斜褉邪褌褜 锌邪锌泻褍"
		},
		"install_md": "### 校褋褌邪谢懈 芯褌泻褉褘胁邪褌褜 褝褌褍 褋褌褉邪薪懈褑褍 泻邪卸写褘泄 褉邪蟹?\\n袝褋谢懈 胁褘 褏芯褌懈褌械:\\n1. 袠屑械褌褜 芯褌写械谢褜薪芯械 芯泻薪芯, 泻邪泻 械褋谢懈 斜褘 胁褘 懈褋锌芯谢褜蟹芯胁邪谢懈 芯斜褘褔薪芯械 锌褉芯谐褉邪屑屑薪芯械 芯斜械褋锌械褔械薪懈械\\n1. 袨褌泻褉褘胁邪褌褜 邪褉褏懈胁褘 薪邪锌褉褟屑褍褞\\n1. 袩芯谢褜蟹芯胁邪褌褜褋褟 芯褎褎谢邪泄薪\\n### 校褋褌邪薪芯胁懈褌械 褝褌褍 褋褌褉邪薪懈褑褍 胁 泻邪褔械褋褌胁械 [PWA](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5) 薪邪 褋胁芯泄 泻芯屑锌褜褞褌械褉 馃惡鈽濓笍",
		"message": {
			"enter_password": "袩芯卸邪谢褍泄褋褌邪 胁胁械写懈褌械 锌邪褉芯谢褜",
			"parsing": "袪邪蟹斜芯褉"
		},
		"tip_enter_url": "袙胁械写懈褌械 URL 邪褉褏懈胁邪",
		"tip_md": "# ComicRead PWA\\n袠褋锌芯谢褜蟹褍泄褌械 [ComicRead](https://github.com/hymbz/ComicReadScript) 写谢褟 褔褌械薪懈褟 泻芯屑懈泻褋芯胁 **谢芯泻邪谢褜薪芯**.\\n---\\n### 袩械褉械褌邪褖懈褌械 懈蟹芯斜褉邪卸械薪懈褟, 锌邪锌泻懈 懈谢懈 邪褉褏懈胁褘 褔褌芯斜褘 薪邪褔邪褌褜 褔懈褌邪褌褜\\n*袙褘 褌邪泻 卸械 屑芯卸械褌械 **芯褌泻褉褘褌褜** 懈谢懈 **胁褋褌邪胁懈褌褜** URL 邪褉褏懈胁邪 薪邪 薪邪锌褉褟屑褍褞*"
	},
	setting: {
		"hotkeys": {
			"add": "袛芯斜邪胁懈褌褜 谐芯褉褟褔懈械 泻谢邪胁懈褕懈",
			"restore": "袙芯褋褋褌邪薪芯胁懈褌褜 谐芯褉褟褔懈械 泻谢邪胁懈褕懈 锌芯 褍屑芯谢褔邪薪懈褞"
		},
		"language": "携蟹褘泻",
		"option": {
			"abreast_duplicate": "袣芯褝褎褎懈褑懈械薪褌 写褍斜谢懈褉芯胁邪薪懈褟 褋褌芯谢斜褑芯胁",
			"abreast_mode": "袪械卸懈屑 锌褉芯泻褉褍褌泻懈 胁 褉褟写",
			"adjust_to_width": "袗写邪锌褌懈胁薪邪褟 褕懈褉懈薪邪",
			"align_edge": "袙褘褉邪胁薪懈胁邪薪懈械 锌芯 泻褉邪褞 锌褉懈 锌械褉械谢懈褋褌褘胁邪薪懈懈 褋褌褉邪薪懈褑褘",
			"always_load_all_img": "袙褋械谐写邪 蟹邪谐褉褍卸邪褌褜 胁褋械 懈蟹芯斜褉邪卸械薪懈褟",
			"autoFullscreen": "袗胁褌芯 锌芯谢薪褘泄 褝泻褉邪薪",
			"autoHiddenMouse": "袗胁褌芯屑邪褌懈褔械褋泻懈 褋泻褉褘胁邪褌褜 泻褍褉褋芯褉 屑褘褕懈",
			"auto_scale": "袗胁褌芯 屑邪褋褕褌邪斜",
			"auto_scroll_trigger_end": "袩褉芯写芯谢卸懈褌褜 锌褉芯泻褉褍褌泻褍 薪邪 泻芯薪械褔薪芯泄 褋褌褉邪薪懈褑械",
			"auto_switch_page_mode": "袗胁褌芯屑邪褌懈褔械褋泻芯械 锌械褉械泻谢褞褔械薪懈械 褉械卸懈屑邪 芯写薪芯泄/写胁芯泄薪芯泄 褋褌褉邪薪懈褑褘 胁 蟹邪胁懈褋懈屑芯褋褌懈 芯褌 褋芯芯褌薪芯褕械薪懈褟 褋褌芯褉芯薪",
			"background_color": "笑胁械褌 褎芯薪邪",
			"click_page_turn_area": "袨斜谢邪褋褌褜 薪邪卸邪褌懈褟",
			"click_page_turn_enabled": "袩械褉械谢懈褋褌褘胁邪褌褜 锌芯 泻谢懈泻褍",
			"click_page_turn_swap_area": "袩芯屑械薪褟褌褜 屑械褋褌邪屑懈 锌褉邪胁褍褞 懈 谢械胁褍褞 芯斜谢邪褋褌懈 锌械褉械泻谢褞褔械薪懈褟 褋褌褉邪薪懈褑",
			"dark_mode": "孝褢屑薪邪褟 褌械屑邪",
			"dark_mode_auto": "孝褢屑薪褘泄 褉械卸懈屑 褋谢械写褍械褌 蟹邪 褋懈褋褌械屑芯泄",
			"dir_ltr": "效褌械薪懈械 褋谢械胁邪 薪邪锌褉邪胁芯 (袗屑械褉懈泻邪薪褋泻懈械 泻芯屑懈泻褋褘)",
			"dir_rtl": "效褌械薪懈械 褋锌褉邪胁邪 薪邪谢械胁芯 (携锌芯薪褋泻邪褟 屑邪薪谐邪)",
			"disable_auto_enlarge": "袨褌泻谢褞褔懈褌褜 邪胁褌芯屑邪褌懈褔械褋泻芯械 屑邪褋褕褌邪斜懈褉芯胁邪薪懈械 懈蟹芯斜褉邪卸械薪懈泄",
			"first_page_fill": "袙泻谢褞褔懈褌褜 蟹邪锌芯谢薪械薪懈械 锌械褉胁芯泄 褋褌褉邪薪懈褑褘 锌芯 褍屑芯谢褔邪薪懈褞",
			"full_width": "楔懈褉懈薪邪 芯泻薪邪 锌褉芯褋屑芯褌褉邪",
			"img_recognition": "褉邪褋锌芯蟹薪邪胁邪薪懈械 懈蟹芯斜褉邪卸械薪懈泄",
			"img_recognition_background": "袨锌褉械写械谢懈褌褜 褑胁械褌 褎芯薪邪",
			"img_recognition_pageFill": "袗胁褌芯屑邪褌懈褔械褋泻芯械 锌械褉械泻谢褞褔械薪懈械 蟹邪锌芯谢薪械薪懈褟 褋褌褉邪薪懈褑褘",
			"img_recognition_warn": "鉂?孝械泻褍褖懈泄 斜褉邪褍蟹械褉 薪械 锌芯写写械褉卸懈胁邪械褌 Web Workers. 袙泻谢褞褔械薪懈械 褝褌芯泄 褎褍薪泻褑懈懈 屑芯卸械褌 胁褘蟹胁邪褌褜 蟹邪写械褉卸泻褍 褋褌褉邪薪懈褑褘. 袪械泻芯屑械薪写褍械褌褋褟 芯斜薪芯胁懈褌褜 懈谢懈 褋屑械薪懈褌褜 斜褉邪褍蟹械褉.",
			"img_recognition_warn_2": "鉂?孝械泻褍褖懈泄 胁械斜-褋邪泄褌 薪械 锌芯写写械褉卸懈胁邪械褌 Web Workers. 袙泻谢褞褔械薪懈械 褝褌芯泄 褎褍薪泻褑懈懈 屑芯卸械褌 锌褉懈胁械褋褌懈 泻 蟹邪写械褉卸泻械 褋褌褉邪薪懈褑褘.",
			"paragraph_appearance": "袙薪械褕薪芯褋褌褜",
			"paragraph_dir": "袧邪锌褉邪胁谢械薪懈械 褔褌械薪懈褟",
			"paragraph_display": "袨褌芯斜褉邪卸械薪懈械",
			"paragraph_scrollbar": "袩芯谢芯褋邪 锌褉芯泻褉褍褌泻懈",
			"paragraph_translation": "袩械褉械胁芯写",
			"preload_page_num": "袩褉械写蟹邪谐褉褍卸邪褌褜 褋褌褉邪薪懈褑",
			"scroll_end": "袩芯褋谢械 写芯褋褌懈卸械薪懈褟 泻芯薪褑邪",
			"scroll_end_auto": "小薪邪褔邪谢邪 锌械褉械褏芯写 泻 锌褉械写褘写褍褖械泄/褋谢械写褍褞褖械泄 谐谢邪胁械, 懈薪邪褔械 胁褘褏芯写",
			"scroll_mode_img_scale": "袣芯褝褎褎懈褑懈械薪褌 屑邪褋褕褌邪斜懈褉芯胁邪薪懈褟 懈蟹芯斜褉邪卸械薪懈褟 胁 褉械卸懈屑械 褋泻褉芯谢谢懈薪谐邪",
			"scroll_mode_img_spacing": "袪邪褋褋褌芯褟薪懈械 屑械卸写褍 褋褌褉邪薪懈褑邪屑懈 胁 褉械卸懈屑械 褋泻褉芯谢谢懈薪谐邪",
			"scrollbar_auto_hidden": "袗胁褌芯屑邪褌懈褔械褋泻懈 褋泻褉褘胁邪褌褜",
			"scrollbar_easy_scroll": "袥褢谐泻邪褟 锌褉芯泻褉褍褌泻邪",
			"scrollbar_position": "袩芯蟹懈褑懈褟",
			"scrollbar_position_bottom": "小薪懈蟹褍",
			"scrollbar_position_hidden": "小锌褉褟褌邪薪芯",
			"scrollbar_position_right": "小锌褉邪胁邪",
			"scrollbar_position_top": "小胁械褉褏褍",
			"scrollbar_show_img_status": "袩芯泻邪蟹褘胁邪褌褜 褋褌邪褌褍褋 蟹邪谐褉褍蟹泻懈 懈蟹芯斜褉邪卸械薪懈褟",
			"show_clickable_area": "袩芯泻邪蟹褘胁邪褌褜 泻谢懈泻邪斜械谢褜薪褘械 芯斜谢邪褋褌懈",
			"show_comments": "袩芯泻邪蟹褘胁邪褌褜 泻芯屑屑械薪褌邪褉懈懈 薪邪 锌芯褋谢械写薪械泄 褋褌褉邪薪懈褑械",
			"shrink_menu": "袙泻谢褞褔懈褌褜 芯斜谢邪褋褌褜 屑械薪褞",
			"swap_page_turn_key": "袩芯屑械薪褟褌褜 屑械褋褌邪屑懈 泻谢邪胁懈褕懈 锌械褉械泻谢褞褔械薪懈褟 褋褌褉邪薪懈褑",
			"zoom": "袣芯褝褎褎懈褑懈械薪褌 屑邪褋褕褌邪斜懈褉芯胁邪薪懈褟 懈蟹芯斜褉邪卸械薪懈褟"
		},
		"sync_options_other_site": "小懈薪褏褉芯薪懈蟹懈褉芯胁邪褌褜 薪邪褋褌褉芯泄泻懈 褔褌械薪懈褟 褋 写褉褍谐懈屑懈 褋邪泄褌邪屑懈",
		"translation": {
			"cotrans_tip": "<p>袠褋锌芯谢褜蟹褍械褌 写谢褟 锌械褉械胁芯写邪 <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans API</a>, 褉邪斜芯褌邪褞褖懈泄 懈褋泻谢褞褔懈褌械谢褜薪芯 蟹邪 褋褔褢褌 褋胁芯械谐芯 褋芯蟹写邪褌械谢褟.</p>\\n<p>袟邪锌褉芯褋褘 芯斜褉邪斜邪褌褘胁邪褞褌褋褟 锌芯 芯写薪芯屑褍 胁 锌芯褉褟写泻械 褋懈薪褏褉芯薪薪芯泄 芯褔械褉械写懈. 袣芯谐写邪 芯褔械褉械写褜 锌褉械胁褘褕邪械褌 谢懈屑懈褌 薪芯胁褘械 蟹邪锌褉芯褋褘 斜褍写褍褌 锌褉懈胁芯写懈褌褜 泻 芯褕懈斜泻械. 袝褋谢懈 褌邪泻芯械 褋谢褍褔懈谢芯褋褜 锌芯锌褉芯斜褍泄褌械 锌芯蟹卸械.</p>\\n<p>孝邪泻 褔褌芯 锌芯卸邪谢褍泄褋褌邪 <b>褍褔懈褌褘胁邪泄褌械 蟹邪谐褉褍卸械薪薪芯褋褌褜 锌褉懈 胁褘斜芯褉械</b></p>\\n<p>袧邪褋褌芯褟褌械谢褜薪芯 褉械泻芯屑械薪写芯胁邪薪芯 谢芯泻邪谢褜薪芯 褉邪蟹胁械褉薪褍褌褜 Manga Image Translator 褌.泻. 褝褌芯 薪械 锌芯褌褉械斜谢褟械褌 褋械褉胁械褉薪褘械 褉械褋褍褉褋褘 懈 胁褘 薪械 芯谐褉邪薪懈褔械薪褘 芯褔械褉械写褜褞.</p>",
			"options": {
				"box_threshold": "袩芯褉芯谐 泻芯褉芯斜泻懈",
				"detection_resolution": "袪邪蟹褉械褕械薪懈械 褉邪褋锌芯蟹薪邪胁邪薪懈褟 褌械泻褋褌邪",
				"direction": "袨褉懈械褌薪邪褑懈褟 褌械泻褋褌邪",
				"direction_auto": "小谢械写芯胁邪薪懈械 芯褉懈谐懈薪邪谢褍",
				"direction_horizontal": "孝芯谢褜泻芯 谐芯褉懈蟹芯薪褌邪谢褜薪芯",
				"direction_vertical": "孝芯谢褜泻芯 胁械褉褌懈泻邪谢褜薪芯",
				"force_retry": "袩褉懈薪褍写懈褌械谢褜薪褘泄 锌芯胁褌芯褉(袠谐薪芯褉懈褉芯胁邪褌褜 泻褝褕)",
				"inpainter": "袠薪锌械泄薪褌械褉",
				"inpainting_size": "袠薪锌械泄薪褌懈薪谐 褉邪蟹屑械褉 芯斜谢邪褋褌懈",
				"local_url": "袧邪褋褌褉芯懈褌褜 URL 褋械褉胁械褉邪",
				"mask_dilation_offset": "袦邪褋泻懈褉芯胁芯褔薪芯械 褋屑械褖械薪懈械 写懈谢邪褌邪褑懈懈",
				"only_download_translated": "小泻邪褔邪褌褜 褌芯谢褜泻芯 锌械褉械胁械写褢薪薪褘械 懈蟹芯斜褉邪卸械薪懈褟",
				"target_language": "笑械谢械胁芯泄 褟蟹褘泻",
				"text_detector": "袛械褌械泻褌芯褉 褌械泻褋褌邪",
				"translator": "袩械褉械胁芯写褔懈泻",
				"unclip_ratio": "袧械芯斜褉械蟹邪薪薪芯械 褋芯芯褌薪芯褕械薪懈械"
			},
			"range": "袨斜褗械屑 锌械褉械胁芯写邪",
			"provider": "袩械褉械胁芯写褔懈泻",
			"translate_all": "袩械褉械胁械褋褌懈 胁褋械 懈蟹芯斜褉邪卸械薪懈褟",
			"translate_to_end": "袩械褉械胁芯写懈褌褜 褋褌褉邪薪懈褑褍 写芯 泻芯薪褑邪"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "袛芯斜邪胁懈褌褜 芯锌械褉邪褑懈懈 褋 谐芯褉褟褔懈屑懈 泻谢邪胁懈褕邪屑懈",
			"auto_adjust_option": "袗胁褌芯屑邪褌懈褔械褋泻邪褟 薪邪褋褌褉芯泄泻邪 锌邪褉邪屑械褌褉邪 褔褌械薪懈褟",
			"auto_page_turn": "袘械褋泻芯薪械褔薪邪褟 锌褉芯泻褉褍褌泻邪",
			"auto_show": "袗胁褌芯屑邪褌懈褔械褋泻懈 胁泻谢褞褔邪褌褜 褉械卸懈屑 褔褌械薪懈褟",
			"block_totally": "袚谢芯斜邪谢褜薪芯 蟹邪斜谢芯泻懈褉芯胁邪褌褜 泻芯屑懈泻褋褘",
			"colorize_tag": "笑胁械褌薪褘械 薪邪蟹胁邪薪懈褟",
			"cross_site_link": "袣褉芯褋褋-褋邪泄褌芯胁邪褟 褋褋褘谢泻邪",
			"detect_ad": "Detect advertise page",
			"expand_tag_list": "袪邪蟹胁械褉薪褍褌褜 褋锌懈褋芯泻 褌械谐芯胁",
			"float_tag_list": "袩谢邪胁邪褞褖懈泄 褋锌懈褋芯泻 褌械谐芯胁",
			"load_original_image": "袟邪谐褉褍卸邪褌褜 芯褉懈谐懈薪邪谢褜薪芯械 懈蟹芯斜褉邪卸械薪懈械",
			"lock_option": "袘谢芯泻懈褉芯胁泻邪 芯锌褑懈懈 褋邪泄褌邪",
			"open_link_new_page": "袨褌泻褉褘胁邪褌褜 褋褋褘谢泻懈 胁 薪芯胁芯泄 胁泻谢邪写泻械",
			"quick_favorite": "袘褘褋褌褉褘泄 褎邪胁芯褉懈褌",
			"quick_rating": "袘褘褋褌褉褘泄 褉械泄褌懈薪谐",
			"quick_tag_define": "袨锌褉械写械谢械薪懈械 褌械谐邪 斜褘褋褌褉芯谐芯 锌褉芯褋屑芯褌褉邪",
			"remember_current_site": "袟邪锌芯屑薪懈褌褜 褌械泻褍褖懈泄 褋邪泄褌",
			"tag_lint": "孝褝谐 袥懈薪褌"
		},
		"changed_load_failed": "小褌褉邪薪懈褑邪 懈蟹屑械薪懈谢邪褋褜, 薪械胁芯蟹屑芯卸薪芯 蟹邪谐褉褍蟹懈褌褜 泻芯屑懈泻褋",
		"ehentai": {
			"change_favorite_failed": "袧械 褍写邪谢芯褋褜 懈蟹屑械薪懈褌褜 懈蟹斜褉邪薪薪芯械",
			"change_favorite_success": "袠蟹斜褉邪薪薪芯械 褍褋锌械褕薪芯 懈蟹屑械薪械薪芯",
			"change_rating_failed": "袧械 褍写邪谢芯褋褜 懈蟹屑械薪懈褌褜 芯褑械薪泻褍",
			"change_rating_success": "校褋锌械褕薪芯 懈蟹屑械薪械薪 褉械泄褌懈薪谐",
			"fetch_favorite_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 懈薪褎芯褉屑邪褑懈褞 芯 懈蟹斜褉邪薪薪芯屑",
			"fetch_img_page_source_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 懈褋褏芯写薪褘泄 泻芯写 褋褌褉邪薪懈褑褘 褋 懈蟹芯斜褉邪卸械薪懈褟屑懈",
			"fetch_img_page_url_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 邪写褉械褋 褋褌褉邪薪懈褑褘 懈蟹芯斜褉邪卸械薪懈泄 懈蟹 写械褌邪谢械泄",
			"fetch_img_url_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 邪写褉械褋 懈蟹芯斜褉邪卸械薪懈褟",
			"hitomi_error": "袨褕懈斜泻邪 褋芯锌芯褋褌邪胁谢械薪懈褟 hitomi",
			"html_changed_link_failed": "小褌褉褍泻褌褍褉邪 褋褌褉邪薪懈褑褘 懈蟹屑械薪懈谢邪褋褜, 懈 褋胁褟蟹邪薪薪褘械 褎褍薪泻褑懈懈 胁薪械褕薪械谐芯 褋邪泄褌邪 薪械 褉邪斜芯褌邪褞褌 写芯谢卸薪褘屑 芯斜褉邪蟹芯屑",
			"ip_banned": "IP 邪写褉械褋 蟹邪斜邪薪械薪",
			"nhentai_error": "袨褕懈斜泻邪 褋芯锌芯褋褌邪胁谢械薪懈褟 nhentai",
			"nhentai_failed": "袨褕懈斜泻邪 褋芯锌芯褋褌芯胁谢械薪懈褟. 袩芯卸邪谢褍泄褋褌邪 锌械褉械蟹邪谐褉褍蟹懈褌械 褋褌褉邪薪懈褑褍 锌芯褋谢械 胁褏芯写邪 薪邪 {{nhentai}}"
		},
		"nhentai": {
			"fetch_next_page_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 褋谢械写褍褞褖褍褞 褋褌褉邪薪懈褑褍",
			"tag_blacklist_fetch_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 蟹邪斜谢芯泻懈褉芯胁邪薪薪褘械 褌械谐懈"
		},
		"show_settings_menu": "袩芯泻邪蟹邪褌褜 屑械薪褞 薪邪褋褌褉芯械泻",
		"simple": {
			"auto_read_mode_message": "\\"袗胁褌芯屑邪褌懈褔械褋泻懈 胁泻谢褞褔邪褌褜 褉械卸懈屑 褔褌械薪懈褟\\" 锌芯 褍屑芯谢褔邪薪懈褞",
			"no_img": "袧械 薪邪泄写械薪芯 锌芯写褏芯写褟褖懈褏 懈蟹芯斜褉邪卸械薪懈泄. 袧邪卸屑懈褌械 褌褍褌 褔褌芯 斜褘 胁褘泻谢褞褔懈褌褜 褉械卸懈屑 锌褉芯褋褌芯谐芯 褔褌械薪懈褟.",
			"simple_read_mode": "袙泻谢褞褔懈褌褜 锌褉芯褋褌芯泄 褉械卸懈屑 褔褌械薪懈褟"
		}
	},
	touch_area: {
		"menu": "袦械薪褞",
		"type": {
			"edge": "袚褉邪薪褜",
			"l": "L",
			"left_right": "袥械胁芯 袩褉邪胁芯",
			"up_down": "袙械褉褏 袧懈蟹"
		}
	},
	translation: {
		"status": {
			"after-translating": "袩芯褋褌芯斜褉邪斜芯褌泻邪 锌械褉械胁芯写邪",
			"cancelled": "袩械褉械胁芯写 芯褌屑械薪褢薪",
			"colorizing": "袪邪褋泻褉邪褕懈胁邪薪懈械",
			"default": "袧械懈蟹胁械褋褌薪褘泄 褋褌邪褌褍褋",
			"detection": "袪邪褋锌芯蟹薪邪胁邪薪懈械 褌械泻褋褌邪",
			"downloading": "袟邪谐褉褍蟹泻邪",
			"downscaling": "校屑械薪褜褕械薪懈械 屑邪褋褕褌邪斜邪",
			"error": "袨褕懈斜泻邪 锌械褉械胁芯写邪",
			"error-download": "袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈",
			"error-lang": "笑械谢械胁芯泄 褟蟹褘泻 薪械 锌芯写写械褉卸懈胁邪械褌褋褟 胁褘斜褉邪薪薪褘屑 锌械褉械胁芯写褔懈泻芯屑",
			"error-translating": "袨褕懈斜泻邪 锌械褉械胁芯写邪(锌褍褋褌芯泄 芯褌胁械褌)",
			"error-too-large": "袪邪蟹屑械褉 懈蟹芯斜褉邪卸械薪懈褟 褋谢懈褕泻芯屑 斜芯谢褜褕芯泄 (斜芯谢械械 8000x8000 锌懈泻褋械谢械泄)",
			"error-upload": "袨褕懈斜泻邪 芯褌锌褉邪胁泻懈",
			"error-disconnect": "袩芯褌械褉褟薪芯 褋芯械写懈薪械薪懈械 褋 褋械褉胁械褉芯屑",
			"error-with-id": "袨褕懈斜泻邪 胁芯 胁褉械屑褟 锌械褉械胁芯写邪",
			"finished": "袟邪胁械褉褕械薪懈械",
			"inpainting": "袧邪谢芯卸械薪懈械",
			"mask-generation": "袚械薪械褉邪褑懈褟 屑邪褋泻懈",
			"ocr": "袪邪褋锌芯蟹薪邪胁邪薪懈械 褌械泻褋褌邪",
			"pending": "袨卸懈写邪薪懈械",
			"pending-pos": "袨卸懈写邪薪懈械",
			"preparing": "袨卸懈写邪薪懈械 芯泻薪邪 斜械蟹写械泄褋褌胁懈褟",
			"rendering": "袨褌褉懈褋芯胁泻邪",
			"running_pre_translation_hooks": "袙褘锌芯谢薪械薪懈械 锌褉械写芯斜褉邪斜芯褌泻懈 锌械褉械胁芯写邪",
			"saved": "小芯褏褉邪薪械薪芯",
			"saving": "小芯褏褉邪薪械薪懈械",
			"skip-no-regions": "袧邪 懈蟹芯斜褉邪卸械薪懈懈 薪械 芯斜薪邪褉褍卸械薪芯 褌械泻褋褌芯胁褘褏 芯斜谢邪褋褌械泄.",
			"skip-no-text": "孝械泻褋褌 薪邪 懈蟹芯斜褉邪卸械薪懈懈 薪械 芯斜薪邪褉褍卸械薪",
			"textline_merge": "袨斜褜械写懈薪械薪懈械 褌械泻褋褌邪",
			"translating": "袩械褉械胁芯写懈褌褋褟",
			"upload": "袨褌锌褉邪胁泻邪",
			"upscaling": "校胁械谢懈褔械薪懈械 懈蟹芯斜褉邪卸械薪懈褟",
			"uploading": "袨褌锌褉邪胁泻邪"
		},
		"tip": {
			"check_img_status_failed": "袧械 褍写邪谢芯褋褜 锌褉芯胁械褉懈褌褜 褋褌邪褌褍褋 懈蟹芯斜褉邪卸械薪懈褟",
			"download_img_failed": "袧械 褍写邪谢芯褋褜 褋泻邪褔邪褌褜 懈蟹芯斜褉邪卸械薪懈械",
			"get_translator_list_error": "袩褉芯懈蟹芯褕谢邪 芯褕懈斜泻邪 胁芯 胁褉械屑褟 锌芯谢褍褔械薪懈褟 褋锌懈褋泻邪 写芯褋褌褍锌薪褘褏 锌械褉械胁芯写褔懈泻芯胁",
			"id_not_returned": "ID 薪械 胁械褉薪褍谢懈(",
			"img_downloading": "小泻邪褔邪褌褜",
			"img_not_fully_loaded": "袠蟹芯斜褉邪卸械薪懈械 胁褋褢 械褖褢 蟹邪谐褉褍卸邪械褌褋褟",
			"pending": "袨卸懈写械薪懈械, 锌芯蟹懈褑懈褟 胁 芯褔械褉械写懈 {{pos}}",
			"resize_img_failed": "袧械 褍写邪谢芯褋褜 懈蟹屑械薪懈褌褜 褉邪蟹屑械褉 懈蟹芯斜褉邪卸械薪懈褟",
			"translating": "袠蟹芯斜褉邪卸械薪懈械 锌械褉械胁芯写懈褌褋褟",
			"translation_completed": "袩械褉械胁芯写 蟹邪胁械褉褕褢薪",
			"upload": "袟邪谐褉褍蟹泻邪 懈蟹芯斜褉邪卸械薪懈褟",
			"upload_error": "袨褕懈斜泻邪 芯褌锌褉邪胁泻懈 懈蟹芯斜褉邪卸械薪懈褟",
			"upload_return_error": "袨褕懈斜泻邪 锌械褉械胁芯写邪 薪邪 褋械褉胁械褉械",
			"wait_translation": "袨卸懈写邪薪懈械 锌械褉械胁芯写邪"
		},
		"translator": {
			"baidu": "baidu",
			"deepl": "DeepL",
			"google": "Google",
			"gpt3.5": "GPT-3.5",
			"none": "校斜褉邪褌褜 褌械泻褋褌",
			"offline": "袨褎褎谢邪泄薪 锌械褉械胁芯写褔懈泻",
			"original": "袨褉懈谐懈薪邪谢",
			"papago": "Papago",
			"youdao": "youdao"
		}
	},
	upscale: {
		"module_download_complete": "袟邪谐褉褍蟹泻邪 屑芯写械谢懈 褍胁械谢懈褔械薪懈褟 懈蟹芯斜褉邪卸械薪懈泄 蟹邪胁械褉褕械薪邪",
		"module_download_failed": "小斜芯泄 蟹邪谐褉褍蟹泻懈 屑芯写械谢懈 褍胁械谢懈褔械薪懈褟 懈蟹芯斜褉邪卸械薪懈泄",
		"module_downloading": "袟邪谐褉褍蟹泻邪 屑芯写械谢懈 褍胁械谢懈褔械薪懈褟 懈蟹芯斜褉邪卸械薪懈泄...",
		"title": "校胁械谢懈褔械薪懈械 懈蟹芯斜褉邪卸械薪懈褟",
		"upscaled": "校胁械谢懈褔械薪薪褘泄",
		"upscaling": "校胁械谢懈褔懈胁邪械褌褋褟",
		"webgpu_tip": "袧械胁芯蟹屑芯卸薪芯 褍胁械谢懈褔懈褌褜 懈蟹芯斜褉邪卸械薪懈褟 褋 锌芯屑芯褖褜褞 WebGPU, 芯斜褉邪斜芯褌泻邪 斜褍写械褌 屑械写谢械薪薪械械"
	}
};
//#endregion
//#region locales/zh.json
var zh_default = {
	alert: {
		"comic_load_error": "婕敾鍔犺浇鍑洪敊",
		"download_failed": "涓嬭浇澶辫触",
		"fetch_comic_img_failed": "鑾峰彇婕敾鍥剧墖澶辫触",
		"img_load_failed": "鍥剧墖鍔犺浇澶辫触",
		"no_img_download": "娌℃湁鑳戒笅杞界殑鍥剧墖",
		"repeat_load": "鍔犺浇鍥剧墖涓紝璇风◢鍊?,
		"retry_get_img_url": "閲嶆柊鑾峰彇绗?{{i}} 椤靛浘鐗囩殑鍦板潃",
		"server_connect_failed": "鏃犳硶杩炴帴鍒版湇鍔″櫒"
	},
	button: {
		"auto_scroll": "鑷姩婊氬姩",
		"close_current_page_translation": "鍏抽棴褰撳墠椤电殑缈昏瘧",
		"download_completed": "涓嬭浇瀹屾垚",
		"download_completed_error": "涓嬭浇瀹屾垚锛屼絾鏈?{{errorNum}} 寮犲浘鐗囦笅杞藉け璐?,
		"downloading": "涓嬭浇涓?,
		"fullscreen": "鍏ㄥ睆",
		"fullscreen_exit": "閫€鍑哄叏灞?,
		"grid_mode": "缃戞牸妯″紡",
		"packaging": "鎵撳寘涓?,
		"page_fill": "椤甸潰濉厖",
		"page_mode_double": "鍙岄〉妯″紡",
		"page_mode_single": "鍗曢〉妯″紡",
		"scroll_mode": "鍗疯酱妯″紡",
		"translate_current_page": "缈昏瘧褰撳墠椤?,
		"zoom_in": "鏀惧ぇ",
		"zoom_out": "缂╁皬"
	},
	description: "涓烘极鐢荤珯澧炲姞鍙岄〉闃呰銆佺炕璇戠瓑浼樺寲浣撻獙鐨勫寮哄姛鑳姐€?,
	eh_tag_lint: {
		"combo": "瀛樺湪 [tag] 鏃讹紝涓€鑸篃瀛樺湪 [tag]",
		"conflict": "瀛樺湪 [tag] 鏃讹紝涓嶅簲璇ュ瓨鍦?[tag]",
		"correct_tag": "搴旇鏄纭殑鏍囩",
		"miss_female": "缂哄皯鐢锋€ф爣绛撅紝鍙兘闇€瑕?,
		"miss_parody": "缂哄皯鍘熶綔鏍囩锛屽彲鑳介渶瑕?,
		"possible_conflict": "瀛樺湪 [tag] 鏃讹紝涓€鑸笉搴旇瀛樺湪 [tag]",
		"prerequisite": "[tag] 鐨勫墠缃爣绛?[tag] 涓嶅瓨鍦?
	},
	end_page: {
		"next_button": "涓嬩竴璇?,
		"prev_button": "涓婁竴璇?,
		"tip": {
			"end_jump": "宸插埌缁撳熬锛岀户缁悜涓嬬炕椤靛皢璺宠嚦涓嬩竴璇?,
			"exit": "宸插埌缁撳熬锛岀户缁炕椤靛皢閫€鍑?,
			"start_jump": "宸插埌寮€澶达紝缁х画鍚戜笂缈婚〉灏嗚烦鑷充笂涓€璇?
		}
	},
	hotkeys: {
		"enter_read_mode": "杩涘叆闃呰妯″紡",
		"float_tag_list": "鎮诞鏍囩鍒楄〃",
		"jump_next": "璺宠嚦涓嬩竴璇?,
		"jump_prev": "璺宠嚦涓婁竴璇?,
		"jump_to_end": "璺宠嚦灏鹃〉",
		"jump_to_home": "璺宠嚦棣栭〉",
		"multi_select_load": "澶氶€夊姞杞?,
		"page_down": "鍚戜笅缈婚〉",
		"page_up": "鍚戜笂缈婚〉",
		"reload_current_error_img": "閲嶈浇褰撳墠閿欒鍥剧墖",
		"repeat_tip": "姝ゅ揩鎹烽敭宸茶缁戝畾鑷炽€寋{hotkey}}銆?,
		"scroll_down": "鍚戜笅婊氬姩",
		"scroll_left": "鍚戝乏婊氬姩",
		"scroll_right": "鍚戝彸婊氬姩",
		"scroll_up": "鍚戜笂婊氬姩",
		"switch_auto_enlarge": "鍒囨崲鍥剧墖鑷姩鏀惧ぇ閫夐」",
		"switch_dir": "鍒囨崲闃呰鏂瑰悜",
		"switch_grid_mode": "鍒囨崲缃戞牸妯″紡",
		"switch_page_fill": "鍒囨崲椤甸潰濉厖",
		"switch_scroll_mode": "鍒囨崲鍗疯酱妯″紡",
		"switch_single_double_page_mode": "鍒囨崲鍗曞弻椤垫ā寮?
	},
	img_status: {
		"error": "鍔犺浇鍑洪敊",
		"loading": "姝ｅ湪鍔犺浇",
		"wait": "绛夊緟鍔犺浇"
	},
	other: {
		"auto": "鑷姩",
		"custom": "鑷畾涔?,
		"disable": "绂佺敤",
		"distance": "璺濈",
		"download": "涓嬭浇",
		"enabled": "鍚敤",
		"enter_comic_read_mode": "杩涘叆婕敾闃呰妯″紡",
		"exit": "閫€鍑?,
		"fab_hidden": "闅愯棌鎮诞鎸夐挳",
		"fab_show": "鏄剧ず鎮诞鎸夐挳",
		"fill_page": "濉厖椤?,
		"hotkeys": "蹇嵎閿?,
		"img_loading": "鍥剧墖鍔犺浇涓?,
		"interval": "闂撮殧",
		"loading_img": "鍔犺浇鍥剧墖涓?,
		"multi_select_mode": "澶氶€夋ā寮?,
		"none": "鏃?,
		"or": "鎴?,
		"other": "鍏朵粬",
		"page_range": "璇疯緭鍏ラ〉鐮佽寖鍥达細\\n锛堜緥濡傦細1, 3-5, 9-)",
		"read_mode": "闃呰妯″紡",
		"selected": "宸查€変腑",
		"setting": "璁剧疆",
		"clear": "娓呯┖"
	},
	pwa: {
		"alert": {
			"img_data_error": "鍥剧墖鏁版嵁閿欒",
			"img_not_found": "鎵句笉鍒板浘鐗?,
			"img_not_found_files": "璇烽€夋嫨鍥剧墖鏂囦欢鎴栧惈鏈夊浘鐗囨枃浠剁殑鍘嬬缉鍖?,
			"img_not_found_folder": "鏂囦欢澶逛笅娌℃湁鍥剧墖鏂囦欢鎴栧惈鏈夊浘鐗囨枃浠剁殑鍘嬬缉鍖?,
			"not_valid_url": "涓嶆槸鏈夋晥鐨?URL",
			"parse_error": "瑙ｆ瀽鍑洪敊",
			"password_error": "瀵嗙爜閿欒",
			"repeat_load": "姝ｅ湪鍔犺浇鍏朵粬鏂囦欢涓€︹€?,
			"userscript_not_installed": "鏈畨瑁?ComicRead 鑴氭湰"
		},
		"button": {
			"enter_url": "杈撳叆 URL",
			"install": "瀹夎",
			"no_more_prompt": "涓嶅啀鎻愮ず",
			"resume_read": "鎭㈠闃呰",
			"select_files": "閫夋嫨鏂囦欢",
			"select_folder": "閫夋嫨鏂囦欢澶?
		},
		"install_md": "### 姣忔閮借鎵撳紑杩欎釜缃戦〉寰堥夯鐑︼紵\\n濡傛灉浣犲笇鏈沑\n1. 鑳芥湁鐙珛鐨勭獥鍙ｏ紝鍍忔槸鍦ㄤ娇鐢ㄦ湰鍦拌蒋浠朵竴鏍穃\n1. 鍔犲叆鏈湴鍘嬬缉鏂囦欢鐨勬墦寮€鏂瑰紡涔嬩腑锛屾柟渚跨洿鎺ユ墦寮€\\n1. 绂荤嚎浣跨敤~~锛堜富瑕佹槸鎷呭績鍥藉唴缃戠粶鎶介鏃犳硶璁块棶杩欎釜缃戦〉~~\\n### 娆㈣繋灏嗘湰椤甸潰浣滀负 PWA 搴旂敤瀹夎鍒扮數鑴戜笂馃槂馃憤",
		"message": {
			"enter_password": "璇疯緭鍏ュ瘑鐮?,
			"parsing": "瑙ｆ瀽涓?
		},
		"tip_enter_url": "璇疯緭鍏ュ帇缂╁寘 URL",
		"tip_md": "# ComicRead PWA\\n浣跨敤 [ComicRead](https://github.com/hymbz/ComicReadScript) 鐨勯槄璇绘ā寮忛槄璇?*鏈湴**婕敾\\n---\\n### 灏嗗浘鐗囨枃浠躲€佹枃浠跺す銆佸帇缂╁寘鐩存帴鎷栧叆鍗冲彲寮€濮嬮槄璇籠\n*涔熷彲浠ラ€夋嫨**鐩存帴绮樿创**鎴?*杈撳叆**鍘嬬缉鍖?URL 涓嬭浇闃呰*"
	},
	setting: {
		"hotkeys": {
			"add": "娣诲姞鏂板揩鎹烽敭",
			"restore": "鎭㈠榛樿蹇嵎閿?
		},
		"language": "璇█",
		"option": {
			"abreast_duplicate": "姣忓垪閲嶅姣斾緥",
			"abreast_mode": "骞舵帓鍗疯酱妯″紡",
			"adjust_to_width": "鑷€傚簲瀹藉害",
			"align_edge": "婊氬姩缈婚〉鏃跺榻愯竟缂?,
			"always_load_all_img": "濮嬬粓鍔犺浇鎵€鏈夊浘鐗?,
			"autoFullscreen": "鑷姩鍏ㄥ睆",
			"autoHiddenMouse": "鑷姩闅愯棌榧犳爣",
			"auto_scale": "鑷姩缂╂斁",
			"auto_scroll_trigger_end": "鍦ㄧ粨鏉熼〉涓婄户缁粴鍔?,
			"auto_switch_page_mode": "鎸夊睆骞曟瘮渚嬪垏鎹㈠崟鍙岄〉",
			"background_color": "鑳屾櫙棰滆壊",
			"click_page_turn_area": "鐐瑰嚮鍖哄煙",
			"click_page_turn_enabled": "鐐瑰嚮缈婚〉",
			"click_page_turn_swap_area": "宸﹀彸鐐瑰嚮鍖哄煙浜ゆ崲",
			"dark_mode": "榛戞殫妯″紡",
			"dark_mode_auto": "榛戞殫妯″紡璺熼殢绯荤粺",
			"dir_ltr": "浠庡乏鍒板彸锛堢編婕級",
			"dir_rtl": "浠庡彸鍒板乏锛堟棩婕級",
			"disable_auto_enlarge": "绂佹鍥剧墖鑷姩鏀惧ぇ",
			"first_page_fill": "榛樿鍚敤棣栭〉濉厖",
			"full_width": "瑙嗙獥瀹藉害",
			"img_recognition": "鍥惧儚璇嗗埆",
			"img_recognition_background": "璇嗗埆鑳屾櫙鑹?,
			"img_recognition_pageFill": "鑷姩璋冩暣椤甸潰濉厖",
			"img_recognition_warn": "鉂?褰撳墠娴忚鍣ㄤ笉鏀寔 Web Worker锛屽紑鍚鍔熻兘鍙兘瀵艰嚧椤甸潰鍗￠】锛屽缓璁崌绾ф垨鏇存崲娴忚鍣ㄣ€?,
			"img_recognition_warn_2": "鉂?褰撳墠缃戠珯涓嶆敮鎸?Web Worker锛屽紑鍚鍔熻兘鍙兘瀵艰嚧椤甸潰鍗￠】銆?,
			"paragraph_appearance": "澶栬",
			"paragraph_dir": "闃呰鏂瑰悜",
			"paragraph_display": "鏄剧ず",
			"paragraph_scrollbar": "婊氬姩鏉?,
			"paragraph_translation": "缈昏瘧",
			"preload_page_num": "棰勫姞杞介〉鏁?,
			"scroll_end": "缈婚〉鑷冲敖澶村悗",
			"scroll_end_auto": "浼樺厛璺宠嚦涓?涓嬩竴璇濓紝鍚﹀垯閫€鍑?,
			"scroll_mode_img_scale": "鍗疯酱鍥剧墖缂╂斁",
			"scroll_mode_img_spacing": "鍗疯酱鍥剧墖闂磋窛",
			"scrollbar_auto_hidden": "鑷姩闅愯棌",
			"scrollbar_easy_scroll": "蹇嵎婊氬姩",
			"scrollbar_position": "浣嶇疆",
			"scrollbar_position_bottom": "搴曢儴",
			"scrollbar_position_hidden": "闅愯棌",
			"scrollbar_position_right": "鍙充晶",
			"scrollbar_position_top": "椤堕儴",
			"scrollbar_show_img_status": "鏄剧ず鍥剧墖鍔犺浇鐘舵€?,
			"show_clickable_area": "鏄剧ず鐐瑰嚮鍖哄煙",
			"show_comments": "鍦ㄧ粨鏉熼〉鏄剧ず璇勮",
			"shrink_menu": "缂╁皬鑿滃崟鍖哄煙",
			"swap_page_turn_key": "宸﹀彸缈婚〉閿氦鎹?,
			"zoom": "鍥剧墖缂╂斁"
		},
		"sync_options_other_site": "鍚屾闃呰閰嶇疆鑷冲叾浠栫珯鐐?,
		"translation": {
			"cotrans_tip": "<p>灏嗕娇鐢?<a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> 鎻愪緵鐨勬帴鍙ｇ炕璇戝浘鐗囷紝璇ユ湇鍔″櫒鐢卞叾缁存姢鑰呯敤鐖卞彂鐢佃嚜璐圭淮鎶?/p>\\n<p>澶氫汉鍚屾椂浣跨敤鏃堕渶瑕佹帓闃熺瓑寰咃紝绛夊緟闃熷垪杈惧埌涓婇檺鍚庡啀涓婁紶鏂板浘鐗囦細鎶ラ敊锛岄渶瑕佽繃娈垫椂闂村啀璇?/p>\\n<p>鎵€浠ヨ繕璇?<b>娉ㄦ剰鐢ㄩ噺</b></p>\\n<p>鏇存帹鑽愯嚜宸辨湰鍦伴儴缃?Manga Image Translator锛屾棦涓嶅崰鐢ㄦ湇鍔″櫒璧勬簮涔熶笉闇€瑕佹帓闃?/p>",
			"options": {
				"box_threshold": "鏂囨湰妗嗛槇鍊?,
				"detection_resolution": "鏂囨湰鎵弿娓呮櫚搴?,
				"direction": "娓叉煋瀛椾綋鏂瑰悜",
				"direction_auto": "鍘熸枃涓€鑷?,
				"direction_horizontal": "浠呴檺姘村钩",
				"direction_vertical": "浠呴檺鍨傜洿",
				"force_retry": "蹇界暐缂撳瓨寮哄埗閲嶈瘯",
				"inpainter": "鍥惧儚淇鍣?,
				"inpainting_size": "鍥惧儚淇灏哄",
				"local_url": "鑷畾涔夋湇鍔″櫒 URL",
				"mask_dilation_offset": "鎺╃爜鑶ㄨ儉鍋忕Щ閲?,
				"only_download_translated": "鍙笅杞界炕璇戝畬鐨勫浘鐗?,
				"target_language": "鐩爣璇█",
				"text_detector": "鏂囨湰鎵弿鍣?,
				"translator": "缈昏瘧鏈嶅姟",
				"unclip_ratio": "鏂囨湰妗嗚啫鑳€姣旂巼"
			},
			"range": "缈昏瘧鑼冨洿",
			"provider": "缈昏瘧鍣?,
			"translate_all": "缈昏瘧鍏ㄩ儴鍥剧墖",
			"translate_to_end": "缈昏瘧褰撳墠椤佃嚦缁撳熬"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "澧炲姞蹇嵎閿搷浣?,
			"auto_adjust_option": "鑷姩璋冩暣闃呰閰嶇疆",
			"auto_page_turn": "鏃犻檺婊氬姩",
			"auto_show": "鑷姩杩涘叆闃呰妯″紡",
			"block_totally": "褰诲簳灞忚斀婕敾",
			"colorize_tag": "鏍囩鏌撹壊",
			"cross_site_link": "鍏宠仈澶栫珯",
			"detect_ad": "璇嗗埆骞垮憡椤?,
			"expand_tag_list": "灞曞紑鏍囩鍒楄〃",
			"float_tag_list": "鎮诞鏍囩鍒楄〃",
			"load_original_image": "鍔犺浇鍘熷浘",
			"lock_option": "閿佸畾绔欑偣閰嶇疆",
			"open_link_new_page": "鍦ㄦ柊椤甸潰涓墦寮€閾炬帴",
			"quick_favorite": "蹇嵎鏀惰棌",
			"quick_rating": "蹇嵎璇勫垎",
			"quick_tag_define": "蹇嵎鏌ョ湅鏍囩瀹氫箟",
			"remember_current_site": "璁颁綇褰撳墠绔欑偣",
			"tag_lint": "鏍囩妫€鏌?
		},
		"changed_load_failed": "缃戠珯鍙戠敓鍙樺寲锛屾棤娉曞姞杞芥极鐢?,
		"ehentai": {
			"change_favorite_failed": "鏀惰棌澶逛慨鏀瑰け璐?,
			"change_favorite_success": "鏀惰棌澶逛慨鏀规垚鍔?,
			"change_rating_failed": "璇勫垎淇敼澶辫触",
			"change_rating_success": "璇勫垎淇敼鎴愬姛",
			"fetch_favorite_failed": "鑾峰彇鏀惰棌澶逛俊鎭け璐?,
			"fetch_img_page_source_failed": "鑾峰彇鍥剧墖椤垫簮鐮佸け璐?,
			"fetch_img_page_url_failed": "浠庤鎯呴〉鑾峰彇鍥剧墖椤靛湴鍧€澶辫触",
			"fetch_img_url_failed": "浠庡浘鐗囬〉鑾峰彇鍥剧墖鍦板潃澶辫触",
			"hitomi_error": "hitomi 鍖归厤鍑洪敊",
			"html_changed_link_failed": "椤甸潰缁撴瀯鍙戠敓鏀瑰彉锛屽叧鑱斿绔欏姛鑳芥棤娉曟甯哥敓鏁?,
			"ip_banned": "IP鍦板潃琚",
			"nhentai_error": "nhentai 鍖归厤鍑洪敊",
			"nhentai_failed": "鍖归厤澶辫触锛岃鍦ㄧ‘璁ょ櫥褰?{{nhentai}} 鍚庡埛鏂?
		},
		"nhentai": {
			"fetch_next_page_failed": "鑾峰彇涓嬩竴椤垫极鐢绘暟鎹け璐?,
			"tag_blacklist_fetch_failed": "鏍囩榛戝悕鍗曡幏鍙栧け璐?
		},
		"show_settings_menu": "鏄剧ず璁剧疆鑿滃崟",
		"simple": {
			"auto_read_mode_message": "宸查粯璁ゅ紑鍚€岃嚜鍔ㄨ繘鍏ラ槄璇绘ā寮忋€?,
			"no_img": "鏈壘鍒板悎閫傜殑婕敾鍥剧墖锛孿\n濡傛湁闇€瑕佸彲鐐规鍏抽棴绠€鏄撻槄璇绘ā寮?,
			"simple_read_mode": "浣跨敤绠€鏄撻槄璇绘ā寮?
		}
	},
	touch_area: {
		"menu": "鑿滃崟",
		"type": {
			"edge": "杈圭紭",
			"l": "L",
			"left_right": "宸﹀彸",
			"up_down": "涓婁笅"
		}
	},
	translation: {
		"status": {
			"after-translating": "缈昏瘧鍚庡鐞嗕腑",
			"cancelled": "缈昏瘧宸插彇娑?,
			"colorizing": "姝ｅ湪涓婅壊",
			"default": "鏈煡鐘舵€?,
			"detection": "姝ｅ湪妫€娴嬫枃鏈?,
			"downloading": "姝ｅ湪涓嬭浇",
			"downscaling": "姝ｅ湪缂╁皬鍥剧墖",
			"error": "缈昏瘧鍑洪敊",
			"error-download": "涓嬭浇鍑洪敊",
			"error-lang": "浣犻€夋嫨鐨勭炕璇戞湇鍔′笉鏀寔浣犻€夋嫨鐨勮瑷€",
			"error-translating": "缈昏瘧鏈嶅姟娌℃湁杩斿洖浠讳綍鏂囨湰",
			"error-too-large": "鍥剧墖灏哄杩囧ぇ锛堣秴杩?8000x8000 鍍忕礌锛?,
			"error-upload": "涓婁紶鍑洪敊",
			"error-disconnect": "涓庢湇鍔″櫒鏂紑杩炴帴",
			"error-with-id": "缈昏瘧鍑洪敊",
			"finished": "姝ｅ湪鏁寸悊缁撴灉",
			"inpainting": "姝ｅ湪淇ˉ鍥剧墖",
			"mask-generation": "姝ｅ湪鐢熸垚鏂囨湰鎺╃爜",
			"ocr": "姝ｅ湪璇嗗埆鏂囨湰",
			"pending": "姝ｅ湪绛夊緟",
			"pending-pos": "姝ｅ湪绛夊緟",
			"preparing": "绛夊緟绌洪棽绐楀彛",
			"rendering": "姝ｅ湪娓叉煋",
			"running_pre_translation_hooks": "姝ｅ湪鎵ц缈昏瘧鍓嶅鐞?,
			"saved": "淇濆瓨缁撴灉",
			"saving": "姝ｅ湪淇濆瓨",
			"skip-no-regions": "鍥剧墖涓病鏈夋娴嬪埌鏂囨湰鍖哄煙",
			"skip-no-text": "鍥剧墖涓病鏈夋娴嬪埌鏂囨湰",
			"textline_merge": "姝ｅ湪鏁村悎鏂囨湰",
			"translating": "姝ｅ湪缈昏瘧鏂囨湰",
			"upload": "姝ｅ湪涓婁紶",
			"upscaling": "姝ｅ湪鏀惧ぇ鍥剧墖",
			"uploading": "姝ｅ湪涓婁紶"
		},
		"tip": {
			"check_img_status_failed": "妫€鏌ュ浘鐗囩姸鎬佸け璐?,
			"download_img_failed": "涓嬭浇鍥剧墖澶辫触",
			"get_translator_list_error": "鑾峰彇鍙敤缈昏瘧鏈嶅姟鍒楄〃鏃跺嚭閿?,
			"id_not_returned": "鏈繑鍥?id",
			"img_downloading": "涓嬭浇鍥剧墖涓?,
			"img_not_fully_loaded": "鍥剧墖鏈姞杞藉畬姣?,
			"pending": "姝ｅ湪绛夊緟锛屽垪闃熻繕鏈?{{pos}} 寮犲浘鐗?,
			"resize_img_failed": "缂╂斁鍥剧墖澶辫触",
			"translating": "缈昏瘧鍥剧墖涓?,
			"translation_completed": "缈昏瘧瀹屾垚",
			"upload": "涓婁紶鍥剧墖涓?,
			"upload_error": "涓婁紶鍥剧墖鍑洪敊",
			"upload_return_error": "鏈嶅姟鍣ㄧ炕璇戝嚭閿?,
			"wait_translation": "绛夊緟缈昏瘧"
		},
		"translator": {
			"baidu": "鐧惧害",
			"deepl": "DeepL",
			"google": "璋锋瓕",
			"gpt3.5": "GPT-3.5",
			"none": "鍒犻櫎鏂囨湰",
			"offline": "绂荤嚎妯″瀷",
			"original": "鍘熸枃",
			"papago": "Papago",
			"youdao": "鏈夐亾"
		}
	},
	upscale: {
		"module_download_complete": "鍥剧墖鏀惧ぇ妯″瀷涓嬭浇瀹屾垚",
		"module_download_failed": "鍥剧墖鏀惧ぇ妯″瀷涓嬭浇澶辫触",
		"module_downloading": "鍥剧墖鏀惧ぇ妯″瀷涓嬭浇涓?..",
		"title": "鏃犳崯鏀惧ぇ鍥剧墖",
		"upscaled": "宸叉斁澶?,
		"upscaling": "鏀惧ぇ涓?,
		"webgpu_tip": "鏃犳硶浣跨敤 WebGPU 鏀惧ぇ鍥剧墖锛屽鐞嗛€熷害灏嗗彉鎱?
	}
};
//#endregion
//#region node_modules/.pnpm/@solid-primitives+scheduled@1.5.2_solid-js@1.9.10/node_modules/@solid-primitives/scheduled/dist/index.js
/**
* Creates a callback that is debounced and cancellable. The debounced callback is called on **trailing** edge.
*
* The timeout will be automatically cleared on root dispose.
*
* @param callback The callback to debounce
* @param wait The duration to debounce in milliseconds
* @returns The debounced function
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#debounce
*
* @example
* \`\`\`ts
* const fn = debounce((message: string) => console.log(message), 250);
* fn('Hello!');
* fn.clear() // clears a timeout in progress
* \`\`\`
*/
const debounce$1 = (callback, wait) => {
	if (solid_js_web.isServer) return Object.assign(() => void 0, { clear: () => void 0 });
	let timeoutId;
	const clear = () => clearTimeout(timeoutId);
	if (solid_js.getOwner()) solid_js.onCleanup(clear);
	const debounced = (...args) => {
		if (timeoutId !== void 0) clear();
		timeoutId = setTimeout(() => callback(...args), wait);
	};
	return Object.assign(debounced, { clear });
};
/**
* Creates a callback that is throttled and cancellable. The throttled callback is called on **trailing** edge.
*
* The timeout will be automatically cleared on root dispose.
*
* @param callback The callback to throttle
* @param wait The duration to throttle
* @returns The throttled callback trigger
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#throttle
*
* @example
* \`\`\`ts
* const trigger = throttle((val: string) => console.log(val), 250);
* trigger('my-new-value');
* trigger.clear() // clears a timeout in progress
* \`\`\`
*/
const throttle$1 = (callback, wait) => {
	if (solid_js_web.isServer) return Object.assign(() => void 0, { clear: () => void 0 });
	let isThrottled = false, timeoutId, lastArgs;
	const throttled = (...args) => {
		lastArgs = args;
		if (isThrottled) return;
		isThrottled = true;
		timeoutId = setTimeout(() => {
			callback(...lastArgs);
			isThrottled = false;
		}, wait);
	};
	const clear = () => {
		clearTimeout(timeoutId);
		isThrottled = false;
	};
	if (solid_js.getOwner()) solid_js.onCleanup(clear);
	return Object.assign(throttled, { clear });
};
/**
* Creates a scheduled and cancellable callback that will be called on the **leading** edge for the first call, and **trailing** edge for other calls.
*
* The timeout will be automatically cleared on root dispose.
*
* @param schedule {@link debounce} or {@link throttle}
* @param callback The callback to debounce/throttle
* @param wait timeout duration
* @returns The scheduled callback trigger
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#leadingAndTrailing
*
* @example
* \`\`\`ts
* const trigger = leadingAndTrailing(throttle, (val: string) => console.log(val), 250);
* trigger('my-new-value');
* trigger.clear() // clears a timeout in progress
* \`\`\`
*/
function leadingAndTrailing(schedule, callback, wait) {
	if (solid_js_web.isServer) {
		let called = false;
		const scheduled = (...args) => {
			if (called) return;
			called = true;
			callback(...args);
		};
		return Object.assign(scheduled, { clear: () => void 0 });
	}
	let State;
	(function(State) {
		State[State["Ready"] = 0] = "Ready";
		State[State["Leading"] = 1] = "Leading";
		State[State["Trailing"] = 2] = "Trailing";
	})(State || (State = {}));
	let state = State.Ready;
	const scheduled = schedule((args) => {
		state === State.Trailing && callback(...args);
		state = State.Ready;
	}, wait);
	const fn = (...args) => {
		if (state !== State.Trailing) {
			if (state === State.Ready) callback(...args);
			state += 1;
		}
		scheduled(args);
	};
	const clear = () => {
		state = State.Ready;
		scheduled.clear();
	};
	if (solid_js.getOwner()) solid_js.onCleanup(clear);
	return Object.assign(fn, { clear });
}
/**
* Creates a signal used for scheduling execution of solid computations by tracking.
*
* @param schedule Schedule the invalidate function (can be {@link debounce} or {@link throttle})
* @returns A function used to track the signal. It returns \`true\` if the signal is dirty *(callback should be called)* and \`false\` otherwise.
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#createScheduled
*
* @example
* \`\`\`ts
* const debounced = createScheduled(fn => debounce(fn, 250));
*
* createEffect(() => {
*   // track source signal
*   const value = count();
*   // track the debounced signal and check if it's dirty
*   if (debounced()) {
*     console.log('count', value);
*   }
* });
* \`\`\`
*/
function createScheduled(schedule) {
	let listeners = 0;
	let isDirty = false;
	const [track, dirty] = solid_js.createSignal(void 0, { equals: false });
	const call = schedule(() => {
		isDirty = true;
		dirty();
	});
	return () => {
		if (!isDirty) call(), track();
		if (isDirty) {
			isDirty = !!listeners;
			return true;
		}
		if (solid_js.getListener()) {
			listeners++;
			solid_js.onCleanup(() => listeners--);
		}
		return false;
	};
}
//#endregion
//#region node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
	for (key of iter.keys()) if (dequal(key, tar)) return key;
}
function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;
	if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();
		if (ctor === Array) {
			if ((len = foo.length) === bar.length) while (len-- && dequal(foo[len], bar[len]));
			return len === -1;
		}
		if (ctor === Set) {
			if (foo.size !== bar.size) return false;
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === "object") {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}
		if (ctor === Map) {
			if (foo.size !== bar.size) return false;
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === "object") {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) return false;
			}
			return true;
		}
		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len = foo.byteLength) === bar.byteLength) while (len-- && foo.getInt8(len) === bar.getInt8(len));
			return len === -1;
		}
		if (ArrayBuffer.isView(foo)) {
			if ((len = foo.byteLength) === bar.byteLength) while (len-- && foo[len] === bar[len]);
			return len === -1;
		}
		if (!ctor || typeof foo === "object") {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}
	return foo !== foo && bar !== bar;
}
//#endregion
//#region src/helper/other.ts
/** 鍥剧墖鏂囦欢鎵╁睍鍚嶇缉鍐?*/
const fileType = {
	j: "jpg",
	p: "png",
	g: "gif",
	w: "webp",
	b: "bmp"
};
const throttle = (fn, wait = 100) => leadingAndTrailing(throttle$1, fn, wait);
const debounce = (fn, wait = 100) => debounce$1(fn, wait);
const sleep = (ms) => new Promise((resolve) => {
	setTimeout(resolve, ms);
});
const clamp = (min, val, max) => Math.max(Math.min(max, val), min);
const inRange = (min, val, max) => val >= min && val <= max;
const getFileName = (url) => /.+\\/([^?]+)/.exec(url)?.[1];
const isString = (val) => typeof val === "string";
const isNumber = (val) => typeof val === "number";
const isArray = (val) => Array.isArray(val);
/** 鍒ゆ柇涓や釜鏁版槸鍚﹀湪鎸囧畾璇樊鑼冨洿鍐呯浉绛?*/
const approx = (val, target, range = 1) => Math.abs(target - val) <= range;
/** 鍒涘缓涓€涓彧浼氭墽琛屼竴娆＄殑鍑芥暟 */
const onec = (fn) => {
	let hasRun = false;
	return () => {
		if (hasRun) return;
		hasRun = true;
		fn();
	};
};
function range(a, b, c) {
	switch (typeof b) {
		case "undefined": return [...Array.from({ length: a }).keys()];
		case "number": {
			const list = [];
			for (let i = a; i < b; i++) list.push(c ? c(i) : i);
			return list;
		}
		case "function": return Array.from({ length: a }, (_, i) => b(i));
		case "string": return Array.from({ length: a }, () => b);
	}
}
/** 鍒ゆ柇鑺傜偣鏄惁涓哄厓绱犺妭鐐?*/
const isHTMLElement = (node) => node.nodeType === Node.ELEMENT_NODE;
/** 鍒ゆ柇鑺傜偣鏄惁涓哄浘鐗囧厓绱犺妭鐐?*/
const isImageElement = (node) => node.nodeName === "IMG";
/**
* 瀵?document.querySelector 鐨勫皝瑁?* 灏嗛粯璁よ繑鍥炵被鍨嬫敼涓?HTMLElement
*/
const querySelector = (selector) => document.querySelector(selector);
/**
* 瀵?document.querySelector 鐨勫皝瑁?* 灏嗛粯璁よ繑鍥炵被鍨嬫敼涓?HTMLElement
*/
const querySelectorAll = (selector) => [...document.querySelectorAll(selector)];
/** 杩斿洖 Dom 鐨勭偣鍑诲嚱鏁?*/
const querySelectorClick = (selector, textContent) => {
	let getDom;
	if (typeof selector === "function") getDom = selector;
	else if (textContent) getDom = () => querySelectorAll(selector).find((e) => e.textContent?.includes(textContent));
	else getDom = () => querySelector(selector);
	if (getDom()) return () => getDom()?.click();
};
/** 鎵惧嚭鏁扮粍涓嚭鐜版渶澶氭鐨勫厓绱?*/
const getMostItem = (list) => {
	const counts = /* @__PURE__ */ new Map();
	for (const val of list) counts.set(val, (counts.get(val) ?? 0) + 1);
	return [...counts.entries()].reduce((maxItem, item) => maxItem[1] > item[1] ? maxItem : item)[0];
};
/** 鍒ゆ柇瀛楃涓叉槸鍚︿负 URL */
const isUrl = (text) => {
	try {
		return Boolean(new URL(text));
	} catch {
		return false;
	}
};
/** 灏?blob 鏁版嵁浣滀负鏂囦欢淇濆瓨鑷虫湰鍦?*/
const saveAs = (blob, name = "download") => {
	const a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
	a.download = name;
	a.rel = "noopener";
	a.href = URL.createObjectURL(blob);
	setTimeout(() => a.dispatchEvent(new MouseEvent("click")));
};
/** 婊氬姩椤甸潰鍒版寚瀹氬厓绱犵殑鎵€鍦ㄤ綅缃?*/
const scrollIntoView = (selector, behavior = "instant") => querySelector(selector)?.scrollIntoView({ behavior });
/** 纭繚鍑芥暟鍦ㄥ悓涓€鏃堕棿涓嬪彧鏈変竴涓湪杩愯 */
const singleThreaded = (callback, initState) => {
	const state = {
		running: false,
		argList: [],
		continueRun: (...args) => state.argList.length > 0 || state.argList.push(args),
		...initState
	};
	const work = async () => {
		if (state.argList.length === 0) return;
		const args = state.argList.shift();
		try {
			state.running = true;
			await callback(state, ...args);
		} catch (error) {
			await sleep(100);
			if (state.argList.length === 0) throw error;
		} finally {
			if (state.abandon) state.argList.length = 0;
			if (state.argList.length > 0) setTimeout(work, state.timeout);
			else state.running = false;
		}
	};
	return (...args) => {
		state.argList.push(args);
		if (!state.running) return work();
	};
};
/**
* 闄愬埗 Promise 骞跺彂
* @param fnList 浠诲姟鍑芥暟鍒楄〃
* @param callBack 鎴愬姛鎵ц涓€涓?Promise 鍚庤皟鐢紝涓昏鐢ㄤ簬鏄剧ず杩涘害
* @param limit 闄愬埗鏁?* @returns 鎵€鏈?Promise 鐨勮繑鍥炲€?*/
const plimit = async (fnList, callBack = void 0, limit = 10) => {
	let doneNum = 0;
	const totalNum = fnList.length;
	const resList = [];
	const execPool = /* @__PURE__ */ new Set();
	const taskList = fnList.map((fn, i) => {
		let p;
		return () => {
			p = (async () => {
				resList[i] = await fn();
				doneNum += 1;
				execPool.delete(p);
				callBack?.(doneNum, totalNum, resList, i);
			})();
			execPool.add(p);
		};
	});
	while (doneNum !== totalNum) {
		while (taskList.length > 0 && execPool.size < limit) taskList.shift()();
		await Promise.race(execPool);
	}
	return resList;
};
/** Promise 骞跺彂闃熷垪 */
var PQueue = class {
	wait = /* @__PURE__ */ new Set();
	running = /* @__PURE__ */ new Set();
	done = /* @__PURE__ */ new Set();
	handleTask;
	concurrency;
	constructor(handleTask, concurrency = 1) {
		this.handleTask = handleTask;
		this.concurrency = concurrency;
	}
	has = (item) => this.running.has(item) || this.done.has(item) || this.wait.has(item);
	async processQueue() {
		if (this.running.size >= this.concurrency || this.wait.size === 0) return;
		const [item] = this.wait;
		if (item === void 0) return;
		this.wait.delete(item);
		if (!this.running.has(item)) try {
			this.running.add(item);
			await this.handleTask(item);
			this.done.add(item);
		} catch (error) {
			console.error(error);
		} finally {
			this.running.delete(item);
		}
		return this.processQueue();
	}
	add(item) {
		if (this.has(item)) return;
		this.wait.add(item);
		this.processQueue();
	}
	set(...items) {
		this.wait.clear();
		this.wait = new Set(items.filter((item) => !this.has(item)));
		this.processQueue();
	}
	clear() {
		this.wait.clear();
		this.done.clear();
	}
};
/**
* 鍒ゆ柇浣跨敤鍙傛暟棰滆壊浣滀负榛樿鍊兼椂鏄惁闇€瑕佸垏鎹负榛戞殫妯″紡
* @param hexColor 鍗佸叚杩涘埗棰滆壊銆備緥濡?#112233
*/
const needDarkMode = (hexColor) => {
	const r = Number.parseInt(hexColor.slice(1, 3), 16);
	const g = Number.parseInt(hexColor.slice(3, 5), 16);
	const b = Number.parseInt(hexColor.slice(5, 7), 16);
	return (r * 299 + g * 587 + b * 114) / 1e3 < 128;
};
async function wait(fn, timeout = Number.POSITIVE_INFINITY, waitTime = 100) {
	let res = await fn();
	let _timeout = timeout;
	while (_timeout > 0 && !res) {
		await sleep(waitTime);
		_timeout -= waitTime;
		res = await fn();
	}
	return res;
}
function waitDom(selector, count = 1, timeout) {
	return wait(() => {
		const elements = document.querySelectorAll(selector);
		return elements.length >= count ? [...elements] : void 0;
	}, timeout);
}
/** 绛夊緟鎸囧畾鐨勫浘鐗囧厓绱犲姞杞藉畬鎴?*/
const waitImgLoad = (target, timeout) => new Promise((resolve, reject) => {
	const img = typeof target === "string" ? new Image() : target;
	if (img.complete && img.naturalHeight) resolve(img);
	const id = timeout ? window.setTimeout(() => reject(/* @__PURE__ */ new Error("timeout")), timeout) : void 0;
	const handleError = (e) => {
		window.clearTimeout(id);
		reject(new Error(e.message));
	};
	const handleLoad = () => {
		window.clearTimeout(id);
		img.removeEventListener("error", handleError);
		resolve(img);
	};
	img.addEventListener("load", handleLoad, { once: true });
	img.addEventListener("error", handleError, { once: true });
	if (typeof target === "string") img.src = target;
});
/** 灏嗘寚瀹氱殑甯冨皵鍊艰浆鎹负瀛楃涓叉垨鏈畾涔?*/
const boolDataVal = (val) => val ? "" : void 0;
/** 娴嬭瘯鍥剧墖 url 鑳藉惁姝ｇ‘鍔犺浇 */
const testImgUrl = (url) => new Promise((resolve) => {
	const img = new Image();
	img.onload = () => resolve(true);
	img.onerror = () => resolve(false);
	img.src = url;
});
const canvasToBlob = (canvas, type, quality = 1) => {
	if (canvas instanceof OffscreenCanvas) return canvas.convertToBlob({
		type,
		quality
	});
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => blob ? resolve(blob) : reject(/* @__PURE__ */ new Error("Canvas toBlob failed")), type, quality);
	});
};
/**
* 姹?a 鍜?b 鐨勫樊闆嗭紝鐩稿綋浜庝粠 a 涓垹鍘诲拰 b 鐩稿悓鐨勫睘鎬?*
* 涓嶄細淇敼鍙傛暟瀵硅薄锛岃繑鍥炵殑鏄柊瀵硅薄
*/
const difference = (a, b) => {
	const res = {};
	const keys = Object.keys(a);
	for (const key of keys) if (typeof a[key] === "object" && typeof b[key] === "object") {
		const _res = difference(a[key], b[key]);
		if (Object.keys(_res).length > 0) res[key] = _res;
	} else if (a[key] !== b?.[key]) res[key] = a[key];
	return res;
};
const _assign = (a, b) => {
	const res = JSON.parse(JSON.stringify(a));
	const keys = Object.keys(b);
	for (const key of keys) if (res[key] === void 0) res[key] = b[key];
	else if (typeof b[key] === "object") {
		const _res = _assign(res[key], b[key]);
		if (Object.keys(_res).length > 0) res[key] = _res;
	} else if (res[key] !== b[key]) res[key] = b[key];
	return res;
};
/**
* Object.assign 鐨勬繁鎷疯礉鐗堬紝涓嶄細瀵艰嚧瀛愬璞″睘鎬х殑缂哄け
*
* 涓嶄細淇敼鍙傛暟瀵硅薄锛岃繑鍥炵殑鏄柊瀵硅薄
*/
const assign = (target, ...sources) => {
	let res = target;
	for (const source of sources) if (typeof source === "object") res = _assign(res, source);
	return res;
};
/** 鏍规嵁璺緞鑾峰彇瀵硅薄涓嬬殑鎸囧畾鍊?*/
const byPath = (obj, path, handleVal) => {
	const keys = typeof path === "string" ? path.split(".") : path;
	let target = obj;
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];
		while (!Reflect.has(target, key) && i < keys.length) {
			i += 1;
			if (keys[i] === void 0) break;
			key += \`.\${keys[i]}\`;
		}
		if (handleVal && i > keys.length - 2 && Reflect.has(target, key)) {
			const res = handleVal(target, key);
			while (i < keys.length - 1) {
				target = target[key];
				i += 1;
				key = keys[i];
			}
			if (res !== void 0) target[key] = res;
			break;
		}
		target = target[key];
	}
	if (target === obj) return null;
	return target;
};
const requestIdleCallback$1 = (callback, timeout) => {
	if (Reflect.has(window, "requestIdleCallback")) return window.requestIdleCallback(callback, { timeout });
	return window.setTimeout(callback, 16);
};
/** 鑾峰彇閿洏浜嬩欢鐨勭紪鐮?*/
const getKeyboardCode = (e) => {
	let { key } = e;
	switch (key) {
		case "Shift":
		case "Control":
		case "Alt": return key;
	}
	key = key.replaceAll(/\\b[A-Z]\\b/g, (match) => match.toLowerCase());
	if (e.ctrlKey) key = \`Ctrl + \${key}\`;
	if (e.altKey) key = \`Alt + \${key}\`;
	if (e.shiftKey) key = \`Shift + \${key}\`;
	return key;
};
/** 灏嗗揩鎹烽敭鐨勭紪鐮佽浆鎹㈡垚鏇存槗璇荤殑褰㈠紡 */
const keyboardCodeToText = (code) => code.replace("Control", "Ctrl").replace("ArrowUp", "鈫?).replace("ArrowDown", "鈫?).replace("ArrowLeft", "鈫?).replace("ArrowRight", "鈫?).replace(/^\\s$/, "Space");
/** 灏?HTML 瀛楃涓茶浆鎹负 DOM 瀵硅薄 */
const domParse = (html) => new DOMParser().parseFromString(html, "text/html");
/**
* 鍔寔淇敼鍘熺綉椤典笂鐨勫嚱鏁?*
* 濡傛灉浼犲叆鍑芥暟鐨勬墍闇€鍙傛暟涓洪浂锛屽皢鍦ㄥ師鍑芥暟鎵ц瀹屽悗鑷姩璋冪敤
*/
const hijackFn = (fnName, fn) => {
	const rawFn = unsafeWindow[fnName];
	unsafeWindow[fnName] = fn.length === 0 ? (...args) => {
		const res = rawFn(...args);
		fn();
		return res;
	} : (...args) => fn(rawFn, args);
};
/**
* 纭繚鎸囧畾 key 鐨勫€间竴瀹氬瓨鍦?* 濡傛灉瀵瑰簲鍊间笉瀛樺湪锛屽垯浣跨敤 defaultValue 鏉ヨ缃€硷紝鐒跺悗杩斿洖璇ュ€?* defaultValue 鍙互鏄粯璁ゅ€硷紝鎴栬€呰繑鍥為粯璁ゅ€肩殑鍑芥暟
* 涔熷彲浠ユ槸浣跨敤浜?GM.setValue 鏉ヨ缃粯璁ゅ€肩殑鍑芥暟锛堟鏃朵篃浼氳繑鍥炶璁剧疆鐨勫€硷級
*/
const ensureGmValue = async (name, defaultValue) => {
	const value = await GM.getValue(name);
	if (value !== void 0) return value;
	if (typeof defaultValue !== "function") {
		await GM.setValue(name, defaultValue);
		return defaultValue;
	}
	const fnRes = await defaultValue();
	if (fnRes !== void 0) {
		await GM.setValue(name, fnRes);
		return fnRes;
	}
	return await GM.getValue(name);
};
/** 鏍规嵁鑼冨洿鏂囨湰鎻愬彇鎸囧畾鑼冨洿鐨勫厓绱犵殑 index */
const extractRange = (rangeText, length) => {
	const list = /* @__PURE__ */ new Set();
	for (const text of rangeText.replaceAll(/[^\\d,-]/g, "").split(",")) if (/^\\d+$/.test(text)) list.add(Number(text) - 1);
	else if (/^\\d*-\\d*$/.test(text)) {
		let [start, end] = text.split("-").map(Number);
		end ||= length;
		for (start--, end--; start <= end; start++) list.add(start);
	}
	return list;
};
/** extractRange 鐨勯€嗗悜锛屾寜鐓х浉鍚岀殑璇硶琛ㄨ堪涓€涓粨鏋滄暟缁?*/
const descRange = (list, length) => {
	let text = "";
	const nowRange = [];
	const pushRange = (newIndex) => {
		if (nowRange.length === 0) return;
		if (text.length > 0) text += ", ";
		if (nowRange.length === 1) text += nowRange[0] + 1;
		else {
			const end = newIndex === void 0 && nowRange[1] === length - 1 ? "" : nowRange[1] + 1;
			text += \`\${nowRange[0] + 1}-\${end}\`;
		}
		nowRange.length = 0;
		if (newIndex !== void 0) nowRange[0] = newIndex;
	};
	for (const i of list) switch (nowRange.length) {
		case 0:
			nowRange[0] = i;
			break;
		case 1:
			if (i === nowRange[0] + 1) nowRange[1] = i;
			else pushRange(i);
			break;
		case 2:
			if (i === nowRange[1] + 1) nowRange[1] = i;
			else pushRange(i);
			break;
	}
	pushRange();
	return text;
};
/** 鐩戝惉 url 鍙樺寲 */
const onUrlChange = (fn, handleUrl = (location) => location.href) => {
	let lastUrl = "";
	const refresh = singleThreaded(async () => {
		if (!await wait(() => handleUrl(location) !== lastUrl, 5e3)) return;
		const nowUrl = handleUrl(location);
		await fn(lastUrl, nowUrl);
		lastUrl = nowUrl;
	});
	const controller = new AbortController();
	for (const eventName of ["click", "popstate"]) window.addEventListener(eventName, refresh, {
		capture: true,
		signal: controller.signal
	});
	refresh();
	return () => controller.abort();
};
/** wait锛屼絾鏄彧鍦?url 鍙樺寲鏃跺垽鏂?*/
const waitUrlChange = (isValidUrl) => new Promise((resolve) => {
	const abort = onUrlChange(async () => {
		const res = await isValidUrl();
		if (!res) return;
		resolve(res);
		abort();
	});
});
var AnimationFrame = class {
	animationId = 0;
	call = () => {
		this.animationId = requestAnimationFrame(this.frame);
	};
	cancel = () => {
		if (!this.animationId) return;
		cancelAnimationFrame(this.animationId);
		this.animationId = 0;
	};
};
/** 閿佸畾灞忓箷绂佹鑷姩鐔勫睆 */
var WakeLock = class {
	isSupported = false;
	lock = null;
	constructor() {
		if (!("wakeLock" in navigator)) return;
		this.isSupported = true;
	}
	on = async () => {
		if (!this.isSupported) return null;
		try {
			this.lock = await navigator.wakeLock.request("screen");
			return this.lock.released;
		} catch {
			return false;
		}
	};
	off = async () => {
		if (!this.lock) return;
		await this.lock.release();
		this.lock = null;
	};
};
const getImageData = (img) => {
	const { naturalWidth: width, naturalHeight: height } = img;
	const ctx = new OffscreenCanvas(width, height).getContext("2d", { willReadFrequently: true });
	ctx.drawImage(img, 0, 0);
	return ctx.getImageData(0, 0, width, height);
};
const withEventStop = (handler) => (e) => {
	e.stopPropagation();
	e.preventDefault();
	if (handler) handler(e);
};
/** 鍒ゆ柇鐗堟湰鍙?鏄惁灏忎簬鐗堟湰鍙? */
const versionLt = (version1, version2) => {
	const v1 = version1.split(".").map(Number);
	const v2 = version2.split(".").map(Number);
	for (let i = 0; i < 3; i++) {
		const num1 = v1[i] ?? 0;
		const num2 = v2[i] ?? 0;
		if (num1 !== num2) return num1 < num2;
	}
	return false;
};
//#endregion
//#region src/helper/i18n.ts
const [lang, setLang] = solid_js.createSignal("zh");
const setInitLang = async () => setLang(await helper_languages.getInitLang());
const t = solid_js.createRoot(() => {
	solid_js.createEffect(solid_js.on(lang, () => helper_languages.setSaveLang(lang()), { defer: true }));
	const locales = solid_js.createMemo(() => {
		switch (lang()) {
			case "en": return en_default;
			case "ru": return ru_default;
			default: return zh_default;
		}
	});
	return (keys, variables) => {
		let text = byPath(locales(), keys) ?? "";
		if (variables) for (const [k, v] of Object.entries(variables)) text = text.replaceAll(\`{{\${k}}}\`, String(v));
		return text;
	};
});
//#endregion
//#region src/helper/logger.ts
const prefix = ["%cComicRead", "background-color: #607d8b; color: white; padding: 2px 4px; border-radius: 4px;"];
const log = (...args) => console.log(...prefix, ...args);
log.warn = (...args) => console.warn(...prefix, ...args);
log.error = (...args) => console.error(...prefix, ...args);
//#endregion
//#region node_modules/.pnpm/@solid-primitives+trigger@1.2.3_solid-js@1.9.10/node_modules/@solid-primitives/trigger/dist/index.js
const triggerOptions$1 = !solid_js_web.isServer && solid_js.DEV ? {
	equals: false,
	name: "trigger"
} : { equals: false };
const triggerCacheOptions$1 = !solid_js_web.isServer && solid_js.DEV ? {
	equals: false,
	internal: true
} : triggerOptions$1;
var TriggerCache$1 = class {
	#map;
	constructor(mapConstructor = Map) {
		this.#map = new mapConstructor();
	}
	dirty(key) {
		if (solid_js_web.isServer) return;
		this.#map.get(key)?.$$();
	}
	dirtyAll() {
		if (solid_js_web.isServer) return;
		for (const trigger of this.#map.values()) trigger.$$();
	}
	track(key) {
		if (!solid_js.getListener()) return;
		let trigger = this.#map.get(key);
		if (!trigger) {
			const [$, $$] = solid_js.createSignal(void 0, triggerCacheOptions$1);
			this.#map.set(key, trigger = {
				$,
				$$,
				n: 1
			});
		} else trigger.n++;
		solid_js.onCleanup(() => {
			if (--trigger.n === 0) queueMicrotask(() => trigger.n === 0 && this.#map.delete(key));
		});
		trigger.$();
	}
};
//#endregion
//#region node_modules/.pnpm/@solid-primitives+map@0.7.3_solid-js@1.9.10/node_modules/@solid-primitives/map/dist/index.js
const $OBJECT = Symbol("track-object");
/**
* A reactive version of \`Map\` data structure. All the reads (like \`get\` or \`has\`) are signals, and all the writes (\`delete\` or \`set\`) will cause updates to appropriate signals.
* @param initial initial entries of the reactive map
* @param equals signal equals function, determining if a change should cause an update
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/map#ReactiveMap
* @example
* const userPoints = new ReactiveMap<User, number>();
* createEffect(() => {
*    userPoints.get(user1) // => T: number | undefined (reactive)
*    userPoints.has(user1) // => T: boolean (reactive)
*    userPoints.size // => T: number (reactive)
* });
* // apply changes
* userPoints.set(user1, 100);
* userPoints.delete(user2);
* userPoints.set(user1, { foo: "bar" });
*/
var ReactiveMap = class extends Map {
	#keyTriggers = new TriggerCache$1();
	#valueTriggers = new TriggerCache$1();
	[Symbol.iterator]() {
		return this.entries();
	}
	constructor(entries) {
		super();
		if (entries) for (const entry of entries) super.set(...entry);
	}
	get size() {
		this.#keyTriggers.track($OBJECT);
		return super.size;
	}
	*keys() {
		this.#keyTriggers.track($OBJECT);
		for (const key of super.keys()) yield key;
	}
	*values() {
		this.#valueTriggers.track($OBJECT);
		for (const value of super.values()) yield value;
	}
	*entries() {
		this.#keyTriggers.track($OBJECT);
		this.#valueTriggers.track($OBJECT);
		for (const entry of super.entries()) yield entry;
	}
	forEach(callbackfn, thisArg) {
		this.#keyTriggers.track($OBJECT);
		this.#valueTriggers.track($OBJECT);
		super.forEach(callbackfn, thisArg);
	}
	has(key) {
		this.#keyTriggers.track(key);
		return super.has(key);
	}
	get(key) {
		this.#valueTriggers.track(key);
		return super.get(key);
	}
	set(key, value) {
		const hadNoKey = !super.has(key);
		const hasChanged = super.get(key) !== value;
		const result = super.set(key, value);
		if (hasChanged || hadNoKey) solid_js.batch(() => {
			if (hadNoKey) {
				this.#keyTriggers.dirty($OBJECT);
				this.#keyTriggers.dirty(key);
			}
			if (hasChanged) {
				this.#valueTriggers.dirty($OBJECT);
				this.#valueTriggers.dirty(key);
			}
		});
		return result;
	}
	delete(key) {
		const isDefined = super.get(key) !== void 0;
		const result = super.delete(key);
		if (result) solid_js.batch(() => {
			this.#keyTriggers.dirty($OBJECT);
			this.#valueTriggers.dirty($OBJECT);
			this.#keyTriggers.dirty(key);
			if (isDefined) this.#valueTriggers.dirty(key);
		});
		return result;
	}
	clear() {
		if (super.size === 0) return;
		solid_js.batch(() => {
			this.#keyTriggers.dirty($OBJECT);
			this.#valueTriggers.dirty($OBJECT);
			for (const key of super.keys()) {
				this.#keyTriggers.dirty(key);
				this.#valueTriggers.dirty(key);
			}
			super.clear();
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@solid-primitives+trigger@1.2.2_solid-js@1.9.10/node_modules/@solid-primitives/trigger/dist/index.js
const triggerOptions = !solid_js_web.isServer && solid_js.DEV ? {
	equals: false,
	name: "trigger"
} : { equals: false };
const triggerCacheOptions = !solid_js_web.isServer && solid_js.DEV ? {
	equals: false,
	internal: true
} : triggerOptions;
var TriggerCache = class {
	#map;
	constructor(mapConstructor = Map) {
		this.#map = new mapConstructor();
	}
	dirty(key) {
		if (solid_js_web.isServer) return;
		this.#map.get(key)?.$$();
	}
	dirtyAll() {
		if (solid_js_web.isServer) return;
		for (const trigger of this.#map.values()) trigger.$$();
	}
	track(key) {
		if (!solid_js.getListener()) return;
		let trigger = this.#map.get(key);
		if (!trigger) {
			const [$, $$] = solid_js.createSignal(void 0, triggerCacheOptions);
			this.#map.set(key, trigger = {
				$,
				$$,
				n: 1
			});
		} else trigger.n++;
		solid_js.onCleanup(() => {
			if (--trigger.n === 0) queueMicrotask(() => trigger.n === 0 && this.#map.delete(key));
		});
		trigger.$();
	}
};
//#endregion
//#region node_modules/.pnpm/@solid-primitives+set@0.7.2_solid-js@1.9.10/node_modules/@solid-primitives/set/dist/index.js
const $KEYS = Symbol("track-keys");
/**
* A reactive version of a Javascript built-in \`Set\` class.
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/set#ReactiveSet
* @example
* const set = new ReactiveSet([1,2,3]);
* [...set] // reactive on any change
* set.has(2) // reactive on change to the result
* // apply changes
* set.add(4)
* set.delete(2)
* set.clear()
*/
var ReactiveSet = class extends Set {
	#triggers = new TriggerCache();
	constructor(values) {
		super();
		if (values) for (const value of values) super.add(value);
	}
	[Symbol.iterator]() {
		return this.values();
	}
	get size() {
		this.#triggers.track($KEYS);
		return super.size;
	}
	has(value) {
		this.#triggers.track(value);
		return super.has(value);
	}
	keys() {
		return this.values();
	}
	*values() {
		this.#triggers.track($KEYS);
		for (const value of super.values()) yield value;
	}
	*entries() {
		this.#triggers.track($KEYS);
		for (const entry of super.entries()) yield entry;
	}
	forEach(callbackfn, thisArg) {
		this.#triggers.track($KEYS);
		super.forEach(callbackfn, thisArg);
	}
	add(value) {
		if (!super.has(value)) {
			super.add(value);
			solid_js.batch(() => {
				this.#triggers.dirty(value);
				this.#triggers.dirty($KEYS);
			});
		}
		return this;
	}
	delete(value) {
		const result = super.delete(value);
		if (result) solid_js.batch(() => {
			this.#triggers.dirty(value);
			this.#triggers.dirty($KEYS);
		});
		return result;
	}
	clear() {
		if (!super.size) return;
		solid_js.batch(() => {
			this.#triggers.dirty($KEYS);
			for (const member of super.values()) this.#triggers.dirty(member);
			super.clear();
		});
	}
};
//#endregion
//#region src/helper/solidJs.ts
let publicOwner;
solid_js.createRoot(() => {
	publicOwner = solid_js.getOwner();
});
/** 浼氳嚜鍔ㄨ缃?equals 鐨?createSignal */
const createEqualsSignal = ((init, options) => solid_js.createSignal(init, {
	equals: dequal,
	...options
}));
/** 浼氳嚜鍔ㄨ缃?equals 鍜?createRoot 鐨?createMemo */
const createRootMemo = ((fn, init, options) => {
	if (fn.name === "bound readSignal") return fn;
	const _init = init ?? fn(void 0);
	const _options = options?.equals === void 0 && typeof _init === "object" ? {
		...options,
		equals: dequal
	} : options;
	return solid_js.getOwner() ? solid_js.createMemo(fn, _init, _options) : solid_js.runWithOwner(publicOwner, () => solid_js.createMemo(fn, _init, _options));
});
/** 鑺傛祦鐨?createMemo */
const createThrottleMemo = (fn, wait = 100, init = fn(void 0), options) => {
	const scheduled = createScheduled((_fn) => throttle(_fn, wait));
	return createRootMemo((prev) => scheduled() ? fn(prev) : prev, init, options);
};
const createMemoMap = (fnMap) => {
	const memoMap = Object.fromEntries(Object.entries(fnMap).map(([key, fn]) => [key, createRootMemo(fn)]));
	return createRootMemo(() => {
		const obj = {};
		for (const key of Object.keys(memoMap)) Reflect.set(obj, key, memoMap[key]());
		return obj;
	});
};
const createRootEffect = ((fn, val, options) => solid_js.getOwner() ? solid_js.createEffect(fn, val, options) : solid_js.runWithOwner(publicOwner, () => solid_js.createEffect(fn, val, options)));
const createEffectOn = ((deps, fn, options) => createRootEffect(solid_js.on(deps, fn, options)));
const onAutoMount = (fn) => {
	const owner = solid_js.getOwner();
	if (!owner) return fn(owner);
	solid_js.onMount(() => {
		const cleanFn = fn(owner);
		if (cleanFn) solid_js.onCleanup(cleanFn);
	});
};
//#endregion
//#region src/helper/useCache.ts
const promisifyRequest = (request) => new Promise((resolve, reject) => {
	request.onsuccess = () => resolve(request.result);
	request.onerror = () => reject(request.error);
});
const openDb = (name, version, initSchema) => new Promise((resolve, reject) => {
	const request = indexedDB.open(\`ComicReadScript\${name}\`, version);
	request.onupgradeneeded = () => initSchema(request.result);
	request.onsuccess = () => resolve(request.result);
	request.onerror = (error) => {
		console.error("鏁版嵁搴撴墦寮€澶辫触", error);
		reject(/* @__PURE__ */ new Error("鏁版嵁搴撴墦寮€澶辫触"));
	};
});
const useCache = async (schema, name = "", version = 2) => {
	const db = await openDb(name, version, typeof schema === "function" ? schema : (db) => {
		for (const storeName of db.objectStoreNames) if (!Reflect.has(schema, storeName)) db.deleteObjectStore(storeName);
		for (const storeName of Object.keys(schema)) if (!db.objectStoreNames.contains(storeName)) db.createObjectStore(storeName, { keyPath: schema[storeName] });
	});
	return {
		set: (storeName, value) => promisifyRequest(db.transaction(storeName, "readwrite").objectStore(storeName).put(value)),
		get: (storeName, query) => promisifyRequest(db.transaction(storeName, "readonly").objectStore(storeName).get(query)),
		del: (storeName, query) => promisifyRequest(db.transaction(storeName, "readwrite").objectStore(storeName).delete(query)),
		each(storeName, callback) {
			const request = db.transaction(storeName, "readwrite").objectStore(storeName).openCursor();
			request.onsuccess = async function onsuccess(event) {
				const cursor = event.target.result;
				if (!cursor) return;
				await callback(cursor.value, cursor);
				cursor.continue();
			};
		}
	};
};
//#endregion
//#region src/helper/useDrag.ts
const createPointerState = (e, type = "down") => {
	const xy = [e.clientX, e.clientY];
	return {
		id: e.pointerId,
		type,
		xy,
		initial: xy,
		last: xy,
		startTime: performance.now(),
		target: e.target
	};
};
const useDrag = ({ ref, handleDrag, easyMode, handleClick, skip, setCapture, touches = /* @__PURE__ */ new Map() }) => {
	onAutoMount(() => {
		const controller = new AbortController();
		const options = {
			capture: false,
			passive: true,
			signal: controller.signal
		};
		let allowClick = -1;
		const handleDown = (e) => {
			if (skip?.(e)) return;
			e.stopPropagation();
			if (!easyMode?.() && e.buttons !== 1) return;
			if (setCapture) ref.setPointerCapture(e.pointerId);
			const state = createPointerState(e);
			touches.set(e.pointerId, state);
			handleDrag(state, e);
			allowClick = window.setTimeout(() => {
				allowClick = 0;
			}, 300);
		};
		const handleMove = (e) => {
			e.preventDefault();
			if (!easyMode?.() && e.buttons !== 1) return;
			const state = touches.get(e.pointerId);
			if (!state) return;
			state.type = "move";
			state.xy = [e.clientX, e.clientY];
			handleDrag(state, e);
			state.last = state.xy;
			if (allowClick > 0 && (Math.abs(e.clientX - state.initial[0]) > 5 || Math.abs(e.clientY - state.initial[1]) > 5)) {
				window.clearTimeout(allowClick);
				allowClick = -2;
			}
		};
		const handleUp = (e) => {
			e.stopPropagation();
			ref.releasePointerCapture(e.pointerId);
			const state = touches.get(e.pointerId);
			if (!state) return;
			touches.delete(e.pointerId);
			state.type = "up";
			state.xy = [e.clientX, e.clientY];
			if (handleClick && allowClick && touches.size === 0 && approx(state.xy[0] - state.initial[0], 0, 5) && approx(state.xy[1] - state.initial[1], 0, 5)) handleClick(e, state.target);
			window.clearTimeout(allowClick);
			handleDrag(state, e);
		};
		const handleCancel = (e) => {
			e.stopPropagation();
			ref.releasePointerCapture(e.pointerId);
			const state = touches.get(e.pointerId);
			if (!state) return;
			state.type = "cancel";
			handleDrag(state, e);
			touches.clear();
		};
		ref.addEventListener("pointerdown", handleDown, options);
		ref.addEventListener("pointermove", handleMove, {
			...options,
			passive: false
		});
		ref.addEventListener("pointerup", handleUp, options);
		ref.addEventListener("pointercancel", handleCancel, options);
		if (easyMode) {
			ref.addEventListener("pointerover", handleDown, options);
			ref.addEventListener("pointerout", handleUp, options);
		}
		ref.addEventListener("click", (e) => {
			if (allowClick > 0 && touches.size === 0 || skip?.(e)) return;
			e.stopPropagation();
			e.preventDefault();
		}, { capture: true });
		return () => controller.abort();
	});
};
//#endregion
//#region src/helper/useStore.ts
const useStore = (initState) => {
	const [store, _setState] = solid_js_store.createStore(initState);
	const setState = (...args) => {
		if (args.length === 1 && typeof args[0] === "function") return _setState(solid_js_store.produce(args[0]));
		return _setState(...args);
	};
	return {
		store,
		setState
	};
};
//#endregion
//#region src/helper/useStyle.ts
const useStyleSheet = (e) => {
	const styleSheet = new CSSStyleSheet();
	onAutoMount(() => {
		const root = e?.getRootNode() ?? document;
		root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet];
		return () => {
			const index = root.adoptedStyleSheets.indexOf(styleSheet);
			if (index !== -1) root.adoptedStyleSheets.splice(index, 1);
		};
	});
	return styleSheet;
};
const useStyle = (css, e) => {
	const styleSheet = useStyleSheet(e);
	if (typeof css === "string") styleSheet.replaceSync(css);
	else createEffectOn(createRootMemo(css), (style) => styleSheet.replaceSync(style));
};
/** 鐢?CSSStyleSheet 瀹炵幇鍜屼慨鏀?style 涓€鏍风殑鏁堟灉 */
const useStyleMemo = (selector, styleMapArg, e) => {
	const styleSheet = useStyleSheet(e);
	styleSheet.insertRule(\`\${selector} { }\`);
	const { style } = styleSheet.cssRules[0];
	const setStyle = (key, val) => {
		if (val === void 0 || val === "") return style.removeProperty(key);
		style.setProperty(key, typeof val === "string" ? val : \`\${val}\`);
	};
	const styleMapList = Array.isArray(styleMapArg) ? styleMapArg : [styleMapArg];
	for (const styleMap of styleMapList) if (typeof styleMap === "object") for (const [key, val] of Object.entries(styleMap)) createEffectOn(createRootMemo(val), (newVal) => setStyle(key, newVal));
	else createEffectOn(createRootMemo(styleMap), (map) => {
		for (const [key, val] of Object.entries(map)) setStyle(key, val);
	});
};
//#endregion
exports.AnimationFrame = AnimationFrame;
exports.FaviconProgress = FaviconProgress;
exports.PQueue = PQueue;
exports.ReactiveMap = ReactiveMap;
exports.ReactiveSet = ReactiveSet;
exports.WakeLock = WakeLock;
exports.approx = approx;
exports.assign = assign;
exports.boolDataVal = boolDataVal;
exports.byPath = byPath;
exports.canvasToBlob = canvasToBlob;
exports.clamp = clamp;
exports.createEffectOn = createEffectOn;
exports.createEqualsSignal = createEqualsSignal;
exports.createMemoMap = createMemoMap;
exports.createRootEffect = createRootEffect;
exports.createRootMemo = createRootMemo;
exports.createScheduled = createScheduled;
exports.createThrottleMemo = createThrottleMemo;
exports.debounce = debounce;
exports.descRange = descRange;
exports.difference = difference;
exports.domParse = domParse;
exports.ensureGmValue = ensureGmValue;
exports.extractRange = extractRange;
exports.fileType = fileType;
exports.getFileName = getFileName;
exports.getImageData = getImageData;
exports.getKeyboardCode = getKeyboardCode;
exports.getMostItem = getMostItem;
exports.hijackFn = hijackFn;
exports.inRange = inRange;
exports.isArray = isArray;
exports.isEqual = dequal;
exports.isHTMLElement = isHTMLElement;
exports.isImageElement = isImageElement;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isUrl = isUrl;
exports.keyboardCodeToText = keyboardCodeToText;
exports.lang = lang;
exports.log = log;
exports.mountComponents = mountComponents;
exports.needDarkMode = needDarkMode;
exports.onAutoMount = onAutoMount;
exports.onUrlChange = onUrlChange;
exports.onec = onec;
exports.plimit = plimit;
exports.promisifyRequest = promisifyRequest;
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;
exports.querySelectorClick = querySelectorClick;
exports.range = range;
exports.requestIdleCallback = requestIdleCallback$1;
exports.saveAs = saveAs;
exports.scrollIntoView = scrollIntoView;
exports.setInitLang = setInitLang;
exports.setLang = setLang;
exports.singleThreaded = singleThreaded;
exports.sleep = sleep;
exports.t = t;
exports.testImgUrl = testImgUrl;
exports.throttle = throttle;
exports.useCache = useCache;
exports.useDrag = useDrag;
exports.useFaviconProgress = useFaviconProgress;
exports.useStore = useStore;
exports.useStyle = useStyle;
exports.useStyleMemo = useStyleMemo;
exports.versionLt = versionLt;
exports.wait = wait;
exports.waitDom = waitDom;
exports.waitImgLoad = waitImgLoad;
exports.waitUrlChange = waitUrlChange;
exports.withEventStop = withEventStop;
`,
	"request": `\nlet components_Toast = require("components/Toast");
let helper = require("helper");
//#region src/request.ts
const xmlHttpRequest = (details) => new Promise((resolve, reject) => {
	const handleError = (error) => {
		details.onerror?.(error);
		console.error("GM_xmlhttpRequest Error", error);
		reject(new Error(error?.responseText || "GM_xmlhttpRequest Error"));
	};
	const abort = GM_xmlhttpRequest({
		...details,
		onload(res) {
			details.onload?.call(res, res);
			resolve(res);
		},
		onerror: handleError,
		ontimeout: handleError,
		onabort: handleError
	});
	details.signal?.addEventListener("abort", () => abort.abort());
});
/** 鍙戣捣璇锋眰 */
const request = async (url, details = {}, retryNum = 0, errorNum = 0) => {
	const headers = { Referer: location.href };
	const errorText = \`\${details?.errorText ?? helper.t("alert.comic_load_error")}\\nurl: \${url}\`;
	details.fetch ??= url.startsWith("/") || url.startsWith(location.origin);
	try {
		if (details.fetch || typeof GM_xmlhttpRequest === "undefined") {
			const res = await fetch(url, {
				method: "GET",
				headers,
				signal: AbortSignal.timeout?.(details.timeout ?? 1e3 * 10),
				body: details.data,
				...details
			});
			if (!details.noCheckCode && res.status !== 200) {
				helper.log.error(errorText, res);
				throw new Error(errorText);
			}
			let response = null;
			switch (details.responseType) {
				case "arraybuffer":
					response = await res.arrayBuffer();
					break;
				case "blob":
					response = await res.blob();
					break;
				case "json":
					response = await res.json();
					break;
			}
			const _res = {
				status: res.status,
				statusText: res.statusText,
				response,
				responseText: response ? "" : await res.text()
			};
			details.onload?.call(_res, _res);
			return _res;
		}
		let targetUrl = url;
		if (url.startsWith("//")) targetUrl = \`http:\${url}\`;
		else if (url.startsWith("/")) targetUrl = \`\${location.origin}\${url}\`;
		const res = await xmlHttpRequest({
			method: "GET",
			url: targetUrl,
			headers,
			timeout: 1e3 * 10,
			...details
		});
		if (!details.noCheckCode && res.status !== 200) {
			helper.log.error(errorText, res);
			throw new Error(errorText);
		}
		if (details.responseType === "json" && res.responseText && (typeof res.response !== "object" || Object.keys(res.response).length === 0)) try {
			Reflect.set(res, "response", JSON.parse(res.responseText));
		} catch {}
		return res;
	} catch (error) {
		if (details && details.retryFetch && retryNum === 0) {
			console.warn("retryFetch", url);
			details.fetch = !details.fetch;
			return request(url, details, retryNum + 1, errorNum);
		}
		if (errorNum >= retryNum) {
			(details.noTip ? console.error : components_Toast.toast.error)(\`\${errorText}\\nerror: \${error.message}\`);
			throw new Error(errorText, { cause: error });
		}
		helper.log.error(errorText, error);
		await helper.sleep(1e3);
		return request(url, details, retryNum, errorNum + 1);
	}
};
/** 杞祦鍚戝涓?api 鍙戣捣璇锋眰 */
const eachApi = async (url, baseUrlList, details) => {
	for (const baseUrl of baseUrlList) try {
		return await request(\`\${baseUrl}\${url}\`, {
			...details,
			noTip: true
		});
	} catch {}
	const errorText = details?.errorText ?? helper.t("alert.comic_load_error");
	if (!details?.noTip) components_Toast.toast.error(errorText);
	helper.log.error("鎵€鏈?api 璇锋眰鍧囧け璐?, url, baseUrlList, details);
	throw new Error(errorText);
};
const downloadImgHeaders = {
	Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
	"User-Agent": navigator.userAgent,
	Referer: location.href
};
const downloadImg = async (url, details, retryNum = 0) => {
	if (url.startsWith("blob:")) return (await fetch(url)).blob();
	return (await request(url, {
		responseType: "blob",
		errorText: helper.t("translation.tip.download_img_failed"),
		headers: downloadImgHeaders,
		retryFetch: true,
		...details
	}, retryNum)).response;
};
//#endregion
exports.downloadImg = downloadImg;
exports.downloadImgHeaders = downloadImgHeaders;
exports.eachApi = eachApi;
exports.request = request;
`,
	"components/Manga": `\n//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let solid_js_web = require("solid-js/web");
let helper = require("helper");
let solid_js = require("solid-js");
let request = require("request");
let comlink = require("comlink");
comlink = __toESM(comlink, 1);
let solid_js_store = require("solid-js/store");
let worker_ImageRecognition = require("worker/ImageRecognition");
worker_ImageRecognition = __toESM(worker_ImageRecognition, 1);
let components_Toast = require("components/Toast");
let worker_ImageUpscale = require("worker/ImageUpscale");
worker_ImageUpscale = __toESM(worker_ImageUpscale, 1);
let components_IconButton = require("components/IconButton");
let fflate = require("fflate");
//#region src/components/Manga/store/image.ts
const imgState = {
	imgMap: {},
	imgList: [],
	pageList: [],
	fillEffect: { "-1": true },
	showRange: [0, 0],
	renderRange: [0, 0],
	loadingRange: [0, 0],
	defaultImgType: ""
};
//#endregion
//#region src/components/Manga/actions/translation/translator/MangaImageTranslator/options.ts
/**
* MangaImageTranslator 缈昏瘧鏈嶅姟閰嶇疆閫夐」
*/
/**
* 榛樿閰嶇疆
*
* 閮ㄥ垎鍙傛暟浣跨敤鏂囨。鎺ㄨ崘鍊?
* @see https://github.com/zyddnys/manga-image-translator?tab=readme-ov-file#recommended-options
*/
const mitDefaultOptions = () => ({
	localUrl: void 0,
	detector: {
		detector: "ctd",
		detection_size: "1536",
		box_threshold: .7,
		unclip_ratio: 2.3
	},
	render: { direction: "auto" },
	translator: {
		translator: "gpt3.5",
		target_lang: {
			zh: "CHS",
			en: "ENG",
			ru: "RUS"
		}[helper.lang()] ?? "CHS"
	},
	inpainter: {
		inpainter: "lama_large",
		inpainting_size: "2048"
	},
	mask_dilation_offset: 30
});
/** 鍒嗚鲸鐜囨槧灏?*/
const sizeDict = {
	"1024": "S",
	"1536": "M",
	"2048": "L",
	"2560": "X"
};
/** 鐩爣璇█閫夐」 */
const targetLanguageOptions = [
	["CHS", "绠€浣撲腑鏂?],
	["CHT", "绻侀珨涓枃"],
	["JPN", "鏃ユ湰瑾?],
	["ENG", "English"],
	["KOR", "頃滉淡鞏?],
	["VIN", "Ti岷縩g Vi峄噒"],
	["CSY", "膷e拧tina"],
	["NLD", "Nederlands"],
	["FRA", "fran莽ais"],
	["DEU", "Deutsch"],
	["HUN", "magyar nyelv"],
	["ITA", "italiano"],
	["PLK", "polski"],
	["PTB", "portugu锚s"],
	["ROM", "limba rom芒n膬"],
	["RUS", "褉褍褋褋泻懈泄 褟蟹褘泻"],
	["ESP", "espa帽ol"],
	["TRK", "T眉rk dili"],
	["IND", "Indonesia"]
];
//#endregion
//#region src/components/Manga/actions/translation/translator/Cotrans/options.ts
/**
* Cotrans 缈昏瘧鏈嶅姟閰嶇疆閫夐」
*/
/** Cotrans 鏀寔鐨勭炕璇戝櫒鍒楄〃 */
const cotransTranslators = [
	"google",
	"youdao",
	"baidu",
	"deepl",
	"gpt3.5",
	"offline",
	"none"
];
/** Cotrans 榛樿閰嶇疆 */
const cotransDefaultOptions = () => ({
	detector: {
		detector: "ctd",
		detection_size: "1536"
	},
	render: { direction: "auto" },
	translator: {
		translator: "gpt3.5",
		target_lang: {
			zh: "CHS",
			en: "ENG",
			ru: "RUS"
		}[helper.lang()] ?? "CHS"
	}
});
//#endregion
//#region src/components/Manga/store/option.ts
const _defaultOption = {
	dir: "rtl",
	scrollbar: {
		position: "auto",
		autoHidden: false,
		showImgStatus: true,
		easyScroll: false
	},
	clickPageTurn: {
		enabled: "ontouchstart" in document.documentElement,
		reverse: false,
		area: "left_right",
		shrinkMenu: false
	},
	firstPageFill: true,
	disableZoom: false,
	darkMode: false,
	autoDarkMode: false,
	swapPageTurnKey: false,
	scroolEnd: "auto",
	alwaysLoadAllImg: false,
	showComment: true,
	preloadPageNum: 20,
	pageNum: 0,
	autoSwitchPageMode: true,
	autoHiddenMouse: true,
	autoFullscreen: false,
	zoom: {
		ratio: 100,
		offset: {
			x: 0,
			y: 0
		}
	},
	scrollMode: {
		enabled: false,
		spacing: 0,
		imgScale: 1,
		adjustToWidth: "disable",
		abreastMode: false,
		abreastDuplicate: .1,
		doubleMode: false,
		alignEdge: false
	},
	imgRecognition: {
		enabled: false,
		background: true,
		pageFill: true,
		upscale: false
	},
	relineUpscale: {
		enabled: false,
		serverUrl: "http://127.0.0.1:5678"
	},
	translation: {
		enabled: false,
		provider: "manga-image-translator",
		onlyDownloadTranslated: false,
		forceRetry: false,
		mit: mitDefaultOptions(),
		cotrans: cotransDefaultOptions()
	},
	autoScroll: {
		enabled: false,
		interval: 3e3,
		distance: 200,
		triggerEnd: false
	}
};
const defaultOption = () => structuredClone(_defaultOption);
const optionState = {
	defaultOption: defaultOption(),
	option: defaultOption()
};
//#endregion
//#region src/components/Manga/store/other.ts
const otherState = {
	/** 婕敾鏍囬 */
	title: "",
	/**
	* 鐢ㄤ簬闃叉婊氳疆杩炵画婊氬姩瀵艰嚧杩囧揩瑙﹀彂浜嬩欢鐨勯攣
	*
	* - 鍦ㄩ娆¤Е鍙戠粨鏉熼〉鏃跺紑鍚紝涓€娈垫椂闂村叧闂€傚紑鍚椂绂佹瑙﹀彂缁撴潫椤电殑涓婁笅璇濆垏鎹㈠姛鑳姐€?	*/
	scrollLock: false,
	/** 褰撳墠鏄惁澶勪簬鍏ㄥ睆鐘舵€?*/
	fullscreen: false,
	rootSize: {
		width: 0,
		height: 0
	},
	scrollbarSize: {
		width: 0,
		height: 0
	},
	/** 鍗疯酱妯″紡涓嬬殑婊氬姩璺濈 */
	scrollTop: 0,
	autoScroll: {
		play: false,
		progress: 0
	},
	supportWorker: false,
	supportUpscaleImage: true
};
//#endregion
//#region src/components/Manga/store/prop.ts
const propState = {
	commentList: void 0,
	hotkeys: {},
	prop: {
		onExit: void 0,
		onPrev: void 0,
		onNext: void 0,
		onLoading: void 0,
		onOptionChange: void 0,
		onHotkeysChange: void 0,
		editButtonList: (list) => list,
		editSettingList: (list) => list
	}
};
//#endregion
//#region src/components/Manga/store/show.ts
const showState = {
	isMobile: false,
	isDragMode: false,
	activePageIndex: 0,
	gridMode: false,
	show: {
		toolbar: false,
		scrollbar: false,
		touchArea: false,
		endPage: void 0
	},
	page: {
		anima: "",
		vertical: false,
		offset: {
			x: {
				pct: 0,
				px: 0
			},
			y: {
				pct: 0,
				px: 0
			}
		}
	}
};
//#endregion
//#region src/components/Manga/store/index.ts
const initStore = {
	...imgState,
	...showState,
	...propState,
	...optionState,
	...otherState
};
const { store, setState } = helper.useStore({ ...initStore });
const refs = {
	root: void 0,
	mangaBox: void 0,
	mangaFlow: void 0,
	touchArea: void 0,
	scrollbar: void 0,
	settingPanel: void 0,
	prev: void 0,
	next: void 0,
	exit: void 0
};
//#endregion
//#region src/components/Manga/handleComicData.ts
/** 鍒ゆ柇鍥剧墖鏄惁鏄法椤靛浘 */
const isWideImg = (img) => {
	switch (img.type ?? store.defaultImgType) {
		case "long":
		case "wide": return true;
		default: return false;
	}
};
/** 鏍规嵁濉厖椤佃缃弻椤垫帓鍒楀崟椤靛浘鐗?*/
const arrangeImg = (pageList, fill) => {
	if (pageList.length === 0) return [];
	const newPageList = [];
	let imgCache = fill ? [-1] : [];
	for (const i of pageList) {
		imgCache.push(i);
		if (imgCache.length === 2) {
			newPageList.push(imgCache);
			imgCache = [];
		}
	}
	if (imgCache.length === 1 && imgCache[0] !== -1) {
		imgCache.push(-1);
		newPageList.push(imgCache);
	}
	return newPageList;
};
/** 璁＄畻鎸囧畾鍥剧墖娴佷腑鐨勫乏鍙抽〉浣嶇疆姝ｇ‘鐨勯〉鏁?*/
const computeAccuracy = (imgList, pageList) => {
	let accuracy = 0;
	for (const [a, b] of pageList) {
		if ((imgList[a]?.blankMargin?.left ?? 0) > .04) accuracy += 1;
		if (b === void 0) break;
		if ((imgList[b]?.blankMargin?.right ?? 0) > .04) accuracy += 1;
	}
	return accuracy;
};
/** 鑷姩鍒囨崲濉厖椤佃缃埌宸﹀彸椤垫纭巼鏇撮珮鐨勬儏鍐?*/
const arrangePage = (pageList, { imgList, fillEffect, nowFillIndex, switchFill }) => {
	const fill = Boolean(fillEffect[nowFillIndex]);
	const newPageList = arrangeImg(pageList, fill);
	if (!switchFill || typeof fillEffect[nowFillIndex] === "number") return newPageList;
	const anotherPageList = arrangeImg(pageList, !fill);
	const anotherAccuracy = computeAccuracy(imgList, anotherPageList);
	if (anotherAccuracy === 0) return newPageList;
	if (anotherAccuracy <= computeAccuracy(imgList, newPageList)) return newPageList;
	helper.log(\`\${nowFillIndex} 鑷姩鍒囨崲椤甸潰濉厖\`);
	fillEffect[nowFillIndex] = !fill;
	return anotherPageList;
};
/** 鏍规嵁鍥剧墖姣斾緥鍜屽～鍏呴〉璁剧疆瀵规极鐢诲浘鐗囪繘琛屾帓鍒?*/
const handleComicData = (imgList, fillEffect, switchFill) => {
	const context = {
		imgList,
		fillEffect,
		nowFillIndex: -1,
		switchFill
	};
	const pageList = [];
	const cacheList = [];
	for (let i = 0; i < imgList.length; i += 1) {
		const img = imgList[i];
		if (!isWideImg(img)) {
			cacheList.push(i);
			if (Reflect.has(fillEffect, i)) Reflect.deleteProperty(fillEffect, i);
			continue;
		}
		if (typeof fillEffect[context.nowFillIndex] === "boolean" && i < imgList.length - 2 && (cacheList.length + (fillEffect[context.nowFillIndex] ? 1 : 0)) % 2 === 1) {
			fillEffect[context.nowFillIndex] = !fillEffect[context.nowFillIndex];
			return handleComicData(imgList, fillEffect, switchFill);
		}
		pageList.push(...arrangePage(cacheList, context), [i]);
		cacheList.length = 0;
		if (fillEffect[i] === void 0) fillEffect[i] = false;
		context.nowFillIndex = i;
	}
	if (cacheList.length > 0) pageList.push(...arrangePage(cacheList, context));
	return pageList;
};
//#endregion
//#region src/components/Manga/actions/helper.ts
const getImg = (i, state = store) => state.imgMap[state.imgList[i]];
/** 鎵惧埌鎸囧畾 url 鍥剧墖鍦?imgList 閲岀殑 index */
const getImgIndexs = (url) => {
	const indexList = [];
	for (const [i, imgUrl] of store.imgList.entries()) if (imgUrl === url) indexList.push(i);
	return indexList;
};
/** 鎵惧埌鎸囧畾 url 鍥剧墖鐨?dom */
const getImgEle = (target) => {
	const index = typeof target === "number" ? target : store.imgList.indexOf(target);
	if (index === -1) return;
	return refs.mangaFlow.querySelector(\`#_\${index}_0 img\`);
};
/** 鎵惧埌鎸囧畾椤甸潰鎵€澶勭殑鍥剧墖娴?*/
const findFillIndex = (pageIndex, fillEffect) => {
	let nowFillIndex = pageIndex;
	while (!Reflect.has(fillEffect, nowFillIndex)) nowFillIndex -= 1;
	return nowFillIndex;
};
/** 瑙﹀彂 onOptionChange */
const triggerOnOptionChange = helper.throttle(() => store.prop.onOptionChange?.(helper.difference(store.option, store.defaultOption)), 1e3);
/** 鍦?option 鍚庢墜鍔ㄨЕ鍙?onOptionChange */
const setOption = (fn) => {
	setState((state) => fn(state.option, state));
	triggerOnOptionChange();
};
/** 鍒涘缓鐢ㄤ簬灏?ref 缁戝畾鍒板搴?state 涓婄殑宸ュ叿鍑芥暟 */
const bindRef = (name) => (e) => Reflect.set(refs, name, e);
const watchDomSize = (name, e) => {
	const resizeObserver = new ResizeObserver(([{ contentRect }]) => {
		if (!contentRect.width || !contentRect.height) return;
		setState((state) => {
			state[name] = {
				width: contentRect.width,
				height: contentRect.height
			};
		});
	});
	resizeObserver.disconnect();
	resizeObserver.observe(e);
	solid_js.onCleanup(() => resizeObserver.disconnect());
};
/** 灏嗙晫闈㈡仮澶嶅埌姝ｅ父鐘舵€?*/
const resetUI = (state) => {
	state.show.toolbar = false;
	state.show.scrollbar = false;
	state.show.touchArea = false;
};
const focus = () => requestAnimationFrame(() => {
	refs.mangaBox?.click();
	refs.mangaBox?.focus();
});
/** 灏嗗嚱鏁扮殑 state 鍙傛暟鍙樹负鍙€?*/
const withOptionalState = (fn) => (...args) => {
	if (args.length < fn.length) {
		let result;
		setState((state) => {
			result = fn(...[...args, state]);
		});
		return result;
	}
	return fn(...args);
};
const closeScrollLock = helper.debounce(() => setState("scrollLock", false), 100);
/** 鎵撳紑婊氬姩閿侊紝骞跺湪涔嬪悗鑷姩鍏抽棴 */
const openScrollLock = withOptionalState((state) => {
	state.scrollLock = true;
	closeScrollLock();
});
const bindOption = (...path) => ({
	value: helper.byPath(store.option, path),
	onChange: (val) => setOption((draftOption) => helper.byPath(draftOption, path, () => val))
});
//#endregion
//#region src/components/Manga/actions/memo/options.ts
/** 褰撳墠鏄惁涓哄苟鎺掑嵎杞存ā寮?*/
const isAbreastMode = helper.createRootMemo(() => store.option.scrollMode.enabled && store.option.scrollMode.abreastMode);
/** 褰撳墠鏄惁涓哄弻椤靛嵎杞存ā寮?*/
const isDoubleMode = helper.createRootMemo(() => store.option.scrollMode.enabled && store.option.scrollMode.doubleMode && !store.option.scrollMode.abreastMode);
/** 褰撳墠鏄惁涓哄崟椤靛嵎杞存ā寮?*/
const isSingleMode = helper.createRootMemo(() => store.option.scrollMode.enabled && !store.option.scrollMode.doubleMode && !store.option.scrollMode.abreastMode);
/** 褰撳墠鏄惁涓烘櫘閫氬嵎杞存ā寮忥紙鍖呭惈浜嗗弻椤靛嵎杞存ā寮忥級 */
const isScrollMode = helper.createRootMemo(() => store.option.scrollMode.enabled && !store.option.scrollMode.abreastMode);
/** 褰撳墠鏄惁姝ｅ湪鍗疯酱妯″紡涓嬩娇鐢ㄨ嚜鍔ㄧ缉鏀惧€?*/
const isUseAutoScale = helper.createRootMemo(() => isScrollMode() && typeof store.option.scrollMode.adjustToWidth === "number");
/** 褰撳墠鏄惁寮€鍚簡璇嗗埆鑳屾櫙鑹?*/
const isEnableBg = helper.createRootMemo(() => store.option.imgRecognition.enabled && store.option.imgRecognition.background);
/** 褰撳墠鏄惁寮€鍚簡鍥惧儚鏀惧ぇ */
const isUpscale = helper.createRootMemo(() => !store.isMobile && store.option.imgRecognition.enabled && store.option.imgRecognition.upscale);
/** 鏍规嵁瑙嗗尯瀹介珮鍒ゆ柇鍗曞弻椤垫ā寮?*/
const autoPageNum = helper.createThrottleMemo(() => store.rootSize.width >= store.rootSize.height ? 2 : 1);
/** 褰撳墠浣跨敤鐨勫崟鍙岄〉妯″紡 */
const pageNum = helper.createRootMemo(() => store.option.pageNum || autoPageNum());
/** 鏄惁涓哄崟椤垫ā寮?*/
const isOnePageMode = helper.createRootMemo(() => {
	if (store.isMobile || store.imgList.length <= 1) return true;
	if (store.option.scrollMode.enabled) {
		if (store.option.scrollMode.abreastMode) return true;
		return !store.option.scrollMode.doubleMode;
	}
	return pageNum() === 1;
});
//#endregion
//#region src/components/Manga/actions/memo/img.ts
const imgList = helper.createRootMemo(() => store.imgList.map((url) => store.imgMap[url]));
/** 褰撳墠鏄剧ず椤甸潰 */
const activePage = helper.createRootMemo(() => store.pageList[store.activePageIndex] ?? []);
/** 褰撳墠鏄剧ず鐨勭涓€寮犲浘鐗囩殑 index */
const activeImgIndex = helper.createRootMemo(() => activePage().find((i) => i !== -1) ?? 0);
/** 褰撳墠鎵€澶勭殑鍥剧墖娴?*/
const nowFillIndex = helper.createRootMemo(() => findFillIndex(activeImgIndex(), store.fillEffect));
/** 棰勫姞杞介〉鏁?*/
const preloadNum = helper.createRootMemo(() => ({
	back: store.option.preloadPageNum,
	front: Math.floor(store.option.preloadPageNum / 2)
}));
/** 鑾峰彇鍥剧墖鍒楄〃涓寚瀹氬睘鎬х殑涓綅鏁?*/
const getImgMedian = (sizeFn) => {
	const list = imgList().filter((img) => img.loadType === "loaded" && img.width).map(sizeFn).toSorted((a, b) => a - b);
	if (list.length < 3) return null;
	return list[Math.floor(list.length / 2)];
};
/** 鍥剧墖鍗犱綅灏哄 */
const placeholderSize = helper.createThrottleMemo(() => ({
	width: getImgMedian((img) => img.width) ?? 800,
	height: getImgMedian((img) => img.height) ?? 1200
}), 500);
/** 鍗疯酱妯″紡涓嬬殑鍥剧墖缂╂斁姣斾緥 */
const scrollModeScale = helper.createRootMemo(() => {
	if (!isUseAutoScale()) return store.option.scrollMode.imgScale;
	return store.option.scrollMode.adjustToWidth / placeholderSize().width;
});
//#endregion
//#region src/components/Manga/actions/memo/abreastScroll.ts
/** 骞舵帓鍗疯酱妯″紡涓嬬殑鍏ㄥ眬婊氬姩濉厖 */
const [abreastScrollFill, _setAbreastScrollFill] = solid_js.createSignal(0);
/** 骞舵帓鍗疯酱妯″紡涓嬬殑姣忓垪甯冨眬 */
const abreastArea = helper.createRootMemo((prev) => {
	if (!isAbreastMode()) return prev;
	const columns = [[]];
	const position = {};
	let length = 0;
	const rootHeight = store.rootSize.height;
	if (!rootHeight || store.imgList.length === 0) return {
		columns,
		position,
		length
	};
	const repeatHeight = rootHeight * store.option.scrollMode.abreastDuplicate;
	/** 褰撳墠鍥剧墖鍦ㄥ綋鍓嶅垪鐨勬墍鍦ㄩ珮搴?*/
	let top = abreastScrollFill();
	while (top > rootHeight) {
		top -= rootHeight - repeatHeight;
		columns.push([]);
	}
	for (let i = 0; i < store.imgList.length; i++) {
		const img = getImg(i);
		const imgPosition = [];
		const imgHeight = img.size.height;
		length += imgHeight;
		let height = imgHeight;
		while (height > 0) {
			columns.at(-1).push(i);
			imgPosition.push({
				column: columns.length - 1,
				top
			});
			if (top < 0 && imgPosition.length > 1) top = 0;
			const availableHeight = rootHeight - top;
			top += height;
			height -= availableHeight;
			if (top < rootHeight) continue;
			columns.push([]);
			top = height - imgHeight;
			if (!repeatHeight || columns.length === 1) continue;
			top += repeatHeight;
			height = Math.min(imgHeight, height + repeatHeight);
			/** 涓轰簡澶嶇幇鑰屽嚭鐜扮殑绌虹櫧閮ㄥ垎楂樺害 */
			let emptyTop = top;
			let prevImgIndex = i;
			while (prevImgIndex >= 1 && emptyTop > 0) {
				prevImgIndex -= 1;
				columns.at(-1).push(prevImgIndex);
				const prevImgHeight = getImg(prevImgIndex).size.height;
				emptyTop -= prevImgHeight;
				position[prevImgIndex].push({
					column: columns.length - 1,
					top: emptyTop
				});
			}
		}
		position[i] = imgPosition;
	}
	return {
		columns,
		position,
		length
	};
}, {
	columns: [],
	position: {},
	length: 0
});
/** 澶村熬婊氬姩鐨勯檺鍒跺€?*/
const scrollFillLimit = helper.createRootMemo(() => abreastArea().length - store.rootSize.height);
const setAbreastScrollFill = (val) => _setAbreastScrollFill(helper.clamp(-scrollFillLimit(), val, scrollFillLimit()));
/** 骞舵帓鍗疯酱妯″紡涓嬬殑鍒楀搴?*/
const abreastColumnWidth = helper.createRootMemo(() => isAbreastMode() ? placeholderSize().width * store.option.scrollMode.imgScale : 0);
/** 骞舵帓鍗疯酱妯″紡涓嬪綋鍓嶈鏄剧ず鐨勫垪 */
const abreastShowColumn = helper.createThrottleMemo(() => {
	if (!isAbreastMode() || abreastArea().columns.length === 0) return {
		start: 0,
		end: 0
	};
	const columnWidth = abreastColumnWidth() + store.option.scrollMode.spacing * 7;
	return {
		start: helper.clamp(0, Math.floor(store.page.offset.x.px / columnWidth), abreastArea().columns.length - 1),
		end: helper.clamp(0, Math.floor((store.page.offset.x.px + store.rootSize.width) / columnWidth), abreastArea().columns.length - 1)
	};
});
/** 骞舵帓鍗疯酱妯″紡涓嬬殑婕敾娴佸搴?*/
const abreastContentWidth = helper.createRootMemo(() => abreastArea().columns.length * abreastColumnWidth() + (abreastArea().columns.length - 1) * store.option.scrollMode.spacing * 7);
/** 骞舵帓鍗疯酱妯″紡涓嬬殑鏈€澶ф粴鍔ㄨ窛绂?*/
const abreastScrollWidth = helper.createRootMemo(() => abreastContentWidth() - store.rootSize.width);
/** 骞舵帓鍗疯酱妯″紡涓嬫瘡涓浘鐗囨墍鍦ㄤ綅缃殑鏍峰紡 */
const imgAreaStyle = helper.createRootMemo(() => {
	if (!isAbreastMode() || store.gridMode) return "";
	let styleText = "";
	for (const index of store.imgList.keys()) {
		let imgNum = 0;
		for (const { column, top } of abreastArea().position[index] ?? []) {
			const itemStyle = \`grid-area: _\${column} !important; transform: translateY(\${top}px);\`;
			styleText += \`#_\${index}_\${imgNum} { \${itemStyle} }\\n\`;
			imgNum += 1;
		}
	}
	return styleText;
});
//#endregion
//#region src/components/Manga/actions/image.ts
/** 閲嶆柊璁＄畻鍥剧墖鎺掑垪 */
const updatePageData = (state) => {
	const lastActiveImgIndex = activeImgIndex();
	let newPageList = [];
	newPageList = isOnePageMode() ? state.imgList.map((_, i) => [i]) : handleComicData(state.imgList.map((url) => state.imgMap[url]), state.fillEffect, state.option.imgRecognition.pageFill);
	if (helper.isEqual(state.pageList, newPageList)) return;
	state.pageList = newPageList;
	if (lastActiveImgIndex !== activeImgIndex()) {
		const newActivePageIndex = state.pageList.findIndex((page) => page.includes(lastActiveImgIndex));
		if (newActivePageIndex !== -1) state.activePageIndex = newActivePageIndex;
	}
};
updatePageData.throttle = helper.throttle(() => setState(updatePageData), 100);
/**
* 灏嗗鐞嗗浘鐗囩殑鐩稿叧鍙橀噺鎭㈠鍒板垵濮嬬姸鎬?*
* 蹇呴』鎸夌収浠ヤ笅椤哄簭璋冪敤
* 1. 淇敼 imgList
* 2. resetImgState
* 3. updatePageData
*/
const resetImgState = (state) => {
	if (state.imgList.length === 0) {
		state.fillEffect = { "-1": true };
		return;
	}
	if (typeof state.fillEffect["-1"] === "boolean") state.fillEffect["-1"] = state.option.firstPageFill && state.imgList.length > 3;
};
helper.createEffectOn([pageNum, isOnePageMode], () => setState(updatePageData));
//#endregion
//#region src/components/Manga/actions/memo/observer.ts
/** 璁板綍姣忓紶鍥剧墖鎵€鍦ㄧ殑椤甸潰 */
const imgPageMap = helper.createRootMemo(() => {
	const map = {};
	for (let i = 0; i < store.pageList.length; i++) for (const imgIndex of store.pageList[i]) if (imgIndex !== -1) map[imgIndex] = i;
	return map;
});
/** 婊氬姩璺濈 */
const scrollTop = helper.createRootMemo(() => isAbreastMode() ? store.page.offset.x.px : store.scrollTop);
const bindScrollTop = (dom) => {
	dom.addEventListener("scroll", () => {
		if (helper.approx(dom.scrollTop, store.scrollTop)) return;
		setState("scrollTop", dom.scrollTop);
	}, { passive: true });
};
const darkModeQuery = matchMedia("(prefers-color-scheme: dark)");
const autoSwitchDarkMode = (query) => {
	if (!store.option.autoDarkMode) return;
	if (query.matches === store.option.darkMode) return;
	setState("option", "darkMode", query.matches);
};
darkModeQuery.addEventListener("change", autoSwitchDarkMode);
autoSwitchDarkMode(darkModeQuery);
helper.createEffectOn(() => store.option.autoDarkMode, () => autoSwitchDarkMode(darkModeQuery));
helper.createEffectOn(() => store.rootSize.width, (width) => {
	const isMobile = helper.inRange(1, width, 800);
	if (isMobile === store.isMobile) return;
	setState((state) => {
		state.isMobile = isMobile;
		resetImgState(state);
		updatePageData(state);
	});
});
//#endregion
//#region src/components/Manga/actions/memo/scrollMode.ts
/** 鍗疯酱妯″紡涓嬬殑姣忛〉楂樺害 */
const pageHeightList = helper.createRootMemo(() => {
	if (!isScrollMode()) return [];
	if (!isDoubleMode()) return imgList().map((img) => img.size.height ?? 0);
	const doubleWidth = store.rootSize.width / 2;
	return store.pageList.map((indexs) => {
		if (indexs.length === 1) return getImg(indexs[0]).size.height;
		let targetImg;
		for (const i of indexs) {
			if (i === -1) continue;
			const img = getImg(i);
			if (!targetImg || img.size.height > targetImg.size.height) targetImg = img;
		}
		if (!targetImg) throw new Error("鎵句笉鍒板浘鐗?);
		if (targetImg.size.width < doubleWidth && store.option.scrollMode.adjustToWidth === "disable") return targetImg.size.height;
		return targetImg.size.height * (doubleWidth / targetImg.size.width);
	});
});
/** 鍗疯酱妯″紡涓嬫瘡椤典綅缃?*/
const pageTopList = helper.createRootMemo(() => {
	if (!isScrollMode()) return [];
	const list = Array.from({ length: store.pageList.length });
	for (let top = 0, i = 0; i < store.pageList.length; i++) {
		list[i] = top;
		top += pageHeightList()[i] + store.option.scrollMode.spacing * 7;
	}
	return list;
});
/** 鍗疯酱妯″紡涓嬫极鐢绘祦鐨勬€婚珮搴?*/
const contentHeight = helper.createRootMemo(() => {
	if (!isScrollMode()) return 0;
	return (pageTopList().at(-1) ?? 0) + (pageHeightList().at(-1) ?? 0);
});
/** 鑾峰彇鍗疯酱妯″紡涓嬫寚瀹氶〉鐨勪綅缃?*/
const getPageTop = (index) => {
	if (Reflect.has(pageTopList(), index)) return pageTopList()[index];
	if (index < 0) return 0;
	return contentHeight();
};
/** 鎵惧埌鍗疯酱妯″紡涓嬫寚瀹氶珮搴︿笂鏄剧ず鐨勯〉闈?*/
const findTopPage = (top, initIndex = 0) => {
	if (top > contentHeight()) return pageTopList().length - 1;
	for (let i = initIndex; i < pageTopList().length; i++) if (pageTopList()[i] > top) return i === 0 ? 0 : i - 1;
	return pageTopList().length - 1;
};
//#endregion
//#region src/components/Manga/actions/memo/scroll.ts
/** 婊氬姩鍐呭鐨勬粴鍔ㄨ繘搴?*/
const scrollProgress = helper.createRootMemo(() => {
	if (store.option.scrollMode.enabled) return scrollTop();
	return store.activePageIndex;
});
/** 婊氬姩鍐呭鐨勬€婚暱搴?*/
const scrollLength = helper.createRootMemo(() => {
	if (store.option.scrollMode.enabled) {
		if (store.option.scrollMode.abreastMode) return abreastContentWidth();
		return contentHeight();
	}
	return store.pageList.length;
});
/** 婊氬姩鍐呭鐨勬粴鍔ㄨ繘搴︾櫨鍒嗘瘮 */
const scrollPercentage = helper.createRootMemo(() => scrollProgress() / scrollLength());
/** 褰撳墠鏄惁宸茬粡婊氬姩鍒伴《閮?*/
const isTop = helper.createRootMemo(() => scrollPercentage() === 0);
/** 婊氬姩鏉″厓绱犵殑闀垮害 */
const scrollDomLength = helper.createRootMemo(() => Math.max(store.scrollbarSize.width, store.scrollbarSize.height));
/** 婊氬姩鏉℃粦鍧楅暱搴?*/
const sliderHeight = helper.createRootMemo(() => {
	let itemLength = 1;
	if (isScrollMode()) itemLength = store.rootSize.height;
	if (isAbreastMode()) itemLength = store.rootSize.width;
	return itemLength / scrollLength();
});
/** 褰撳墠鏄惁宸茬粡婊氬姩鍒板簳閮?*/
const isBottom = helper.createRootMemo(() => scrollPercentage() + sliderHeight() >= .9999);
/** 婊氬姩鏉℃粦鍧楃殑涓績鐐归珮搴?*/
const sliderMidpoint = helper.createRootMemo(() => scrollDomLength() * (scrollPercentage() + sliderHeight() / 2));
/** 婊氬姩鏉℃粦鍧楃殑浣嶇疆 */
const sliderTop = helper.createRootMemo(() => \`\${scrollPercentage() * scrollDomLength()}px\`);
/** 婊氬姩鏉′綅缃?*/
const scrollPosition = helper.createRootMemo(() => {
	if (store.option.scrollbar.position === "auto") {
		if (store.isMobile) return "top";
		if (isAbreastMode()) return "bottom";
		return store.defaultImgType === "long" ? "bottom" : "right";
	}
	return store.option.scrollbar.position;
});
//#endregion
//#region src/components/Manga/actions/endPage.ts
/** 澶勭悊灏藉ご缈婚〉銆傝繑鍥炲綋鍓嶆槸鍚﹀凡鎶佃揪灏藉ご */
const handleEndTurnPage = withOptionalState((dir, state) => {
	if (dir === "prev") switch (state.show.endPage) {
		case "start":
			if (state.scrollLock || store.option.scroolEnd !== "auto") return true;
			state.prop.onPrev?.();
			return true;
		case "end":
			state.show.endPage = void 0;
			return true;
		default: if (isTop()) {
			if (state.scrollLock) return true;
			if (!state.prop.onExit || !state.prop.onPrev || store.option.scroolEnd !== "auto") return true;
			state.show.endPage = "start";
			return true;
		}
	}
	else switch (state.show.endPage) {
		case "end":
			if (state.scrollLock || store.option.scroolEnd === "none") return true;
			if (store.option.scroolEnd === "auto" && state.prop.onNext) state.prop.onNext();
			else state.prop.onExit?.(true);
			return true;
		case "start":
			state.show.endPage = void 0;
			return true;
		default: if (isBottom()) {
			if (state.scrollLock) return true;
			if (!state.prop.onExit) return true;
			state.show.endPage = "end";
			return true;
		}
	}
	return false;
});
//#endregion
//#region src/components/Manga/actions/imageRecognition.ts
const handleImgRecognition = async (url, imgEle) => {
	const img = store.imgMap[url];
	if (store.option.imgRecognition.background && img.background === void 0 || store.option.imgRecognition.pageFill && img.blankMargin === void 0) {
		imgEle ??= await helper.wait(() => getImgEle(url), 1e3);
		if (!imgEle) return helper.log.warn("鑾峰彇鍥剧墖鍏冪礌澶辫触");
		const { data, width, height } = helper.getImageData(imgEle);
		initWorker$1();
		return worker_ImageRecognition.default.recognitionImg(comlink.default.transfer(data, [data.buffer]), width, height, url, solid_js_store.unwrap(store.option.imgRecognition));
	}
};
const initWorker$1 = helper.onec(() => {
	const mainFn = {
		log: helper.log,
		updatePageData: helper.throttle(() => setState(updatePageData), 1e3),
		setImg: (url, key, val) => Reflect.has(store.imgMap, url) && setState("imgMap", url, key, val)
	};
	worker_ImageRecognition.default.setMainFn(comlink.default.proxy(mainFn), Object.keys(mainFn));
});
//#endregion
//#region src/components/Manga/actions/imageType.ts
const isWideType = (type) => type === "wide" || type === "long";
const 鍗曢〉姣斾緥 = 1920 / 2 / 1080;
const 妯箙姣斾緥 = 1920 / 1080;
const 鏉℃极姣斾緥 = 1920 / 2 / 1080 / 2;
/** 鏍规嵁姣斾緥鍒ゆ柇鍥剧墖绫诲瀷 */
const getImgType = (img) => {
	const imgRatio = img.width / img.height;
	if (imgRatio <= 鍗曢〉姣斾緥) return imgRatio < 鏉℃极姣斾緥 ? "vertical" : "";
	return imgRatio > 妯箙姣斾緥 ? "long" : "wide";
};
/** 鏇存柊鍥剧墖绫诲瀷銆傝繑鍥炴槸鍚︿慨鏀逛簡鍥剧墖绫诲瀷 */
const updateImgType = (state, draftImg) => {
	const { type } = draftImg;
	if (!draftImg.width || !draftImg.height) return false;
	draftImg.type = getImgType(draftImg);
	if (isWideType(type) !== isWideType(draftImg.type)) updatePageData.throttle();
	return (type ?? state.defaultImgType) !== draftImg.type;
};
/** 鏄惁鑷姩寮€鍚繃鍗疯酱妯″紡 */
let autoScrollMode = false;
helper.createRootEffect((prevIsWide) => {
	if (store.rootSize.width === 0 || store.rootSize.height === 0) return;
	const defaultImgType = getImgType(placeholderSize());
	if (defaultImgType === store.defaultImgType) return prevIsWide;
	const isWide = isWideType(defaultImgType);
	setState((state) => {
		state.defaultImgType = defaultImgType;
		if (defaultImgType === "vertical" && !autoScrollMode && !state.option.scrollMode.enabled) {
			state.option.scrollMode.enabled = true;
			autoScrollMode = true;
			return;
		}
		if (isWide !== prevIsWide) updatePageData(state);
	});
	return isWide;
}, false);
//#endregion
//#region src/components/Manga/actions/imageSize.ts
/** 鑾峰彇鎸囧畾鍥剧墖鐨勬樉绀哄昂瀵?*/
const getImgDisplaySize = (state, img) => {
	let height = img.height ?? placeholderSize().height;
	let width = img.width ?? placeholderSize().width;
	if (!state.option.scrollMode.enabled) return {
		height,
		width
	};
	const setWidth = (w) => {
		height *= w / width;
		width = w;
		return {
			height,
			width
		};
	};
	if (isAbreastMode()) return setWidth(abreastColumnWidth());
	if (state.option.scrollMode.adjustToWidth === "full") return setWidth(state.rootSize.width);
	height *= scrollModeScale();
	width *= scrollModeScale();
	if (width > state.rootSize.width) return setWidth(state.rootSize.width);
	return {
		height,
		width
	};
};
/** 鏇存柊鍥剧墖灏哄 */
const updateImgSize = withOptionalState((url, width, height, state) => {
	const img = state.imgMap[url];
	if (img.width === width && img.height === height) return;
	img.width = width;
	img.height = height;
	img.size = getImgDisplaySize(state, img);
	updateImgType(state, img);
});
helper.createEffectOn([
	imgList,
	() => store.option.scrollMode.enabled,
	() => store.option.scrollMode.abreastMode,
	() => store.option.scrollMode.adjustToWidth,
	scrollModeScale,
	() => store.rootSize,
	placeholderSize
], ([{ length }]) => {
	if (length === 0) return;
	setState((state) => {
		for (const url of state.imgList) state.imgMap[url].size = getImgDisplaySize(state, state.imgMap[url]);
	});
});
//#endregion
//#region src/components/Manga/actions/renderPage.ts
/** 鑾峰彇骞舵帓鍗疯酱妯″紡涓嬫寚瀹氬垪鐨勬寚瀹氬浘鐗?*/
const getAbreastColumnImg = (column, img) => {
	const { columns } = abreastArea();
	return columns[helper.clamp(0, column, columns.length - 1)]?.at(img) ?? 0;
};
/** 璁＄畻鏄剧ず椤甸潰 */
const updateShowRange = (state) => {
	if (scrollLength() === 0) {
		state.showRange = [0, 0];
		state.renderRange = state.showRange;
	} else if (!state.option.scrollMode.enabled) {
		state.showRange = [state.activePageIndex, state.activePageIndex];
		state.renderRange = [helper.clamp(0, state.activePageIndex - 1, state.pageList.length - 1), helper.clamp(0, state.activePageIndex + 1, state.pageList.length - 1)];
	} else if (state.option.scrollMode.abreastMode) {
		const { start, end } = abreastShowColumn();
		state.showRange = [getAbreastColumnImg(start, 0), getAbreastColumnImg(end, -1)];
		state.renderRange = [getAbreastColumnImg(start - 2, 0), getAbreastColumnImg(end + 2, -1)];
	} else {
		const top = scrollTop();
		const bottom = scrollTop() + state.rootSize.height;
		const renderTop = top - state.rootSize.height;
		const rednerBottom = bottom + state.rootSize.height;
		const renderTopImg = findTopPage(renderTop);
		const topImg = findTopPage(top, renderTopImg);
		const bottomImg = findTopPage(bottom, topImg);
		const renderBottomImg = findTopPage(rednerBottom, bottomImg);
		state.showRange = [topImg, bottomImg];
		state.renderRange = [renderTopImg, renderBottomImg];
	}
};
helper.createEffectOn([
	scrollLength,
	() => store.gridMode,
	() => store.option.scrollMode.enabled,
	() => store.activePageIndex,
	() => store.option.scrollMode.abreastMode,
	() => store.rootSize,
	abreastShowColumn,
	scrollTop
], helper.throttle(() => setState(updateShowRange)));
/** 鑾峰彇鎸囧畾鑼冨洿鍐呴〉闈㈡墍鍖呭惈鐨勫浘鐗?*/
const getRangeImgList = (range) => {
	let list;
	if (range[0] === range[1]) list = new Set(store.pageList[range[0]]);
	else {
		list = /* @__PURE__ */ new Set();
		for (const [a, b] of store.pageList.slice(range[0], range[1] + 1)) {
			list.add(a);
			if (b !== void 0) list.add(b);
		}
	}
	list.delete(-1);
	return list;
};
const renderImgList = helper.createRootMemo(() => getRangeImgList(store.renderRange));
const showImgList = helper.createRootMemo(() => getRangeImgList(store.showRange));
/**
* 鍥剧墖鏄剧ず鐘舵€?*
* 0 - 椤甸潰涓殑绗竴寮犲浘鐗?* 1 - 椤甸潰涓殑鏈€鍚庝竴寮犲浘鐗?* '' - 椤甸潰涓殑鍞竴涓€寮犲浘鐗?*/
const imgShowState = helper.createRootMemo(() => {
	if (store.pageList.length === 0) return /* @__PURE__ */ new Map();
	const showRange = store.gridMode ? [0, store.pageList.length - 1] : store.renderRange;
	const stateList = /* @__PURE__ */ new Map();
	for (let [i] = showRange; i <= showRange[1]; i++) {
		const page = store.pageList[i];
		if (!page) continue;
		const [a, b] = page;
		if (b === void 0) stateList.set(a, "");
		else {
			stateList.set(a, 0);
			stateList.set(b, 1);
		}
	}
	return stateList;
});
helper.createEffectOn(() => store.showRange, ([firstPage]) => {
	if (!store.gridMode && store.option.scrollMode.enabled) setState("activePageIndex", firstPage ?? 0);
});
helper.createEffectOn(showImgList, (showImgs) => {
	if (showImgs.size === 0) return;
	store.prop.onShowImgsChange?.(showImgs, imgList());
}, { defer: true });
//#endregion
//#region src/components/Manga/helper.ts
/** 闃绘浜嬩欢鍐掓场 */
const stopPropagation = (e) => {
	e.stopPropagation();
};
/** 浠庡ご寮€濮嬫挱鏀惧厓绱犵殑鍔ㄧ敾 */
const playAnimation = (e) => {
	if (!e) return;
	for (const animation of e.getAnimations()) {
		animation.cancel();
		animation.play();
	}
};
const downloadImg = async (imgUrl, details, retryNum = 0) => {
	const url = store.imgMap[imgUrl]?.blobUrl ?? imgUrl;
	if (url.startsWith("blob:")) return (await fetch(url)).blob();
	const res = await request.downloadImg(url, details, retryNum);
	if (Reflect.has(store.imgMap, imgUrl)) setState("imgMap", imgUrl, "blobUrl", URL.createObjectURL(res));
	return res;
};
//#endregion
//#region src/components/Manga/actions/translation/TranslationTask.ts
/**
* 缈昏瘧浠诲姟鍩虹被
*
* 姣忎釜缈昏瘧浠诲姟閮芥槸鐙珛鐨勫疄渚嬶紝璐熻矗鍗曞紶鍥剧墖鐨勫畬鏁寸炕璇戞祦绋嬨€?* 瀛愮被闇€瑕佸疄鐜?{@link work} 鏂规硶鏉ュ畾涔夊叿浣撶殑缈昏瘧閫昏緫銆?*/
var TranslationTask = class {
	url;
	constructor(url) {
		this.url = url;
	}
	/** 鏇存柊褰撳墠鍥剧墖鐨勭炕璇戠姸鎬佹秷鎭?*/
	setMessage(message) {
		setState("imgMap", this.url, "translationMessage", message);
	}
	/** 涓嬭浇鍥剧墖 */
	async download(url = this.url, details) {
		try {
			return await downloadImg(url, details);
		} catch (error) {
			helper.log.error(error);
			store.prop.onImgError?.(url);
			throw new Error(helper.t("translation.tip.download_img_failed"), { cause: error });
		}
	}
	/** 缂╁皬杩囧ぇ鐨勫浘鐗囷紙瓒呰繃 4096px锛?*/
	async resize(blob) {
		const img = store.imgMap[this.url];
		const w = img.width;
		const h = img.height;
		if (w <= 4096 && h <= 4096) return blob;
		try {
			const scale = Math.min(4096 / w, 4096 / h);
			const width = Math.floor(w * scale);
			const height = Math.floor(h * scale);
			const imgDom = await helper.waitImgLoad(URL.createObjectURL(blob));
			const canvas = new OffscreenCanvas(width, height);
			const ctx = canvas.getContext("2d");
			ctx.imageSmoothingQuality = "high";
			ctx.drawImage(imgDom, 0, 0, width, height);
			URL.revokeObjectURL(imgDom.src);
			return await helper.canvasToBlob(canvas);
		} catch (error) {
			helper.log.error("缂╁皬鍥剧墖灏哄鏃跺嚭閿?, error);
			return blob;
		}
	}
	/**
	* 鎵ц缈昏瘧浠诲姟
	* @returns 缈昏瘧鍚庣殑鍥剧墖 URL
	*/
	async run() {
		try {
			await this.init();
			this.setMessage(helper.t("translation.tip.img_downloading"));
			let blob = await this.download();
			blob = await this.resize(blob);
			return await this.work(blob);
		} catch (error) {
			this.setMessage(error.message);
			helper.log.error("缈昏瘧鍑洪敊", error);
			components_Toast.toast.error(error.message);
			throw error;
		}
	}
	/** 鍒濆鍖栦换鍔★紝瀛愮被鍙噸鍐?*/
	async init() {}
};
//#endregion
//#region src/components/Manga/actions/translation/translator/Cotrans/index.ts
/**
* Cotrans 缈昏瘧浠诲姟瀹炵幇
*
* 浣跨敤 cotrans.touhou.ai 鍏叡鏈嶅姟杩涜鍥剧墖缈昏瘧銆?* 閫氳繃 WebSocket 鎴栬疆璇㈣幏鍙栫炕璇戠姸鎬侊紝鏈€缁堝悎骞跺師鍥惧拰缈昏瘧钂欑増銆?*/
/**
* Cotrans 缈昏瘧浠诲姟
*
* 浣跨敤 cotrans.touhou.ai 鍏叡缈昏瘧鏈嶅姟銆?* 杩斿洖鐨勬槸缈昏瘧钂欑増锛岄渶瑕佷笌鍘熷浘鍚堝苟銆?*/
var Cotrans = class Cotrans extends TranslationTask {
	/** 鍒涘缓涓婁紶琛ㄥ崟鏁版嵁 */
	static createFormData(blob) {
		const formData = new FormData();
		const fileName = \`image.\${blob.type.split("/").at(-1)}\`;
		const file = new File([blob], fileName, { type: blob.type });
		const options = store.option.translation.cotrans;
		formData.append("file", file);
		formData.append("mime", file.type);
		formData.append("size", sizeDict[options.detector.detection_size]);
		formData.append("detector", options.detector.detector);
		formData.append("direction", options.render.direction);
		formData.append("translator", options.translator.translator);
		formData.append("target_language", options.translator.target_lang);
		formData.append("retry", \`\${store.option.translation.forceRetry}\`);
		return formData;
	}
	/** 涓婁紶鍥剧墖鍒?Cotrans 鏈嶅姟鍣?*/
	async upload(blob) {
		try {
			return await request.request("https://api.cotrans.touhou.ai/task/upload/v1", {
				method: "POST",
				data: Cotrans.createFormData(blob)
			});
		} catch (error) {
			helper.log.error(error);
			throw new Error(helper.t("translation.tip.upload_error"), { cause: error });
		}
	}
	/** 瑙ｆ瀽涓婁紶鍝嶅簲 */
	parse(json) {
		let data;
		try {
			data = JSON.parse(json);
		} catch (error) {
			throw new Error(\`\${helper.t("translation.tip.upload_return_error")}锛歕${json}\`, { cause: error });
		}
		if ("error_id" in data) throw new Error(\`\${helper.t("translation.tip.upload_return_error")}锛歕${data.error_id}\`);
		if (!data.id) throw new Error(helper.t("translation.tip.id_not_returned"));
		return data;
	}
	/** 澶勭悊 WebSocket 鎴栬疆璇㈣繑鍥炵殑娑堟伅 */
	handleMessage(msg) {
		switch (msg.type) {
			case "result": return msg.result.translation_mask;
			case "pending":
				this.setMessage(helper.t("translation.tip.pending", { pos: msg.pos }));
				break;
			case "status":
				this.setMessage(helper.t(\`translation.status.\${msg.status}\`) || msg.status);
				break;
			case "error": throw new Error(\`\${helper.t("translation.status.error")}锛歩d \${msg.error_id}\`);
			case "not_found": throw new Error(\`\${helper.t("translation.status.error")}锛歂ot Found\`);
		}
	}
	/** 閫氳繃杞绛夊緟缈昏瘧瀹屾垚 */
	async waitByPolling(id) {
		let result;
		while (result === void 0) {
			const res = await request.request(\`https://api.cotrans.touhou.ai/task/\${id}/status/v1\`, { responseType: "json" });
			result = this.handleMessage(res.response);
			await helper.sleep(1e3);
		}
		return result;
	}
	/** 閫氳繃 WebSocket 绛夊緟缈昏瘧瀹屾垚锛屽け璐ユ椂闄嶇骇涓鸿疆璇?*/
	wait(id) {
		const ws = new WebSocket(\`wss://api.cotrans.touhou.ai/task/\${id}/event/v1\`);
		if (ws.readyState > 1) return this.waitByPolling(id);
		return new Promise((resolve, reject) => {
			ws.onmessage = (e) => {
				try {
					const result = this.handleMessage(JSON.parse(e.data));
					if (result) resolve(result);
				} catch (error) {
					reject(error);
				}
			};
		});
	}
	/** 灏嗗師鍥句笌缈昏瘧钂欑増鍚堝苟 */
	async mergeImage(rawImage, maskUri) {
		const img = await helper.waitImgLoad(URL.createObjectURL(rawImage));
		const canvas = new OffscreenCanvas(img.naturalWidth, img.naturalHeight);
		const canvasCtx = canvas.getContext("2d");
		canvasCtx.drawImage(img, 0, 0);
		const mask = await helper.waitImgLoad(URL.createObjectURL(await this.download(maskUri)));
		canvasCtx.drawImage(mask, 0, 0);
		return await helper.canvasToBlob(canvas);
	}
	async work(blob) {
		this.setMessage(helper.t("translation.tip.upload"));
		const res = await this.upload(blob);
		const data = this.parse(res.responseText);
		const translation_mask = data.result?.translation_mask || await this.wait(data.id);
		const result = await this.mergeImage(blob, translation_mask);
		return URL.createObjectURL(result);
	}
};
//#endregion
//#region src/components/Manga/actions/translation/translator/MangaImageTranslator/helper.ts
/**
* MangaImageTranslator 杈呭姪鍑芥暟
*
* 鎻愪緵 API 璇锋眰銆乁RL 鏋勫缓绛夐€氱敤鍔熻兘銆?*/
/** 鑾峰彇 API 鍩虹 URL锛屼紭鍏堜娇鐢ㄨ嚜瀹氫箟鍦板潃 */
const apiUrl = () => store.option.translation.mit?.localUrl?.replace(/\\/$/, "") || "http://127.0.0.1:5003";
/** ngrok 浠ｇ悊闇€瑕佺殑鐗规畩璇锋眰澶?*/
const headers$1 = helper.createRootMemo(() => {
	if (apiUrl().includes(".ngrok-free.")) return { "ngrok-skip-browser-warning": "69420" };
});
/**
* 鍙戦€?API 璇锋眰
* @param url API 璺緞锛堜笉鍚熀纭€ URL锛?* @param details 璇锋眰閰嶇疆
* @param retryNum 閲嶈瘯娆℃暟
*/
const api = (url, details, retryNum = 0) => request.request(\`\${apiUrl()}\${url}\`, {
	...details,
	headers: {
		...details?.headers,
		...headers$1()
	}
}, retryNum);
//#endregion
//#region src/components/Manga/actions/translation/translator/MangaImageTranslator/index.ts
/**
* MangaImageTranslator 缈昏瘧浠诲姟瀹炵幇
*
* 鏀寔鑷儴缃茬殑 manga-image-translator 鏈嶅姟銆?* 鍚屾椂鍏煎鏂版棫鐗堟湰 API锛屾敮鎸佹祦寮忓拰闈炴祦寮忓搷搴斻€?*
* API 鏂囨。: http://0.0.0.0:5003/docs
*/
/**
* MangaImageTranslator 缈昏瘧浠诲姟
*
* 鏀寔鑷儴缃叉湇鍔★紝鍙娇鐢ㄨ嚜瀹氫箟鏈嶅姟鍣ㄥ湴鍧€銆?* 浼樺厛浣跨敤娴佸紡 API 鑾峰彇瀹炴椂缈昏瘧鐘舵€併€?*/
var MIT = class MIT extends TranslationTask {
	isOldVersion = false;
	/** 鍒涘缓涓婁紶琛ㄥ崟鏁版嵁 */
	static createFormData(blob, isOldVersion) {
		const formData = new FormData();
		const fileName = \`image.\${blob.type.split("/").at(-1)}\`;
		const file = new File([blob], fileName, { type: blob.type });
		const { localUrl: _, ...options } = store.option.translation.mit;
		if (isOldVersion) {
			formData.append("file", file);
			formData.append("mime", file.type);
			formData.append("size", sizeDict[options.detector.detection_size]);
			formData.append("detector", options.detector.detector);
			formData.append("direction", options.render.direction);
			formData.append("translator", options.translator.translator);
			formData.append("target_lang", options.translator.target_lang);
			formData.append("retry", \`\${store.option.translation.forceRetry}\`);
		} else {
			formData.append("image", file);
			formData.append("config", JSON.stringify(options));
		}
		return formData;
	}
	async init() {
		const res = await api("/", { errorText: \`\${helper.t("setting.option.paragraph_translation")} - \${helper.t("alert.server_connect_failed")}\` });
		this.isOldVersion = res.responseText.includes("value=\\"S\\">1024px</");
	}
	/** 鏃х増 API锛氫笂浼犲浘鐗囪幏鍙栦换鍔?ID */
	async oldUpload(blob) {
		try {
			return (await api("/submit", {
				method: "POST",
				responseType: "json",
				data: MIT.createFormData(blob, true)
			})).response.task_id;
		} catch (error) {
			helper.log.error(error);
			throw new Error(helper.t("translation.tip.upload_error"), { cause: error });
		}
	}
	/** 鏃х増 API锛氱瓑寰呯炕璇戝畬鎴?*/
	async oldWork(blob) {
		const task_id = await this.oldUpload(blob);
		let errorNum = 0;
		let taskState;
		while (!taskState?.finished) try {
			await helper.sleep(200);
			taskState = (await api(\`/task-state?taskid=\${task_id}\`, { responseType: "json" })).response;
			this.setMessage(helper.t(\`translation.status.\${taskState.state}\`) || taskState.state);
		} catch (error) {
			helper.log.error(error);
			if (errorNum > 5) throw new Error(helper.t("translation.tip.check_img_status_failed"), { cause: error });
			errorNum += 1;
		}
		const res = await this.download(\`\${apiUrl()}/result/\${task_id}\`, { headers: headers$1() });
		return URL.createObjectURL(res);
	}
	/** 鏂扮増 API锛氶€氳繃娴佸紡鎺ュ彛涓婁紶 */
	async uploadByStream(blob) {
		const res = await fetch(\`\${apiUrl()}/translate/with-form/image/stream\`, {
			method: "POST",
			headers: headers$1(),
			body: MIT.createFormData(blob, false)
		});
		if (res.status !== 200 || !res.body) throw new Error(helper.t("translation.status.error"));
		return res.body.getReader();
	}
	/** 瑙ｆ瀽娴佸紡鍝嶅簲锛岀瓑寰呯炕璇戝畬鎴?*/
	async wait(reader) {
		const decoder = new TextDecoder("utf-8");
		let buffer = new Uint8Array();
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			buffer = Uint8Array.from([...buffer, ...value]);
			while (buffer.length >= 5) {
				const totalSize = 5 + new DataView(buffer.buffer).getUint32(1, false);
				if (buffer.length < totalSize) break;
				const data = buffer.slice(5, totalSize);
				switch (buffer[0]) {
					case 0: return URL.createObjectURL(new Blob([data], { type: "image/png" }));
					case 1: {
						const status = decoder.decode(data);
						if (!status.includes(":")) this.setMessage(helper.t(\`translation.status.\${status}\`) || status);
						break;
					}
					case 2: throw new Error(\`\${helper.t("translation.status.error")}: \${decoder.decode(data)}\`);
					case 3: {
						const pos = decoder.decode(data);
						if (pos !== "0") {
							this.setMessage(helper.t("translation.tip.pending", { pos }));
							break;
						}
					}
					case 4:
						this.setMessage(helper.t("translation.status.pending"));
						break;
				}
				buffer = buffer.slice(totalSize);
			}
		}
		throw new Error(helper.t("translation.status.error"));
	}
	/** 鏂扮増 API锛氶潪娴佸紡鎺ュ彛锛堝綋娴佸紡鎺ュ彛涓嶅彲鐢ㄦ椂闄嶇骇浣跨敤锛?*/
	async uploadByNoStream(blob) {
		this.setMessage(helper.t("translation.tip.translating"));
		const res = await api("/translate/with-form/image", {
			method: "POST",
			responseType: "blob",
			fetch: false,
			timeout: 1e3 * 60 * 10,
			data: MIT.createFormData(blob, false),
			errorText: helper.t("translation.tip.upload_error")
		});
		return URL.createObjectURL(res.response);
	}
	async work(blob) {
		this.setMessage(helper.t("translation.tip.upload"));
		if (this.isOldVersion) return await this.oldWork(blob);
		try {
			const reader = await this.uploadByStream(blob);
			return await this.wait(reader);
		} catch (error) {
			if (error.message.includes("Failed to fetch")) return await this.uploadByNoStream(blob);
			throw error;
		}
	}
};
/** 鏈嶅姟鏀寔鐨勭炕璇戝櫒鍒楄〃 */
const [mitTranslators, setMitTranslators] = helper.createEqualsSignal([]);
/** 浠庢湇鍔″櫒鑾峰彇鍙敤缈昏瘧鍣ㄥ垪琛?*/
const updateMitTranslators = async (noTip = false) => {
	if (store.option.translation.provider !== "manga-image-translator") return;
	try {
		const res = await api("/", {
			noTip,
			errorText: \`\${helper.t("setting.option.paragraph_translation")} - \${helper.t("alert.server_connect_failed")}\`
		});
		const translatorsText = /(?<=validTranslators: )\\[.+?\\](?=,)/s.exec(res.responseText)?.[0];
		if (!translatorsText) return;
		setMitTranslators(JSON.parse(translatorsText.replaceAll(/\\s|,\\s*(?=\\])/g, \`\`).replaceAll(\`'\`, \`"\`)).map((name) => [name, helper.t(\`translation.translator.\${name}\`) || name]));
	} catch (error) {
		helper.log.error(helper.t("translation.tip.get_translator_list_error"), error);
		setMitTranslators([]);
	}
	if (!mitTranslators().some(([val]) => val === store.option.translation.mit.translator.translator)) setOption((draftOption) => {
		draftOption.translation.mit.translator.translator = mitTranslators()[0]?.[0];
	});
};
helper.createEffectOn([
	() => store.option.translation.provider,
	() => store.option.translation.mit.localUrl,
	helper.lang
], ([server]) => {
	if (server === "manga-image-translator" && store.imgList.length > 0) return updateMitTranslators(true);
}, { defer: true });
//#endregion
//#region src/components/Manga/index.module.css
const classes$1 = {
	"img": "img___7ajV4",
	"show": "show___HzwUa",
	"mangaFlow": "mangaFlow___jMZgq",
	"mangaBox": "mangaBox___48Jek",
	"root": "root___Hf5H2",
	"gridModeTip": "gridModeTip___DgsOa",
	"endPage": "endPage___iOZmk",
	"endPageBody": "endPageBody___g-dz-",
	"tip": "tip___fyxqg",
	"jello": "jello___wXBLg",
	"comments": "comments___9ITQv",
	"toolbar": "toolbar___RMjHL",
	"toolbarPanel": "toolbarPanel___XYjgc",
	"toolbarBg": "toolbarBg___i4oTA",
	"SettingPanelPopper": "SettingPanelPopper___uEBz3",
	"SettingPanel": "SettingPanel___ZRvFB",
	"SettingBlock": "SettingBlock___qxNyt",
	"SettingBlockBody": "SettingBlockBody___Wirnd",
	"SettingBlockSubtitle": "SettingBlockSubtitle___cv0Ji",
	"SettingsItem": "SettingsItem___aJhRD",
	"SettingsShowItem": "SettingsShowItem___l-D2E",
	"SettingsItemName": "SettingsItemName___UP6zJ",
	"SettingsItemSwitch": "SettingsItemSwitch___LVGr9",
	"SettingsItemSwitchRound": "SettingsItemSwitchRound___Ds0B8",
	"SettingsItemIconButton": "SettingsItemIconButton___Cs7BQ",
	"SettingsItemSelect": "SettingsItemSelect___CvFKx",
	"closeCover": "closeCover___qLIp5",
	"SettingsShowItemBody": "SettingsShowItemBody___bgxxq",
	"hotkeys": "hotkeys___uu-Xe",
	"hotkeysItem": "hotkeysItem___d9IKS",
	"hotkeysHeader": "hotkeysHeader___jU7vr",
	"scrollbar": "scrollbar___hLToV",
	"scrollbarPage": "scrollbarPage___qghUs",
	"scrollbarSlider": "scrollbarSlider___r1fWf",
	"scrollbarPoper": "scrollbarPoper___XK5Rk",
	"touchAreaRoot": "touchAreaRoot___UN-W1",
	"touchArea": "touchArea___F6Hkh",
	"hidden": "hidden___rxU-6",
	"invisible": "invisible___cO-hs",
	"beautifyScrollbar": "beautifyScrollbar___lb6kJ"
};
//#endregion
//#region src/components/Manga/components/SettingsItem.tsx
var _tmpl$$45 = /* @__PURE__ */ solid_js_web.template(\`<div><div> <!> \`);
/** 璁剧疆鑿滃崟椤?*/
const SettingsItem = (props) => (() => {
	var _el$ = _tmpl$$45(), _el$2 = _el$.firstChild, _el$5 = _el$2.firstChild.nextSibling;
	_el$5.nextSibling;
	solid_js_web.insert(_el$2, () => props.name, _el$5);
	solid_js_web.insert(_el$, () => props.children, null);
	solid_js_web.effect((_p$) => {
		var _v$ = props.class ? \`\${classes$1.SettingsItem} \${props.class}\` : classes$1.SettingsItem, _v$2 = {
			[props.class ?? ""]: Boolean(props.class?.length),
			...props.classList
		}, _v$3 = props.style, _v$4 = helper.boolDataVal(props.disabled), _v$5 = classes$1.SettingsItemName;
		_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
		_p$.t = solid_js_web.classList(_el$, _v$2, _p$.t);
		_p$.a = solid_js_web.style(_el$, _v$3, _p$.a);
		_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-disabled", _p$.o = _v$4);
		_v$5 !== _p$.i && solid_js_web.className(_el$2, _p$.i = _v$5);
		return _p$;
	}, {
		e: void 0,
		t: void 0,
		a: void 0,
		o: void 0,
		i: void 0
	});
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/SettingsItemSelect.tsx
var _tmpl$$44 = /* @__PURE__ */ solid_js_web.template(\`<select>\`), _tmpl$2$9 = /* @__PURE__ */ solid_js_web.template(\`<option>\`);
/** 閫夋嫨鍣ㄥ紡鑿滃崟椤?*/
const SettingsItemSelect = (props) => {
	let ref;
	solid_js.createEffect(() => {
		ref.value = props.options?.some(([val]) => val === props.value) ? props.value : "";
	});
	return solid_js_web.createComponent(SettingsItem, {
		get name() {
			return props.name;
		},
		get ["class"]() {
			return props.class;
		},
		get classList() {
			return props.classList;
		},
		get children() {
			var _el$ = _tmpl$$44();
			solid_js_web.addEventListener(_el$, "click", () => props.onClick?.());
			_el$.addEventListener("change", (e) => props.onChange(e.target.value));
			var _ref$ = ref;
			typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : ref = _el$;
			solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.For, {
				get each() {
					return props.options;
				},
				children: ([val, label]) => (() => {
					var _el$2 = _tmpl$2$9();
					_el$2.value = val;
					solid_js_web.insert(_el$2, label ?? val);
					return _el$2;
				})()
			}));
			solid_js_web.effect(() => solid_js_web.className(_el$, classes$1.SettingsItemSelect));
			return _el$;
		}
	});
};
//#endregion
//#region src/components/Manga/actions/translation/translator/Cotrans/settings.tsx
var _tmpl$$43 = /* @__PURE__ */ solid_js_web.template(\`<blockquote>\`);
const bindOption$3 = (...args) => bindOption("translation", "cotrans", ...args);
/** Cotrans 璁剧疆缁勪欢 */
const cotransSettings = () => [
	(() => {
		var _el$ = _tmpl$$43();
		solid_js_web.effect(() => _el$.innerHTML = helper.t("setting.translation.cotrans_tip"));
		return _el$;
	})(),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.target_language");
		},
		options: targetLanguageOptions
	}, () => bindOption$3("translator", "target_lang"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.translator");
		},
		get options() {
			return cotransTranslators.map((name) => [name, helper.t(\`translation.translator.\${name}\`) || name]);
		}
	}, () => bindOption$3("translator", "translator"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.direction");
		},
		get options() {
			return [
				["auto", helper.t("setting.translation.options.direction_auto")],
				["horizontal", helper.t("setting.translation.options.direction_horizontal")],
				["vertical", helper.t("setting.translation.options.direction_vertical")]
			];
		}
	}, () => bindOption$3("render", "direction"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.detection_resolution");
		},
		options: [
			["1024", "1024px"],
			["1536", "1536px"],
			["2048", "2048px"],
			["2560", "2560px"]
		]
	}, () => bindOption$3("detector", "detection_size"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.text_detector");
		},
		options: [["default"], ["ctd", "Comic Text Detector"]]
	}, () => bindOption$3("detector", "detector")))
];
//#endregion
//#region src/components/NumberInput.tsx
var _tmpl$$42 = /* @__PURE__ */ solid_js_web.template(\`<span contenteditable data-only-number>\`);
/** 鏁板€艰緭鍏ユ */
const NumberInput = (props) => {
	const handleInput = (e) => {
		const target = e.currentTarget;
		if (props.maxLength === void 0 || target.textContent.length <= props.maxLength) return;
		target.textContent = target.textContent.sliceprops.maxLength;
		target.blur();
	};
	const handleKeyDown = (e) => {
		switch (e.key) {
			case "ArrowUp": return props.onChange((Number(e.target.textContent) * 1e3 + (props.step ?? 1) * 1e3) / 1e3);
			case "ArrowDown": return props.onChange((Number(e.target.textContent) * 1e3 - (props.step ?? 1) * 1e3) / 1e3);
			case "Enter": return e.target.blur();
		}
	};
	return [(() => {
		var _el$ = _tmpl$$42();
		_el$.addEventListener("blur", (e) => {
			try {
				props.onChange(Number(e.currentTarget.textContent) || 0);
			} finally {
				e.currentTarget.textContent = \`\${props.value}\`;
			}
		});
		solid_js_web.addEventListener(_el$, "keydown", handleKeyDown);
		solid_js_web.addEventListener(_el$, "input", handleInput);
		solid_js_web.insert(_el$, () => \`\${props.value}\`);
		return _el$;
	})(), solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return props.suffix;
		},
		get children() {
			return props.suffix;
		}
	})];
};
//#endregion
//#region src/components/Manga/components/SettingsItemNumber.tsx
var _tmpl$$41 = /* @__PURE__ */ solid_js_web.template(\`<div>\`);
/** 鏁板€艰緭鍏ユ鑿滃崟椤?*/
const SettingsItemNumber = (props) => solid_js_web.createComponent(SettingsItem, {
	get name() {
		return props.name;
	},
	get ["class"]() {
		return props.class;
	},
	get classList() {
		return props.classList;
	},
	get children() {
		var _el$ = _tmpl$$41();
		solid_js_web.insert(_el$, solid_js_web.createComponent(NumberInput, props));
		solid_js_web.effect((_$p) => solid_js_web.setStyleProperty(_el$, "margin-right", props.suffix ? ".3em" : ".6em"));
		return _el$;
	}
});
//#endregion
//#region src/components/Manga/components/SettingsItemSwitch.tsx
var _tmpl$$40 = /* @__PURE__ */ solid_js_web.template(\`<button type=button><div>\`);
/** 寮€鍏冲紡鑿滃崟椤?*/
const SettingsItemSwitch = (props) => {
	const handleClick = () => props.onChange(!props.value);
	return solid_js_web.createComponent(SettingsItem, {
		get name() {
			return props.name;
		},
		get ["class"]() {
			return props.class;
		},
		get classList() {
			return props.classList;
		},
		get disabled() {
			return props.disabled;
		},
		get children() {
			var _el$ = _tmpl$$40(), _el$2 = _el$.firstChild;
			solid_js_web.addEventListener(_el$, "click", handleClick);
			solid_js_web.effect((_p$) => {
				var _v$ = classes$1.SettingsItemSwitch, _v$2 = props.value, _v$3 = classes$1.SettingsItemSwitchRound;
				_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
				_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-checked", _p$.t = _v$2);
				_v$3 !== _p$.a && solid_js_web.className(_el$2, _p$.a = _v$3);
				return _p$;
			}, {
				e: void 0,
				t: void 0,
				a: void 0
			});
			return _el$;
		}
	});
};
//#endregion
//#region src/components/Manga/actions/translation/translator/MangaImageTranslator/settings.tsx
/**
* MangaImageTranslator 缈昏瘧鏈嶅姟璁剧疆鐣岄潰
*/
var _tmpl$$39 = /* @__PURE__ */ solid_js_web.template(\`<input type=url>\`);
const bindOption$2 = (...args) => bindOption("translation", "mit", ...args);
/** MangaImageTranslator 璁剧疆缁勪欢 */
const mitSettings = () => [
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.target_language");
		},
		options: targetLanguageOptions
	}, () => bindOption$2("translator", "target_lang"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.translator");
		},
		get options() {
			return mitTranslators();
		},
		onClick: updateMitTranslators
	}, () => bindOption$2("translator", "translator"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.direction");
		},
		get options() {
			return [
				["auto", helper.t("setting.translation.options.direction_auto")],
				["horizontal", helper.t("setting.translation.options.direction_horizontal")],
				["vertical", helper.t("setting.translation.options.direction_vertical")]
			];
		}
	}, () => bindOption$2("render", "direction"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.detection_resolution");
		},
		options: [
			["1024", "1024px"],
			["1536", "1536px"],
			["2048", "2048px"],
			["2560", "2560px"]
		]
	}, () => bindOption$2("detector", "detection_size"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.text_detector");
		},
		options: [["default"], ["ctd", "Comic Text Detector"]]
	}, () => bindOption$2("detector", "detector"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.inpainting_size");
		},
		options: [
			["516", "516px"],
			["1024", "1024px"],
			["2048", "2048px"],
			["2560", "2560px"]
		]
	}, () => bindOption$2("inpainter", "inpainting_size"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.inpainter");
		},
		options: [
			["default", "Default"],
			["lama_large", "Lama Large"],
			["lama_mpe", "Lama MPE"],
			["sd", "SD"],
			["none", "None"],
			["original", "Original"]
		]
	}, () => bindOption$2("inpainter", "inpainter"))),
	solid_js_web.createComponent(SettingsItemNumber, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.unclip_ratio");
		},
		step: .01
	}, () => bindOption$2("detector", "unclip_ratio"))),
	solid_js_web.createComponent(SettingsItemNumber, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.box_threshold");
		},
		step: .01
	}, () => bindOption$2("detector", "box_threshold"))),
	solid_js_web.createComponent(SettingsItemNumber, solid_js_web.mergeProps({ get name() {
		return helper.t("setting.translation.options.mask_dilation_offset");
	} }, () => bindOption$2("mask_dilation_offset"))),
	solid_js_web.createComponent(SettingsItemSwitch, {
		get name() {
			return helper.t("setting.translation.options.local_url");
		},
		get value() {
			return store.option.translation.mit.localUrl !== void 0;
		},
		onChange: (val) => {
			setOption((draftOption) => {
				draftOption.translation.mit.localUrl = val ? "" : void 0;
			});
		}
	}),
	solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return store.option.translation.mit.localUrl !== void 0;
		},
		get children() {
			var _el$ = _tmpl$$39();
			_el$.addEventListener("change", (e) => {
				setOption((draftOption) => {
					const url = e.target.value.replace(/\\/$/, "");
					draftOption.translation.mit.localUrl = url;
				});
			});
			solid_js_web.effect(() => _el$.value = store.option.translation.mit.localUrl);
			return _el$;
		}
	})
];
//#endregion
//#region src/components/Manga/actions/translation/index.ts
/** 鍒ゆ柇褰撳墠缈昏瘧鍣ㄦ槸鍚﹀厑璁告壒閲忕炕璇?*/
const allowBatchTranslation = () => store.option.translation.provider !== "cotrans";
const taskRegistry = {
	"manga-image-translator": MIT,
	cotrans: Cotrans
};
const setMessage$1 = (url, message) => setState("imgMap", url, "translationMessage", message);
/** 缈昏瘧鎸囧畾鍥剧墖 */
const translationImage = async (url) => {
	try {
		if (!url) return;
		const img = store.imgMap[url];
		if (img.translationType !== "wait") return;
		if (img.translationUrl) return setState("imgMap", url, "translationType", "show");
		if (img.loadType !== "loaded") return setMessage$1(url, helper.t("translation.tip.img_not_fully_loaded"));
		const Task = taskRegistry[store.option.translation.provider];
		if (!Task) throw new Error("鏈煡缈昏瘧鍣?);
		setState("imgMap", url, {
			translationUrl: await new Task(url).run(),
			translationMessage: helper.t("translation.tip.translation_completed"),
			translationType: "show"
		});
	} catch (error) {
		setState("imgMap", url, "translationType", "error");
		if (error?.message) setState("imgMap", url, "translationMessage", error.message);
	}
};
/** 閫愪釜缈昏瘧鐘舵€佷负绛夊緟缈昏瘧鐨勫浘鐗?*/
const translationAll = helper.singleThreaded(async (state) => {
	const targetImg = imgList().find((img) => img.translationType === "wait" && img.loadType === "loaded");
	if (!targetImg) return;
	await translationImage(targetImg.src);
	state.continueRun();
});
/** 寮€鍚垨鍏抽棴鎸囧畾鍥剧墖鐨勭炕璇?*/
const setImgTranslationEnbale = (list, enable) => {
	if (!store.option.translation.enabled && enable) return;
	setState((state) => {
		for (const i of list) {
			const img = state.imgMap[state.imgList[i]];
			if (!img) continue;
			const url = img.src;
			if (enable) if (state.option.translation.forceRetry) {
				img.translationType = "wait";
				img.translationUrl = void 0;
				setMessage$1(url, helper.t("translation.tip.wait_translation"));
			} else switch (img.translationType) {
				case "hide":
					img.translationType = "show";
					break;
				case "error":
				case void 0:
					img.translationType = "wait";
					setMessage$1(url, helper.t("translation.tip.wait_translation"));
					break;
			}
			else switch (img.translationType) {
				case "show":
					img.translationType = "hide";
					break;
				case "error":
				case "wait":
					img.translationType = void 0;
					break;
			}
		}
	});
	return translationAll();
};
/** 缈昏瘧鑼冨洿鐨勫浘鐗?*/
const translationImgs = helper.createRootMemo(() => {
	const list = /* @__PURE__ */ new Set();
	for (const [i, img] of imgList().entries()) switch (img.translationType) {
		case "error":
		case "show":
		case "wait": list.add(i);
	}
	return list;
});
/** 褰撳墠鏄剧ず鐨勫浘鐗囨槸鍚︽鍦ㄧ炕璇?*/
const isTranslatingImage = helper.createRootMemo(() => activePage().some((i) => translationImgs().has(i)));
/** 缈昏瘧褰撳墠椤?*/
const translateCurrent = () => setImgTranslationEnbale(activePage(), !isTranslatingImage());
const createTranslateRange = (imgs) => {
	const isTranslating = helper.createRootMemo(() => imgs().every((i) => translationImgs().has(i)));
	const translateRange = () => {
		if (!allowBatchTranslation()) return;
		setImgTranslationEnbale(imgs(), !isTranslating());
	};
	return [isTranslating, translateRange];
};
const [isTranslatingAll, translateAll] = createTranslateRange(helper.createRootMemo(() => helper.range(store.imgList.length)));
const [isTranslatingToEnd, translateToEnd] = createTranslateRange(helper.createRootMemo(() => helper.range(activeImgIndex(), store.imgList.length)));
//#endregion
//#region src/components/Manga/actions/imageLoad.ts
/** 鍥剧墖涓婃鍔犺浇鍑洪敊鐨勬椂闂?*/
const imgErrorMap = /* @__PURE__ */ new Map();
/** 閲嶆柊鍔犺浇閿欒鍥剧墖 */
const reloadImg = (url) => {
	if (store.imgMap[url]?.loadType !== "error") return;
	setState("imgMap", url, "loadType", "wait");
	updateImgLoadType();
};
/** 鍥剧墖鍔犺浇澶辫触鍚庡畾鏃堕噸鏂板姞杞?*/
const handleTimeReload = (url) => {
	const count = imgErrorMap.get(url) || 0;
	if (count > 8) return;
	imgErrorMap.set(url, count + 1);
	const time = (2 ** count + Math.random() * 2) * 1e3;
	setTimeout(reloadImg, time, url);
};
/** 鍥剧墖鍔犺浇瀹屾瘯鐨勫洖璋?*/
const handleImgLoaded = (url, e) => {
	if (e && !e.isConnected) return;
	imgErrorMap.delete(url);
	const img = store.imgMap[url];
	if (img.translationType === "show") return;
	if (img.loadType !== "loaded") {
		setState("imgMap", url, "loadType", "loaded");
		updateImgLoadType();
		store.prop.onLoading?.(imgList(), store.imgMap[url]);
	}
	if (!e) return;
	updateImgSize(url, e.naturalWidth, e.naturalHeight);
	if (store.option.imgRecognition.enabled && e.src === img.blobUrl) setTimeout(handleImgRecognition, 0, url, e);
	translationAll();
};
/** 鍥剧墖鍔犺浇鍑洪敊鐨勫洖璋?*/
const handleImgError = (url, e) => {
	if (e && !e.isConnected) return;
	setState((state) => {
		const img = state.imgMap[url];
		if (!img) return;
		const imgIndexs = getImgIndexs(url);
		helper.log.error(imgIndexs, helper.t("alert.img_load_failed"), e);
		img.loadType = "error";
		img.type = void 0;
	});
	handleTimeReload(url);
	store.prop.onLoading?.(imgList(), store.imgMap[url]);
	store.prop.onImgError?.(url);
	updateImgLoadType();
};
/** 闇€瑕佸姞杞界殑鍥剧墖 */
const needLoadImgList = helper.createRootMemo(() => {
	const list = /* @__PURE__ */ new Set();
	for (const img of imgList()) if (img.loadType !== "loaded" && img.src) list.add(img.src);
	return list;
});
const waitUrlImgNum = helper.createRootMemo(() => {
	let num = 0;
	for (const img of imgList()) if (!img.src) num += 1;
	return num;
});
/** 褰撳墠鍔犺浇鐨勫浘鐗?*/
const loadImgList = /* @__PURE__ */ new Set();
/** 鍔犺浇鑼冨洿涓瓑寰?url 鐨勫浘鐗?*/
const waitUrlImgs = /* @__PURE__ */ new Set();
/** 鍔犺浇鎸囧畾鍥剧墖銆傝繑鍥炴槸鍚﹀凡鍔犺浇瀹屾垚 */
const loadImg = (index) => {
	const img = getImg(index);
	if (!img.src) {
		waitUrlImgs.add(index);
		return true;
	}
	if (!needLoadImgList().has(img.src)) return true;
	if (img.loadType === "error") return true;
	loadImgList.add(img.src);
	return false;
};
/** 鑾峰彇鎸囧畾椤垫暟涓嬬殑澶?灏惧浘鐗?*/
const getPageImg = (pageNum, imgType) => {
	const page = store.pageList[pageNum].filter((i) => i !== -1);
	if (page.length === 1) return page[0];
	return imgType === "start" ? Math.min(...page) : Math.max(...page);
};
/**
* 浠ュ綋鍓嶆樉绀洪〉涓哄熀鍑嗭紝棰勫姞杞介檮杩戞寚瀹氶〉鏁扮殑鍥剧墖锛屽苟鍙栨秷鍏朵粬棰勫姞杞界殑鍥剧墖
* @param target 鍔犺浇鐩爣椤?* @param loadNum 鍔犺浇鍥剧墖鏁伴噺
* @returns 杩斿洖鎸囧畾鑼冨洿鍐呮槸鍚﹁繕鏈夋湭鍔犺浇鐨勫浘鐗?*/
const loadRangeImg = (target = 0, loadNum = 2) => {
	let start = getPageImg(store.showRange[0], "start");
	let end = getPageImg(store.showRange[1], "end");
	if (target !== 0) {
		if (target < 0) {
			end = start + target;
			start -= 1;
		} else {
			start = end + 1;
			end += target;
		}
		start = helper.clamp(0, start, store.imgList.length - 1);
		end = helper.clamp(0, end, store.imgList.length - 1);
	}
	/** 鏄惁杩樻湁鏈姞杞界殑鍥剧墖 */
	let hasUnloadedImg = false;
	let index = start;
	const condition = start <= end ? () => index <= end : () => index >= end;
	const step = start <= end ? 1 : -1;
	while (condition()) {
		if (!loadImg(index)) hasUnloadedImg = true;
		if (loadImgList.size >= loadNum) return index !== end || hasUnloadedImg;
		index += step;
	}
	return hasUnloadedImg;
};
/** 鍔犺浇鏈熼棿灏藉揩鑾峰彇鍥剧墖灏哄 */
const checkImgSize = (url) => {
	const imgDom = getImgEle(url);
	if (!imgDom) return;
	const timeoutId = setInterval(() => {
		if (!imgDom?.isConnected || store.option.imgRecognition.enabled) return clearInterval(timeoutId);
		const img = store.imgMap[url];
		if (!img || img.loadType !== "loading") return clearInterval(timeoutId);
		if (imgDom.naturalWidth && imgDom.naturalHeight) {
			updateImgSize(url, imgDom.naturalWidth, imgDom.naturalHeight);
			return clearInterval(timeoutId);
		}
	}, 200);
};
const updateImgLoadType = helper.singleThreaded(() => {
	if (store.showRange[0] < 0 || needLoadImgList().size === 0 && waitUrlImgNum() === 0) return;
	loadImgList.clear();
	waitUrlImgs.clear();
	if (store.imgList.length > 0) loadRangeImg() || loadRangeImg(preloadNum().back) || loadRangeImg(-preloadNum().front) || !store.option.alwaysLoadAllImg || loadRangeImg(Number.POSITIVE_INFINITY, 5) || loadRangeImg(Number.NEGATIVE_INFINITY, 5);
	store.prop.onWaitUrlImgs?.(waitUrlImgs, imgList());
	setState((state) => {
		for (const url of needLoadImgList()) {
			const img = state.imgMap[url];
			if (loadImgList.has(url)) {
				if (img.loadType !== "loading") {
					img.loadType = "loading";
					if (!store.option.imgRecognition.enabled && img.width === void 0) setTimeout(checkImgSize, 0, img.src);
				}
			} else if (img.loadType === "loading") img.loadType = "wait";
		}
	});
});
helper.createEffectOn([
	preloadNum,
	renderImgList,
	() => store.imgMap,
	() => store.option.alwaysLoadAllImg
], updateImgLoadType);
helper.createEffectOn(showImgList, helper.debounce((list) => {
	if (imgErrorMap.size === 0) return;
	for (const i of list) reloadImg(getImg(i).src);
}, 500), { defer: true });
/** 鍔犺浇涓殑鍥剧墖 */
const loadingImgList = helper.createRootMemo(() => {
	const list = /* @__PURE__ */ new Set();
	for (const [url, img] of Object.entries(store.imgMap)) if (img.loadType === "loading") list.add(url);
	return list;
});
const abortMap = /* @__PURE__ */ new Map();
const timeoutAbort = (url) => {
	if (!abortMap.has(url)) return;
	abortMap.get(url).abort();
	abortMap.delete(url);
	handleImgError(url);
};
helper.createEffectOn(loadingImgList, (downImgList, prevImgList) => {
	if (!store.option.imgRecognition.enabled) return;
	if (prevImgList) for (const url of prevImgList) {
		if (downImgList.has(url) || !abortMap.has(url)) continue;
		abortMap.get(url)?.abort();
		abortMap.delete(url);
		helper.log(\`涓柇涓嬭浇 \${url}\`);
	}
	for (const url of downImgList.values()) {
		if (abortMap.has(url) || store.imgMap[url].blobUrl) continue;
		const controller = new AbortController();
		const handleTimeout = helper.debounce(() => timeoutAbort(url), 1e3 * 3);
		controller.signal.addEventListener("abort", handleTimeout.clear);
		abortMap.set(url, controller);
		handleTimeout();
		request.request(url, {
			responseType: "blob",
			retryFetch: true,
			signal: controller.signal,
			timeout: void 0,
			noTip: true,
			headers: request.downloadImgHeaders,
			onerror: () => handleImgError(url),
			onprogress({ loaded, total }) {
				setState("imgMap", url, "progress", loaded / total * 100);
				handleTimeout();
			},
			onload({ response }) {
				abortMap.delete(url);
				setState("imgMap", url, {
					blobUrl: URL.createObjectURL(response),
					progress: void 0
				});
				handleImgLoaded(url);
			}
		});
	}
});
//#endregion
//#region src/components/Manga/actions/zoom.ts
const touches = /* @__PURE__ */ new Map();
const bound = helper.createMemoMap({
	x: () => -store.rootSize.width * (store.option.zoom.ratio / 100 - 1),
	y: () => -store.rootSize.height * (store.option.zoom.ratio / 100 - 1)
});
const checkBound = (state) => {
	state.option.zoom.offset.x = helper.clamp(bound().x, state.option.zoom.offset.x, 0);
	state.option.zoom.offset.y = helper.clamp(bound().y, state.option.zoom.offset.y, 0);
};
const zoom = (val, focal, animation = false) => {
	const newScale = helper.clamp(100, val, 300);
	if (newScale === store.option.zoom.ratio) return;
	const { left, top } = refs.mangaBox.getBoundingClientRect();
	const x = (focal?.x ?? store.rootSize.width / 2) - left;
	const y = (focal?.y ?? store.rootSize.height / 2) - top;
	const newX = x / (store.option.zoom.ratio / 100) * (newScale / 100);
	const newY = y / (store.option.zoom.ratio / 100) * (newScale / 100);
	const dx = newX - x;
	const dy = newY - y;
	setOption((draftOption, state) => {
		draftOption.zoom.ratio = newScale;
		draftOption.zoom.offset.x -= dx;
		draftOption.zoom.offset.y -= dy;
		checkBound(state);
		if (animation) state.page.anima = "zoom";
	});
};
/** 鎽╂摝绯绘暟 */
const FRICTION_COEFF$1 = .91;
const mouse = {
	x: 0,
	y: 0
};
const last = {
	x: 0,
	y: 0
};
const velocity = {
	x: 0,
	y: 0
};
let animationId$2 = null;
const cancelAnimation = () => {
	if (!animationId$2) return;
	cancelAnimationFrame(animationId$2);
	animationId$2 = null;
};
let lastTime$1 = 0;
/** 閫愬抚璁＄畻鎯€ф粦鍔?*/
const handleSlideAnima = (timestamp) => {
	if (helper.approx(velocity.x, 0, 1) && helper.approx(velocity.y, 0, 1)) {
		animationId$2 = null;
		return;
	}
	setOption((draftOption, state) => {
		draftOption.zoom.offset.x += velocity.x;
		draftOption.zoom.offset.y += velocity.y;
		checkBound(state);
		if (timestamp - lastTime$1 > 16) {
			velocity.x *= FRICTION_COEFF$1;
			velocity.y *= FRICTION_COEFF$1;
			lastTime$1 = timestamp;
		}
	});
	animationId$2 = requestAnimationFrame(handleSlideAnima);
};
/** 閫愬抚鏍规嵁榧犳爣鍧愭爣绉诲姩鍏冪礌锛屽苟璁＄畻閫熺巼 */
const handleDragAnima$1 = () => {
	if (mouse.x === store.option.zoom.offset.x && mouse.y === store.option.zoom.offset.y) {
		animationId$2 = null;
		return;
	}
	setOption((draftOption, state) => {
		last.x = draftOption.zoom.offset.x;
		last.y = draftOption.zoom.offset.y;
		draftOption.zoom.offset.x = mouse.x;
		draftOption.zoom.offset.y = mouse.y;
		checkBound(state);
		velocity.x = draftOption.zoom.offset.x - last.x;
		velocity.y = draftOption.zoom.offset.y - last.y;
	});
	animationId$2 = requestAnimationFrame(handleDragAnima$1);
};
/** 涓€娈垫椂闂存病鏈夌Щ鍔ㄥ悗搴旇灏嗛€熺巼褰掗浂 */
const resetVelocity = helper.debounce(() => {
	velocity.x = 0;
	velocity.y = 0;
}, 200);
/** 鏄惁姝ｅ湪鍙屾寚鎹忓悎缂╂斁涓?*/
let pinchZoom = false;
/** 澶勭悊鏀惧ぇ鍚庣殑鎷栨嫿绉诲姩 */
const handleZoomDrag = ({ type, xy: [x, y], last: [lx, ly] }) => {
	if (store.option.zoom.ratio === 100) return;
	switch (type) {
		case "down":
			mouse.x = store.option.zoom.offset.x;
			mouse.y = store.option.zoom.offset.y;
			if (animationId$2) cancelAnimation();
			break;
		case "move":
			if (animationId$2) cancelAnimation();
			mouse.x += x - lx;
			mouse.y += y - ly;
			animationId$2 ??= requestAnimationFrame(handleDragAnima$1);
			resetVelocity();
			break;
		case "up":
			resetVelocity.clear();
			if (pinchZoom) {
				pinchZoom = false;
				mouse.x = store.option.zoom.offset.x;
				mouse.y = store.option.zoom.offset.y;
				return;
			}
			if (animationId$2) cancelAnimationFrame(animationId$2);
			animationId$2 = requestAnimationFrame(handleSlideAnima);
	}
};
/** 鍒濆鍙屾寚璺濈 */
let initDistance = 0;
/** 鍒濆缂╂斁姣斾緥 */
let initScale = 100;
/** 鑾峰彇涓や釜鎸囬拡涔嬮棿鐨勮窛绂?*/
const getDistance = (a, b) => Math.hypot(b.xy[0] - a.xy[0], b.xy[1] - a.xy[1]);
/** 閫愬抚璁＄畻褰撳墠灞忓箷涓婁袱鐐逛箣闂寸殑璺濈锛屽苟鎹㈢畻鎴愮缉鏀炬瘮渚?*/
const handlePinchZoomAnima = () => {
	if (touches.size < 2) {
		animationId$2 = null;
		return;
	}
	const [a, b] = [...touches.values()];
	zoom(getDistance(a, b) / initDistance * initScale, {
		x: (a.xy[0] + b.xy[0]) / 2,
		y: (a.xy[1] + b.xy[1]) / 2
	});
	animationId$2 = requestAnimationFrame(handlePinchZoomAnima);
};
/** 澶勭悊鍙屾寚鎹忓悎缂╂斁 */
const handlePinchZoom = ({ type }) => {
	if (touches.size < 2) return;
	switch (type) {
		case "down": {
			pinchZoom = true;
			const [a, b] = [...touches.values()];
			initDistance = getDistance(a, b);
			initScale = store.option.zoom.ratio;
			break;
		}
		case "up": {
			const [a, b] = [...touches.values()];
			initDistance = getDistance(a, b);
			break;
		}
		case "move":
			animationId$2 ??= requestAnimationFrame(handlePinchZoomAnima);
			break;
		case "cancel": {
			const [a, b] = [...touches.values()];
			initDistance = getDistance(a, b);
			break;
		}
	}
};
//#endregion
//#region src/components/Manga/actions/scroll.ts
const _scrollTo = (top) => {
	const val = helper.clamp(0, top, contentHeight() - store.rootSize.height);
	refs.mangaBox.scrollTo({
		top: val,
		behavior: "instant"
	});
	setState((state) => {
		state.scrollTop = val;
		openScrollLock(state);
	});
};
/** 鍦ㄥ嵎杞存ā寮忎笅婊氬姩鍒版寚瀹氳繘搴?*/
const scrollTo = (x, smooth = false) => {
	if (!store.option.scrollMode.enabled) return;
	if (store.option.scrollMode.abreastMode) {
		_scrollTo(0);
		return setState("page", "offset", "x", "px", helper.clamp(0, x, abreastScrollWidth()));
	}
	if (!smooth) {
		scrollStep.cancel();
		return _scrollTo(x);
	}
	if (scrollStep.animationId) {
		scrollStep.cancel();
		_scrollTo(x);
	}
	scrollStep.start(x);
};
/** 鍦ㄥ嵎杞存ā寮忎笅婊氬姩鎸囧畾杩涘害 */
const scrollBy = (offset, smooth = false) => {
	if (!store.option.scrollMode.enabled) return;
	if (handleEndTurnPage(offset > 0 ? "next" : "prev")) return;
	return scrollTo(scrollTop() + offset, smooth);
};
/** 瀹炵幇鍗疯酱妯″紡涓嬬殑骞虫粦婊氬姩 */
const scrollStep = new class extends helper.AnimationFrame {
	/** 鍔ㄧ敾鏃堕暱 */
	duration = 100;
	/** 瑕佹粴鍔ㄧ殑璺濈 */
	distance = 0;
	/** 婊氬姩寮€濮嬫椂闂?*/
	startTime = 0;
	/** 婊氬姩寮€濮嬩綅缃?*/
	startTop = 0;
	scrollTo = (top) => {
		if (helper.inRange(0, top, scrollLength())) scrollTo(top);
		else this.cancel();
	};
	frame = (timestamp) => {
		this.cancel();
		this.startTime ||= timestamp;
		/** 宸叉粴鍔ㄦ椂闂?*/
		const elapsed = timestamp - this.startTime;
		if (elapsed >= this.duration) return this.scrollTo(this.startTop + this.distance);
		this.scrollTo(this.startTop + elapsed / this.duration * this.distance);
		this.call();
	};
	start = (x) => {
		this.startTime = 0;
		this.startTop = scrollTop();
		this.distance = x - this.startTop;
		this.frame(0);
	};
}();
/** 瀹炵幇鍗疯酱妯″紡涓嬬殑鍖€閫熸粴鍔?*/
const constantScroll = new class extends helper.AnimationFrame {
	speed = 0;
	lastTime = 0;
	scrollTo = (top) => {
		if (helper.inRange(0, top, scrollLength())) scrollTo(top);
		else this.cancel();
	};
	frame = (timestamp) => {
		if (!this.animationId) return;
		if (this.lastTime) {
			const scrollDelta = this.speed * (timestamp - this.lastTime);
			this.scrollTo(scrollTop() + scrollDelta);
		}
		this.lastTime = timestamp;
		this.call();
	};
	start = (speed) => {
		if (this.animationId && speed === this.speed) return;
		this.cancel();
		this.speed = speed;
		this.lastTime = 0;
		this.call();
	};
}();
/** 淇濆瓨褰撳墠婊氬姩杩涘害锛屽苟鍦ㄤ箣鍚庢仮澶?*/
const saveScrollProgress = () => {
	const oldScrollPercentage = scrollPercentage();
	return () => scrollTo(oldScrollPercentage * scrollLength());
};
/** 鍦ㄥ嵎杞存ā寮忎笅锛屾粴鍔ㄥ埌鑳芥樉绀烘寚瀹氬浘鐗囩殑浣嶇疆 */
const scrollViewImg = (i) => {
	if (!store.option.scrollMode.enabled) return;
	let top;
	if (store.option.scrollMode.abreastMode) top = abreastArea().columns.findIndex((column) => column.includes(i)) * abreastColumnWidth() + 1;
	else top = pageTopList()[i] + 1;
	scrollTo(top);
};
/** 璺宠浆鍒版寚瀹氬浘鐗囩殑鏄剧ず浣嶇疆 */
const jumpToImg = (index) => {
	zoom(100);
	setState("gridMode", false);
	if (store.option.scrollMode.enabled) return scrollViewImg(index);
	const pageNum = imgPageMap()[index];
	if (pageNum === void 0) return;
	setState((state) => {
		state.activePageIndex = pageNum;
		state.gridMode = false;
	});
};
//#endregion
//#region src/components/Manga/actions/switch.ts
/** 鍒囨崲椤甸潰濉厖 */
const switchFillEffect = () => {
	setState((state) => {
		if (state.pageList[state.activePageIndex].length !== 2) return;
		state.fillEffect[nowFillIndex()] = Number(!state.fillEffect[nowFillIndex()]);
		updatePageData(state);
	});
};
/** 鍒囨崲鍗疯酱妯″紡 */
const switchScrollMode = () => {
	const index = activeImgIndex();
	zoom(100);
	setOption((draftOption, state) => {
		draftOption.scrollMode.enabled = !draftOption.scrollMode.enabled;
		state.page.offset.x.px = 0;
		state.page.offset.y.px = 0;
	});
	jumpToImg(index);
};
/** 鍒囨崲鍗曞弻椤垫ā寮?*/
const switchOnePageMode = () => {
	const index = activeImgIndex();
	setOption((draftOption, state) => {
		if (draftOption.scrollMode.enabled) if (draftOption.scrollMode.abreastMode) {
			draftOption.scrollMode.abreastMode = false;
			draftOption.scrollMode.doubleMode = true;
		} else draftOption.scrollMode.doubleMode = !draftOption.scrollMode.doubleMode;
		else {
			const newPageNum = pageNum() === 1 ? 2 : 1;
			draftOption.pageNum = state.option.autoSwitchPageMode && newPageNum === autoPageNum() ? 0 : newPageNum;
		}
	});
	jumpToImg(index);
};
/** 鍒囨崲闃呰鏂瑰悜 */
const switchDir = () => {
	setOption((draftOption) => {
		draftOption.dir = draftOption.dir === "rtl" ? "ltr" : "rtl";
	});
};
/** 鍒囨崲缃戞牸妯″紡 */
const switchGridMode = () => {
	zoom(100);
	setState((state) => {
		state.gridMode = !state.gridMode;
		if (store.option.zoom.ratio !== 100) zoom(100);
		state.page.anima = "";
	});
	if (store.gridMode) requestAnimationFrame(() => {
		refs.mangaFlow.children[activeImgIndex()]?.scrollIntoView({
			block: "center",
			inline: "center"
		});
	});
};
/** 鍒囨崲鍏ㄥ睆 */
const switchFullscreen = () => {
	if (document.fullscreenElement) return document.exitFullscreen();
	return refs.root.requestFullscreen();
};
/** 鍒囨崲鑷姩婊氬姩 */
const switchAutoScroll = () => setState("autoScroll", "play", (val) => !val);
/** 鍒囨崲鍥剧墖璇嗗埆鐩稿叧鍔熻兘 */
const switchImgRecognition = (...path) => setOption((draftOption, state) => {
	const option = draftOption.imgRecognition;
	if (path.length === 0) path.push("enabled");
	for (const key of path) option[key] = !option[key];
	if (!option.enabled) return;
	for (const img of Object.values(state.imgMap)) {
		if (!img.blobUrl) img.loadType = "wait";
		if (img.loadType !== "loaded") continue;
		handleImgRecognition(img.src);
	}
	if (path.includes("enabled")) updateImgLoadType();
});
//#endregion
//#region src/components/Manga/actions/readProgress.ts
let cache$1 = void 0;
const initCache = async () => {
	cache$1 ||= await helper.useCache({ progress: "id" }, "ReadProgress");
};
let lastIndex = -1;
/** 淇濆瓨闃呰杩涘害 */
const saveReadProgress = helper.throttle(async () => {
	await initCache();
	const index = activeImgIndex();
	if (index === lastIndex) return;
	lastIndex = index;
	if (store.imgList.length < 50 || index >= store.imgList.length - 5) return await cache$1.del("progress", location.pathname);
	const imgSize = {};
	for (const [i, img] of imgList().entries()) if (img.width && img.height) imgSize[i] = [img.width, img.height];
	await cache$1.set("progress", {
		id: location.pathname,
		time: Date.now(),
		index,
		imgSize,
		fillEffect: solid_js_store.unwrap(store.fillEffect)
	});
}, 1e3);
/** 鎭㈠闃呰杩涘害 */
const resumeReadProgress = async (state) => {
	await initCache();
	const progress = await cache$1.get("progress", location.pathname);
	if (!progress) return;
	let i = state.imgList.length;
	while (i--) {
		const imgSize = progress.imgSize[i];
		if (imgSize) updateImgSize(state.imgList[i], ...imgSize, state);
	}
	state.fillEffect = progress.fillEffect;
	updatePageData(state);
	if (state.option.scrollMode.enabled) setTimeout(scrollViewImg, 500, progress.index);
	else jumpToImg(progress.index);
	const nowTime = Date.now();
	cache$1.each("progress", async (data, cursor) => {
		if (nowTime - data.time < 1e3 * 60 * 60 * 24 * 29) return;
		await helper.promisifyRequest(cursor.delete());
	});
};
//#endregion
//#region src/components/Manga/actions/show.ts
/** 灏嗛〉闈㈢Щ鍥炲師浣?*/
const resetPage = (state, animation = false) => {
	updateShowRange(state);
	state.page.offset.x.pct = 0;
	state.page.offset.y.pct = 0;
	if (state.option.scrollMode.enabled) {
		state.page.anima = "";
		return;
	}
	let i = -1;
	if (helper.inRange(state.renderRange[0], state.activePageIndex, state.renderRange[1])) i = state.activePageIndex - state.renderRange[0];
	if (store.page.vertical) state.page.offset.y.pct = i === -1 ? 0 : -i;
	else state.page.offset.x.pct = i === -1 ? 0 : i;
	state.page.anima = animation ? "page" : "";
};
/** 鑾峰彇鎸囧畾鍥剧墖鐨勬彁绀烘枃鏈?*/
const getImgTip = (i) => {
	if (i === -1) return helper.t("other.fill_page");
	const img = getImg(i);
	if (img.loadType !== "loaded") return \`\${i + 1} (\${helper.t(\`img_status.\${img.loadType}\`)})\`;
	if (img.translationType && img.translationType !== "hide" && img.translationMessage) return \`\${i + 1}锛歕${img.translationMessage}\`;
	if (isUpscale() && img.upscaleUrl !== void 0) return \`\${i + 1} (\${img.upscaleUrl ? helper.t("upscale.upscaled") : helper.t("upscale.upscaling")})\`;
	return \`\${i + 1}\`;
};
/** 鑾峰彇鎸囧畾椤甸潰鐨勬彁绀烘枃鏈?*/
const getPageTip = (pageIndex) => {
	const page = store.pageList[pageIndex];
	if (!page) return "null";
	const pageIndexText = page.map((index) => getImgTip(index));
	if (pageIndexText.length === 1) return pageIndexText[0];
	if (store.option.dir === "rtl") pageIndexText.reverse();
	return pageIndexText.join(" | ");
};
helper.createEffectOn(() => store.activePageIndex, () => store.show.endPage && setState("show", "endPage", void 0), { defer: true });
helper.createEffectOn(activePage, helper.throttle(() => store.isDragMode || setState(resetPage)));
helper.createEffectOn(() => store.show.toolbar, () => store.show.scrollbar && !store.show.toolbar && setState("show", "scrollbar", false), { defer: true });
helper.createEffectOn(() => store.gridMode, () => setState(resetUI), { defer: true });
//#endregion
//#region src/components/Manga/actions/turnPage.ts
/** 缈婚〉銆傝繑鍥炴槸鍚︽垚鍔熸敼鍙樹簡褰撳墠椤垫暟 */
const turnPage = withOptionalState((dir, state) => {
	if (state.gridMode || state.option.scrollMode.enabled) return false;
	if (handleEndTurnPage(dir, state)) return false;
	saveReadProgress();
	state.activePageIndex += dir === "next" ? 1 : -1;
	return true;
});
const turnPageAnimation = (dir) => {
	setState((state) => {
		if (!turnPage(dir, state)) {
			state.page.offset.x.px = 0;
			state.page.offset.y.px = 0;
			resetPage(state, true);
			state.isDragMode = false;
			return;
		}
		state.isDragMode = true;
		resetPage(state);
		if (store.page.vertical) state.page.offset.y.pct += dir === "next" ? 1 : -1;
		else state.page.offset.x.pct += dir === "next" ? -1 : 1;
		setTimeout(() => {
			setState((draftState) => {
				resetPage(draftState, true);
				draftState.page.offset.x.px = 0;
				draftState.page.offset.y.px = 0;
				draftState.isDragMode = false;
			});
		}, 16);
	});
};
/** 鍒ゆ柇缈婚〉鏂瑰悜 */
const getTurnPageDir = (move, total, startTime) => {
	let dir;
	if (!startTime) {
		if (Math.abs(move) > total / 2) dir = move > 0 ? "next" : "prev";
		return dir;
	}
	if (Math.abs(move) > total / 3) dir = move > 0 ? "next" : "prev";
	if (dir) return dir;
	const velocity = move / (performance.now() - startTime);
	if (velocity < -.4) dir = "prev";
	if (velocity > .4) dir = "next";
	return dir;
};
//#endregion
//#region src/components/Manga/actions/hotkeyAction.ts
/** 鍗疯酱妯″紡涓嬫粴鍔ㄨ嚦鎸囧畾椤垫暟 */
const scrollIntoView = (index, position = "start") => scrollTo(position === "start" ? getPageTop(index) : getPageTop(index + 1) - store.rootSize.height, true);
/** 鍒ゆ柇鎸囧畾椤佃兘鍚﹁瀹屽叏鏄剧ず鍑烘潵 */
const isFullView = (i) => pageHeightList()[i] < store.rootSize.height;
/** 鍦ㄥ嵎杞存ā寮忎笅锛屾櫤鑳芥粴鍔ㄨ嚦鍥剧墖鐨勫ご灏?*/
const scrollViewTurnPage = (offset) => {
	if (!store.option.scrollMode.enabled) return;
	const dir = offset > 0 ? "next" : "prev";
	if (handleEndTurnPage(dir)) return;
	if (!store.option.scrollMode.alignEdge) return scrollBy(offset, true);
	const viewBottom = scrollTop() + store.rootSize.height;
	let viewBottomPage = findTopPage(viewBottom);
	if (helper.approx(getPageTop(viewBottomPage), viewBottom)) viewBottomPage -= 1;
	const viewTop = scrollTop();
	let viewTopPage = findTopPage(viewTop);
	if (helper.approx(getPageTop(viewTopPage + 1), viewTop)) viewTopPage += 1;
	if (dir === "next") {
		const pageBottom = getPageTop(viewBottomPage + 1);
		if (!helper.approx(viewBottom, pageBottom)) {
			if (viewBottomPage === viewTopPage) {
				if (viewBottom + offset <= pageBottom) return scrollBy(offset, true);
				return scrollIntoView(viewBottomPage, "end");
			}
			return scrollIntoView(viewBottomPage, isFullView(viewBottomPage) ? "end" : "start");
		}
		const nextPage = viewBottomPage + 1;
		scrollIntoView(nextPage, isFullView(nextPage) ? "end" : "start");
	} else {
		const pageTop = getPageTop(viewTopPage);
		if (!helper.approx(viewTop, pageTop)) {
			if (viewBottomPage === viewTopPage) {
				if (viewTop + offset >= pageTop) return scrollBy(offset, true);
				return scrollIntoView(viewTopPage, "start");
			}
			return scrollIntoView(viewTopPage, isFullView(viewTopPage) ? "start" : "end");
		}
		const prevPage = viewTopPage - 1;
		scrollIntoView(prevPage, isFullView(prevPage) ? "start" : "end");
	}
};
/** 鏍规嵁鏄惁寮€鍚簡 宸﹀彸缈婚〉閿氦鎹?鏉ュ垏鎹㈢炕椤垫柟鍚?*/
const handleSwapPageTurnKey = (nextPage) => {
	return (store.option.swapPageTurnKey ? !nextPage : nextPage) ? "next" : "prev";
};
const handleHotkey = (hotkey, e) => {
	if (isAbreastMode()) switch (hotkey) {
		case "scroll_up": return setAbreastScrollFill(abreastScrollFill() - 40);
		case "scroll_down": return setAbreastScrollFill(abreastScrollFill() + 40);
		case "scroll_left":
			if (e?.repeat) return constantScroll.start(store.option.dir === "rtl" ? -1 : 1);
			return scrollBy(store.option.dir === "rtl" ? -40 : 40);
		case "scroll_right":
			if (e?.repeat) return constantScroll.start(store.option.dir === "rtl" ? 1 : -1);
			return scrollBy(store.option.dir === "rtl" ? 40 : -40);
		case "page_up": return scrollBy(-store.rootSize.width * .8);
		case "page_down": return scrollBy(store.rootSize.width * .8);
		case "jump_to_home": return scrollTo(0);
		case "jump_to_end": return scrollTo(scrollLength());
	}
	if (isScrollMode()) switch (hotkey) {
		case "page_up": return scrollViewTurnPage(-store.rootSize.height * .8);
		case "page_down": return scrollViewTurnPage(store.rootSize.height * .8);
		case "scroll_up":
			if (e?.repeat) return constantScroll.start(-1);
			return scrollBy(-40, true);
		case "scroll_down":
			if (e?.repeat) return constantScroll.start(1);
			return scrollBy(40, true);
	}
	switch (hotkey) {
		case "page_up":
		case "scroll_up": return turnPage("prev");
		case "page_down":
		case "scroll_down": return turnPage("next");
		case "scroll_left": return turnPage(handleSwapPageTurnKey(store.option.dir === "rtl"));
		case "scroll_right": return turnPage(handleSwapPageTurnKey(store.option.dir !== "rtl"));
		case "jump_to_home": return setState("activePageIndex", 0);
		case "jump_to_end": return setState("activePageIndex", Math.max(0, store.pageList.length - 1));
		case "switch_page_fill": return switchFillEffect();
		case "switch_scroll_mode": return switchScrollMode();
		case "switch_single_double_page_mode": return switchOnePageMode();
		case "switch_dir": return switchDir();
		case "switch_grid_mode": return switchGridMode();
		case "translate_current_page": return translateCurrent();
		case "translate_all": return translateAll();
		case "translate_to_end": return translateToEnd();
		case "auto_scroll": return switchAutoScroll();
		case "fullscreen": return switchFullscreen();
		case "jump_next": return store.prop.onNext?.();
		case "jump_prev": return store.prop.onPrev?.();
		case "switch_auto_enlarge": return setOption((draftOption) => {
			draftOption.disableZoom = !draftOption.disableZoom;
		});
		case "reload_current_error_img":
			for (const i of showImgList()) reloadImg(getImg(i).src);
			return;
		case "exit": return store.prop.onExit?.();
		default:
			document.body.dispatchEvent(new KeyboardEvent("keydown", e));
			document.body.dispatchEvent(new KeyboardEvent("keyup", e));
	}
};
//#endregion
//#region src/components/Manga/actions/hotkeys.ts
const [defaultHotkeys, setDefaultHotkeys] = solid_js.createSignal({
	scroll_up: ["w", "ArrowUp"],
	scroll_down: ["s", "ArrowDown"],
	scroll_left: [
		"a",
		"Shift + a",
		",",
		"ArrowLeft"
	],
	scroll_right: [
		"d",
		"Shift + d",
		".",
		"ArrowRight"
	],
	page_up: ["PageUp", "Shift + w"],
	page_down: [
		" ",
		"PageDown",
		"Shift + s"
	],
	jump_to_home: ["Home"],
	jump_to_end: ["End"],
	exit: ["Escape"],
	switch_page_fill: [
		"/",
		"m",
		"z"
	],
	switch_scroll_mode: [],
	switch_grid_mode: [],
	switch_single_double_page_mode: [],
	switch_dir: [],
	switch_auto_enlarge: [],
	translate_current_page: [],
	translate_all: [],
	translate_to_end: [],
	fullscreen: [],
	auto_scroll: [],
	jump_next: [],
	jump_prev: [],
	reload_current_error_img: ["r"]
});
/** 蹇嵎閿厤缃?*/
const hotkeysMap = helper.createRootMemo(() => Object.fromEntries(Object.entries(store.hotkeys).flatMap(([name, key]) => key.map((k) => [k, name]))));
const actionsMap = {
	bubble: null,
	capture: null
};
const createKeydownHandler = (type) => (e) => {
	const actions = actionsMap[type];
	if (!actions) return;
	switch (e.target.tagName) {
		case "INPUT":
		case "TEXTAREA": return;
	}
	if (e.target.isContentEditable) return;
	if (Reflect.has(actions, e.key)) {
		actions[e.key](e);
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
	}
	const hotkeyName = hotkeysMap()[helper.getKeyboardCode(e)];
	if (Reflect.has(actions, hotkeyName)) {
		actions[hotkeyName](e);
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
	}
};
const handlers = {
	bubble: createKeydownHandler("bubble"),
	capture: createKeydownHandler("capture")
};
/** 鐩戝惉蹇嵎閿?*/
const listenHotkey = (actions, capture) => {
	const type = capture ? "capture" : "bubble";
	if (actionsMap[type]) Object.assign(actionsMap[type], actions);
	else {
		actionsMap[type] = { ...actions };
		window.addEventListener("keydown", handlers[type], { capture });
	}
	return () => {
		window.removeEventListener("keydown", handlers[type], { capture });
		actionsMap[type] = null;
	};
};
//#endregion
//#region src/components/Manga/actions/imageUpscale.ts
const upscaleImage = async (url, imgEle) => {
	setState("imgMap", url, "upscaleUrl", "");
	const { data, width, height } = helper.getImageData(imgEle);
	initWorker();
	await worker_ImageUpscale.default.upscaleImage(comlink.default.transfer(data, [data.buffer]), width, height, url);
};
let upscaleing = false;
const findUpscaleImage = async (start, end) => {
	for (let i = start; i < end; i++) {
		const img = typeof i === "number" ? getImg(i) : i;
		if (img.upscaleUrl !== void 0) continue;
		const imgEle = await helper.wait(() => getImgEle(i), 1e3);
		if (imgEle) return [img.src, imgEle];
	}
};
const handleUpscaleImage = async () => {
	if (upscaleing || !isUpscale() || store.imgList.length === 0) return;
	const targetImg = await findUpscaleImage(activeImgIndex(), store.imgList.length) ?? await findUpscaleImage(0, activeImgIndex());
	if (!targetImg) return;
	upscaleing = true;
	await upscaleImage(...targetImg);
	upscaleing = false;
	return handleUpscaleImage();
};
helper.createEffectOn([isUpscale, imgList], handleUpscaleImage);
const bufferToBase64 = (buffer) => {
	let binary = "";
	const bytes = new Uint8Array(buffer);
	const len = bytes.byteLength;
	for (let i = 0; i < len; i++) binary += String.fromCodePoint(bytes[i]);
	return window.btoa(binary);
};
const getModel = async () => {
	try {
		let base64;
		let buffer;
		if (typeof GM !== "undefined") base64 = await GM.getValue("@model.bin");
		if (!base64) {
			components_Toast.toast(helper.t("upscale.module_downloading"), {
				id: "upscale",
				duration: Number.POSITIVE_INFINITY
			});
			const bin = await request.request("https://cdn.jsdelivr.net/npm/@hymbz/comic-read-script@11.12.1/public/realcugan/2x-conservative-128/group1-shard1of1.bin", {
				responseType: "arraybuffer",
				noTip: true
			});
			components_Toast.toast(helper.t("upscale.module_download_complete"), {
				id: "upscale",
				duration: 1e3 * 3
			});
			buffer = bin.response;
			base64 = bufferToBase64(buffer);
			await GM.setValue("@model.bin", base64);
		}
		const json = await helper.ensureGmValue("@model.json", async () => {
			return (await request.request("https://cdn.jsdelivr.net/npm/@hymbz/comic-read-script@11.12.1/public/realcugan/2x-conservative-128/model.json", { noTip: true })).responseText;
		});
		return {
			base64,
			json,
			buffer
		};
	} catch (error) {
		helper.log.error("鑾峰彇鍥剧墖鏀惧ぇ妯″瀷鍑洪敊", error);
		components_Toast.toast.dismiss("upscale");
		components_Toast.toast.error(helper.t("upscale.module_download_failed"), {
			id: "upscale",
			duration: Number.POSITIVE_INFINITY
		});
		setState("supportUpscaleImage", false);
		setState("option", "imgRecognition", "upscale", false);
		throw error;
	}
};
const initWorker = helper.onec(() => {
	const mainFn = {
		log: helper.log,
		toast: components_Toast.toast,
		t: helper.t,
		setImg: (url, key, val) => Reflect.has(store.imgMap, url) && setState("imgMap", url, key, val),
		getModel
	};
	worker_ImageUpscale.default.setMainFn(comlink.default.proxy(mainFn), Object.keys(mainFn));
});
//#endregion
//#region src/components/Manga/hooks/useDoubleClick.ts
let clickTimeout = null;
const useDoubleClick = (click, doubleClick, timeout = 200) => (event) => {
	if (clickTimeout) {
		clearTimeout(clickTimeout);
		clickTimeout = null;
		doubleClick?.(event);
		return;
	}
	clickTimeout = window.setTimeout(() => {
		click(event);
		clickTimeout = null;
	}, timeout);
};
//#endregion
//#region src/components/Manga/actions/pointer.ts
/** 鏍规嵁鍧愭爣鎵惧嚭琚偣鍑诲埌鐨勫厓绱?*/
const findClickEle = (eleList, { x, y }) => {
	for (const e of eleList) {
		const rect = e.getBoundingClientRect();
		if (helper.inRange(rect.left, x, rect.right) && helper.inRange(rect.top, y, rect.bottom)) return e;
	}
};
/** 瑙﹀彂鐐瑰嚮鍖哄煙鎿嶄綔 */
const handlePageClick = (e) => {
	for (const i of showImgList()) {
		const img = getImg(i);
		if (img.loadType !== "error") continue;
		const imgEle = getImgEle(i);
		if (!imgEle || !findClickEle([imgEle], e)) continue;
		return reloadImg(img.src);
	}
	const targetArea = findClickEle(refs.touchArea.children, e);
	if (!targetArea || getComputedStyle(targetArea).visibility === "hidden") return;
	const areaName = targetArea.dataset.area;
	if (!areaName) return;
	if (areaName === "menu" || areaName === "MENU") return setState((state) => {
		state.show.scrollbar = !state.show.scrollbar;
		state.show.toolbar = !state.show.toolbar;
	});
	setState((state) => {
		resetUI(state);
		switch (areaName) {
			case "NEXT":
			case "next": return handleHotkey("page_down");
			case "PREV":
			case "prev": return handleHotkey("page_up");
		}
	});
};
/** 缃戞牸妯″紡涓嬬偣鍑诲浘鐗囪烦鍒板搴旈〉 */
const handleGridClick = (e) => {
	const target = findClickEle(refs.root.getElementsByClassName(classes$1.img), e);
	if (target) jumpToImg(Number(/_(\\d+)_/.exec(target.id)?.[1]));
};
/** 鍙屽嚮鏀惧ぇ */
const doubleClickZoom = (e) => !store.gridMode && zoom(store.option.zoom.ratio === 100 ? 350 : 100, e, true);
const handleClick = useDoubleClick((e) => store.gridMode ? handleGridClick(e) : handlePageClick(e), doubleClickZoom);
let dx$1 = 0;
let dy$1 = 0;
let animationId$1 = null;
const handleDragAnima = () => {
	if (dx$1 === store.page.offset.x.px && dy$1 === store.page.offset.y.px) {
		animationId$1 = null;
		return;
	}
	setState((state) => {
		if (state.page.vertical) state.page.offset.y.px = dy$1;
		else state.page.offset.x.px = dx$1;
	});
	animationId$1 = requestAnimationFrame(handleDragAnima);
};
const handleDragEnd = (startTime) => {
	dx$1 = 0;
	dy$1 = 0;
	if (animationId$1) {
		cancelAnimationFrame(animationId$1);
		animationId$1 = null;
	}
	const dir = store.page.vertical ? getTurnPageDir(-store.page.offset.y.px, store.rootSize.height, startTime) : getTurnPageDir(store.page.offset.x.px, store.rootSize.width, startTime);
	if (dir) return turnPageAnimation(dir);
	setState((state) => {
		state.page.offset.x.px = 0;
		state.page.offset.y.px = 0;
		state.page.anima = "page";
		state.isDragMode = false;
	});
};
handleDragEnd.debounce = helper.debounce(handleDragEnd, 200);
const handleMangaFlowDrag = ({ type, xy: [x, y], initial: [ix, iy], startTime }) => {
	switch (type) {
		case "move": {
			dx$1 = store.option.dir === "rtl" ? x - ix : ix - x;
			dy$1 = y - iy;
			if (store.isDragMode) {
				animationId$1 ||= requestAnimationFrame(handleDragAnima);
				return;
			}
			let slideDir;
			const dxAbs = Math.abs(dx$1);
			const dyAbs = Math.abs(dy$1);
			if (dxAbs > 5 && dyAbs < 5) slideDir = "horizontal";
			if (dyAbs > 5 && dxAbs < 5) slideDir = "vertical";
			if (!slideDir) return;
			setState((state) => {
				state.page.vertical = slideDir === "vertical";
				state.isDragMode = true;
				resetPage(state);
			});
			return;
		}
		case "up": return handleDragEnd(startTime);
	}
};
let lastDeltaY$1 = 0;
let retardStartTime = 0;
const handleTrackpadWheel = (e) => {
	if (store.option.scrollMode.enabled) return;
	openScrollLock();
	let deltaY = Math.floor(-e.deltaY);
	let absDeltaY = Math.abs(deltaY);
	if (Math.abs(absDeltaY - lastDeltaY$1) <= 6) {
		retardStartTime ||= Date.now();
		deltaY *= 1 - Math.min(1, (Date.now() - retardStartTime) / 10 * .002);
		absDeltaY = Math.abs(deltaY);
		if (absDeltaY < 2) return;
	} else retardStartTime = 0;
	lastDeltaY$1 = absDeltaY;
	dy$1 += deltaY;
	setState((state) => {
		if (dy$1 <= -state.rootSize.height) {
			if (turnPage("next", state)) dy$1 += state.rootSize.height;
		} else if (dy$1 >= state.rootSize.height && turnPage("prev", state)) dy$1 -= state.rootSize.height;
		state.page.vertical = true;
		state.isDragMode = true;
		resetPage(state);
	});
	animationId$1 ||= requestAnimationFrame(handleDragAnima);
	handleDragEnd.debounce();
};
//#endregion
//#region src/components/Manga/actions/scrollMode.ts
/** 淇敼鍗疯酱妯″紡涓嬪浘鐗囩殑鐩爣瀹藉害 */
const setAdjustToWidth = (val) => {
	if (typeof store.option.scrollMode.adjustToWidth !== "number") return;
	if (typeof val === "function") val = val(store.option.scrollMode.adjustToWidth);
	if (Number.isNaN(val)) return;
	const jump = saveScrollProgress();
	setOption((draftOption) => {
		const max = Math.ceil(store.rootSize.width);
		draftOption.scrollMode.adjustToWidth = helper.clamp(200, val, max);
	});
	jump();
};
const minImgWidth = helper.createRootMemo(() => {
	let min = Number.POSITIVE_INFINITY;
	for (const img of Object.values(store.imgMap)) if (img.width && img.width < min) min = img.width;
	return min;
});
/** 鍦ㄥ嵎杞存ā寮忎笅杩涜缂╂斁锛屽苟涓斾繚鎸佹粴鍔ㄨ繘搴︿笉鍙?*/
const setImgScale = (val) => {
	if (typeof val === "function") val = val(store.option.scrollMode.imgScale);
	if (Number.isNaN(val)) return;
	const jump = saveScrollProgress();
	setOption((draftOption) => {
		val = helper.clamp(.1, val, 3);
		if (minImgWidth() > store.rootSize.width && val < draftOption.scrollMode.imgScale) {
			const maxImgScale = store.rootSize.width / minImgWidth();
			if (val > maxImgScale) val = maxImgScale;
		}
		draftOption.scrollMode.imgScale = helper.clamp(.1, Number(val.toFixed(2)), 3);
	});
	jump();
};
/** 澶勭悊鍗疯酱妯″紡涓嬬殑鏀惧ぇ/缂╁皬鎿嶄綔 */
const handleScrollModeZoom = (dir) => {
	if (!store.option.scrollMode.enabled) return;
	if (store.option.scrollMode.adjustToWidth === "full") return;
	if (store.option.scrollMode.adjustToWidth === "disable" || isAbreastMode()) setImgScale((val) => val + .05 * (dir === "add" ? 1 : -1));
	else setAdjustToWidth((val) => val + 100 * (dir === "add" ? 1 : -1));
};
//#endregion
//#region src/components/Manga/actions/operate.ts
const handleMouseDown = (e) => {
	if (e.button !== 1 || store.option.scrollMode.enabled) return;
	e.stopPropagation();
	e.preventDefault();
	switchFillEffect();
};
const handleKeyDown = (e) => {
	switch (e.target.tagName) {
		case "INPUT":
		case "TEXTAREA": return;
	}
	if (e.target.className === classes$1.hotkeysItem) return;
	const code = helper.getKeyboardCode(e);
	if (e.key === "Escape") {
		if (store.gridMode) {
			e.stopPropagation();
			e.preventDefault();
			return setState("gridMode", false);
		}
		if (store.show.endPage) {
			e.stopPropagation();
			e.preventDefault();
			return setState("show", "endPage", void 0);
		}
	}
	if (e.target.dataset.onlyNumber !== void 0) {
		if (/^(?:Shift \\+ )?[a-zA-Z]$/.test(code)) {
			e.stopPropagation();
			e.preventDefault();
		}
		return;
	}
	if ((isScrollMode() || store.gridMode) && !store.show.endPage) switch (e.key) {
		case "Home":
		case "End":
		case "ArrowRight":
		case "ArrowLeft": return e.stopPropagation();
		case "ArrowUp":
		case "PageUp":
			e.stopPropagation();
			if (isScrollMode()) return handleEndTurnPage("prev");
			return;
		case "ArrowDown":
		case "PageDown":
		case " ":
			e.stopPropagation();
			if (isScrollMode()) return handleEndTurnPage("next");
			return;
	}
	if (Reflect.has(hotkeysMap(), code)) {
		e.stopPropagation();
		e.preventDefault();
	} else return;
	handleHotkey(hotkeysMap()[code], e);
};
const handleKeyUp = (e) => {
	switch (hotkeysMap()[helper.getKeyboardCode(e)]) {
		case "scroll_left":
		case "scroll_right":
		case "scroll_up":
		case "scroll_down": return constantScroll.cancel();
	}
};
/** 鍒ゆ柇涓や釜鏁板€兼槸鍚︽槸鏁存暟鍊嶇殑鍏崇郴 */
const isMultipleOf = (a, b) => {
	const decimal = \`\${a < b ? b / a : a / b}\`.split(".")?.[1];
	return !decimal || decimal.startsWith("0000") || decimal.startsWith("9999");
};
let lastDeltaY = -1;
let timeoutId = 0;
let lastPageNum = -1;
let wheelType;
let equalNum = 0;
let diffNum = 0;
const handleWheel = (e) => {
	if (store.gridMode) return;
	e.stopPropagation();
	if (e.ctrlKey || e.altKey) e.preventDefault();
	const isWheelDown = e.deltaY > 0;
	const dir = isWheelDown ? "next" : "prev";
	const absDeltaY = Math.abs(e.deltaY);
	if (wheelType !== "trackpad" && (absDeltaY < 5 || !Number.isInteger(lastDeltaY) && !Number.isInteger(absDeltaY) && !isMultipleOf(lastDeltaY, absDeltaY))) {
		wheelType = "trackpad";
		if (timeoutId) clearTimeout(timeoutId);
		if (lastPageNum !== -1) setState("activePageIndex", lastPageNum);
	}
	if (absDeltaY < 5) return;
	if ((e.ctrlKey || e.altKey) && store.option.scrollMode.enabled && store.option.zoom.ratio === 100) {
		e.preventDefault();
		return handleScrollModeZoom(isWheelDown ? "sub" : "add");
	}
	if (e.ctrlKey || e.altKey) {
		e.preventDefault();
		return zoom(store.option.zoom.ratio + (isWheelDown ? -25 : 25), e);
	}
	if (handleEndTurnPage(dir)) {
		openScrollLock();
		return e.preventDefault();
	}
	if (isAbreastMode() && store.option.zoom.ratio === 100) {
		e.preventDefault();
		scrollBy(e.deltaY, true);
	}
	if (!isScrollMode()) e.preventDefault();
	if (diffNum < 10) {
		if (lastDeltaY === absDeltaY && absDeltaY > 5) equalNum += 1;
		else {
			diffNum += 1;
			equalNum = 0;
		}
		if (equalNum >= 3) {
			wheelType = void 0;
			lastPageNum = -1;
		}
	}
	lastDeltaY = absDeltaY;
	switch (wheelType) {
		case void 0:
			if (lastPageNum === -1) {
				lastPageNum = store.activePageIndex;
				timeoutId = window.setTimeout(turnPage, 16, dir);
				return;
			}
			wheelType = "mouse";
		case "mouse": return turnPage(dir);
		case "trackpad": return handleTrackpadWheel(e);
	}
};
//#endregion
//#region src/components/Manga/actions/relineUpscale.ts
const maxCacheCount = 50;
const maxCacheSize = 512 * 1024 * 1024;
const cache = /* @__PURE__ */ new Map();
let cacheSize = 0;
const rt = (key, fallback, variables) => helper.t(\`reline_upscale.\${key}\`, variables) || fallback;
const normalizeServerUrl = () => (store.option.relineUpscale.serverUrl || "http://127.0.0.1:5678").replace(/\\/$/, "");
const setMessage = (url, message) => setState("imgMap", url, "relineUpscaleMessage", message);
const getCacheKey = (url) => \`\${location.href.split("#")[0]}:\${url}\`;
const touchCache = (key, item) => {
	item.lastUsed = Date.now();
	cache.delete(key);
	cache.set(key, item);
};
const getCache = (url) => {
	const key = getCacheKey(url);
	const item = cache.get(key);
	if (!item) return;
	touchCache(key, item);
	return item;
};
const evictCache = () => {
	while (cache.size > maxCacheCount || cacheSize > maxCacheSize) {
		const entry = cache.entries().next().value;
		if (!entry) return;
		const [key, item] = entry;
		cache.delete(key);
		cacheSize -= item.size;
		URL.revokeObjectURL(item.blobUrl);
	}
};
const saveCache = (key, blob) => {
	const oldItem = cache.get(key);
	if (oldItem) {
		cacheSize -= oldItem.size;
		URL.revokeObjectURL(oldItem.blobUrl);
	}
	const item = {
		blob,
		blobUrl: URL.createObjectURL(blob),
		size: blob.size,
		lastUsed: Date.now()
	};
	cache.set(key, item);
	cacheSize += item.size;
	evictCache();
	return item;
};
const applyCache = (url) => {
	const item = getCache(url);
	if (!item) return false;
	setState("imgMap", url, {
		relineUpscaleUrl: item.blobUrl,
		relineUpscaleType: "cached",
		relineUpscaleMessage: rt("cached", "Reline result is cached")
	});
	return true;
};
const checkServer = async () => {
	return (await request.request(\`\${normalizeServerUrl()}/status\`, {
		responseType: "json",
		timeout: 1e3 * 5,
		fetch: false,
		noTip: true,
		errorText: rt("server_not_started", "Reline service is not started. Start API service in Reline first.")
	})).response;
};
const upload = async (blob) => {
	const formData = new FormData();
	const ext = blob.type.split("/").at(-1) || "png";
	formData.append("file", new File([blob], \`image.\${ext}\`, { type: blob.type }));
	const res = await request.request(\`\${normalizeServerUrl()}/upscale\`, {
		method: "POST",
		responseType: "blob",
		timeout: 1e3 * 120,
		fetch: false,
		data: formData,
		noTip: true,
		errorText: rt("upload_failed", "Failed to upload image to Reline")
	});
	const contentType = res.responseHeaders?.match(/content-type:\\s*([^\\r\\n;]+)/i)?.[1] || res.response.type;
	if (!contentType) return res.response;
	return new Blob([res.response], { type: contentType });
};
const relineUpscaleImage = async (url) => {
	try {
		if (!url) return;
		const img = store.imgMap[url];
		if (!img || img.loadType !== "loaded") {
			setMessage(url, helper.t("translation.tip.img_not_fully_loaded"));
			return;
		}
		if (applyCache(url)) return;
		setState("imgMap", url, {
			relineUpscaleType: "wait",
			relineUpscaleMessage: rt("connecting", "Connecting to Reline service")
		});
		const status = await checkServer();
		if (status.queue_length) setMessage(url, rt("queued", \`Reline queue: \${status.queue_length} image(s)\`, { pos: status.queue_length }));
		setState("imgMap", url, {
			relineUpscaleType: "processing",
			relineUpscaleMessage: rt("processing", "Reline processing image")
		});
		const resultBlob = await upload(await downloadImg(url));
		const item = saveCache(getCacheKey(url), resultBlob);
		const currentType = store.imgMap[url]?.relineUpscaleType;
		const shouldShow = currentType === "wait" || currentType === "processing";
		setState("imgMap", url, {
			relineUpscaleUrl: item.blobUrl,
			relineUpscaleType: shouldShow ? "show" : "hide",
			relineUpscaleMessage: rt("completed", "Reline upscale completed")
		});
	} catch (error) {
		helper.log.error("Reline upscale error", error);
		setState("imgMap", url, {
			relineUpscaleType: "error",
			relineUpscaleMessage: error?.message || rt("failed", "Reline upscale failed")
		});
		components_Toast.toast.error(rt("failed", "Reline upscale failed"));
	}
};
const relineUpscaleNext = helper.singleThreaded(async (state) => {
	const targetUrl = store.imgList.find((url) => {
		return store.imgMap[url]?.relineUpscaleType === "wait";
	});
	if (!targetUrl) return;
	await relineUpscaleImage(targetUrl);
	state.continueRun();
});
const setImgRelineUpscaleEnable = (list, enable) => {
	if (!store.option.relineUpscale.enabled && enable) return;
	setState((state) => {
		for (const i of list) {
			const img = state.imgMap[state.imgList[i]];
			if (!img) continue;
			if (enable) if (img.relineUpscaleUrl) {
				img.relineUpscaleType = "show";
				img.relineUpscaleMessage = rt("completed", "Reline upscale completed");
			} else {
				const item = getCache(img.src);
				if (item) {
					img.relineUpscaleUrl = item.blobUrl;
					img.relineUpscaleType = "cached";
					img.relineUpscaleMessage = rt("cached", "Reline result is cached");
					continue;
				}
				img.relineUpscaleType = "wait";
				img.relineUpscaleMessage = rt("wait", "Waiting for Reline upscale");
			}
			else if (img.relineUpscaleType === "show" || img.relineUpscaleType === "cached") img.relineUpscaleType = "hide";
			else if (img.relineUpscaleType === "wait" || img.relineUpscaleType === "processing" || img.relineUpscaleType === "error") img.relineUpscaleType = void 0;
		}
	});
	if (enable) relineUpscaleNext();
};
const isRelineUpscalingImage = () => activePage().some((i) => {
	const type = store.imgMap[store.imgList[i]]?.relineUpscaleType;
	return type === "wait" || type === "processing" || type === "show" || type === "cached";
});
const toggleRelineUpscaleCurrent = () => setImgRelineUpscaleEnable(activePage(), !isRelineUpscalingImage());
const retryCurrentRelineUpscale = () => {
	setState((state) => {
		for (const i of activePage()) {
			const img = state.imgMap[state.imgList[i]];
			if (!img) continue;
			img.relineUpscaleType = "wait";
			img.relineUpscaleMessage = rt("wait", "Waiting for Reline upscale");
			img.relineUpscaleUrl = void 0;
		}
	});
	relineUpscaleNext();
};
//#endregion
//#region src/components/Manga/actions/scrollbar.ts
/** 鍒ゆ柇鐐瑰嚮浣嶇疆鍦ㄦ粴鍔ㄦ潯涓婄殑浣嶇疆姣旂巼 */
const getClickTop = (x, y, e) => {
	switch (scrollPosition()) {
		case "bottom":
		case "top": return store.option.dir === "rtl" ? 1 - x / e.offsetWidth : x / e.offsetWidth;
		default: return y / e.offsetHeight;
	}
};
/** 璁＄畻鍦ㄦ粴鍔ㄦ潯涓婄殑鎷栧姩璺濈 */
const getSliderDist = ([x, y], [ix, iy], e) => {
	switch (scrollPosition()) {
		case "bottom":
		case "top": return store.option.dir === "rtl" ? (1 - (x - ix)) / e.offsetWidth : (x - ix) / e.offsetWidth;
		default: return (y - iy) / e.offsetHeight;
	}
};
const [isDrag, setIsDrag] = solid_js.createSignal(false);
const closeDrag = helper.debounce(() => setIsDrag(false), 200);
let lastType = "up";
/** 寮€濮嬫嫋鎷芥椂鐨?sliderTop 鍊?*/
let startTop = 0;
const handleScrollbarSlider = ({ type, xy, initial }, e) => {
	const [x, y] = xy;
	if (type === "move" && lastType === type) {
		setIsDrag(true);
		closeDrag();
	}
	lastType = type;
	if (type === "up") return saveReadProgress();
	if (!refs.mangaFlow) return;
	const scrollbarDom = e.target;
	/** 鐐瑰嚮浣嶇疆鍦ㄦ粴鍔ㄦ潯涓婄殑浣嶇疆姣旂巼 */
	const clickTop = getClickTop(x, y, e.target);
	if (store.option.scrollMode.enabled) if (type === "move") scrollTo(helper.clamp(0, startTop + getSliderDist(xy, initial, scrollbarDom), 1) * scrollLength());
	else {
		startTop = clickTop - sliderHeight() / 2;
		scrollTo(startTop * scrollLength(), true);
	}
	else {
		let newPageIndex = Math.floor(clickTop * store.pageList.length);
		if (newPageIndex < 0) newPageIndex = 0;
		else if (newPageIndex >= store.pageList.length) newPageIndex = store.pageList.length - 1;
		if (newPageIndex !== store.activePageIndex) setState("activePageIndex", newPageIndex);
	}
};
//#endregion
//#region src/components/Manga/actions/scrollModeDrag.ts
/** 鎽╂摝绯绘暟 */
const FRICTION_COEFF = .96;
let lastTop = 0;
let dy = 0;
let lastLeft = 0;
let dx = 0;
let animationId = null;
let lastTime = 0;
/** 閫愬抚璁＄畻閫熺巼 */
const calcVelocity = () => {
	const nowTop = store.option.scrollMode.abreastMode ? abreastScrollFill() : scrollTop();
	dy = nowTop - lastTop;
	lastTop = nowTop;
	dx = store.page.offset.x.px - lastLeft;
	lastLeft = store.page.offset.x.px;
	animationId = requestAnimationFrame(calcVelocity);
};
/** 閫愬抚璁＄畻鎯€ф粦鍔?*/
const handleSlide = (timestamp) => {
	if (Math.abs(dx) + Math.abs(dy) < 1) {
		animationId = null;
		return;
	}
	if (timestamp - lastTime > 16) {
		dy *= FRICTION_COEFF;
		dx *= FRICTION_COEFF;
		lastTime = timestamp;
	}
	if (store.option.scrollMode.abreastMode) {
		scrollTo(scrollTop() + dx);
		setAbreastScrollFill(abreastScrollFill() + dy);
	} else scrollTo(scrollTop() + dy);
	animationId = requestAnimationFrame(handleSlide);
};
let initTop = 0;
let initLeft = 0;
let initAbreastScrollFill = 0;
const handleScrollModeDrag = ({ type, xy: [x, y], initial: [ix, iy], startTime }, e) => {
	if (!store.option.scrollMode.abreastMode && e.pointerType !== "mouse") return;
	switch (type) {
		case "down":
			if (animationId) cancelAnimationFrame(animationId);
			initTop = refs.mangaBox.scrollTop;
			initLeft = store.page.offset.x.px * (store.option.dir === "rtl" ? 1 : -1);
			initAbreastScrollFill = abreastScrollFill();
			requestAnimationFrame(calcVelocity);
			return;
		case "move":
			if (store.option.scrollMode.abreastMode) {
				const _dx = x - ix;
				const _dy = y - iy;
				scrollTo((initLeft + _dx) * (store.option.dir === "rtl" ? 1 : -1));
				setAbreastScrollFill(initAbreastScrollFill + _dy);
			} else scrollTo(initTop + iy - y);
			return;
		case "up":
			if (animationId) cancelAnimationFrame(animationId);
			if (performance.now() - startTime < 50) return;
			animationId = requestAnimationFrame(handleSlide);
			saveReadProgress();
	}
};
//#endregion
//#region src/components/Manga/hooks/useHiddenMouse.ts
/** 鍦ㄩ紶鏍囬潤姝竴娈垫椂闂村悗鑷姩闅愯棌 */
const useHiddenMouse = () => {
	const [hiddenMouse, setHiddenMouse] = solid_js.createSignal(true);
	const hidden = helper.debounce(() => setHiddenMouse(true), 1e3);
	return {
		hiddenMouse,
		/** 榧犳爣绉诲姩 */
		onMouseMove: () => {
			setHiddenMouse(false);
			hidden();
		}
	};
};
//#endregion
//#region src/components/Manga/hooks/useStyle.ts
const useStyle$1 = (css) => solid_js.onMount(() => helper.useStyle(css, refs.root));
const useStyleMemo = (selector, styleMapArg) => solid_js.onMount(() => helper.useStyleMemo(selector, styleMapArg, refs.root));
//#endregion
//#region src/components/Manga/components/ComicImg.tsx
var _tmpl$$38 = /* @__PURE__ */ solid_js_web.template(\`<img draggable=false decoding=sync>\`), _tmpl$2$8 = /* @__PURE__ */ solid_js_web.template(\`<div>\`), _tmpl$3$4 = /* @__PURE__ */ solid_js_web.template(\`<div><picture>\`);
const ComicImg = (img) => {
	const showState = () => imgShowState().get(img.index);
	const src = () => {
		if (img.loadType === "wait") return "";
		if (img.translationType === "show") return img.translationUrl;
		if (store.option.relineUpscale.enabled && img.relineUpscaleUrl && (img.relineUpscaleType === "show" || img.relineUpscaleType === "cached")) return img.relineUpscaleUrl;
		if (store.option.imgRecognition.enabled) {
			if (store.option.imgRecognition.upscale && img.upscaleUrl) return img.upscaleUrl;
			return img.blobUrl;
		}
		if (img.src.startsWith("blob:")) return img.src.replace(/#\\..+/, "");
		return img.src;
	};
	/** 骞舵帓鍗疯酱妯″紡涓嬮渶瑕佸鍒剁殑鍥剧墖鏁伴噺 */
	const cloneNum = solid_js.createMemo(() => {
		if (!isAbreastMode()) return 0;
		const imgPosition = abreastArea().position[img.index];
		return imgPosition ? imgPosition.length - 1 : 0;
	});
	/** 鏄惁瑕佹覆鏌撳鍒跺浘鐗?*/
	const renderClone = () => !store.gridMode && showState() !== void 0 && cloneNum() > 0;
	const styles = solid_js.createMemo(() => ({
		img: {
			"grid-area": isAbreastMode() && !store.gridMode ? "none" : \`_\${img.index}\`,
			"background-color": isEnableBg() ? img.background : void 0
		},
		picture: {
			"aspect-ratio": \`\${img.size.width} / \${img.size.height}\`,
			background: img.progress ? \`linear-gradient(
            to bottom,
            var(--secondary-bg) \${img.progress}%,
            var(--hover-bg-color,#fff3) \${img.progress}%
          )\` : void 0
		}
	}));
	const ComicImgBase = (props) => (() => {
		var _el$ = _tmpl$3$4(), _el$2 = _el$.firstChild;
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return solid_js_web.memo(() => img.loadType !== "wait")() && src();
			},
			get children() {
				var _el$3 = _tmpl$$38();
				_el$3.addEventListener("error", (e) => handleImgError(img.src, e.currentTarget));
				_el$3.addEventListener("load", (e) => handleImgLoaded(img.src, e.currentTarget));
				solid_js_web.effect((_p$) => {
					var _v$ = src(), _v$2 = \`\${img.index}\`, _v$3 = img.src;
					_v$ !== _p$.e && solid_js_web.setAttribute(_el$3, "src", _p$.e = _v$);
					_v$2 !== _p$.t && solid_js_web.setAttribute(_el$3, "alt", _p$.t = _v$2);
					_v$3 !== _p$.a && solid_js_web.setAttribute(_el$3, "data-src", _p$.a = _v$3);
					return _p$;
				}, {
					e: void 0,
					t: void 0,
					a: void 0
				});
				return _el$3;
			}
		}));
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return store.gridMode;
			},
			get children() {
				var _el$4 = _tmpl$2$8();
				solid_js_web.insert(_el$4, (() => {
					var _c$ = solid_js_web.memo(() => !!store.gridMode);
					return () => _c$() ? getImgTip(img.index) : "";
				})());
				solid_js_web.effect(() => solid_js_web.className(_el$4, classes$1.gridModeTip));
				return _el$4;
			}
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$4 = classes$1.img, _v$5 = \`_\${img.index}_\${props.cloneIndex ?? 0}\`, _v$6 = styles().img, _v$7 = showState(), _v$8 = img.type ?? store.defaultImgType, _v$9 = img.loadType === "loaded" ? void 0 : img.loadType, _v$0 = img.relineUpscaleType, _v$1 = img.relineUpscaleMessage, _v$10 = styles().picture;
			_v$4 !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$4);
			_v$5 !== _p$.t && solid_js_web.setAttribute(_el$, "id", _p$.t = _v$5);
			_p$.a = solid_js_web.style(_el$, _v$6, _p$.a);
			_v$7 !== _p$.o && solid_js_web.setAttribute(_el$, "data-show", _p$.o = _v$7);
			_v$8 !== _p$.i && solid_js_web.setAttribute(_el$, "data-type", _p$.i = _v$8);
			_v$9 !== _p$.n && solid_js_web.setAttribute(_el$, "data-load-type", _p$.n = _v$9);
			_v$0 !== _p$.s && solid_js_web.setAttribute(_el$, "data-reline-upscale-type", _p$.s = _v$0);
			_v$1 !== _p$.h && solid_js_web.setAttribute(_el$, "data-reline-upscale-message", _p$.h = _v$1);
			_p$.r = solid_js_web.style(_el$2, _v$10, _p$.r);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0
		});
		return _el$;
	})();
	return [solid_js_web.createComponent(ComicImgBase, {}), solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return renderClone();
		},
		get children() {
			return solid_js_web.createComponent(solid_js.For, {
				get each() {
					return Array.from({ length: cloneNum() });
				},
				children: (_, i) => solid_js_web.createComponent(ComicImgBase, { get cloneIndex() {
					return i() + 1;
				} })
			});
		}
	})];
};
//#endregion
//#region src/components/Manga/components/EmptyTip.tsx
var _tmpl$$37 = /* @__PURE__ */ solid_js_web.template(\`<h1 style=opacity:0>\`);
const EmptyTip = () => {
	let ref;
	helper.onAutoMount(() => {
		let timeoutId = 0;
		const observer = new IntersectionObserver(([{ isIntersecting }]) => {
			if (!isIntersecting) return;
			timeoutId = window.setTimeout(() => {
				ref?.style.removeProperty("opacity");
				timeoutId = 0;
			}, 2e3);
		}, { threshold: 1 });
		observer.observe(ref);
		return () => {
			observer.disconnect();
			if (timeoutId) clearTimeout(timeoutId);
		};
	});
	return (() => {
		var _el$ = _tmpl$$37();
		var _ref$ = ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : ref = _el$;
		_el$.textContent = "NULL";
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/components/ComicImgFlow.tsx
var _tmpl$$36 = /* @__PURE__ */ solid_js_web.template(\`<div tabindex=-1><div tabindex=-1>\`);
const ComicImgFlow = () => {
	const { hiddenMouse, onMouseMove } = useHiddenMouse();
	const handleDrag = (state, e) => {
		if (store.gridMode) return;
		if (touches.size > 1) return handlePinchZoom(state, e);
		if (store.option.zoom.ratio !== 100) return handleZoomDrag(state, e);
		if (store.option.scrollMode.enabled) return handleScrollModeDrag(state, e);
		return handleMangaFlowDrag(state, e);
	};
	solid_js.onMount(() => {
		helper.useDrag({
			ref: refs.mangaBox,
			handleDrag,
			handleClick,
			touches
		});
		bindScrollTop(refs.mangaBox);
	});
	const handleTransitionEnd = () => {
		if (store.isDragMode) return;
		setState((state) => {
			if (store.option.zoom.ratio === 100) resetPage(state, false);
			else state.page.anima = "";
		});
	};
	/** 鍦ㄥ綋鍓嶉〉涔嬪墠鏈夊浘鐗囪鍔犺浇鍑烘潵锛屽鑷村唴瀹归珮搴﹀彂鐢熷彉鍖栧悗锛岄噸鏂版粴鍔ㄩ〉闈紝纭繚褰撳墠鏄剧ず浣嶇疆涓嶅彉 */
	helper.createEffectOn([
		() => store.showRange[0],
		() => pageTopList()[store.showRange[0]],
		pageTopList
	], ([showImg, height, topList], prev) => {
		if (!prev || !height || !isScrollMode()) return;
		const [prevShowImg, prevHeight, prevTopList] = prev;
		if (showImg !== prevShowImg || prevTopList === topList || prevHeight === height) return;
		scrollTo(scrollTop() + height - prevHeight);
	});
	const pageToText = (page) => (page.length === 1 ? [page[0], page[0]] : page).map((i) => i === -1 ? "." : \`_\${i}\`).join(" ");
	const gridAreas = solid_js.createMemo(() => {
		if (store.pageList.length === 0) return;
		if (store.gridMode) {
			let columnNum;
			if (store.isMobile) columnNum = 2;
			else if (store.defaultImgType === "vertical") columnNum = 6;
			else if (isOnePageMode()) columnNum = 4;
			else columnNum = 2;
			const areaList = [[]];
			for (const page of store.pageList) {
				if (areaList.at(-1).length === columnNum) areaList.push([]);
				areaList.at(-1).push(pageToText(page));
			}
			while (areaList.at(-1).length !== columnNum) areaList.at(-1).push(". .");
			return areaList.map((line) => \`"\${line.join(" ")}"\`).join("\\n") || void 0;
		}
		if (store.option.scrollMode.enabled) {
			if (store.option.scrollMode.abreastMode) return \`"\${helper.range(abreastArea().columns.length, (i) => \`_\${i}\`).join(" ")}"\`;
			if (store.option.scrollMode.doubleMode) return store.pageList.map((page) => \`"\${pageToText(page)}"\`).join("\\n");
			return helper.range(store.imgList.length, (i) => \`"_\${i}"\`).join("\\n");
		}
		return store.page.vertical ? store.pageList.slice(store.renderRange[0], store.renderRange[1] + 1).map((page) => \`"\${pageToText(page)}"\`).join("\\n") : \`"\${store.pageList.slice(store.renderRange[0], store.renderRange[1] + 1).map(pageToText).join(" ")}"\`;
	});
	useStyleMemo(\`.\${classes$1.mangaBox}\`, { transform: () => \`translate(\${store.option.zoom.offset.x}px, \${store.option.zoom.offset.y}px)
        scale(\${store.option.zoom.ratio / 100})\` });
	const pageX = solid_js.createMemo(() => {
		if (store.gridMode || isScrollMode()) return 0;
		let x = store.page.offset.x.pct * store.rootSize.width + store.page.offset.x.px;
		if (store.option.dir !== "rtl") x = -x;
		return x;
	});
	useStyleMemo(\`#\${classes$1.mangaFlow}\`, {
		left: () => \`\${pageX()}px\`,
		top: () => \`\${store.page.offset.y.pct * store.rootSize.height + store.page.offset.y.px}px\`,
		"touch-action"() {
			if (store.gridMode) return "auto";
			if (store.option.zoom.ratio !== 100) {
				if (!store.option.scrollMode.enabled) return "none";
				if (store.option.zoom.offset.y === 0) return "pan-up";
				if (store.option.zoom.offset.y === bound().y) return "pan-down";
			}
		},
		"grid-template-areas": gridAreas,
		"grid-template-columns"() {
			if (store.imgList.length === 0 || store.gridMode) return;
			if (store.option.scrollMode.enabled) {
				if (store.option.scrollMode.abreastMode) return \`repeat(\${abreastArea().columns.length}, \${abreastColumnWidth()}px)\`;
				if (store.option.scrollMode.doubleMode) return \`50% 50%\`;
				return;
			}
			if (store.page.vertical) return "50% 50%";
			return \`repeat(\${gridAreas()?.split(" ").length ?? 0}, 50%)\`;
		},
		"grid-template-rows"() {
			if (store.gridMode) return;
			if (isScrollMode()) return pageHeightList().map((num) => \`\${num}px\`).join(" ");
		},
		"background-color": () => isEnableBg() ? getImg(activeImgIndex())?.background : void 0
	});
	useStyle$1(imgAreaStyle);
	return (() => {
		var _el$ = _tmpl$$36(), _el$2 = _el$.firstChild;
		solid_js_web.addEventListener(_el$, "scrollend", focus);
		_el$.addEventListener("transitionend", handleTransitionEnd);
		var _ref$ = bindRef("mangaBox");
		typeof _ref$ === "function" && solid_js_web.use(_ref$, _el$);
		_el$2.addEventListener("transitionend", handleTransitionEnd);
		solid_js_web.addEventListener(_el$2, "mousemove", onMouseMove);
		var _ref$2 = bindRef("mangaFlow");
		typeof _ref$2 === "function" && solid_js_web.use(_ref$2, _el$2);
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Index, {
			get each() {
				return imgList();
			},
			get fallback() {
				return solid_js_web.createComponent(EmptyTip, {});
			},
			children: (img, i) => solid_js_web.createComponent(ComicImg, solid_js_web.mergeProps({ index: i }, img))
		}));
		solid_js_web.effect((_p$) => {
			var _v$ = \`\${classes$1.mangaBox} \${classes$1.beautifyScrollbar}\`, _v$2 = store.page.anima, _v$3 = helper.boolDataVal(store.option.scrollMode.abreastMode), _v$4 = classes$1.mangaFlow, _v$5 = store.option.dir, _v$6 = \`\${classes$1.mangaFlow} \${classes$1.beautifyScrollbar}\`, _v$7 = helper.boolDataVal(store.option.disableZoom && !store.option.scrollMode.enabled), _v$8 = helper.boolDataVal(store.option.zoom.ratio !== 100), _v$9 = helper.boolDataVal(store.page.vertical), _v$0 = !store.gridMode && store.option.autoHiddenMouse && hiddenMouse();
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-animation", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-abreast-scroll", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$2, "id", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setAttribute(_el$2, "dir", _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.className(_el$2, _p$.n = _v$6);
			_v$7 !== _p$.s && solid_js_web.setAttribute(_el$2, "data-disable-zoom", _p$.s = _v$7);
			_v$8 !== _p$.h && solid_js_web.setAttribute(_el$2, "data-scale-mode", _p$.h = _v$8);
			_v$9 !== _p$.r && solid_js_web.setAttribute(_el$2, "data-vertical", _p$.r = _v$9);
			_v$0 !== _p$.d && solid_js_web.setAttribute(_el$2, "data-hidden-mouse", _p$.d = _v$0);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0,
			d: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/components/TouchArea.tsx
var _tmpl$$35 = /* @__PURE__ */ solid_js_web.template(\`<div>\`), _tmpl$2$7 = /* @__PURE__ */ solid_js_web.template(\`<div role=button tabindex=-1>\`);
const areaArrayMap = {
	left_right: [
		[
			"prev",
			"menu",
			"next"
		],
		[
			"PREV",
			"MENU",
			"NEXT"
		],
		[
			"prev",
			"menu",
			"next"
		]
	],
	up_down: [
		[
			"prev",
			"PREV",
			"prev"
		],
		[
			"menu",
			"MENU",
			"menu"
		],
		[
			"next",
			"NEXT",
			"next"
		]
	],
	edge: [
		[
			"next",
			"menu",
			"next"
		],
		[
			"NEXT",
			"MENU",
			"NEXT"
		],
		[
			"next",
			"PREV",
			"next"
		]
	],
	l: [
		[
			"PREV",
			"prev",
			"prev"
		],
		[
			"prev",
			"MENU",
			"next"
		],
		[
			"next",
			"next",
			"NEXT"
		]
	]
};
const areaType = helper.createRootMemo(() => Reflect.has(areaArrayMap, store.option.clickPageTurn.area) ? store.option.clickPageTurn.area : "left_right");
const dir = helper.createRootMemo(() => {
	if (!store.option.clickPageTurn.reverse) return store.option.dir;
	return store.option.dir === "rtl" ? "ltr" : "rtl";
});
const TouchArea = () => (() => {
	var _el$ = _tmpl$$35();
	var _ref$ = bindRef("touchArea");
	typeof _ref$ === "function" && solid_js_web.use(_ref$, _el$);
	solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.For, {
		get each() {
			return areaArrayMap[areaType()];
		},
		children: (rows) => solid_js_web.createComponent(solid_js.For, {
			each: rows,
			children: (area) => (() => {
				var _el$2 = _tmpl$2$7();
				solid_js_web.setAttribute(_el$2, "data-area", area);
				solid_js_web.effect(() => solid_js_web.className(_el$2, classes$1.touchArea));
				return _el$2;
			})()
		})
	}));
	solid_js_web.effect((_p$) => {
		var _v$ = classes$1.touchAreaRoot, _v$2 = dir(), _v$3 = helper.boolDataVal(store.show.touchArea), _v$4 = areaType(), _v$5 = helper.boolDataVal(store.option.clickPageTurn.enabled), _v$6 = helper.boolDataVal(store.option.clickPageTurn.shrinkMenu);
		_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
		_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "dir", _p$.t = _v$2);
		_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-show", _p$.a = _v$3);
		_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-area", _p$.o = _v$4);
		_v$5 !== _p$.i && solid_js_web.setAttribute(_el$, "data-turn-page", _p$.i = _v$5);
		_v$6 !== _p$.n && solid_js_web.setAttribute(_el$, "data-shrink-menu", _p$.n = _v$6);
		return _p$;
	}, {
		e: void 0,
		t: void 0,
		a: void 0,
		o: void 0,
		i: void 0,
		n: void 0
	});
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/EndPage.tsx
var _tmpl$$34 = /* @__PURE__ */ solid_js_web.template(\`<div>\`), _tmpl$2$6 = /* @__PURE__ */ solid_js_web.template(\`<div role=button tabindex=-1><div><p></p><button type=button></button><button type=button data-is-end></button><button type=button>\`), _tmpl$3$3 = /* @__PURE__ */ solid_js_web.template(\`<p>\`);
let delayTypeTimer = 0;
const EndPage = () => {
	const handleClick = (e) => {
		e.stopPropagation();
		if (e.target?.nodeName !== "BUTTON") setState("show", "endPage", void 0);
		focus();
	};
	let ref;
	const [isDrag, setIsDrag] = solid_js.createSignal(false);
	const [dragY, setDragY] = solid_js.createSignal(0);
	const handleDrag = ({ type, xy: [, y], initial: [, iy], startTime }) => {
		switch (type) {
			case "down": return setIsDrag(true);
			case "move": return setDragY(y - iy);
		}
		const pageDir = getTurnPageDir(-dragY(), store.rootSize.height / 2, startTime);
		if (pageDir) handleEndTurnPage(pageDir);
		setDragY(0);
		setIsDrag(false);
	};
	solid_js.onMount(() => {
		helper.useDrag({
			ref,
			handleDrag,
			skip: (e) => e.target.matches(\`.\${classes$1.comments}, .\${classes$1.comments} *\`)
		});
	});
	const [delayType, setDelayType] = solid_js.createSignal();
	solid_js.createEffect(() => {
		if (store.show.endPage) {
			window.clearTimeout(delayTypeTimer);
			setDelayType(store.show.endPage);
		} else delayTypeTimer = window.setTimeout(() => setDelayType(store.show.endPage), 500);
	});
	const tip = solid_js.createMemo(() => {
		if (store.option.scroolEnd === "none") return "";
		switch (delayType()) {
			case "start":
				if (!store.prop.onPrev || store.option.scroolEnd !== "auto") break;
				return helper.t("end_page.tip.start_jump");
			case "end":
				if (store.prop.onNext && store.option.scroolEnd === "auto") return helper.t("end_page.tip.end_jump");
				if (store.prop.onExit) return helper.t("end_page.tip.exit");
		}
		return "";
	});
	return (() => {
		var _el$ = _tmpl$2$6(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling;
		solid_js_web.addEventListener(_el$, "click", handleClick);
		var _ref$ = ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : ref = _el$;
		solid_js_web.insert(_el$3, tip);
		solid_js_web.addEventListener(_el$4, "click", () => store.prop.onPrev?.());
		var _ref$2 = bindRef("prev");
		typeof _ref$2 === "function" && solid_js_web.use(_ref$2, _el$4);
		solid_js_web.insert(_el$4, () => helper.t("end_page.prev_button"));
		solid_js_web.addEventListener(_el$5, "click", () => store.prop.onExit?.(store.show.endPage === "end"));
		var _ref$3 = bindRef("exit");
		typeof _ref$3 === "function" && solid_js_web.use(_ref$3, _el$5);
		solid_js_web.insert(_el$5, () => helper.t("other.exit"));
		solid_js_web.addEventListener(_el$6, "click", () => store.prop.onNext?.());
		var _ref$4 = bindRef("next");
		typeof _ref$4 === "function" && solid_js_web.use(_ref$4, _el$6);
		solid_js_web.insert(_el$6, () => helper.t("end_page.next_button"));
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return solid_js_web.memo(() => !!(store.option.showComment && delayType() === "end"))() && store.commentList?.length;
			},
			get children() {
				var _el$7 = _tmpl$$34();
				solid_js_web.addEventListener(_el$7, "wheel", stopPropagation);
				solid_js_web.insert(_el$7, solid_js_web.createComponent(solid_js.For, {
					get each() {
						return store.commentList;
					},
					children: (comment) => (() => {
						var _el$8 = _tmpl$3$3();
						solid_js_web.insert(_el$8, comment);
						return _el$8;
					})()
				}));
				solid_js_web.effect(() => solid_js_web.className(_el$7, \`\${classes$1.comments} \${classes$1.beautifyScrollbar}\`));
				return _el$7;
			}
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$1.endPage, _v$2 = store.show.endPage, _v$3 = delayType(), _v$4 = helper.boolDataVal(isDrag()), _v$5 = dir() === "rtl" ? "row-reverse" : void 0, _v$6 = classes$1.endPageBody, _v$7 = \`\${dragY()}px\`, _v$8 = classes$1.tip, _v$9 = { [classes$1.invisible]: !store.prop.onPrev }, _v$0 = store.show.endPage ? 0 : -1, _v$1 = store.show.endPage ? 0 : -1, _v$10 = { [classes$1.invisible]: !store.prop.onNext }, _v$11 = store.show.endPage ? 0 : -1;
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-type", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-drag", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setStyleProperty(_el$, "flex-direction", _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.className(_el$2, _p$.n = _v$6);
			_v$7 !== _p$.s && solid_js_web.setStyleProperty(_el$2, "--drag-y", _p$.s = _v$7);
			_v$8 !== _p$.h && solid_js_web.className(_el$3, _p$.h = _v$8);
			_p$.r = solid_js_web.classList(_el$4, _v$9, _p$.r);
			_v$0 !== _p$.d && solid_js_web.setAttribute(_el$4, "tabindex", _p$.d = _v$0);
			_v$1 !== _p$.l && solid_js_web.setAttribute(_el$5, "tabindex", _p$.l = _v$1);
			_p$.u = solid_js_web.classList(_el$6, _v$10, _p$.u);
			_v$11 !== _p$.c && solid_js_web.setAttribute(_el$6, "tabindex", _p$.c = _v$11);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0,
			d: void 0,
			l: void 0,
			u: void 0,
			c: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/components/ScrollbarPageStatus.tsx
var _tmpl$$33 = /* @__PURE__ */ solid_js_web.template(\`<div>\`);
const getScrollbarPage = (img, i, double = false) => {
	let num;
	if (store.option.scrollMode.enabled) num = getImg(i).size.height;
	else num = double ? 2 : 1;
	let upscale;
	if (isUpscale() && img.upscaleUrl !== void 0) upscale = img.upscaleUrl === "" ? "loading" : true;
	return {
		num,
		loadType: img.loadType,
		translationType: img.translationType,
		upscale
	};
};
const ScrollbarPage = (props) => (() => {
	var _el$ = _tmpl$$33();
	solid_js_web.effect((_p$) => {
		var _v$ = classes$1.scrollbarPage, _v$2 = \`\${props.num / scrollLength() * 100}%\`, _v$3 = props.loadType, _v$4 = props.translationType, _v$5 = props.upscale;
		_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
		_v$2 !== _p$.t && solid_js_web.setStyleProperty(_el$, "flex-basis", _p$.t = _v$2);
		_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-type", _p$.a = _v$3);
		_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-translation-type", _p$.o = _v$4);
		_v$5 !== _p$.i && solid_js_web.setAttribute(_el$, "data-upscale", _p$.i = _v$5);
		return _p$;
	}, {
		e: void 0,
		t: void 0,
		a: void 0,
		o: void 0,
		i: void 0
	});
	return _el$;
})();
const isSameItem = (a, b) => a.loadType === b.loadType && a.translationType === b.translationType && a.upscale === b.upscale;
/** 鏄剧ず瀵瑰簲鍥剧墖鍔犺浇鎯呭喌鐨勫厓绱?*/
const ScrollbarPageStatus = () => {
	const scrollbarPageList = helper.createThrottleMemo(() => {
		if (store.pageList.length === 0) return [];
		const list = [];
		let item;
		const handleImg = (i, double = false) => {
			const img = getImg(i);
			const imgItem = getScrollbarPage(img, i, double);
			if (!item) {
				item = imgItem;
				return;
			}
			if (isSameItem(item, imgItem)) if (store.option.scrollMode.enabled) item.num += img.size.height;
			else item.num += double ? 2 : 1;
			else {
				list.push(item);
				item = getScrollbarPage(img, i, double);
			}
		};
		for (const [a, b] of store.pageList) if (b === void 0) handleImg(a, !isOnePageMode());
		else if (a === -1) {
			handleImg(b);
			handleImg(b);
		} else if (b === -1) {
			handleImg(a);
			handleImg(a);
		} else {
			handleImg(a);
			handleImg(b);
		}
		if (item) list.push(item);
		return list;
	}, 200);
	return solid_js_web.createComponent(solid_js.For, {
		get each() {
			return scrollbarPageList();
		},
		children: (page) => solid_js_web.createComponent(ScrollbarPage, page)
	});
};
//#endregion
//#region src/components/Manga/components/Scrollbar.tsx
var _tmpl$$32 = /* @__PURE__ */ solid_js_web.template(\`<div role=scrollbar tabindex=-1>\`), _tmpl$2$5 = /* @__PURE__ */ solid_js_web.template(\`<div>\`);
/** 婊氬姩鏉?*/
const Scrollbar = () => {
	solid_js.onMount(() => {
		helper.useDrag({
			ref: refs.scrollbar,
			handleDrag: handleScrollbarSlider,
			easyMode: () => isScrollMode() && store.option.scrollbar.easyScroll,
			setCapture: true
		});
		watchDomSize("scrollbarSize", refs.scrollbar);
	});
	const [penetrate, setPenetrate] = solid_js.createSignal(false);
	const resetPenetrate = helper.debounce(() => setPenetrate(false));
	const handleWheel = () => {
		setPenetrate(true);
		resetPenetrate();
	};
	/** 鏄惁寮哄埗鏄剧ず婊氬姩鏉?*/
	const showScrollbar = solid_js.createMemo(() => store.show.scrollbar || penetrate());
	/** 婊氬姩鏉℃彁绀烘枃鏈?*/
	const tipText = helper.createThrottleMemo(() => {
		if (store.showRange[0] === store.showRange[1]) return getPageTip(store.showRange[0]);
		/** 骞舵帓鍗疯酱妯″紡涓嬬殑婊氬姩鏉℃彁绀烘枃鏈?*/
		if (isAbreastMode()) {
			const columns = abreastArea().columns.slice(abreastShowColumn().start, abreastShowColumn().end + 1).map((column) => column.map(getPageTip));
			if (store.option.dir !== "rtl") columns.reverse();
			return columns.map((column) => column.join(" ")).join("\\n");
		}
		const tipList = [];
		for (let [i] = store.showRange; i <= store.showRange[1]; i++) tipList.push(getPageTip(i));
		if (isOnePageMode() || isDoubleMode()) return tipList.join("\\n");
		if (tipList.length === 1) return tipList[0];
		if (store.option.dir === "rtl") tipList.reverse();
		return tipList.join("   ");
	});
	useStyleMemo(\`.\${classes$1.scrollbar}\`, {
		"pointer-events": () => penetrate() || store.isDragMode || store.gridMode ? "none" : "auto",
		"--scroll-length": () => \`\${scrollDomLength()}px\`,
		"--slider-midpoint": () => \`\${sliderMidpoint()}px\`,
		"--slider-height": () => \`\${sliderHeight() * scrollDomLength()}px\`,
		"--slider-top": sliderTop
	});
	const ScrollbarBase = (props) => (() => {
		var _el$ = _tmpl$$32();
		_el$.addEventListener("wheel", handleWheel);
		var _ref$ = props.ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : props.ref = _el$;
		solid_js_web.insert(_el$, () => props.children);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$1.scrollbar, _v$2 = classes$1.mangaFlow, _v$3 = store.activePageIndex || -1, _v$4 = helper.boolDataVal(store.option.scrollbar.autoHidden), _v$5 = helper.boolDataVal(showScrollbar()), _v$6 = store.option.dir, _v$7 = scrollPosition(), _v$8 = helper.boolDataVal(isAbreastMode()), _v$9 = helper.boolDataVal(isDrag()), _v$0 = props.style;
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "aria-controls", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "aria-valuenow", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-auto-hidden", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setAttribute(_el$, "data-force-show", _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.setAttribute(_el$, "data-dir", _p$.n = _v$6);
			_v$7 !== _p$.s && solid_js_web.setAttribute(_el$, "data-position", _p$.s = _v$7);
			_v$8 !== _p$.h && solid_js_web.setAttribute(_el$, "data-is-abreast-mode", _p$.h = _v$8);
			_v$9 !== _p$.r && solid_js_web.setAttribute(_el$, "data-drag", _p$.r = _v$9);
			_p$.d = solid_js_web.style(_el$, _v$0, _p$.d);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0,
			d: void 0
		});
		return _el$;
	})();
	return [solid_js_web.createComponent(ScrollbarBase, {
		ref(r$) {
			var _ref$2 = bindRef("scrollbar");
			typeof _ref$2 === "function" && _ref$2(r$);
		},
		get children() {
			return [(() => {
				var _el$2 = _tmpl$2$5();
				solid_js_web.insert(_el$2, tipText);
				solid_js_web.effect(() => solid_js_web.className(_el$2, classes$1.scrollbarPoper));
				return _el$2;
			})(), solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return store.option.scrollbar.showImgStatus;
				},
				get children() {
					return solid_js_web.createComponent(ScrollbarPageStatus, {});
				}
			})];
		}
	}), solid_js_web.createComponent(ScrollbarBase, {
		style: {
			"mix-blend-mode": "difference",
			"pointer-events": "none"
		},
		get children() {
			var _el$3 = _tmpl$2$5();
			solid_js_web.effect((_p$) => {
				var _v$1 = classes$1.scrollbarSlider, _v$10 = { [classes$1.hidden]: store.gridMode };
				_v$1 !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$1);
				_p$.t = solid_js_web.classList(_el$3, _v$10, _p$.t);
				return _p$;
			}, {
				e: void 0,
				t: void 0
			});
			return _el$3;
		}
	})];
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/close.svg
var _tmpl$$31 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4">\`);
var close_default = (props = {}) => (() => {
	var _el$ = _tmpl$$31();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/fullscreen.svg
var _tmpl$$30 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1m0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1">\`);
var fullscreen_default = (props = {}) => (() => {
	var _el$ = _tmpl$$30();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/fullscreen_exit.svg
var _tmpl$$29 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z">\`);
var fullscreen_exit_default = (props = {}) => (() => {
	var _el$ = _tmpl$$29();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/grid_4x4.svg
var _tmpl$$28 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M22 6c0-.55-.45-1-1-1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2H7V3c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7h2c.55 0 1-.45 1-1M7 7h4v4H7zm0 10v-4h4v4zm10 0h-4v-4h4zm0-6h-4V7h4z">\`);
var grid_4x4_default = (props = {}) => (() => {
	var _el$ = _tmpl$$28();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/image.svg
var _tmpl$$27 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 0 1-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02">\`);
var image_default = (props = {}) => (() => {
	var _el$ = _tmpl$$27();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/looks_one.svg
var _tmpl$$26 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14c-.55 0-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1">\`);
var looks_one_default = (props = {}) => (() => {
	var _el$ = _tmpl$$26();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/looks_two.svg
var _tmpl$$25 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4 8c0 1.1-.9 2-2 2h-2v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-1.1.9-2 2-2h2V9h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c1.1 0 2 .9 2 2z">\`);
var looks_two_default = (props = {}) => (() => {
	var _el$ = _tmpl$$25();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/low_priority.svg
var _tmpl$$24 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15 5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m-5.15 3.15 1.79-1.79c.2-.2.2-.51 0-.71l-1.79-1.79a.495.495 0 0 0-.85.35v3.59c0 .44.54.66.85.35M9 16h-.3c-2.35 0-4.45-1.71-4.68-4.05A4.51 4.51 0 0 1 8.5 7H11c.55 0 1-.45 1-1s-.45-1-1-1H8.5c-3.86 0-6.96 3.4-6.44 7.36C2.48 15.64 5.43 18 8.73 18H9">\`);
var low_priority_default = (props = {}) => (() => {
	var _el$ = _tmpl$$24();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/queue.svg
var _tmpl$$23 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1">\`);
var queue_default = (props = {}) => (() => {
	var _el$ = _tmpl$$23();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/settings.svg
var _tmpl$$22 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5">\`);
var settings_default = (props = {}) => (() => {
	var _el$ = _tmpl$$22();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/translate.svg
var _tmpl$$21 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03A17.5 17.5 0 0 0 14.07 6h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18A15.7 15.7 0 0 1 9 11.35c-.81-.89-1.49-1.86-2.06-2.88A.89.89 0 0 0 6.16 8c-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87a.99.99 0 0 0 0 1.42c.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35M17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94m-1.62 7 1.62-4.33L19.12 17z">\`);
var translate_default = (props = {}) => (() => {
	var _el$ = _tmpl$$21();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/view_day.svg
var _tmpl$$20 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1M20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1M2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1">\`);
var view_day_default = (props = {}) => (() => {
	var _el$ = _tmpl$$20();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/zoom_in.svg
var _tmpl$$19 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.78 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m0-7c-.28 0-.5.22-.5.5V9H7.5c-.28 0-.5.22-.5.5s.22.5.5.5H9v1.5c0 .28.22.5.5.5s.5-.22.5-.5V10h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7.5c0-.28-.22-.5-.5-.5">\`);
var zoom_in_default = (props = {}) => (() => {
	var _el$ = _tmpl$$19();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/zoom_out.svg
var _tmpl$$18 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m-2-5h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5">\`);
var zoom_out_default = (props = {}) => (() => {
	var _el$ = _tmpl$$18();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/IconButton/index.module.css
const classes = {
	"iconButtonItem": "iconButtonItem___vTPHz",
	"iconButton": "iconButton___dhWw3",
	"enabled": "enabled___eXH34",
	"disable": "disable___7C-Rj",
	"iconButtonPopper": "iconButtonPopper___dVIu-",
	"hidden": "hidden___v7N-q"
};
//#endregion
//#region src/components/IconButton/index.module.css?inline
var index_module_default$1 = ".iconButtonItem___vTPHz {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.iconButton___dhWw3 {\\r\\n  cursor: pointer;\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n\\r\\n  width: 1.5em;\\r\\n  height: 1.5em;\\r\\n  margin: 0.1em;\\r\\n  padding: 0;\\r\\n  border-style: none;\\r\\n  border-radius: 9999px;\\r\\n\\r\\n  font-size: 1.5em;\\r\\n  color: var(--text, white);\\r\\n\\r\\n  background-color: transparent;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.iconButton___dhWw3:focus,.iconButton___dhWw3:hover {\\r\\n    background-color: var(--hover-bg-color, #fff3);\\r\\n  }\\r\\n\\r\\n.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj) {\\r\\n    color: var(--text-bg, #121212);\\r\\n    background-color: var(--text, white);\\r\\n  }\\r\\n\\r\\n.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj):focus,.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj):hover {\\r\\n      background-color: var(--hover-bg-color-enable, #fffa);\\r\\n    }\\r\\n\\r\\n.iconButton___dhWw3.disable___7C-Rj {\\r\\n    cursor: not-allowed;\\r\\n    opacity: 0.5;\\r\\n    background-color: unset;\\r\\n  }\\r\\n\\r\\n.iconButton___dhWw3 > svg {\\r\\n    width: 1em;\\r\\n  }\\r\\n\\r\\n/* 榛樿鎮诞妗嗘牱寮?*/\\r\\n\\r\\n.iconButtonPopper___dVIu- {\\r\\n  pointer-events: none;\\r\\n  -webkit-user-select: none;\\r\\n          user-select: none;\\r\\n\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  transform: translateY(-50%);\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n\\r\\n  padding: 0.4em 0.5em;\\r\\n  border-radius: 0.3em;\\r\\n\\r\\n  font-size: 0.8em;\\r\\n  color: white;\\r\\n  white-space: nowrap;\\r\\n\\r\\n  opacity: 0;\\r\\n  background-color: #303030;\\r\\n}\\r\\n\\r\\n.iconButtonPopper___dVIu-[data-placement='right'] {\\r\\n    left: calc(100% + 1.5em);\\r\\n  }\\r\\n\\r\\n.iconButtonPopper___dVIu-[data-placement='right']::before {\\r\\n      right: calc(100% + 0.5em);\\r\\n      border-right-color: var(--switch-bg, #6e6e6e);\\r\\n      border-right-width: 0.5em;\\r\\n    }\\r\\n\\r\\n.iconButtonPopper___dVIu-[data-placement='left'] {\\r\\n    right: calc(100% + 1.5em);\\r\\n  }\\r\\n\\r\\n.iconButtonPopper___dVIu-[data-placement='left']::before {\\r\\n      left: calc(100% + 0.5em);\\r\\n      border-left-color: var(--switch-bg, #6e6e6e);\\r\\n      border-left-width: 0.5em;\\r\\n    }\\r\\n\\r\\n/* 宸ュ叿鏍忔寜閽殑鎮诞妗嗙殑绠ご */\\r\\n\\r\\n.iconButtonPopper___dVIu-::before {\\r\\n  pointer-events: none;\\r\\n  content: '';\\r\\n\\r\\n  position: absolute;\\r\\n\\r\\n  border-color: transparent;\\r\\n  border-style: solid;\\r\\n  border-width: 0.4em;\\r\\n\\r\\n  background-color: transparent;\\r\\n\\r\\n  transition: opacity 150ms;\\r\\n}\\r\\n\\r\\n/* 鎺у埗鎮诞妗嗙殑鏄剧ず */\\r\\n\\r\\n.iconButtonItem___vTPHz:is(:hover, :focus, [data-show='true']) .iconButtonPopper___dVIu- {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.hidden___v7N-q {\\r\\n  display: none;\\r\\n}\\r\\n";
//#endregion
//#region src/components/IconButton/index.tsx
var _tmpl$$17 = /* @__PURE__ */ solid_js_web.template(\`<div><button type=button tabindex=0>\`), _tmpl$2$4 = /* @__PURE__ */ solid_js_web.template(\`<div>\`);
/** 鍥炬爣鎸夐挳 */
const IconButton$1 = (_props) => {
	const props = solid_js.mergeProps({ placement: "right" }, _props);
	let buttonRef;
	const handleClick = (e) => {
		if (props.disable) return;
		props.onClick?.(e);
		buttonRef?.blur();
	};
	return (() => {
		var _el$ = _tmpl$$17(), _el$2 = _el$.firstChild;
		solid_js_web.use((ref) => helper.useStyle(index_module_default$1, ref), _el$);
		solid_js_web.addEventListener(_el$2, "click", handleClick);
		var _ref$ = buttonRef;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$2) : buttonRef = _el$2;
		solid_js_web.insert(_el$2, () => props.children);
		solid_js_web.insert(_el$, (() => {
			var _c$ = solid_js_web.memo(() => !!(props.popper || props.tip));
			return () => _c$() ? (() => {
				var _el$3 = _tmpl$2$4();
				solid_js_web.insert(_el$3, () => props.popper || props.tip);
				solid_js_web.effect((_p$) => {
					var _v$7 = [classes.iconButtonPopper, props.popperClassName].join(" "), _v$8 = props.placement;
					_v$7 !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$7);
					_v$8 !== _p$.t && solid_js_web.setAttribute(_el$3, "data-placement", _p$.t = _v$8);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$3;
			})() : null;
		})(), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes.iconButtonItem, _v$2 = props.showTip, _v$3 = props.tip, _v$4 = classes.iconButton, _v$5 = props.style, _v$6 = {
				[classes.hidden]: props.hidden,
				[classes.enabled]: props.enabled,
				[classes.disable]: props.disable
			};
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$2, "aria-label", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.className(_el$2, _p$.o = _v$4);
			_p$.i = solid_js_web.style(_el$2, _v$5, _p$.i);
			_p$.n = solid_js_web.classList(_el$2, _v$6, _p$.n);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/play_arrow.svg
var _tmpl$$16 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82">\`);
var play_arrow_default = (props = {}) => (() => {
	var _el$ = _tmpl$$16();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/stop.svg
var _tmpl$$15 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2">\`);
var stop_default = (props = {}) => (() => {
	var _el$ = _tmpl$$15();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/autoScroll.tsx
const autoScroll = new class extends helper.AnimationFrame {
	/** 涓婃婊氬姩鐨勬椂闂?*/
	lastTime = 0;
	scroll = () => {
		if (isBottom()) {
			this.stop();
			if (!store.prop.onExit) return;
			setState("show", "endPage", "end");
			if (store.option.autoScroll.triggerEnd) setTimeout(handleEndTurnPage, 500, "next");
			return;
		}
		handleHotkey("page_down");
	};
	frame = (timestamp) => {
		const elapsed = timestamp - this.lastTime;
		let progress;
		if (elapsed >= store.option.autoScroll.interval) {
			this.lastTime = timestamp;
			this.scroll();
			progress = 1;
		}
		if (!store.autoScroll.play) return;
		progress ||= elapsed / store.option.autoScroll.interval;
		setState("autoScroll", "progress", progress);
		this.call();
	};
	start = () => {
		this.lastTime = 0;
		this.call();
	};
	stop = () => {
		this.cancel();
		setState("autoScroll", "play", false);
	};
}();
helper.createEffectOn(() => [...Object.values(store.option.autoScroll), store.autoScroll.play], () => {
	autoScroll.cancel();
	if (!store.option.autoScroll.enabled || !store.autoScroll.play) return;
	autoScroll.start();
});
helper.createEffectOn(() => store.show.toolbar, (show) => show && autoScroll.stop());
const AutoScrollButton = () => {
	const background = solid_js.createMemo(() => {
		if (!store.autoScroll.play) return;
		const deg = store.autoScroll.progress * 360 % 360;
		return \`conic-gradient(var(--text-secondary) 0deg, var(--text-secondary) \${deg}deg, var(--text) \${deg}deg)\`;
	});
	return solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("button.auto_scroll");
		},
		get enabled() {
			return store.autoScroll.play;
		},
		get style() {
			return { background: background() };
		},
		onClick: switchAutoScroll,
		get children() {
			return solid_js_web.memo(() => !!store.autoScroll.play)() ? solid_js_web.createComponent(stop_default, {}) : solid_js_web.createComponent(play_arrow_default, {});
		}
	});
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/file_download.svg
var _tmpl$$14 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1">\`);
var file_download_default = (props = {}) => (() => {
	var _el$ = _tmpl$$14();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/DownloadButton.tsx
const getExtName = (mime) => /.+\\/([^;]+)/.exec(mime)?.[1] ?? "jpg";
/** 涓嬭浇鎸夐挳 */
const DownloadButton = () => {
	const { store: state, setState } = helper.useStore({
		length: 0,
		/** undefined 琛ㄧず鏈紑濮嬩笅杞斤紝绛変簬 length 琛ㄧず姝ｅ湪鎵撳寘锛?1 琛ㄧず涓嬭浇瀹屾垚 */
		completedNum: void 0,
		errorNum: 0,
		rawTitle: document.title,
		showRawTitle: true
	});
	const progress = new helper.FaviconProgress();
	const handleDownload = async () => {
		const fileData = {};
		setState({
			errorNum: 0,
			length: imgList().length
		});
		if (state.showRawTitle) setState("rawTitle", document.title);
		const imgIndexNum = \`\${state.length}\`.length;
		for (let i = 0; i < state.length; i += 1) {
			setState("completedNum", i);
			const img = imgList()[i];
			if (store.option.translation.onlyDownloadTranslated && img.translationType !== "show") continue;
			let url;
			if (img.translationType === "show") url = img.translationUrl;
			else if (img.upscaleUrl && isUpscale()) url = img.upscaleUrl;
			else url = img.src;
			let data;
			let fileName;
			const index = \`\${i}\`.padStart(imgIndexNum, "0");
			try {
				data = await downloadImg(url, void 0, 3);
				fileName = img.name || \`\${index}.\${getExtName(data.type)}\`;
			} catch {
				fileName = \`\${index} - \${helper.t("alert.download_failed")}\`;
				setState("errorNum", (num) => num + 1);
			}
			fileData[fileName] = new Uint8Array(await data?.arrayBuffer() ?? []);
		}
		if (Object.keys(fileData).length === 0) {
			components_Toast.toast.warn(helper.t("alert.no_img_download"));
			setState("completedNum", void 0);
			return;
		}
		setState("completedNum", state.length);
		const zipped = fflate.zipSync(fileData, {
			level: 0,
			comment: location.href
		});
		helper.saveAs(new Blob([zipped]), \`\${store.title || state.rawTitle}.zip\`);
		setState("completedNum", -1);
		components_Toast.toast(state.errorNum > 0 ? helper.t("button.download_completed_error", { errorNum: state.errorNum }) : helper.t("button.download_completed"), {
			type: state.errorNum > 0 ? "warn" : "success",
			onDismiss() {
				document.title = state.rawTitle;
				setState("showRawTitle", true);
				progress.recover();
			}
		});
	};
	const tip = solid_js.createMemo(() => {
		switch (state.completedNum) {
			case void 0: return helper.t("other.download");
			case state.length: return helper.t("button.packaging");
			case -1: return helper.t("button.download_completed");
			default: return \`\${helper.t("button.downloading")} - \${state.completedNum}/\${state.length}\`;
		}
	});
	helper.createEffectOn(() => state.completedNum, (num) => {
		let showTip = "";
		switch (num) {
			case void 0: return;
			case state.length:
				showTip = "馃摝";
				break;
			case -1:
				showTip = state.errorNum > 0 ? \`鉂梉\${state.errorNum}]\` : "鉁?;
				break;
			default: showTip = \`\${num}/\${state.length}\`;
		}
		document.title = \`\${showTip} - \${state.rawTitle}\`;
		setState("showRawTitle", false);
	}, { defer: true });
	helper.createEffectOn(() => state.completedNum, (num) => num && num > 0 && progress.update(num / state.length), { defer: true });
	return solid_js_web.createComponent(components_IconButton.IconButton, {
		get tip() {
			return tip();
		},
		onClick: handleDownload,
		get enabled() {
			return state.completedNum !== void 0;
		},
		get children() {
			return solid_js_web.createComponent(file_download_default, {});
		}
	});
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/format_textdirection_l_to_r.svg
var _tmpl$$13 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M9 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61A4 4 0 0 0 9 10m11.65 7.65-2.79-2.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h11v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7">\`);
var format_textdirection_l_to_r_default = (props = {}) => (() => {
	var _el$ = _tmpl$$13();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/format_textdirection_r_to_l.svg
var _tmpl$$12 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M10 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-6.83C8.08 2 6.22 3.53 6.02 5.61A4 4 0 0 0 10 10m-2 7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1s-.45-1-1-1z">\`);
var format_textdirection_r_to_l_default = (props = {}) => (() => {
	var _el$ = _tmpl$$12();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/add.svg
var _tmpl$$11 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1">\`);
var add_default = (props = {}) => (() => {
	var _el$ = _tmpl$$11();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/refresh.svg
var _tmpl$$10 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71z">\`);
var refresh_default = (props = {}) => (() => {
	var _el$ = _tmpl$$10();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/SettingHotkeys.tsx
var _tmpl$$9 = /* @__PURE__ */ solid_js_web.template(\`<div tabindex=0>\`), _tmpl$2$3 = /* @__PURE__ */ solid_js_web.template(\`<div><div><p></p><span style=flex-grow:1></span><div></div><div>\`), _tmpl$3$2 = /* @__PURE__ */ solid_js_web.template(\`<div><select style=height:100%><option value disabled hidden selected> 鈥`), _tmpl$4 = /* @__PURE__ */ solid_js_web.template(\`<option>\`);
const setHotkeys = (...args) => {
	setState(...["hotkeys", ...args]);
	store.prop.onHotkeysChange?.(Object.fromEntries(Object.entries(store.hotkeys).filter(([name, keys]) => !helper.isEqual(keys.filter(Boolean), defaultHotkeys()[name]))));
};
const delHotkeys = (code) => {
	for (const [name, keys] of Object.entries(store.hotkeys)) {
		const i = keys.indexOf(code);
		if (i === -1) continue;
		const newKeys = [...store.hotkeys[name]];
		newKeys.splice(i, 1);
		setHotkeys(name, newKeys);
	}
};
const getHotkeyName = (code) => helper.t(\`hotkeys.\${code}\`) || helper.t(\`button.\${code}\`) || helper.t(\`setting.translation.\${code}\`) || helper.t(\`other.\${code}\`) || code;
const KeyItem = (props) => {
	const code = () => store.hotkeys[props.operateName][props.i];
	const del = () => delHotkeys(code());
	const handleKeyDown = (e) => {
		e.stopPropagation();
		e.preventDefault();
		switch (e.key) {
			case "Tab":
			case "Enter":
			case "Escape":
				focus();
				return;
			case "Backspace":
				setHotkeys(props.operateName, props.i, "");
				return;
		}
		const newCode = helper.getKeyboardCode(e);
		if (Reflect.has(hotkeysMap(), newCode)) components_Toast.toast.error(helper.t("hotkeys.repeat_tip", { hotkey: getHotkeyName(hotkeysMap()[newCode]) }));
		else setHotkeys(props.operateName, props.i, newCode);
	};
	return (() => {
		var _el$ = _tmpl$$9();
		_el$.addEventListener("blur", () => code() || del());
		solid_js_web.use((ref) => code() || setTimeout(() => ref.focus()), _el$);
		solid_js_web.addEventListener(_el$, "keydown", handleKeyDown);
		solid_js_web.insert(_el$, () => helper.keyboardCodeToText(code()), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(close_default, { "on:click": del }), null);
		solid_js_web.effect(() => solid_js_web.className(_el$, classes$1.hotkeysItem));
		return _el$;
	})();
};
const SettingHotkeys = (props) => solid_js_web.createComponent(solid_js.For, {
	get each() {
		return props.keys;
	},
	children: (name) => (() => {
		var _el$2 = _tmpl$2$3(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$6 = _el$4.nextSibling.nextSibling, _el$7 = _el$6.nextSibling;
		solid_js_web.insert(_el$4, () => getHotkeyName(name));
		solid_js_web.addEventListener(_el$6, "click", () => setHotkeys(name, store.hotkeys[name].length, ""));
		solid_js_web.insert(_el$6, solid_js_web.createComponent(add_default, {}));
		solid_js_web.addEventListener(_el$7, "click", () => {
			const newKeys = defaultHotkeys()[name] ?? [];
			for (const code of defaultHotkeys()[name]) delHotkeys(code);
			setHotkeys(name, newKeys);
		});
		solid_js_web.insert(_el$7, solid_js_web.createComponent(refresh_default, {}));
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Index, {
			get each() {
				return store.hotkeys[name];
			},
			children: (_, i) => solid_js_web.createComponent(KeyItem, {
				operateName: name,
				i
			})
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$1.hotkeys, _v$2 = classes$1.hotkeysHeader, _v$3 = helper.t("setting.hotkeys.add"), _v$4 = helper.t("setting.hotkeys.restore");
			_v$ !== _p$.e && solid_js_web.className(_el$2, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.className(_el$3, _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$6, "title", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$7, "title", _p$.o = _v$4);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0
		});
		return _el$2;
	})()
});
const OtherHotkeys = (props) => {
	let ref;
	const handleChange = (e) => {
		const name = e.target.value;
		setHotkeys(name, store.hotkeys[name].length, "");
		ref.value = "";
	};
	return (() => {
		var _el$8 = _tmpl$3$2(), _el$9 = _el$8.firstChild, _el$0 = _el$9.firstChild, _el$1 = _el$0.firstChild;
		_el$9.addEventListener("change", handleChange);
		var _ref$ = ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$9) : ref = _el$9;
		solid_js_web.insert(_el$0, () => helper.t("other.other"), _el$1);
		solid_js_web.insert(_el$9, solid_js_web.createComponent(solid_js.For, {
			get each() {
				return props.keys;
			},
			children: (name) => (() => {
				var _el$10 = _tmpl$4();
				_el$10.value = name;
				solid_js_web.insert(_el$10, () => getHotkeyName(name));
				return _el$10;
			})()
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$5 = classes$1.hotkeys, _v$6 = classes$1.hotkeysHeader;
			_v$5 !== _p$.e && solid_js_web.className(_el$8, _p$.e = _v$5);
			_v$6 !== _p$.t && solid_js_web.className(_el$9, _p$.t = _v$6);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$8;
	})();
};
const SettingHotkeysBlock = () => {
	const hotkeys = helper.createRootMemo(() => {
		const show = [];
		const other = [];
		for (const [name, keys] of Object.entries(store.hotkeys)) (keys.length > 0 ? show : other).push(name);
		return {
			show,
			other
		};
	});
	return [solid_js_web.createComponent(SettingHotkeys, { get keys() {
		return hotkeys().show;
	} }), solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return hotkeys().other.length;
		},
		get children() {
			return solid_js_web.createComponent(OtherHotkeys, { get keys() {
				return hotkeys().other;
			} });
		}
	})];
};
//#endregion
//#region src/components/Manga/components/SettingsItemButton.tsx
var _tmpl$$8 = /* @__PURE__ */ solid_js_web.template(\`<button type=button>\`);
/** 鎸夐挳寮忚彍鍗曢」 */
const SettingsItemButton = (props) => {
	const [, others] = solid_js.splitProps(props, ["children", "onClick"]);
	return solid_js_web.createComponent(SettingsItem, solid_js_web.mergeProps(others, { get children() {
		var _el$ = _tmpl$$8();
		solid_js_web.addEventListener(_el$, "click", props.onClick);
		solid_js_web.insert(_el$, () => props.children);
		solid_js_web.effect(() => solid_js_web.className(_el$, classes$1.SettingsItemIconButton));
		return _el$;
	} }));
};
//#endregion
//#region src/components/Manga/components/SettingsShowItem.tsx
var _tmpl$$7 = /* @__PURE__ */ solid_js_web.template(\`<div><div>\`);
/** 甯︽湁鍔ㄧ敾杩囨浮鐨勫垏鎹㈡樉绀鸿缃」 */
const SettingsShowItem = (props) => (() => {
	var _el$ = _tmpl$$7(), _el$2 = _el$.firstChild;
	solid_js_web.insert(_el$2, () => props.children);
	solid_js_web.effect((_p$) => {
		var _v$ = classes$1.SettingsShowItem, _v$2 = props.when ? "1fr" : "0fr", _v$3 = classes$1.SettingsShowItemBody;
		_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
		_v$2 !== _p$.t && solid_js_web.setStyleProperty(_el$, "grid-template-rows", _p$.t = _v$2);
		_v$3 !== _p$.a && solid_js_web.className(_el$2, _p$.a = _v$3);
		return _p$;
	}, {
		e: void 0,
		t: void 0,
		a: void 0
	});
	return _el$;
})();
//#endregion
//#region src/components/RangeInput.tsx
var _tmpl$$6 = /* @__PURE__ */ solid_js_web.template(\`<textarea autocomplete=off rows=2>\`);
/** 鑼冨洿杈撳叆妗?*/
const RangeInput = (props) => {
	let ref;
	/** 鍦ㄤ繚鎸佸厜鏍囦綅缃笉鍙樼殑鎯呭喌涓嬩慨鏀规枃鏈?*/
	const editText = (text) => {
		const offset = ref.selectionStart;
		ref.value = text;
		if (offset) requestAnimationFrame(() => {
			ref.selectionStart = offset;
			ref.selectionEnd = offset;
		});
	};
	/** 淇敼鏂囨湰涓殑鏁板瓧 */
	const replaceTextNumer = (text, offset, fn) => {
		const isNumber = (num) => /\\d/.test(text[num]);
		let start = offset;
		if (!isNumber(offset)) if (isNumber(start - 1)) start--;
		else if (isNumber(start + 1)) start++;
		else return text;
		let end = start;
		while (isNumber(start - 1)) start--;
		while (isNumber(end + 1)) end++;
		return text.slice(0, start) + fn(Number(text.slice(start, end + 1))) + text.slice(end + 1);
	};
	const handleKeyDown = (e) => {
		switch (e.key) {
			case "ArrowUp":
			case "ArrowDown": editText(replaceTextNumer(ref.value, ref.selectionStart, (num) => e.key === "ArrowUp" ? num + 1 : num - 1));
		}
	};
	return (() => {
		var _el$ = _tmpl$$6();
		_el$.addEventListener("blur", () => {
			try {
				props.onChange?.(ref.value);
			} finally {
				ref.value = props.value;
			}
		});
		solid_js_web.addEventListener(_el$, "keydown", handleKeyDown);
		var _ref$ = ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : ref = _el$;
		solid_js_web.effect((_p$) => {
			var _v$ = props.style, _v$2 = props.placeholder;
			_p$.e = solid_js_web.style(_el$, _v$, _p$.e);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "placeholder", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		solid_js_web.effect(() => _el$.value = props.value);
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/components/SettingTranslation.tsx
var _tmpl$$5 = /* @__PURE__ */ solid_js_web.template(\`<hr style="margin:1em 0">\`);
const bindOption$1 = (...args) => bindOption("translation", ...args);
const [rangeText, setRangeText] = solid_js.createSignal("");
helper.createEffectOn(translationImgs, (imgs) => setRangeText(helper.descRange(imgs, store.imgList.length)));
const TranslateRange = () => {
	helper.createEffectOn(rangeText, () => {
		const imgImgs = helper.extractRange(rangeText(), store.imgList.length);
		const openImgs = [...imgImgs].filter((i) => {
			switch (imgList()[i].translationType) {
				case "show":
				case "wait": return false;
				default: return true;
			}
		});
		if (openImgs.length > 0) setImgTranslationEnbale(openImgs, true);
		const closeImgs = /* @__PURE__ */ new Set();
		for (let i = 0; i < store.imgList.length; i++) if (!imgImgs.has(i)) closeImgs.add(i);
		if (closeImgs.size > 0) setImgTranslationEnbale(closeImgs, false);
		setRangeText(helper.descRange(imgImgs, store.imgList.length));
	});
	return [solid_js_web.createComponent(SettingsItem, { get name() {
		return helper.t("setting.translation.range");
	} }), solid_js_web.createComponent(RangeInput, {
		get ["class"]() {
			return classes$1.SettingsItem;
		},
		get placeholder() {
			return helper.t("other.page_range");
		},
		get value() {
			return rangeText();
		},
		onChange: setRangeText
	})];
};
const settingsMap = {
	"manga-image-translator": mitSettings,
	cotrans: cotransSettings
};
const SettingTranslation = () => [solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
	return helper.t("other.enabled");
} }, () => bindOption$1("enabled"))), solid_js_web.createComponent(solid_js.Show, {
	get when() {
		return store.option.translation.enabled;
	},
	get children() {
		return [
			solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
				get name() {
					return helper.t("setting.translation.provider");
				},
				options: [["manga-image-translator", "Manga Image Translator"], ["cotrans", "Cotrans"]]
			}, () => bindOption$1("provider"))),
			solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return allowBatchTranslation();
				},
				get children() {
					return [
						solid_js_web.createComponent(SettingsItemSwitch, {
							get name() {
								return helper.t("setting.translation.translate_all");
							},
							get value() {
								return isTranslatingAll();
							},
							onChange: translateAll
						}),
						solid_js_web.createComponent(SettingsItemSwitch, {
							get name() {
								return helper.t("setting.translation.translate_to_end");
							},
							get value() {
								return isTranslatingToEnd();
							},
							onChange: translateToEnd
						}),
						solid_js_web.createComponent(TranslateRange, {}),
						_tmpl$$5()
					];
				}
			}),
			solid_js_web.createComponent(solid_js_web.Dynamic, { get component() {
				return settingsMap[store.option.translation.provider];
			} }),
			_tmpl$$5(),
			solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
				return helper.t("setting.translation.options.force_retry");
			} }, () => bindOption$1("forceRetry"))),
			solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
				return helper.t("setting.translation.options.only_download_translated");
			} }, () => bindOption$1("onlyDownloadTranslated")))
		];
	}
})];
//#endregion
//#region src/components/Manga/defaultSettingList.tsx
var _tmpl$$4 = /* @__PURE__ */ solid_js_web.template(\`<input type=color style=width:2em;margin-right:.4em>\`), _tmpl$2$2 = /* @__PURE__ */ solid_js_web.template(\`<input type=url>\`), _tmpl$3$1 = /* @__PURE__ */ solid_js_web.template(\`<blockquote><p>\`);
const tt$1 = (key, fallback) => helper.t(key) || fallback;
/** 榛樿鑿滃崟椤?*/
const defaultSettingList = () => [
	[
		helper.t("setting.option.paragraph_dir"),
		() => solid_js_web.createComponent(SettingsItemButton, {
			get name() {
				return solid_js_web.memo(() => store.option.dir === "rtl")() ? helper.t("setting.option.dir_rtl") : helper.t("setting.option.dir_ltr");
			},
			onClick: switchDir,
			get children() {
				return solid_js_web.memo(() => store.option.dir === "rtl")() ? solid_js_web.createComponent(format_textdirection_r_to_l_default, {}) : solid_js_web.createComponent(format_textdirection_l_to_r_default, {});
			}
		}),
		{ initShow: true }
	],
	[
		helper.t("setting.option.paragraph_display"),
		() => [solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return !store.option.scrollMode.enabled;
			},
			get children() {
				return [solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
					return helper.t("setting.option.disable_auto_enlarge");
				} }, () => bindOption("disableZoom"))), solid_js_web.createComponent(SettingsItemNumber, {
					get name() {
						return helper.t("setting.option.zoom");
					},
					maxLength: 3,
					suffix: "%",
					step: 5,
					onChange: (val) => Number.isNaN(val) || zoom(val),
					get value() {
						return Math.round(store.option.zoom.ratio);
					}
				})];
			}
		}), solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return store.option.scrollMode.enabled;
			},
			get children() {
				return [
					solid_js_web.createComponent(SettingsItemSwitch, {
						get name() {
							return helper.t("setting.option.abreast_mode");
						},
						get value() {
							return store.option.scrollMode.abreastMode;
						},
						onChange: (val) => {
							const jump = saveScrollProgress();
							setOption((draftOption) => {
								draftOption.scrollMode.abreastMode = val;
								draftOption.scrollMode.doubleMode = false;
							});
							jump();
						}
					}),
					solid_js_web.createComponent(solid_js.Show, {
						get when() {
							return store.option.scrollMode.abreastMode;
						},
						get children() {
							return solid_js_web.createComponent(SettingsItemNumber, {
								get name() {
									return helper.t("setting.option.abreast_duplicate");
								},
								maxLength: 3,
								suffix: "%",
								step: 5,
								onChange: (val) => {
									if (Number.isNaN(val)) return;
									setOption((draftOption) => {
										const newVal = helper.clamp(0, val / 100, .95);
										draftOption.scrollMode.abreastDuplicate = newVal;
									});
								},
								get value() {
									return Math.round(store.option.scrollMode.abreastDuplicate * 100);
								}
							});
						}
					}),
					solid_js_web.createComponent(solid_js.Show, {
						get when() {
							return !store.option.scrollMode.abreastMode;
						},
						get children() {
							return [solid_js_web.createComponent(SettingsItemSelect, {
								get name() {
									return helper.t("setting.option.adjust_to_width");
								},
								get options() {
									return [
										["disable", helper.t("other.disable")],
										["full", helper.t("setting.option.full_width")],
										["custom", helper.t("other.custom")]
									];
								},
								get value() {
									return solid_js_web.memo(() => typeof store.option.scrollMode.adjustToWidth === "number")() ? "custom" : store.option.scrollMode.adjustToWidth;
								},
								onChange: (val) => {
									const jump = saveScrollProgress();
									setOption((draftOption, state) => {
										if (val === "custom") draftOption.scrollMode.adjustToWidth = state.isMobile ? state.rootSize.width : 1280;
										else draftOption.scrollMode.adjustToWidth = val;
									});
									jump();
								}
							}), solid_js_web.createComponent(solid_js.Show, {
								get when() {
									return isUseAutoScale();
								},
								get children() {
									return solid_js_web.createComponent(SettingsItemNumber, {
										get name() {
											return helper.t("setting.option.adjust_to_width");
										},
										maxLength: 6,
										step: 100,
										onChange: setAdjustToWidth,
										get value() {
											return store.option.scrollMode.adjustToWidth;
										}
									});
								}
							})];
						}
					}),
					solid_js_web.createComponent(solid_js.Show, {
						get when() {
							return store.option.scrollMode.adjustToWidth === "disable";
						},
						get children() {
							return solid_js_web.createComponent(SettingsItemNumber, {
								get name() {
									return helper.t("setting.option.scroll_mode_img_scale");
								},
								maxLength: 3,
								suffix: "%",
								step: 5,
								onChange: (val) => setImgScale(val / 100),
								get value() {
									return Math.round(store.option.scrollMode.imgScale * 100);
								}
							});
						}
					}),
					solid_js_web.createComponent(SettingsItemNumber, {
						get name() {
							return helper.t("setting.option.scroll_mode_img_spacing");
						},
						maxLength: 5,
						onChange: (val) => {
							if (Number.isNaN(val)) return;
							const newVal = helper.clamp(0, val, Number.POSITIVE_INFINITY);
							setOption((draftOption) => {
								draftOption.scrollMode.spacing = newVal;
							});
						},
						get value() {
							return Math.round(store.option.scrollMode.spacing);
						}
					})
				];
			}
		})],
		{ initShow: true }
	],
	[
		helper.t("button.scroll_mode"),
		() => [solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.align_edge");
		} }, () => bindOption("scrollMode", "alignEdge"))), solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.scrollbar_easy_scroll");
		} }, () => bindOption("scrollbar", "easyScroll")))],
		{
			initShow: () => isScrollMode(),
			hidden: () => !isScrollMode()
		}
	],
	[helper.t("setting.option.paragraph_appearance"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.dark_mode");
		} }, () => bindOption("darkMode"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.dark_mode_auto");
		} }, () => bindOption("autoDarkMode"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.show_comments");
		} }, () => bindOption("showComment"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.autoHiddenMouse");
		} }, () => bindOption("autoHiddenMouse"))),
		solid_js_web.createComponent(SettingsItem, {
			get name() {
				return helper.t("setting.option.background_color");
			},
			get children() {
				var _el$ = _tmpl$$4();
				solid_js_web.addEventListener(_el$, "input", helper.throttle((e) => {
					if (!e.target.value) return;
					setOption((draftOption) => {
						draftOption.customBackground = e.target.value === "#000000" || e.target.value === "#ffffff" ? void 0 : e.target.value;
						if (draftOption.customBackground) draftOption.darkMode = helper.needDarkMode(draftOption.customBackground);
					});
				}, 20));
				solid_js_web.effect(() => _el$.value = store.option.customBackground ?? (store.option.darkMode ? "#000000" : "#ffffff"));
				return _el$;
			}
		}),
		solid_js_web.createComponent(SettingsItemSelect, {
			get name() {
				return helper.t("setting.language");
			},
			options: [
				["zh", "涓枃"],
				["en", "English"],
				["ru", "袪褍褋褋泻懈泄"]
			],
			get value() {
				return helper.lang();
			},
			onChange: helper.setLang
		})
	]],
	[helper.t("setting.option.paragraph_scrollbar"), () => [solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.option.scrollbar_position");
		},
		get options() {
			return [
				["auto", helper.t("other.auto")],
				["right", helper.t("setting.option.scrollbar_position_right")],
				["top", helper.t("setting.option.scrollbar_position_top")],
				["bottom", helper.t("setting.option.scrollbar_position_bottom")],
				["hidden", helper.t("setting.option.scrollbar_position_hidden")]
			];
		}
	}, () => bindOption("scrollbar", "position"))), solid_js_web.createComponent(SettingsShowItem, {
		get when() {
			return store.option.scrollbar.position !== "hidden";
		},
		get children() {
			return [solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return !store.isMobile;
				},
				get children() {
					return solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
						return helper.t("setting.option.scrollbar_auto_hidden");
					} }, () => bindOption("scrollbar", "autoHidden")));
				}
			}), solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
				return helper.t("setting.option.scrollbar_show_img_status");
			} }, () => bindOption("scrollbar", "showImgStatus")))];
		}
	})]],
	[helper.t("setting.option.click_page_turn_enabled"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("other.enabled");
		} }, () => bindOption("clickPageTurn", "enabled"))),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.show_clickable_area");
			},
			get value() {
				return store.show.touchArea;
			},
			onChange: () => setState("show", "touchArea", !store.show.touchArea)
		}),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.shrink_menu");
		} }, () => bindOption("clickPageTurn", "shrinkMenu"))),
		solid_js_web.createComponent(SettingsShowItem, {
			get when() {
				return store.option.clickPageTurn.enabled;
			},
			get children() {
				return [solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
					get name() {
						return helper.t("setting.option.click_page_turn_area");
					},
					get options() {
						return Object.keys(areaArrayMap).map((key) => [key, helper.t(\`touch_area.type.\${key}\`)]);
					}
				}, () => bindOption("clickPageTurn", "area"))), solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
					return helper.t("setting.option.click_page_turn_swap_area");
				} }, () => bindOption("clickPageTurn", "reverse")))];
			}
		})
	]],
	[helper.t("button.auto_scroll"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("other.enabled");
		} }, () => bindOption("autoScroll", "enabled"))),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("other.interval");
			},
			maxLength: 3,
			suffix: "s",
			step: 1,
			onChange: (val) => {
				if (!Number.isNaN(val)) setState("option", "autoScroll", "interval", val * 1e3);
			},
			get value() {
				return store.option.autoScroll.interval / 1e3;
			}
		}),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("other.distance");
			},
			maxLength: 3,
			suffix: "px",
			step: 20,
			onChange: (val) => {
				if (!Number.isNaN(val)) setState("option", "autoScroll", "distance", val);
			},
			get value() {
				return store.option.autoScroll.distance;
			}
		}),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.auto_scroll_trigger_end");
		} }, () => bindOption("autoScroll", "triggerEnd")))
	]],
	[tt$1("reline_upscale.title", "Reline Upscale"), () => [solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
		return helper.t("other.enabled");
	} }, () => bindOption("relineUpscale", "enabled"))), solid_js_web.createComponent(SettingsItem, {
		get name() {
			return tt$1("reline_upscale.server_url", "Reline service URL");
		},
		get children() {
			var _el$2 = _tmpl$2$2();
			_el$2.addEventListener("change", (e) => {
				setOption((draftOption) => {
					const url = e.target.value.trim().replace(/\\/$/, "");
					draftOption.relineUpscale.serverUrl = url || "http://127.0.0.1:5678";
				});
			});
			solid_js_web.effect(() => _el$2.value = store.option.relineUpscale.serverUrl);
			return _el$2;
		}
	})]],
	[helper.t("setting.option.img_recognition"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("other.enabled");
			},
			get value() {
				return store.option.imgRecognition.enabled;
			},
			onChange: () => switchImgRecognition("enabled")
		}),
		solid_js_web.createComponent(solid_js.Show, {
			when: typeof Worker === "undefined",
			get children() {
				var _el$3 = _tmpl$3$1(), _el$4 = _el$3.firstChild;
				solid_js_web.effect(() => _el$4.innerHTML = helper.t("setting.option.img_recognition_warn"));
				return _el$3;
			}
		}),
		solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return !store.supportWorker;
			},
			get children() {
				var _el$5 = _tmpl$3$1(), _el$6 = _el$5.firstChild;
				solid_js_web.effect(() => _el$6.innerHTML = helper.t("setting.option.img_recognition_warn_2"));
				return _el$5;
			}
		}),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.img_recognition_background");
			},
			get disabled() {
				return !store.option.imgRecognition.enabled;
			},
			get value() {
				return store.option.imgRecognition.background;
			},
			onChange: () => switchImgRecognition("background")
		}),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.img_recognition_pageFill");
			},
			get disabled() {
				return !store.option.imgRecognition.enabled;
			},
			get value() {
				return store.option.imgRecognition.pageFill;
			},
			onChange: () => switchImgRecognition("pageFill")
		}),
		solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return !store.isMobile;
			},
			get children() {
				return solid_js_web.createComponent(SettingsItemSwitch, {
					get name() {
						return helper.t("upscale.title");
					},
					get disabled() {
						return !store.option.imgRecognition.enabled || !store.supportUpscaleImage;
					},
					get value() {
						return store.option.imgRecognition.upscale;
					},
					onChange: () => switchImgRecognition("upscale")
				});
			}
		})
	]],
	[helper.t("setting.option.paragraph_translation"), SettingTranslation],
	[helper.t("other.hotkeys"), SettingHotkeysBlock],
	[helper.t("other.other"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.first_page_fill");
		} }, () => bindOption("firstPageFill"))),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.auto_switch_page_mode");
			},
			get value() {
				return store.option.autoSwitchPageMode;
			},
			onChange: (val) => {
				setOption((draftOption, state) => {
					draftOption.autoSwitchPageMode = val;
					state.option.pageNum = val ? 0 : autoPageNum();
				});
			}
		}),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.swap_page_turn_key");
		} }, () => bindOption("swapPageTurnKey"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.autoFullscreen");
		} }, () => bindOption("autoFullscreen"))),
		solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
			get name() {
				return helper.t("setting.option.scroll_end");
			},
			get options() {
				return [
					["none", helper.t("other.none")],
					["exit", helper.t("other.exit")],
					["auto", helper.t("setting.option.scroll_end_auto")]
				];
			}
		}, () => bindOption("scroolEnd"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.always_load_all_img");
		} }, () => bindOption("alwaysLoadAllImg"))),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("setting.option.preload_page_num");
			},
			maxLength: 5,
			onChange: (val) => {
				if (Number.isNaN(val)) return;
				setOption((draftOption) => {
					draftOption.preloadPageNum = helper.clamp(0, val, 99999);
				});
			},
			get value() {
				return store.option.preloadPageNum;
			}
		})
	]]
];
//#endregion
//#region src/components/Manga/components/SettingPanel.tsx
var _tmpl$$3 = /* @__PURE__ */ solid_js_web.template(\`<div>\`), _tmpl$2$1 = /* @__PURE__ */ solid_js_web.template(\`<div><div>\`), _tmpl$3 = /* @__PURE__ */ solid_js_web.template(\`<hr>\`);
const SettingBlockSubtitle = (props) => (() => {
	var _el$ = _tmpl$$3();
	solid_js_web.addEventListener(_el$, "click", props.onClick);
	solid_js_web.insert(_el$, () => props.children);
	solid_js_web.effect(() => solid_js_web.className(_el$, classes$1.SettingBlockSubtitle));
	return _el$;
})();
/** 鑿滃崟闈㈡澘 */
const SettingPanel = () => (() => {
	var _el$2 = _tmpl$$3();
	solid_js_web.addEventListener(_el$2, "click", stopPropagation);
	solid_js_web.addEventListener(_el$2, "scroll", stopPropagation);
	_el$2.addEventListener("wheel", (e) => refs.settingPanel.scrollHeight > refs.settingPanel.clientHeight && e.stopPropagation());
	var _ref$ = bindRef("settingPanel");
	typeof _ref$ === "function" && solid_js_web.use(_ref$, _el$2);
	solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.For, {
		get each() {
			return store.prop.editSettingList(defaultSettingList());
		},
		children: ([name, SettingItem, options], i) => {
			const initShow = options?.initShow;
			const [show, setShwo] = solid_js.createSignal(Boolean(initShow));
			if (typeof initShow === "function") helper.createEffectOn(initShow, (val) => setShwo(val));
			return solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return solid_js_web.memo(() => !!options?.hidden)() ? !options.hidden() : true;
				},
				get children() {
					return [solid_js_web.memo(() => solid_js_web.memo(() => !!i())() ? _tmpl$3() : null), (() => {
						var _el$3 = _tmpl$2$1(), _el$4 = _el$3.firstChild;
						solid_js_web.insert(_el$3, solid_js_web.createComponent(SettingBlockSubtitle, {
							onClick: () => setShwo((prev) => !prev),
							get children() {
								return [name, solid_js_web.memo(() => show() ? null : "鈥?)];
							}
						}), _el$4);
						solid_js_web.insert(_el$4, solid_js_web.createComponent(SettingItem, {}));
						solid_js_web.effect((_p$) => {
							var _v$3 = classes$1.SettingBlock, _v$4 = show(), _v$5 = classes$1.SettingBlockBody;
							_v$3 !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$3);
							_v$4 !== _p$.t && solid_js_web.setAttribute(_el$3, "data-show", _p$.t = _v$4);
							_v$5 !== _p$.a && solid_js_web.className(_el$4, _p$.a = _v$5);
							return _p$;
						}, {
							e: void 0,
							t: void 0,
							a: void 0
						});
						return _el$3;
					})()];
				}
			});
		}
	}));
	solid_js_web.effect((_p$) => {
		var _v$ = \`\${classes$1.SettingPanel} \${classes$1.beautifyScrollbar}\`, _v$2 = helper.lang() === "zh" ? "15em" : "20em";
		_v$ !== _p$.e && solid_js_web.className(_el$2, _p$.e = _v$);
		_v$2 !== _p$.t && solid_js_web.setStyleProperty(_el$2, "width", _p$.t = _v$2);
		return _p$;
	}, {
		e: void 0,
		t: void 0
	});
	return _el$2;
})();
//#endregion
//#region src/components/Manga/defaultButtonList.tsx
var _tmpl$$2 = /* @__PURE__ */ solid_js_web.template(\`<hr>\`), _tmpl$2 = /* @__PURE__ */ solid_js_web.template(\`<div role=button tabindex=-1>\`);
const ZoomButton = () => solid_js_web.createComponent(IconButton$1, {
	get tip() {
		return solid_js_web.memo(() => store.option.zoom.ratio === 100)() ? helper.t("button.zoom_in") : helper.t("button.zoom_out");
	},
	get enabled() {
		return store.option.zoom.ratio !== 100;
	},
	onClick: () => doubleClickZoom(),
	get children() {
		return solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return store.option.zoom.ratio === 100;
			},
			get fallback() {
				return solid_js_web.createComponent(zoom_out_default, {});
			},
			get children() {
				return solid_js_web.createComponent(zoom_in_default, {});
			}
		});
	}
});
const tt = (key, fallback) => helper.t(key) || fallback;
/** 宸ュ叿鏍忕殑榛樿鎸夐挳鍒楄〃 */
const defaultButtonList = [
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return solid_js_web.memo(() => !!isOnePageMode())() ? helper.t("button.page_mode_single") : helper.t("button.page_mode_double");
		},
		get hidden() {
			return store.isMobile;
		},
		onClick: switchOnePageMode,
		get children() {
			return solid_js_web.memo(() => !!isOnePageMode())() ? solid_js_web.createComponent(looks_one_default, {}) : solid_js_web.createComponent(looks_two_default, {});
		}
	}),
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("button.scroll_mode");
		},
		get enabled() {
			return store.option.scrollMode.enabled;
		},
		onClick: switchScrollMode,
		get children() {
			return solid_js_web.createComponent(view_day_default, {});
		}
	}),
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("button.page_fill");
		},
		get enabled() {
			return Boolean(store.fillEffect[nowFillIndex()]);
		},
		get hidden() {
			return isOnePageMode();
		},
		onClick: switchFillEffect,
		get children() {
			return solid_js_web.createComponent(queue_default, {});
		}
	}),
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("button.grid_mode");
		},
		get enabled() {
			return store.gridMode;
		},
		onClick: switchGridMode,
		get children() {
			return solid_js_web.createComponent(grid_4x4_default, {});
		}
	}),
	() => solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return store.option.relineUpscale.enabled;
		},
		get children() {
			return [_tmpl$$2(), solid_js_web.createComponent(IconButton$1, {
				get tip() {
					return solid_js_web.memo(() => !!isRelineUpscalingImage())() ? tt("button.close_current_page_reline_upscale", "Close Reline upscale of the current page") : tt("button.reline_upscale_current_page", "Reline upscale current page");
				},
				get enabled() {
					return isRelineUpscalingImage();
				},
				onClick: toggleRelineUpscaleCurrent,
				get children() {
					return solid_js_web.createComponent(image_default, {});
				}
			})];
		}
	}),
	() => solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return store.option.translation.enabled;
		},
		get children() {
			return [
				_tmpl$$2(),
				solid_js_web.createComponent(IconButton$1, {
					get tip() {
						return solid_js_web.memo(() => !!isTranslatingImage())() ? helper.t("button.close_current_page_translation") : helper.t("button.translate_current_page");
					},
					get enabled() {
						return isTranslatingImage();
					},
					onClick: translateCurrent,
					get children() {
						return solid_js_web.createComponent(translate_default, {});
					}
				}),
				solid_js_web.createComponent(IconButton$1, {
					get tip() {
						return helper.t("setting.translation.translate_to_end");
					},
					get enabled() {
						return isTranslatingToEnd();
					},
					get hidden() {
						return !allowBatchTranslation();
					},
					onClick: translateToEnd,
					get children() {
						return solid_js_web.createComponent(low_priority_default, {});
					}
				})
			];
		}
	}),
	() => solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return store.option.autoScroll.enabled;
		},
		get children() {
			return [_tmpl$$2(), solid_js_web.createComponent(AutoScrollButton, {})];
		}
	}),
	() => _tmpl$$2(),
	() => [solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return !store.option.scrollMode.enabled;
		},
		get children() {
			return solid_js_web.createComponent(ZoomButton, {});
		}
	}), solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return solid_js_web.memo(() => !!store.option.scrollMode.enabled)() && store.option.scrollMode.adjustToWidth !== "full";
		},
		get children() {
			return [solid_js_web.createComponent(IconButton$1, {
				get tip() {
					return helper.t("button.zoom_in");
				},
				get enabled() {
					return store.option.scrollMode.imgScale >= 3;
				},
				onClick: () => handleScrollModeZoom("add"),
				get children() {
					return solid_js_web.createComponent(zoom_in_default, {});
				}
			}), solid_js_web.createComponent(IconButton$1, {
				get tip() {
					return helper.t("button.zoom_out");
				},
				get enabled() {
					return store.option.scrollMode.imgScale <= .1;
				},
				onClick: () => handleScrollModeZoom("sub"),
				get children() {
					return solid_js_web.createComponent(zoom_out_default, {});
				}
			})];
		}
	})],
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return solid_js_web.memo(() => !!store.fullscreen)() ? helper.t("button.fullscreen_exit") : helper.t("button.fullscreen");
		},
		get hidden() {
			return !refs.root.requestFullscreen;
		},
		onClick: switchFullscreen,
		get children() {
			return solid_js_web.memo(() => !!store.fullscreen)() ? solid_js_web.createComponent(fullscreen_exit_default, {}) : solid_js_web.createComponent(fullscreen_default, {});
		}
	}),
	DownloadButton,
	() => {
		const [showPanel, setShowPanel] = solid_js.createSignal(false);
		const handleClick = () => {
			const newVal = !showPanel();
			setState("show", "toolbar", newVal);
			setShowPanel(newVal);
		};
		helper.createEffectOn(() => store.show.toolbar, (showToolbar) => showToolbar || setShowPanel(false));
		const Popper = solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return showPanel();
			},
			get children() {
				return [solid_js_web.createComponent(SettingPanel, {}), (() => {
					var _el$5 = _tmpl$2();
					_el$5.addEventListener("wheel", (e) => {
						if (isScrollMode()) refs.mangaBox.scrollBy({ top: e.deltaY });
					});
					solid_js_web.addEventListener(_el$5, "click", handleClick);
					solid_js_web.effect(() => solid_js_web.className(_el$5, classes$1.closeCover));
					return _el$5;
				})()];
			}
		});
		return solid_js_web.createComponent(IconButton$1, {
			get tip() {
				return helper.t("other.setting");
			},
			get enabled() {
				return showPanel();
			},
			get showTip() {
				return showPanel();
			},
			onClick: handleClick,
			get popperClassName() {
				return solid_js_web.memo(() => !!showPanel())() && classes$1.SettingPanelPopper;
			},
			get popper() {
				return showPanel() && Popper;
			},
			get children() {
				return solid_js_web.createComponent(settings_default, {});
			}
		});
	},
	() => _tmpl$$2(),
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("other.exit");
		},
		onClick: () => store.prop.onExit?.(),
		get children() {
			return solid_js_web.createComponent(close_default, {});
		}
	})
];
//#endregion
//#region src/components/Manga/components/Toolbar.tsx
var _tmpl$$1 = /* @__PURE__ */ solid_js_web.template(\`<div role=toolbar><div><div>\`);
/** 宸︿晶宸ュ叿鏍?*/
const Toolbar = () => {
	helper.createEffectOn(() => store.show.toolbar, (show) => show || focus());
	return (() => {
		var _el$ = _tmpl$$1(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
		solid_js_web.addEventListener(_el$2, "click", focus);
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.For, {
			get each() {
				return store.prop.editButtonList(defaultButtonList);
			},
			children: (ButtonItem) => solid_js_web.createComponent(ButtonItem, {})
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$1.toolbar, _v$2 = helper.boolDataVal(store.show.toolbar), _v$3 = helper.boolDataVal(store.isMobile && store.gridMode), _v$4 = store.isDragMode ? "none" : void 0, _v$5 = classes$1.toolbarPanel, _v$6 = classes$1.toolbarBg;
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-close", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setStyleProperty(_el$, "pointer-events", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.className(_el$2, _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.className(_el$3, _p$.n = _v$6);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/hooks/useCssVar.ts
/** 娣辫壊妯″紡 */
const darkStyle = {
	"--hover-bg-color": "#FFF3",
	"--hover-bg-color-enable": "#FFFa",
	"--switch": "#BDBDBD",
	"--switch-bg": "#6E6E6E",
	"--page-bg": "#303030",
	"--secondary": "#7A909A",
	"--secondary-bg": "#556065",
	"--text": "white",
	"--text-secondary": "#FFFC",
	"--text-bg": "#121212",
	"color-scheme": "dark"
};
/** 娴呰壊妯″紡 */
const lightStyle = {
	"--hover-bg-color": "#0001",
	"--hover-bg-color-enable": "#0009",
	"--switch": "#FAFAFA",
	"--switch-bg": "#9C9C9C",
	"--page-bg": "white",
	"--secondary": "#7A909A",
	"--secondary-bg": "#BAC5CA",
	"--text": "black",
	"--text-secondary": "#0008",
	"--text-bg": "#FAFAFA",
	"color-scheme": "light"
};
const createSvgIcon = (fill, d) => \`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='\${fill}' viewBox='0 0 24 24'%3E%3Cpath d='\${d}'/%3E%3C/svg%3E")\`;
const MdImageNotSupported = \`m21.9 21.9-8.49-8.49-9.82-9.82L2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3H5zm16 .17L5.83 3H19c1.1 0 2 .9 2 2v13.17z\`;
const MdCloudDownload = \`M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3z\`;
const MdPhoto = \`M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z\`;
const useCssVar = () => {
	const svg = () => {
		const fill = store.option.darkMode ? "rgb(156,156,156)" : "rgb(110,110,110)";
		return {
			"--md-image-not-supported": createSvgIcon(fill, MdImageNotSupported),
			"--md-cloud-download": createSvgIcon(fill, MdCloudDownload),
			"--md-photo": createSvgIcon(fill, MdPhoto)
		};
	};
	const i18n = () => ({
		"--i18n-touch-area-prev": \`"\${helper.t("hotkeys.page_up")}"\`,
		"--i18n-touch-area-next": \`"\${helper.t("hotkeys.page_down")}"\`,
		"--i18n-touch-area-menu": \`"\${helper.t("touch_area.menu")}"\`
	});
	useStyleMemo(\`.\${classes$1.root}\`, [
		{
			"--bg": () => store.option.customBackground ?? (store.option.darkMode ? "#000" : "#fff"),
			"--scroll-mode-spacing": () => store.option.scrollMode.spacing
		},
		() => store.option.darkMode ? darkStyle : lightStyle,
		svg,
		i18n
	]);
};
//#endregion
//#region src/components/Manga/hooks/useInit.ts
const useInit = (props) => {
	watchDomSize("rootSize", refs.root);
	const updateOption = (state) => {
		state.defaultOption = helper.assign(defaultOption(), props.defaultOption ?? {});
		state.option = helper.assign(state.defaultOption, props.option ?? {});
	};
	const bindProp = (key, defaultValue) => (state) => Reflect.set(state.prop, key, props[key] ?? defaultValue);
	const bindDebounce = (key) => (state) => {
		state.prop[key] = props[key] ? helper.debounce(props[key]) : void 0;
	};
	const watchProps = {
		option: updateOption,
		onLoading: bindDebounce("onLoading"),
		onOptionChange: bindDebounce("onOptionChange"),
		onHotkeysChange: bindDebounce("onHotkeysChange"),
		onShowImgsChange: bindDebounce("onShowImgsChange"),
		defaultOption(state) {
			updateOption(state);
		},
		fillEffect(state) {
			state.fillEffect = props.fillEffect ?? { "-1": true };
			updatePageData(state);
		},
		onExit(state) {
			state.prop.onExit = (isEnd) => {
				playAnimation(refs.exit);
				props.onExit?.(Boolean(isEnd));
				setState((draftState) => {
					if (isEnd) draftState.activePageIndex = 0;
					draftState.show.endPage = void 0;
				});
				if (document.fullscreenElement) document.exitFullscreen();
			};
		},
		onPrev(state) {
			state.prop.onPrev = props.onPrev ? helper.throttle(() => {
				playAnimation(refs.prev);
				props.onPrev?.();
			}, 1e3) : void 0;
		},
		onNext(state) {
			state.prop.onNext = props.onNext ? helper.throttle(() => {
				playAnimation(refs.next);
				props.onNext?.();
			}, 1e3) : void 0;
		},
		onImgError: bindProp("onImgError"),
		onWaitUrlImgs: bindProp("onWaitUrlImgs"),
		editButtonList: bindProp("editButtonList", (list) => list),
		editSettingList: bindProp("editSettingList", (list) => list),
		commentList(state) {
			state.commentList = props.commentList;
		},
		title(state) {
			state.title = props.title ?? "";
		}
	};
	for (const [key, fn] of Object.entries(watchProps)) solid_js.createEffect(solid_js.on(() => props[key], () => setState(fn)));
	solid_js.createEffect(() => {
		setState((state) => {
			state.hotkeys = {
				...structuredClone(defaultHotkeys()),
				...props.hotkeys
			};
		});
	});
	const handleImgList = () => {
		setState((state) => {
			const newImgMap = {};
			const newImgList = [];
			for (const img of solid_js_store.unwrap(props.imgList)) {
				const url = (typeof img === "object" ? img.src : img)?.replace(/^http:/, "") ?? "";
				newImgList.push(url);
				if (Reflect.has(newImgMap, url)) continue;
				if (Reflect.has(state.imgMap, url)) {
					newImgMap[url] = state.imgMap[url];
					continue;
				}
				const imgItem = typeof img === "string" ? { src: url } : img;
				imgItem.loadType ??= "wait";
				if (imgItem.width && imgItem.height) {
					imgItem.size = getImgDisplaySize(state, imgItem);
					imgItem.type = getImgType(imgItem);
				}
				imgItem.size ??= placeholderSize();
				if (!imgItem.blobUrl && url.startsWith("blob:")) imgItem.blobUrl = imgItem.src;
				newImgMap[url] = imgItem;
			}
			/** 淇敼鍓嶇殑褰撳墠鏄剧ず鍥剧墖 */
			const oldActiveImg = state.pageList[state.activePageIndex]?.map((i) => state.imgList?.[i]) ?? [];
			/** 鏄惁闇€瑕侀噸缃〉闈㈠～鍏?*/
			let needResetFillEffect = false;
			const fillEffectList = Object.keys(state.fillEffect).map(Number);
			for (const pageIndex of fillEffectList) {
				if (pageIndex === -1) continue;
				if (state.imgList[pageIndex] === newImgList[pageIndex]) continue;
				needResetFillEffect = true;
				break;
			}
			const oldImgList = new Set(state.imgList);
			if (oldImgList.size === 0 && newImgList.length > 0) {
				resumeReadProgress(state);
				updateMitTranslators(true);
			}
			/** 琚垹闄ょ殑鍥剧墖 */
			const deleteList = [...oldImgList].filter((url) => !newImgList.includes(url));
			for (const url of deleteList) if (state.imgMap[url].blobUrl && state.imgMap[url].blobUrl !== url) URL.revokeObjectURL(state.imgMap[url].blobUrl);
			/** 鍒犻櫎鍥剧墖鏁?*/
			const deleteNum = deleteList.length;
			/** 浼犲叆鐨勬槸鍚︽槸鏂版极鐢?*/
			const isNew = deleteNum >= oldImgList.size * .8;
			/** 鏄惁闇€瑕佹洿鏂伴〉闈?*/
			const needUpdatePageData = needResetFillEffect || state.imgList.length !== newImgList.length || deleteNum > 0;
			state.imgMap = newImgMap;
			state.imgList = [...newImgList];
			state.prop.onLoading?.(state.imgList.map((url) => state.imgMap[url]));
			if (isNew) state.show.endPage = void 0;
			if (isNew || needResetFillEffect) state.fillEffect = props.fillEffect ?? { "-1": true };
			if (isNew || needUpdatePageData) {
				updatePageData(state);
				if (state.activePageIndex >= state.pageList.length) state.activePageIndex = state.pageList.length - 1;
				updateShowRange(state);
			}
			if (isNew || state.pageList.length === 0) {
				resetImgState(state);
				state.activePageIndex = 0;
				scrollTo(0);
				return;
			}
			oldActiveImg.some((url) => {
				if (!url || newImgList.includes(url)) return false;
				const newPageIndex = state.pageList.findIndex((page) => page.some((index) => state.imgList?.[index] === url));
				if (newPageIndex === -1) return false;
				state.activePageIndex = newPageIndex;
				return true;
			});
			if (state.activePageIndex > state.pageList.length - 1) state.activePageIndex = state.pageList.length - 1;
		});
	};
	helper.createEffectOn(helper.createRootMemo(() => props.imgList), helper.throttle(handleImgList, 500));
	setTimeout(() => {
		const codeUrl = URL.createObjectURL(new Blob(["self.close();"], { type: "text/javascript" }));
		setTimeout(() => URL.revokeObjectURL(codeUrl));
		setState("supportWorker", Boolean(new Worker(codeUrl)));
	}, 0);
	refs.root.addEventListener("fullscreenchange", () => {
		if (!document.fullscreenElement) return setState("fullscreen", false);
		if (document.fullscreenElement.id === "comicRead" || document.fullscreenElement.classList.contains(classes$1.root)) setState("fullscreen", true);
	});
	for (const eventName of [
		"keypress",
		"keyup",
		"touchstart",
		"touchmove",
		"touchend"
	]) refs.root.addEventListener(eventName, stopPropagation, { capture: true });
	focus();
};
//#endregion
//#region src/components/Manga/index.module.css?inline
var index_module_default = ".img___7ajV4 img {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: contain;\\r\\n}\\r\\n\\r\\n.img___7ajV4 {\\r\\n  content-visibility: hidden;\\r\\n\\r\\n  position: relative;\\r\\n\\r\\n  display: none;\\r\\n  align-content: center;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\n}\\r\\n\\r\\n.img___7ajV4[data-show] {\\r\\n    content-visibility: visible;\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n.img___7ajV4 > picture {\\r\\n    position: absolute;\\r\\n    inset: 0;\\r\\n\\r\\n    display: block;\\r\\n\\r\\n    width: auto;\\r\\n    max-width: 100%;\\r\\n    height: auto;\\r\\n    max-height: 100%;\\r\\n    margin-top: auto;\\r\\n    margin-right: inherit;\\r\\n    margin-bottom: auto;\\r\\n    margin-left: inherit;\\r\\n  }\\r\\n\\r\\n.img___7ajV4 > picture,.img___7ajV4 > picture::after {\\r\\n    background-color: var(--hover-bg-color, #fff3);\\r\\n    background-image: var(--md-photo);\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: center;\\r\\n    background-size: 30%;\\r\\n  }\\r\\n\\r\\n/* 閬綇榛樿鐨勫嚭閿欏浘鐗囨爣璇?*/\\r\\n\\r\\n.img___7ajV4[data-load-type='error'] > picture::after {\\r\\n    pointer-events: none;\\r\\n    content: '';\\r\\n\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n\\r\\n    background-color: #eee;\\r\\n    background-image: var(--md-image-not-supported);\\r\\n  }\\r\\n\\r\\n.img___7ajV4[data-load-type='loading'] > picture {\\r\\n    background-image: var(--md-cloud-download);\\r\\n\\r\\n    /* 鍔犺浇涓殑鍥剧墖鍏堥殣钘忎竴涓嬶紝閬垮厤鍑洪敊鍥剧墖鐨勫厓绱犺鐩存帴鏄剧ず鍑烘潵 */\\r\\n  }\\r\\n\\r\\n:is(.img___7ajV4[data-load-type='loading'] > picture) img {\\r\\n      animation: show___HzwUa 100ms forwards;\\r\\n    }\\r\\n\\r\\n.img___7ajV4[data-load-type='error'] > picture {\\n    cursor: pointer;\\n  }\\r\\n\\r\\n.img___7ajV4[data-reline-upscale-type='wait']::after,.img___7ajV4[data-reline-upscale-type='processing']::after,.img___7ajV4[data-reline-upscale-type='error']::after {\\n    pointer-events: none;\\n    content: attr(data-reline-upscale-message);\\n\\n    position: absolute;\\n    right: 0.5em;\\n    bottom: 0.5em;\\n\\n    padding: 0.25em 0.5em;\\n    border-radius: 0.25em;\\n\\n    color: #fff;\\n    font-size: 0.8em;\\n\\n    background: #0009;\\n  }\\r\\n\\r\\n.img___7ajV4[data-reline-upscale-type='error']::after {\\n    background: #b00020cc;\\n  }\\r\\n\\r\\n.mangaFlow___jMZgq[dir='ltr'] .img___7ajV4[data-show='1'],\\r\\n.mangaFlow___jMZgq[dir='rtl'] .img___7ajV4[data-show='0'] {\\r\\n  margin-right: auto;\\r\\n  margin-left: 0;\\r\\n}\\r\\n\\r\\n.mangaFlow___jMZgq[dir='ltr'] .img___7ajV4[data-show='0'],\\r\\n.mangaFlow___jMZgq[dir='rtl'] .img___7ajV4[data-show='1'] {\\r\\n  margin-right: 0;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.mangaFlow___jMZgq {\\r\\n  touch-action: none;\\r\\n  will-change: left, top;\\r\\n  -webkit-user-select: none;\\r\\n          user-select: none;\\r\\n\\r\\n  position: absolute;\\r\\n  transform-origin: 0 0;\\r\\n\\r\\n  contain: layout;\\r\\n  overflow: visible;\\r\\n  display: grid;\\r\\n  grid-auto-columns: 100%;\\r\\n  grid-auto-flow: column;\\r\\n  grid-auto-rows: 100%;\\r\\n  row-gap: 0;\\r\\n  place-items: center;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n\\r\\n  color: var(--text);\\r\\n\\r\\n  backface-visibility: hidden;\\r\\n}\\r\\n\\r\\n.mangaFlow___jMZgq[data-disable-zoom] .img___7ajV4 > picture {\\r\\n    width: fit-content;\\r\\n    height: fit-content;\\r\\n  }\\r\\n\\r\\n.mangaFlow___jMZgq[data-hidden-mouse='true'] {\\r\\n    cursor: none;\\r\\n  }\\r\\n\\r\\n.mangaFlow___jMZgq[data-vertical] {\\r\\n    grid-auto-flow: row;\\r\\n  }\\r\\n\\r\\n.mangaBox___48Jek {\\r\\n  transform-origin: 0 0;\\r\\n\\r\\n  contain: layout style;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n\\r\\n  transition-duration: 0ms;\\r\\n}\\r\\n\\r\\n.mangaBox___48Jek[data-animation='page'] .mangaFlow___jMZgq,.mangaBox___48Jek[data-animation='zoom'] {\\r\\n    transition-duration: 300ms;\\r\\n  }\\r\\n\\r\\n.root___Hf5H2:not([data-grid-mode]) .mangaBox___48Jek {\\r\\n  /* 闅愯棌婊氬姩鏉′絾涓嶅奖鍝嶆粴鍔?*/\\r\\n  scrollbar-width: none;\\r\\n\\r\\n  /* 闅愯棌婊氬姩鏉′絾涓嶅奖鍝嶆粴鍔?*/\\r\\n}\\r\\n\\r\\n:is(.root___Hf5H2:not([data-grid-mode]) .mangaBox___48Jek)::-webkit-scrollbar {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n.root___Hf5H2[data-grid-mode] .mangaFlow___jMZgq {\\r\\n  overflow: auto;\\r\\n  grid-auto-columns: 1fr;\\r\\n  grid-auto-flow: row;\\r\\n  grid-auto-rows: max-content;\\r\\n  grid-template-rows: unset;\\r\\n  row-gap: 1.5em;\\r\\n  align-items: end;\\r\\n\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:is(.root___Hf5H2[data-grid-mode] .mangaFlow___jMZgq) .img___7ajV4 {\\r\\n    cursor: pointer;\\r\\n    margin-right: auto;\\r\\n    margin-left: auto;\\r\\n  }\\r\\n\\r\\n:is(:is(.root___Hf5H2[data-grid-mode] .mangaFlow___jMZgq) .img___7ajV4) > picture {\\r\\n      position: relative;\\r\\n    }\\r\\n\\r\\n:is(:is(.root___Hf5H2[data-grid-mode] .mangaFlow___jMZgq) .img___7ajV4) > .gridModeTip___DgsOa {\\r\\n      cursor: auto;\\r\\n\\r\\n      position: absolute;\\r\\n      bottom: -1.5em;\\r\\n\\r\\n      direction: ltr;\\r\\n      overflow: hidden;\\r\\n\\r\\n      width: 100%;\\r\\n\\r\\n      line-height: 1.5em;\\r\\n      text-align: center;\\r\\n      text-overflow: ellipsis;\\r\\n      white-space: nowrap;\\r\\n\\r\\n      opacity: 0.5;\\r\\n    }\\r\\n\\r\\n[data-load-type='error']:is(:is(.root___Hf5H2[data-grid-mode] .mangaFlow___jMZgq) .img___7ajV4),[data-load-type='wait']:is(:is(.root___Hf5H2[data-grid-mode] .mangaFlow___jMZgq) .img___7ajV4),[src='']:is(:is(.root___Hf5H2[data-grid-mode] .mangaFlow___jMZgq) .img___7ajV4) {\\r\\n      height: 100%;\\r\\n    }\\r\\n\\r\\n.root___Hf5H2[data-scroll-mode]:not([data-grid-mode]) .mangaBox___48Jek {\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n:is(.root___Hf5H2[data-scroll-mode]:not([data-grid-mode]) .mangaBox___48Jek) .mangaFlow___jMZgq {\\r\\n    touch-action: pan-y;\\r\\n    row-gap: calc(var(--scroll-mode-spacing) * 7px);\\r\\n    height: fit-content;\\r\\n  }\\r\\n\\r\\n[data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode]:not([data-grid-mode]) .mangaBox___48Jek) {\\r\\n    touch-action: none;\\r\\n    overflow: hidden;\\r\\n  }\\r\\n\\r\\n[data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode]:not([data-grid-mode]) .mangaBox___48Jek) .mangaFlow___jMZgq {\\r\\n      column-gap: calc(var(--scroll-mode-spacing) * 7px);\\r\\n      align-items: start;\\r\\n      height: 100%;\\r\\n    }\\r\\n\\r\\n:is([data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode]:not([data-grid-mode]) .mangaBox___48Jek) .mangaFlow___jMZgq) .img___7ajV4 {\\r\\n        width: 100%;\\r\\n        height: auto;\\r\\n      }\\r\\n\\r\\n[data-show]:is(:is([data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode]:not([data-grid-mode]) .mangaBox___48Jek) .mangaFlow___jMZgq) .img___7ajV4) {\\r\\n          will-change: transform;\\r\\n        }\\r\\n\\r\\n:is(:is([data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode]:not([data-grid-mode]) .mangaBox___48Jek) .mangaFlow___jMZgq) .img___7ajV4) > picture {\\r\\n          position: relative;\\r\\n        }\\r\\n\\r\\n@keyframes show___HzwUa {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  90% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n.endPage___iOZmk,\\r\\n.endPageBody___g-dz- {\\r\\n  z-index: 10;\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.endPage___iOZmk {\\r\\n  pointer-events: none;\\r\\n\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n\\r\\n  color: white;\\r\\n\\r\\n  opacity: 0;\\r\\n  background-color: #333d;\\r\\n\\r\\n  transition: opacity 500ms;\\r\\n}\\r\\n\\r\\n.endPage___iOZmk[data-show] {\\r\\n    pointer-events: all;\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n.endPage___iOZmk[data-type='start'] .tip___fyxqg {\\r\\n    transform: translateY(-10em);\\r\\n  }\\r\\n\\r\\n.endPage___iOZmk[data-type='end'] .tip___fyxqg {\\r\\n    transform: translateY(10em);\\r\\n  }\\r\\n\\r\\n.endPage___iOZmk .endPageBody___g-dz- {\\r\\n    transform: translate(0, var(--drag-y, 0));\\r\\n    transition: transform 200ms;\\r\\n  }\\r\\n\\r\\n:is(.endPage___iOZmk .endPageBody___g-dz-) button {\\r\\n      cursor: pointer;\\r\\n\\r\\n      transform-origin: center;\\r\\n\\r\\n      font-size: 1.2em;\\r\\n      color: inherit;\\r\\n\\r\\n      background-color: transparent;\\r\\n\\r\\n      animation: jello___wXBLg 0.3s forwards;\\r\\n    }\\r\\n\\r\\n[data-is-end]:is(:is(.endPage___iOZmk .endPageBody___g-dz-) button) {\\r\\n        margin: 2em;\\r\\n        font-size: 3em;\\r\\n      }\\r\\n\\r\\n:is(.endPage___iOZmk .endPageBody___g-dz-) .tip___fyxqg {\\r\\n      position: absolute;\\r\\n      margin: auto;\\r\\n    }\\r\\n\\r\\n.endPage___iOZmk[data-drag] .endPageBody___g-dz- {\\r\\n    transition: transform 00ms;\\r\\n  }\\r\\n\\r\\n.root___Hf5H2[data-mobile] .endPage___iOZmk > button {\\r\\n  width: 1em;\\r\\n}\\r\\n\\r\\n.comments___9ITQv {\\r\\n  position: absolute;\\r\\n  right: 1em;\\r\\n\\r\\n  overflow: auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-end;\\r\\n\\r\\n  width: 20em;\\r\\n  max-height: 80%;\\r\\n  padding-right: 0.5em;\\r\\n\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n.comments___9ITQv > p {\\r\\n    margin: 0.5em 0.1em;\\r\\n    padding: 0.2em 0.5em;\\r\\n    border-radius: 0.5em;\\r\\n    background-color: #333b;\\r\\n  }\\r\\n\\r\\n.comments___9ITQv:hover {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n.root___Hf5H2[data-mobile] .comments___9ITQv {\\r\\n  bottom: 0;\\r\\n  max-height: 15em;\\r\\n  opacity: 0.8;\\r\\n}\\r\\n\\r\\n@keyframes jello___wXBLg {\\r\\n  0%,\\r\\n  11.1%,\\r\\n  100% {\\r\\n    transform: translate3d(0, 0, 0);\\r\\n  }\\r\\n\\r\\n  22.2% {\\r\\n    transform: skewX(-12.5deg) skewY(-12.5deg);\\r\\n  }\\r\\n\\r\\n  33.3% {\\r\\n    transform: skewX(6.25deg) skewY(6.25deg);\\r\\n  }\\r\\n\\r\\n  44.4% {\\r\\n    transform: skewX(-3.125deg) skewY(-3.125deg);\\r\\n  }\\r\\n\\r\\n  55.5% {\\r\\n    transform: skewX(1.5625deg) skewY(1.5625deg);\\r\\n  }\\r\\n\\r\\n  66.6% {\\r\\n    transform: skewX(-0.7812deg) skewY(-0.7812deg);\\r\\n  }\\r\\n\\r\\n  77.7% {\\r\\n    transform: skewX(0.3906deg) skewY(0.3906deg);\\r\\n  }\\r\\n\\r\\n  88.8% {\\r\\n    transform: skewX(-0.1953deg) skewY(-0.1953deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n.toolbar___RMjHL {\\r\\n  position: fixed;\\r\\n  z-index: 9;\\r\\n  top: 0;\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n/* 宸ュ叿鏍忛潰鏉?*/\\r\\n\\r\\n.toolbarPanel___XYjgc {\\r\\n  position: relative;\\r\\n  transform: translateX(-100%);\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n\\r\\n  padding: 0.5em;\\r\\n\\r\\n  transition: transform 200ms;\\r\\n}\\r\\n\\r\\n.toolbarPanel___XYjgc > hr {\\r\\n    height: 1em;\\r\\n    margin: 0;\\r\\n    border: none;\\r\\n    visibility: hidden;\\r\\n  }\\r\\n\\r\\n:is(.toolbar___RMjHL[data-show], .toolbar___RMjHL:hover) .toolbarPanel___XYjgc {\\r\\n  transform: none;\\r\\n}\\r\\n\\r\\n.toolbar___RMjHL[data-close] .toolbarPanel___XYjgc {\\r\\n  transform: translateX(-100%);\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.toolbarBg___i4oTA {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-top-right-radius: 1em;\\r\\n  border-bottom-right-radius: 1em;\\r\\n\\r\\n  background-color: var(--page-bg);\\r\\n  filter: opacity(0.8);\\r\\n}\\r\\n\\r\\n/* 绉诲姩绔紭鍖?*/\\r\\n\\r\\n/* 璋冨ぇ鏍峰紡 */\\r\\n\\r\\n.root___Hf5H2[data-mobile] .toolbar___RMjHL {\\r\\n    font-size: 1.3em;\\r\\n  }\\r\\n\\r\\n/* 鍙兘閫氳繃鐐瑰嚮涓績鏉ュ敜鍑哄伐鍏锋爮锛岄槻姝㈣瑙?*/\\r\\n\\r\\n.root___Hf5H2[data-mobile] .toolbar___RMjHL:not([data-show]) {\\r\\n    pointer-events: none;\\r\\n  }\\r\\n\\r\\n/* 鍑忓皯鑳屾櫙鐨勯€忔槑搴︼紝鏂逛究杈ㄨ瘑 */\\r\\n\\r\\n.root___Hf5H2[data-mobile] .toolbarBg___i4oTA {\\r\\n    filter: opacity(0.8);\\r\\n  }\\r\\n\\r\\n/* 璁剧疆闈㈡澘鎵€鍦ㄧ殑鎮诞妗嗘牱寮?*/\\r\\n\\r\\n.SettingPanelPopper___uEBz3 {\\r\\n  pointer-events: unset !important;\\r\\n  transform: none !important;\\r\\n  height: 0 !important;\\r\\n  padding: 0 !important;\\r\\n}\\r\\n\\r\\n.SettingPanel___ZRvFB {\\r\\n  -webkit-user-select: text;\\r\\n          user-select: text;\\r\\n\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n\\r\\n  overflow: auto;\\r\\n\\r\\n  max-width: calc(100% - 5em);\\r\\n  height: fit-content;\\r\\n  max-height: 95%;\\r\\n  margin: auto;\\r\\n  border-radius: 0.3em;\\r\\n\\r\\n  font-size: 1.2em;\\r\\n  color: var(--text);\\r\\n\\r\\n  background-color: var(--page-bg);\\r\\n  box-shadow:\\r\\n    rgb(0 0 0 / 20%) 0 3px 1px -2px,\\r\\n    rgb(0 0 0 / 14%) 0 2px 2px 0,\\r\\n    rgb(0 0 0 / 12%) 0 1px 5px 0;\\r\\n}\\r\\n\\r\\n.SettingPanel___ZRvFB hr {\\r\\n    margin: 0.5em 0;\\r\\n    color: white;\\r\\n  }\\r\\n\\r\\n.SettingPanel___ZRvFB > hr {\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n.SettingBlock___qxNyt {\\r\\n  display: grid;\\r\\n  grid-template-rows: max-content 1fr;\\r\\n  transition: grid-template-rows 200ms ease-out;\\r\\n}\\r\\n\\r\\n.SettingBlock___qxNyt .SettingBlockBody___Wirnd {\\r\\n    z-index: 0;\\r\\n    overflow: hidden;\\r\\n    padding: 0 0.5em;\\r\\n    padding-bottom: 1em;\\r\\n  }\\r\\n\\r\\n:is(.SettingBlock___qxNyt .SettingBlockBody___Wirnd) > div + :is(.SettingBlock___qxNyt .SettingBlockBody___Wirnd) > div {\\r\\n      margin-top: 1em;\\r\\n    }\\r\\n\\r\\n:is(.SettingBlock___qxNyt .SettingBlockBody___Wirnd) input,:is(.SettingBlock___qxNyt .SettingBlockBody___Wirnd) textarea {\\r\\n      width: 97%;\\r\\n      margin-top: 0.3em;\\r\\n    }\\r\\n\\r\\n.SettingBlock___qxNyt[data-show='false'] {\\r\\n    grid-template-rows: max-content 0fr;\\r\\n    padding-bottom: unset;\\r\\n  }\\r\\n\\r\\n.SettingBlock___qxNyt[data-show='false'] .SettingBlockBody___Wirnd {\\r\\n      padding: unset;\\r\\n    }\\r\\n\\r\\n.SettingBlockSubtitle___cv0Ji {\\r\\n  cursor: pointer;\\r\\n\\r\\n  position: sticky;\\r\\n  z-index: 1;\\r\\n  top: 0;\\r\\n\\r\\n  height: 3em;\\r\\n  margin-bottom: 0.1em;\\r\\n\\r\\n  font-size: 0.7em;\\r\\n  line-height: 3em;\\r\\n  color: var(--text-secondary);\\r\\n  text-align: center;\\r\\n\\r\\n  background-color: var(--page-bg);\\r\\n}\\r\\n\\r\\n.SettingBlockBody___Wirnd .SettingBlockSubtitle___cv0Ji {\\r\\n  position: unset;\\r\\n  height: 1em;\\r\\n  line-height: 1em;\\r\\n}\\r\\n\\r\\n.SettingsItem___aJhRD {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n:is(.SettingsItem___aJhRD,.SettingsShowItem___l-D2E) + .SettingsItem___aJhRD {\\r\\n    margin-top: 1em;\\r\\n  }\\r\\n\\r\\n.SettingsItem___aJhRD[data-disabled] {\\r\\n    opacity: 0.5;\\r\\n  }\\r\\n\\r\\n.SettingsItem___aJhRD[data-disabled] button {\\r\\n      cursor: not-allowed;\\r\\n    }\\r\\n\\r\\n.SettingsItemName___UP6zJ {\\r\\n  max-width: calc(100% - 4em);\\r\\n\\r\\n  font-size: 0.9em;\\r\\n  text-align: start;\\r\\n  overflow-wrap: anywhere;\\r\\n  white-space: pre-wrap;\\r\\n}\\r\\n\\r\\n/* 寮€鍏冲紡璁剧疆椤?*/\\r\\n\\r\\n.SettingsItemSwitch___LVGr9 {\\r\\n  cursor: pointer;\\r\\n\\r\\n  display: inline-flex;\\r\\n  align-items: center;\\r\\n\\r\\n  width: 2.3em;\\r\\n  height: 0.8em;\\r\\n  margin: 0.3em;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  border-radius: 1em;\\r\\n\\r\\n  background-color: var(--switch-bg);\\r\\n}\\r\\n\\r\\n/* 寮€鍏抽噷鐨勫渾褰㈡寜閽?*/\\r\\n\\r\\n.SettingsItemSwitchRound___Ds0B8 {\\r\\n  transform: translateX(-10%);\\r\\n\\r\\n  width: 1.15em;\\r\\n  height: 1.15em;\\r\\n  border-radius: 100%;\\r\\n\\r\\n  background: var(--switch);\\r\\n  box-shadow:\\r\\n    0 2px 1px -1px rgb(0 0 0 / 20%),\\r\\n    0 1px 1px 0 rgb(0 0 0 / 14%),\\r\\n    0 1px 3px 0 rgb(0 0 0 / 12%);\\r\\n\\r\\n  transition: transform 100ms;\\r\\n}\\r\\n\\r\\n.SettingsItemSwitch___LVGr9[data-checked='true'] {\\r\\n  background: var(--secondary-bg);\\r\\n}\\r\\n\\r\\n.SettingsItemSwitch___LVGr9[data-checked='true'] .SettingsItemSwitchRound___Ds0B8 {\\r\\n    transform: translateX(110%);\\r\\n    background: var(--secondary);\\r\\n  }\\r\\n\\r\\n/* 鍥炬爣鎸夐挳寮忚缃」 */\\r\\n\\r\\n.SettingsItemIconButton___Cs7BQ {\\r\\n  cursor: pointer;\\r\\n\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n\\r\\n  height: 1em;\\r\\n  border: none;\\r\\n\\r\\n  font-size: 1.5em;\\r\\n  color: var(--text);\\r\\n\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/* 閫夋嫨鍣ㄨ缃」 */\\r\\n\\r\\n.SettingsItemSelect___CvFKx {\\r\\n  cursor: pointer;\\r\\n\\r\\n  max-width: 6.5em;\\r\\n  margin: 0;\\r\\n  padding: 0.3em;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n\\r\\n  font-size: 0.9em;\\r\\n\\r\\n  background-color: var(--hover-bg-color);\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/* 鍏抽棴璁剧疆寮圭獥鐨勯伄缃?*/\\r\\n\\r\\n.closeCover___qLIp5 {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.SettingsShowItem___l-D2E {\\r\\n  display: grid;\\r\\n  transition: grid-template-rows 200ms ease-out;\\r\\n}\\r\\n\\r\\n.SettingsShowItem___l-D2E > .SettingsShowItemBody___bgxxq {\\r\\n    overflow: hidden;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n:is(.SettingsShowItem___l-D2E > .SettingsShowItemBody___bgxxq) > .SettingsItem___aJhRD {\\r\\n      margin-top: 1em;\\r\\n    }\\r\\n\\r\\n:is(.SettingsShowItem___l-D2E > .SettingsShowItemBody___bgxxq) > :is(textarea,input) {\\r\\n      margin: 0.4em 0.2em 0;\\r\\n      line-height: 1.2;\\r\\n    }\\r\\n\\r\\n[data-only-number] {\\r\\n  padding: 0 0.2em;\\r\\n}\\r\\n\\r\\n[data-only-number] + span {\\r\\n    margin-left: -0.1em;\\r\\n  }\\r\\n\\r\\n.hotkeys___uu-Xe {\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n\\r\\n  display: flex;\\r\\n  flex-grow: 1;\\r\\n  flex-wrap: wrap;\\r\\n  align-items: center;\\r\\n\\r\\n  padding: 0.2em;\\r\\n  padding-top: 2em;\\r\\n  border-bottom: 1px solid var(--secondary-bg);\\r\\n\\r\\n  font-size: 0.9em;\\r\\n  color: var(--text);\\r\\n}\\r\\n\\r\\n.hotkeys___uu-Xe + .hotkeys___uu-Xe {\\r\\n    margin-top: 0.5em;\\r\\n  }\\r\\n\\r\\n.hotkeys___uu-Xe:last-child {\\r\\n    border-bottom: none;\\r\\n  }\\r\\n\\r\\n.hotkeysItem___d9IKS {\\r\\n  cursor: pointer;\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n\\r\\n  box-sizing: content-box;\\r\\n  height: 1em;\\r\\n  margin: 0.3em;\\r\\n  padding: 0.2em 1.2em;\\r\\n  border-radius: 0.3em;\\r\\n\\r\\n  font-family: serif;\\r\\n\\r\\n  outline: 1px solid;\\r\\n  outline-color: var(--secondary-bg);\\r\\n}\\r\\n\\r\\n.hotkeysItem___d9IKS > svg {\\r\\n    display: none;\\r\\n\\r\\n    height: 1em;\\r\\n    margin-left: 0.4em;\\r\\n    border-radius: 1em;\\r\\n\\r\\n    color: var(--page-bg);\\r\\n\\r\\n    opacity: 0.5;\\r\\n    background-color: var(--text);\\r\\n  }\\r\\n\\r\\n:is(.hotkeysItem___d9IKS > svg):hover {\\r\\n      opacity: 0.9;\\r\\n    }\\r\\n\\r\\n.hotkeysItem___d9IKS:hover {\\r\\n    padding: 0.2em 0.5em;\\r\\n  }\\r\\n\\r\\n.hotkeysItem___d9IKS:hover > svg {\\r\\n      display: unset;\\r\\n    }\\r\\n\\r\\n.hotkeysItem___d9IKS:focus,.hotkeysItem___d9IKS:focus-visible {\\r\\n    outline: var(--text) solid 2px;\\r\\n  }\\r\\n\\r\\n.hotkeysHeader___jU7vr {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n\\r\\n  box-sizing: border-box;\\r\\n  width: 100%;\\r\\n  padding: 0 0.5em;\\r\\n}\\r\\n\\r\\n.hotkeysHeader___jU7vr > p {\\r\\n    line-height: 1em;\\r\\n    text-align: start;\\r\\n    overflow-wrap: anywhere;\\r\\n    white-space: pre-wrap;\\r\\n\\r\\n    background-color: var(--page-bg);\\r\\n  }\\r\\n\\r\\n.hotkeysHeader___jU7vr > div[title] {\\r\\n    cursor: pointer;\\r\\n\\r\\n    transform: scale(0);\\r\\n\\r\\n    display: flex;\\r\\n\\r\\n    background-color: var(--page-bg);\\r\\n\\r\\n    transition: transform 100ms;\\r\\n  }\\r\\n\\r\\n:is(.hotkeysHeader___jU7vr > div[title]) > svg {\\r\\n      width: 1.6em;\\r\\n    }\\r\\n\\r\\n.hotkeys___uu-Xe:hover div[title] {\\r\\n  transform: scale(1);\\r\\n}\\r\\n\\r\\n.scrollbar___hLToV {\\r\\n  --arrow-y: clamp(\\r\\n    0.45em,\\r\\n    calc(var(--slider-midpoint)),\\r\\n    calc(var(--scroll-length) - 0.45em)\\r\\n  );\\r\\n\\r\\n  touch-action: none;\\r\\n  -webkit-user-select: none;\\r\\n          user-select: none;\\r\\n\\r\\n  position: absolute;\\r\\n  z-index: 9;\\r\\n  top: 1%;\\r\\n  right: 3px;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n\\r\\n  width: 5px;\\r\\n  height: 98%;\\r\\n\\r\\n  /* 鎵╁ぇ瑙﹀彂鑼冨洿 */\\r\\n  border-left: max(6vw, 1em) solid transparent;\\r\\n}\\r\\n\\r\\n.scrollbar___hLToV > div {\\r\\n    pointer-events: none;\\r\\n\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    flex-grow: 1;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs {\\r\\n  transform-origin: bottom;\\r\\n  transform: scaleY(1);\\r\\n\\r\\n  flex-grow: 1;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n\\r\\n  background-color: var(--secondary);\\r\\n\\r\\n  transition: transform 1s;\\r\\n}\\r\\n\\r\\n.scrollbarPage___qghUs[data-type='loaded'] {\\r\\n    transform: scaleY(0);\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs[data-upscale] {\\r\\n    transform: scaleY(1);\\r\\n    background-color: #b39ddb;\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs[data-upscale='loading'] {\\r\\n    background-color: #d1c4e9;\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs[data-translation-type] {\\r\\n    transform-origin: top;\\r\\n    transform: scaleY(1);\\r\\n    background-color: transparent;\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs[data-translation-type='wait'] {\\r\\n    background-color: #81c784;\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs[data-translation-type='show'] {\\r\\n    background-color: #4caf50;\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs[data-translation-type='error'] {\\r\\n    background-color: #f005;\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs[data-type='wait'] {\\r\\n    opacity: 0.4;\\r\\n  }\\r\\n\\r\\n.scrollbarPage___qghUs[data-type='error'] {\\r\\n    background-color: #f005;\\r\\n  }\\r\\n\\r\\n/* 婊氬姩鏉℃粦鍧?*/\\r\\n\\r\\n.scrollbarSlider___r1fWf {\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  transform: translateY(var(--slider-top));\\r\\n\\r\\n  justify-content: center;\\r\\n\\r\\n  width: 100%;\\r\\n  height: var(--slider-height);\\r\\n  border-radius: 1em;\\r\\n\\r\\n  opacity: 1;\\r\\n  background-color: #fff5;\\r\\n\\r\\n  transition:\\r\\n    transform 150ms,\\r\\n    opacity 150ms;\\r\\n}\\r\\n\\r\\n/* 鎮诞妗?*/\\r\\n\\r\\n.scrollbarPoper___XK5Rk {\\r\\n  --poper-top: clamp(\\r\\n    0%,\\r\\n    calc(var(--slider-midpoint) - 50%),\\r\\n    calc(var(--scroll-length) - 100%)\\r\\n  );\\r\\n\\r\\n  position: absolute;\\r\\n  right: 2em;\\r\\n  transform: translateY(var(--poper-top));\\r\\n\\r\\n  width: fit-content;\\r\\n  min-width: 1em;\\r\\n  min-height: 1.5em;\\r\\n  padding: 0.2em 0.5em;\\r\\n  border-radius: 0.3em;\\r\\n\\r\\n  font-size: 0.8em;\\r\\n  line-height: 1.5em;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  white-space: pre;\\r\\n\\r\\n  background-color: #303030;\\r\\n}\\r\\n\\r\\n/* 鎮诞妗嗙澶?*/\\r\\n\\r\\n.scrollbar___hLToV::before {\\r\\n  content: '';\\r\\n\\r\\n  position: absolute;\\r\\n  right: 2em;\\r\\n  transform: translate(140%, calc(var(--arrow-y) - 50%));\\r\\n\\r\\n  border: 0.4em solid transparent;\\r\\n  border-left: 0.5em solid #303030;\\r\\n\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/*\\r\\n * 婊氬姩鏉￠儴浠剁殑鏄鹃殣\\r\\n */\\r\\n\\r\\n/* 鎮诞鎻愮ず榛樿闅愯棌 */\\r\\n\\r\\n.scrollbar___hLToV::before,\\r\\n.scrollbarPoper___XK5Rk {\\r\\n  opacity: 0;\\r\\n  transition:\\r\\n    opacity 150ms,\\r\\n    transform 150ms;\\r\\n}\\r\\n\\r\\n/* 鎺у埗婊氬姩鏉℃偓娴彁绀虹殑鏄剧ず */\\r\\n\\r\\n:is(.scrollbar___hLToV:hover,.scrollbar___hLToV[data-force-show]) .scrollbarPoper___XK5Rk,:is(.scrollbar___hLToV:hover,.scrollbar___hLToV[data-force-show]) .scrollbarSlider___r1fWf,:is(.scrollbar___hLToV:hover,.scrollbar___hLToV[data-force-show])::before {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n/* 鎷栧姩婊氬姩鏉℃椂鍙栨秷绉诲姩杩囨浮鍔ㄧ敾锛岀‘淇濊窡鎵?*/\\r\\n\\r\\n.scrollbar___hLToV[data-drag]::before,.scrollbar___hLToV[data-drag] .scrollbarPoper___XK5Rk,.scrollbar___hLToV[data-drag] .scrollbarSlider___r1fWf {\\r\\n    transition: opacity 150ms;\\r\\n  }\\r\\n\\r\\n/* 瀹炵幇鑷姩闅愯棌 */\\r\\n\\r\\n.scrollbar___hLToV[data-auto-hidden]:not([data-force-show]) .scrollbarSlider___r1fWf {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n.scrollbar___hLToV[data-auto-hidden]:not([data-force-show]):hover .scrollbarSlider___r1fWf {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n/*\\r\\n * 婊氬姩鏉′綅缃甛\r\\n */\\r\\n\\r\\n.scrollbar___hLToV[data-position='hidden'] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.scrollbar___hLToV[data-position='top'] {\\r\\n  top: 1px;\\r\\n\\r\\n  /* 鎵╁ぇ瑙﹀彂鑼冨洿 */\\r\\n  border-bottom: max(6vh, 1em) solid transparent;\\r\\n}\\r\\n\\r\\n.scrollbar___hLToV[data-position='top']::before {\\r\\n    top: 1.2em;\\r\\n    right: 0;\\r\\n    transform: translate(var(--arrow-x), -120%);\\r\\n    border-bottom: 0.5em solid #303030;\\r\\n  }\\r\\n\\r\\n.scrollbar___hLToV[data-position='top'] .scrollbarPoper___XK5Rk {\\r\\n    top: 1.2em;\\r\\n  }\\r\\n\\r\\n.scrollbar___hLToV[data-position='bottom'] {\\r\\n  top: unset;\\r\\n  bottom: 1px;\\r\\n\\r\\n  /* 鎵╁ぇ瑙﹀彂鑼冨洿 */\\r\\n  border-top: max(6vh, 1em) solid transparent;\\r\\n}\\r\\n\\r\\n.scrollbar___hLToV[data-position='bottom']::before {\\r\\n    right: 0;\\r\\n    bottom: 1.2em;\\r\\n    transform: translate(var(--arrow-x), 120%);\\r\\n    border-top: 0.5em solid #303030;\\r\\n  }\\r\\n\\r\\n.scrollbar___hLToV[data-position='bottom'] .scrollbarPoper___XK5Rk {\\r\\n    bottom: 1.2em;\\r\\n  }\\r\\n\\r\\n.scrollbar___hLToV[data-position='top'],\\r\\n.scrollbar___hLToV[data-position='bottom'] {\\r\\n  --arrow-x: calc(var(--arrow-y) * -1 + 50%);\\r\\n\\r\\n  right: 1%;\\r\\n\\r\\n  flex-direction: row-reverse;\\r\\n\\r\\n  width: 98%;\\r\\n  height: 5px;\\r\\n  border-left: none;\\r\\n}\\r\\n\\r\\n:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom'])::before {\\r\\n    border-left: 0.4em solid transparent;\\r\\n  }\\r\\n\\r\\n/* stylelint-disable-next-line no-descending-specificity */\\r\\n\\r\\n:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarSlider___r1fWf {\\r\\n    transform: translateX(calc(var(--slider-top) * -1));\\r\\n    width: var(--slider-height);\\r\\n    height: 100%;\\r\\n  }\\r\\n\\r\\n:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPoper___XK5Rk {\\r\\n    right: unset;\\r\\n    transform: translateX(calc(var(--poper-top) * -1));\\r\\n    padding: 0.1em 0.3em;\\r\\n  }\\r\\n\\r\\n[data-dir='ltr']:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) {\\r\\n    --arrow-x: calc(var(--arrow-y) - 50%);\\r\\n\\r\\n    flex-direction: row;\\r\\n  }\\r\\n\\r\\n[data-dir='ltr']:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom'])::before {\\r\\n      right: unset;\\r\\n      left: 0;\\r\\n    }\\r\\n\\r\\n/* stylelint-disable-next-line no-descending-specificity */\\r\\n\\r\\n[data-dir='ltr']:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarSlider___r1fWf {\\r\\n      transform: translateX(var(--top));\\r\\n    }\\r\\n\\r\\n[data-dir='ltr']:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPoper___XK5Rk {\\r\\n      transform: translateX(var(--poper-top));\\r\\n    }\\r\\n\\r\\n/* 灏?scaleY 鏀规垚 scaleX */\\r\\n\\r\\n:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPage___qghUs {\\r\\n    transform: scaleX(1);\\r\\n  }\\r\\n\\r\\n[data-type='loaded']:is(:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPage___qghUs) {\\r\\n      transform: scaleX(0);\\r\\n    }\\r\\n\\r\\n[data-translation-type]:is(:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPage___qghUs) {\\r\\n      transform: scaleX(1);\\r\\n    }\\r\\n\\r\\n/* stylelint-disable-next-line no-descending-specificity */\\r\\n\\r\\n.scrollbar___hLToV[data-is-abreast-mode] .scrollbarPoper___XK5Rk {\\r\\n    writing-mode: vertical-rl;\\r\\n    line-height: 1.5em;\\r\\n    text-orientation: upright;\\r\\n  }\\r\\n\\r\\n.scrollbar___hLToV[data-is-abreast-mode][data-dir='ltr'] .scrollbarPoper___XK5Rk {\\r\\n    writing-mode: vertical-lr;\\r\\n  }\\r\\n\\r\\n/* 鍗疯酱妯″紡涓嬪彇娑堟粴鍔ㄦ潯鐨勪綅绉诲姩鐢?*/\\r\\n\\r\\n.root___Hf5H2[data-scroll-mode] .scrollbar___hLToV::before,\\r\\n.root___Hf5H2[data-scroll-mode] :is(.scrollbarSlider___r1fWf, .scrollbarPoper___XK5Rk) {\\r\\n  transition: opacity 150ms;\\r\\n}\\r\\n\\r\\n/* 绉诲姩绔笅绂佺敤鎮诞鏄剧ず */\\r\\n\\r\\n:is(.root___Hf5H2[data-mobile] .scrollbar___hLToV:hover)::before,:is(.root___Hf5H2[data-mobile] .scrollbar___hLToV:hover) .scrollbarPoper___XK5Rk {\\r\\n      opacity: 0;\\r\\n    }\\r\\n\\r\\n.touchAreaRoot___UN-W1 {\\r\\n  pointer-events: none;\\r\\n  -webkit-user-select: none;\\r\\n          user-select: none;\\r\\n\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr min(30%, 10em) 1fr;\\r\\n  grid-template-rows: 1fr min(20%, 10em) 1fr;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n\\r\\n  font-size: 3em;\\r\\n  color: white;\\r\\n  letter-spacing: 0.5em;\\r\\n\\r\\n  opacity: 0;\\r\\n\\r\\n  transition: opacity 400ms;\\r\\n}\\r\\n\\r\\n.touchAreaRoot___UN-W1[data-show] {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n.touchAreaRoot___UN-W1 .touchArea___F6Hkh {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n[data-area='prev']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh),[data-area='PREV']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh) {\\r\\n      background-color: #95e1d3e6;\\r\\n    }\\r\\n\\r\\n[data-area='menu']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh),[data-area='MENU']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh) {\\r\\n      background-color: #fce38ae6;\\r\\n    }\\r\\n\\r\\n[data-area='next']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh),[data-area='NEXT']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh) {\\r\\n      background-color: #f38181e6;\\r\\n    }\\r\\n\\r\\n[data-area='PREV']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh)::after {\\r\\n      content: var(--i18n-touch-area-prev);\\r\\n    }\\r\\n\\r\\n[data-area='MENU']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh)::after {\\r\\n      content: var(--i18n-touch-area-menu);\\r\\n    }\\r\\n\\r\\n[data-area='NEXT']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh)::after {\\r\\n      content: var(--i18n-touch-area-next);\\r\\n    }\\r\\n\\r\\n.touchAreaRoot___UN-W1[data-vert='true'] {\\r\\n    flex-direction: column !important;\\r\\n  }\\r\\n\\r\\n.touchAreaRoot___UN-W1:not([data-turn-page]) .touchArea___F6Hkh[data-area='next'],.touchAreaRoot___UN-W1:not([data-turn-page]) .touchArea___F6Hkh[data-area='NEXT'],.touchAreaRoot___UN-W1:not([data-turn-page]) .touchArea___F6Hkh[data-area='prev'],.touchAreaRoot___UN-W1:not([data-turn-page]) .touchArea___F6Hkh[data-area='PREV'] {\\r\\n      visibility: hidden;\\r\\n    }\\r\\n\\r\\n.touchAreaRoot___UN-W1[data-shrink-menu] {\\r\\n    grid-template-columns: 1fr 2em 1fr;\\r\\n  }\\r\\n\\r\\n.touchAreaRoot___UN-W1[data-shrink-menu] .touchArea___F6Hkh[data-area='MENU'] {\\r\\n      letter-spacing: 0;\\r\\n    }\\r\\n\\r\\n.root___Hf5H2[data-mobile] .touchAreaRoot___UN-W1 {\\r\\n    flex-direction: column !important;\\r\\n    letter-spacing: 0;\\r\\n  }\\r\\n\\r\\n.root___Hf5H2[data-mobile] [data-area]::after {\\r\\n    font-size: 0.8em;\\r\\n  }\\r\\n\\r\\n.root___Hf5H2 {\\r\\n  position: relative;\\r\\n\\r\\n  overflow: hidden;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n\\r\\n  font-size: 1em;\\r\\n\\r\\n  background-color: var(--bg);\\r\\n  outline: 0;\\r\\n}\\r\\n\\r\\n.root___Hf5H2 a {\\r\\n    color: var(--text-secondary);\\r\\n  }\\r\\n\\r\\n.root___Hf5H2[data-mobile] {\\r\\n    font-size: 0.8em;\\r\\n  }\\r\\n\\r\\n.hidden___rxU-6 {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.invisible___cO-hs {\\r\\n  visibility: hidden !important;\\r\\n}\\r\\n\\r\\n.beautifyScrollbar___lb6kJ {\\r\\n  /* 鐏嫄鐨勬粴鍔ㄦ潯鏍峰紡 */\\r\\n  scrollbar-color: var(--scrollbar-slider) transparent;\\r\\n  scrollbar-width: thin;\\r\\n\\r\\n  /* chrome 鐨勬粴鍔ㄦ潯鏍峰紡 */\\r\\n}\\r\\n\\r\\n.beautifyScrollbar___lb6kJ::-webkit-scrollbar {\\r\\n    width: 5px;\\r\\n    height: 10px;\\r\\n  }\\r\\n\\r\\n.beautifyScrollbar___lb6kJ::-webkit-scrollbar-track {\\r\\n    background: transparent;\\r\\n  }\\r\\n\\r\\n.beautifyScrollbar___lb6kJ::-webkit-scrollbar-thumb {\\r\\n    background: var(--scrollbar-slider);\\r\\n  }\\r\\n\\r\\np,\\r\\nimg {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n:where(div, div:focus, div:focus-within, div:focus-visible, button) {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nblockquote {\\r\\n  margin: 0.5em 0;\\r\\n  padding: 0;\\r\\n  padding-left: 1em;\\r\\n  border-left: 0.25em solid var(--text-secondary, #607d8b);\\r\\n\\r\\n  font-size: 0.9em;\\r\\n  font-style: italic;\\r\\n  line-height: 1.2em;\\r\\n  color: var(--text-secondary);\\r\\n  text-align: start;\\r\\n  overflow-wrap: anywhere;\\r\\n  white-space: pre-wrap;\\r\\n}\\r\\n\\r\\nsvg {\\r\\n  width: 1em;\\r\\n}\\r\\n";
//#endregion
//#region src/components/Manga/index.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<div>\`);
solid_js.enableScheduling();
/** 婕敾缁勪欢 */
const Manga = (props) => {
	useStyle$1(index_module_default);
	useCssVar();
	solid_js.onMount(() => useInit(props));
	solid_js.createEffect(() => props.show && focus());
	return (() => {
		var _el$ = _tmpl$();
		solid_js_web.addEventListener(_el$, "wheel", handleWheel);
		solid_js_web.addEventListener(_el$, "mousedown", handleMouseDown);
		solid_js_web.addEventListener(_el$, "click", stopPropagation);
		var _ref$ = bindRef("root");
		typeof _ref$ === "function" && solid_js_web.use(_ref$, _el$);
		_el$.addEventListener("keydown", handleKeyDown, true);
		_el$.addEventListener("keyup", handleKeyUp, true);
		solid_js_web.insert(_el$, solid_js_web.createComponent(ComicImgFlow, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(TouchArea, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(Scrollbar, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(EndPage, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(Toolbar, {}), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$1.root, _v$2 = {
				[classes$1.hidden]: props.show === false,
				[props.class ?? ""]: Boolean(props.class),
				...props.classList
			}, _v$3 = helper.boolDataVal(store.isMobile), _v$4 = helper.boolDataVal(store.option.scrollMode.enabled), _v$5 = helper.boolDataVal(store.gridMode);
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_p$.t = solid_js_web.classList(_el$, _v$2, _p$.t);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-mobile", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-scroll-mode", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setAttribute(_el$, "data-grid-mode", _p$.i = _v$5);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0
		});
		return _el$;
	})();
};
//#endregion
exports.Manga = Manga;
exports.SettingBlockSubtitle = SettingBlockSubtitle;
exports.SettingHotkeys = SettingHotkeys;
exports.SettingsItem = SettingsItem;
exports.SettingsItemButton = SettingsItemButton;
exports.SettingsItemNumber = SettingsItemNumber;
exports.SettingsItemSwitch = SettingsItemSwitch;
exports._setAbreastScrollFill = _setAbreastScrollFill;
exports.abreastArea = abreastArea;
exports.abreastColumnWidth = abreastColumnWidth;
exports.abreastContentWidth = abreastContentWidth;
exports.abreastScrollFill = abreastScrollFill;
exports.abreastScrollWidth = abreastScrollWidth;
exports.abreastShowColumn = abreastShowColumn;
exports.activeImgIndex = activeImgIndex;
exports.activePage = activePage;
exports.allowBatchTranslation = allowBatchTranslation;
exports.autoPageNum = autoPageNum;
exports.bindOption = bindOption;
exports.bindRef = bindRef;
exports.bindScrollTop = bindScrollTop;
exports.bound = bound;
exports.checkImgSize = checkImgSize;
exports.constantScroll = constantScroll;
exports.contentHeight = contentHeight;
exports.cotransSettings = cotransSettings;
exports.defaultHotkeys = defaultHotkeys;
exports.defaultOption = defaultOption;
exports.doubleClickZoom = doubleClickZoom;
exports.findFillIndex = findFillIndex;
exports.findTopPage = findTopPage;
exports.focus = focus;
exports.getImg = getImg;
exports.getImgDisplaySize = getImgDisplaySize;
exports.getImgEle = getImgEle;
exports.getImgIndexs = getImgIndexs;
exports.getImgTip = getImgTip;
exports.getImgType = getImgType;
exports.getPageTip = getPageTip;
exports.getPageTop = getPageTop;
exports.getTurnPageDir = getTurnPageDir;
exports.handleClick = handleClick;
exports.handleComicData = handleComicData;
exports.handleEndTurnPage = handleEndTurnPage;
exports.handleHotkey = handleHotkey;
exports.handleImgError = handleImgError;
exports.handleImgLoaded = handleImgLoaded;
exports.handleKeyDown = handleKeyDown;
exports.handleKeyUp = handleKeyUp;
exports.handleMangaFlowDrag = handleMangaFlowDrag;
exports.handleMouseDown = handleMouseDown;
exports.handlePinchZoom = handlePinchZoom;
exports.handleScrollModeDrag = handleScrollModeDrag;
exports.handleScrollModeZoom = handleScrollModeZoom;
exports.handleScrollbarSlider = handleScrollbarSlider;
exports.handleTrackpadWheel = handleTrackpadWheel;
exports.handleWheel = handleWheel;
exports.handleZoomDrag = handleZoomDrag;
exports.hotkeysMap = hotkeysMap;
exports.imgAreaStyle = imgAreaStyle;
exports.imgList = imgList;
exports.imgPageMap = imgPageMap;
exports.imgShowState = imgShowState;
exports.initStore = initStore;
exports.isAbreastMode = isAbreastMode;
exports.isBottom = isBottom;
exports.isDoubleMode = isDoubleMode;
exports.isDrag = isDrag;
exports.isEnableBg = isEnableBg;
exports.isOnePageMode = isOnePageMode;
exports.isRelineUpscalingImage = isRelineUpscalingImage;
exports.isScrollMode = isScrollMode;
exports.isSingleMode = isSingleMode;
exports.isTop = isTop;
exports.isTranslatingAll = isTranslatingAll;
exports.isTranslatingImage = isTranslatingImage;
exports.isTranslatingToEnd = isTranslatingToEnd;
exports.isUpscale = isUpscale;
exports.isUseAutoScale = isUseAutoScale;
exports.jumpToImg = jumpToImg;
exports.listenHotkey = listenHotkey;
exports.loadingImgList = loadingImgList;
exports.mitSettings = mitSettings;
exports.nowFillIndex = nowFillIndex;
exports.openScrollLock = openScrollLock;
exports.pageHeightList = pageHeightList;
exports.pageNum = pageNum;
exports.pageTopList = pageTopList;
exports.placeholderSize = placeholderSize;
exports.preloadNum = preloadNum;
exports.refs = refs;
exports.relineUpscaleImage = relineUpscaleImage;
exports.reloadImg = reloadImg;
exports.renderImgList = renderImgList;
exports.resetImgState = resetImgState;
exports.resetPage = resetPage;
exports.resetUI = resetUI;
exports.resumeReadProgress = resumeReadProgress;
exports.retryCurrentRelineUpscale = retryCurrentRelineUpscale;
exports.saveReadProgress = saveReadProgress;
exports.saveScrollProgress = saveScrollProgress;
exports.scrollBy = scrollBy;
exports.scrollDomLength = scrollDomLength;
exports.scrollLength = scrollLength;
exports.scrollModeScale = scrollModeScale;
exports.scrollPercentage = scrollPercentage;
exports.scrollPosition = scrollPosition;
exports.scrollProgress = scrollProgress;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.scrollViewImg = scrollViewImg;
exports.setAbreastScrollFill = setAbreastScrollFill;
exports.setAdjustToWidth = setAdjustToWidth;
exports.setDefaultHotkeys = setDefaultHotkeys;
exports.setImgRelineUpscaleEnable = setImgRelineUpscaleEnable;
exports.setImgScale = setImgScale;
exports.setImgTranslationEnbale = setImgTranslationEnbale;
exports.setIsDrag = setIsDrag;
exports.setOption = setOption;
exports.setState = setState;
exports.showImgList = showImgList;
exports.sliderHeight = sliderHeight;
exports.sliderMidpoint = sliderMidpoint;
exports.sliderTop = sliderTop;
exports.store = store;
exports.switchAutoScroll = switchAutoScroll;
exports.switchDir = switchDir;
exports.switchFillEffect = switchFillEffect;
exports.switchFullscreen = switchFullscreen;
exports.switchGridMode = switchGridMode;
exports.switchImgRecognition = switchImgRecognition;
exports.switchOnePageMode = switchOnePageMode;
exports.switchScrollMode = switchScrollMode;
exports.toggleRelineUpscaleCurrent = toggleRelineUpscaleCurrent;
exports.touches = touches;
exports.translateAll = translateAll;
exports.translateCurrent = translateCurrent;
exports.translateToEnd = translateToEnd;
exports.translationAll = translationAll;
exports.translationImage = translationImage;
exports.translationImgs = translationImgs;
exports.turnPage = turnPage;
exports.turnPageAnimation = turnPageAnimation;
exports.updateImgLoadType = updateImgLoadType;
exports.updateImgSize = updateImgSize;
exports.updateImgType = updateImgType;
exports.updateMitTranslators = updateMitTranslators;
exports.updatePageData = updatePageData;
exports.updateShowRange = updateShowRange;
exports.upscaleImage = upscaleImage;
exports.watchDomSize = watchDomSize;
exports.withOptionalState = withOptionalState;
exports.zoom = zoom;
`,
	"components/IconButton": `\nlet solid_js_web = require("solid-js/web");
let helper = require("helper");
let solid_js = require("solid-js");
//#region src/components/IconButton/index.module.css
const classes = {
	"iconButtonItem": "iconButtonItem___vTPHz",
	"iconButton": "iconButton___dhWw3",
	"enabled": "enabled___eXH34",
	"disable": "disable___7C-Rj",
	"iconButtonPopper": "iconButtonPopper___dVIu-",
	"hidden": "hidden___v7N-q"
};
//#endregion
//#region src/components/IconButton/index.module.css?inline
var index_module_default = ".iconButtonItem___vTPHz {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.iconButton___dhWw3 {\\r\\n  cursor: pointer;\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n\\r\\n  width: 1.5em;\\r\\n  height: 1.5em;\\r\\n  margin: 0.1em;\\r\\n  padding: 0;\\r\\n  border-style: none;\\r\\n  border-radius: 9999px;\\r\\n\\r\\n  font-size: 1.5em;\\r\\n  color: var(--text, white);\\r\\n\\r\\n  background-color: transparent;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.iconButton___dhWw3:focus,.iconButton___dhWw3:hover {\\r\\n    background-color: var(--hover-bg-color, #fff3);\\r\\n  }\\r\\n\\r\\n.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj) {\\r\\n    color: var(--text-bg, #121212);\\r\\n    background-color: var(--text, white);\\r\\n  }\\r\\n\\r\\n.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj):focus,.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj):hover {\\r\\n      background-color: var(--hover-bg-color-enable, #fffa);\\r\\n    }\\r\\n\\r\\n.iconButton___dhWw3.disable___7C-Rj {\\r\\n    cursor: not-allowed;\\r\\n    opacity: 0.5;\\r\\n    background-color: unset;\\r\\n  }\\r\\n\\r\\n.iconButton___dhWw3 > svg {\\r\\n    width: 1em;\\r\\n  }\\r\\n\\r\\n/* 榛樿鎮诞妗嗘牱寮?*/\\r\\n\\r\\n.iconButtonPopper___dVIu- {\\r\\n  pointer-events: none;\\r\\n  -webkit-user-select: none;\\r\\n          user-select: none;\\r\\n\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  transform: translateY(-50%);\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n\\r\\n  padding: 0.4em 0.5em;\\r\\n  border-radius: 0.3em;\\r\\n\\r\\n  font-size: 0.8em;\\r\\n  color: white;\\r\\n  white-space: nowrap;\\r\\n\\r\\n  opacity: 0;\\r\\n  background-color: #303030;\\r\\n}\\r\\n\\r\\n.iconButtonPopper___dVIu-[data-placement='right'] {\\r\\n    left: calc(100% + 1.5em);\\r\\n  }\\r\\n\\r\\n.iconButtonPopper___dVIu-[data-placement='right']::before {\\r\\n      right: calc(100% + 0.5em);\\r\\n      border-right-color: var(--switch-bg, #6e6e6e);\\r\\n      border-right-width: 0.5em;\\r\\n    }\\r\\n\\r\\n.iconButtonPopper___dVIu-[data-placement='left'] {\\r\\n    right: calc(100% + 1.5em);\\r\\n  }\\r\\n\\r\\n.iconButtonPopper___dVIu-[data-placement='left']::before {\\r\\n      left: calc(100% + 0.5em);\\r\\n      border-left-color: var(--switch-bg, #6e6e6e);\\r\\n      border-left-width: 0.5em;\\r\\n    }\\r\\n\\r\\n/* 宸ュ叿鏍忔寜閽殑鎮诞妗嗙殑绠ご */\\r\\n\\r\\n.iconButtonPopper___dVIu-::before {\\r\\n  pointer-events: none;\\r\\n  content: '';\\r\\n\\r\\n  position: absolute;\\r\\n\\r\\n  border-color: transparent;\\r\\n  border-style: solid;\\r\\n  border-width: 0.4em;\\r\\n\\r\\n  background-color: transparent;\\r\\n\\r\\n  transition: opacity 150ms;\\r\\n}\\r\\n\\r\\n/* 鎺у埗鎮诞妗嗙殑鏄剧ず */\\r\\n\\r\\n.iconButtonItem___vTPHz:is(:hover, :focus, [data-show='true']) .iconButtonPopper___dVIu- {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.hidden___v7N-q {\\r\\n  display: none;\\r\\n}\\r\\n";
//#endregion
//#region src/components/IconButton/index.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<div><button type=button tabindex=0>\`), _tmpl$2 = /* @__PURE__ */ solid_js_web.template(\`<div>\`);
/** 鍥炬爣鎸夐挳 */
const IconButton = (_props) => {
	const props = solid_js.mergeProps({ placement: "right" }, _props);
	let buttonRef;
	const handleClick = (e) => {
		if (props.disable) return;
		props.onClick?.(e);
		buttonRef?.blur();
	};
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild;
		solid_js_web.use((ref) => helper.useStyle(index_module_default, ref), _el$);
		solid_js_web.addEventListener(_el$2, "click", handleClick);
		var _ref$ = buttonRef;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$2) : buttonRef = _el$2;
		solid_js_web.insert(_el$2, () => props.children);
		solid_js_web.insert(_el$, (() => {
			var _c$ = solid_js_web.memo(() => !!(props.popper || props.tip));
			return () => _c$() ? (() => {
				var _el$3 = _tmpl$2();
				solid_js_web.insert(_el$3, () => props.popper || props.tip);
				solid_js_web.effect((_p$) => {
					var _v$7 = [classes.iconButtonPopper, props.popperClassName].join(" "), _v$8 = props.placement;
					_v$7 !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$7);
					_v$8 !== _p$.t && solid_js_web.setAttribute(_el$3, "data-placement", _p$.t = _v$8);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$3;
			})() : null;
		})(), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes.iconButtonItem, _v$2 = props.showTip, _v$3 = props.tip, _v$4 = classes.iconButton, _v$5 = props.style, _v$6 = {
				[classes.hidden]: props.hidden,
				[classes.enabled]: props.enabled,
				[classes.disable]: props.disable
			};
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$2, "aria-label", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.className(_el$2, _p$.o = _v$4);
			_p$.i = solid_js_web.style(_el$2, _v$5, _p$.i);
			_p$.n = solid_js_web.classList(_el$2, _v$6, _p$.n);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0
		});
		return _el$;
	})();
};
//#endregion
exports.IconButton = IconButton;
`,
	"components/Fab": `\nlet solid_js_web = require("solid-js/web");
let helper = require("helper");
let solid_js = require("solid-js");
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/menu_book.svg
var _tmpl$$1 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03">\`);
var menu_book_default = (props = {}) => (() => {
	var _el$ = _tmpl$$1();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Fab/index.module.css
const classes = {
	"fabRoot": "fabRoot___rGBDZ",
	"fab": "fab___Whb2R",
	"progress": "progress___i-R0z",
	"popper": "popper___aYw7E",
	"speedDial": "speedDial___bnVgX",
	"speedDialItem": "speedDialItem___KdwiZ",
	"backdrop": "backdrop___4Sdu1"
};
//#endregion
//#region src/components/Fab/index.module.css?inline
var index_module_default = ".fabRoot___rGBDZ {\\r\\n  touch-action: none;\\r\\n  font-size: 1.1em;\\r\\n  transition: transform 200ms;\\r\\n}\\r\\n\\r\\n.fabRoot___rGBDZ[data-show='false'] {\\r\\n    pointer-events: none;\\r\\n  }\\r\\n\\r\\n.fabRoot___rGBDZ[data-show='false'] > button {\\r\\n      transform: scale(0);\\r\\n    }\\r\\n\\r\\n.fabRoot___rGBDZ[data-trans='true'] {\\r\\n    opacity: 0.8;\\r\\n  }\\r\\n\\r\\n.fabRoot___rGBDZ[data-trans='true']:hover,.fabRoot___rGBDZ[data-trans='true']:focus,.fabRoot___rGBDZ[data-trans='true']:focus-visible {\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n.fab___Whb2R {\\r\\n  cursor: pointer;\\r\\n\\r\\n  transform: scale(1);\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n\\r\\n  width: 3.6em;\\r\\n  height: 3.6em;\\r\\n  border: none;\\r\\n  border-radius: 100%;\\r\\n\\r\\n  font-size: 1em;\\r\\n  color: white;\\r\\n\\r\\n  background-color: var(--fab, #607d8b);\\r\\n  box-shadow:\\r\\n    0 3px 5px -1px rgb(0 0 0 / 20%),\\r\\n    0 6px 10px 0 rgb(0 0 0 / 14%),\\r\\n    0 1px 18px 0 rgb(0 0 0 / 12%);\\r\\n\\r\\n  transition: transform 200ms;\\r\\n}\\r\\n\\r\\n.fab___Whb2R > svg {\\r\\n    width: 1em;\\r\\n    font-size: 1.5em;\\r\\n  }\\r\\n\\r\\n.fab___Whb2R:focus,.fab___Whb2R:focus-visible {\\r\\n    outline: none;\\r\\n    box-shadow:\\r\\n      0 3px 5px -1px rgb(0 0 0 / 50%),\\r\\n      0 6px 10px 0 rgb(0 0 0 / 34%),\\r\\n      0 1px 18px 0 rgb(0 0 0 / 32%);\\r\\n  }\\r\\n\\r\\n/* 鐜舰杩涘害鏉?*/\\r\\n\\r\\n.progress___i-R0z {\\r\\n  position: absolute;\\r\\n  transform: rotate(-90deg);\\r\\n\\r\\n  display: inline-block;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n\\r\\n  color: #b0bec5;\\r\\n\\r\\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\r\\n}\\r\\n\\r\\n.progress___i-R0z > svg {\\r\\n    stroke: currentcolor;\\r\\n    stroke-dasharray: 290%;\\r\\n    stroke-dashoffset: 100%;\\r\\n    stroke-linecap: round;\\r\\n\\r\\n    transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\r\\n  }\\r\\n\\r\\n.progress___i-R0z:hover {\\r\\n    color: #cfd8dc;\\r\\n  }\\r\\n\\r\\n/* 鍦ㄨ繘搴︽潯婊″悗鑷姩闅愯棌 */\\r\\n\\r\\n.progress___i-R0z[aria-valuenow='1'] {\\r\\n    opacity: 0;\\r\\n    transition: opacity 200ms 150ms;\\r\\n  }\\r\\n\\r\\n/* 榛樿鎮诞妗嗘牱寮?*/\\r\\n\\r\\n.popper___aYw7E {\\r\\n  pointer-events: none;\\r\\n\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  right: calc(100% + 1.5em);\\r\\n  transform-origin: right;\\r\\n  transform: translateY(-50%) scale(0);\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n\\r\\n  padding: 0.4em 0.5em;\\r\\n  border-radius: 0.3em;\\r\\n\\r\\n  font-size: 0.8em;\\r\\n  color: white;\\r\\n  white-space: nowrap;\\r\\n\\r\\n  opacity: 0;\\r\\n  background-color: #303030;\\r\\n\\r\\n  transition:\\r\\n    transform 230ms,\\r\\n    opacity 150ms;\\r\\n  transition-delay: var(--hide-delay);\\r\\n}\\r\\n\\r\\n.fabRoot___rGBDZ[data-placement='right'] .popper___aYw7E {\\r\\n  right: unset;\\r\\n  left: calc(100% + 1.5em);\\r\\n  transform-origin: left;\\r\\n}\\r\\n\\r\\n.fabRoot___rGBDZ:is(:hover, [data-focus='true']) .popper___aYw7E {\\r\\n  transform: translateY(-50%) scale(1);\\r\\n  opacity: 1;\\r\\n  transition-delay: 0ms;\\r\\n}\\r\\n\\r\\n/* 蹇嵎鎷ㄥ彿 */\\r\\n\\r\\n.speedDial___bnVgX {\\r\\n  pointer-events: none;\\r\\n  touch-action: none;\\r\\n\\r\\n  position: absolute;\\r\\n  z-index: -1;\\r\\n  bottom: 0;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column-reverse;\\r\\n  align-items: center;\\r\\n\\r\\n  width: 100%;\\r\\n  padding-bottom: 120%;\\r\\n\\r\\n  font-size: 1.1em;\\r\\n}\\r\\n\\r\\n.speedDial___bnVgX[data-placement='bottom'] {\\r\\n    top: 0;\\r\\n    bottom: unset;\\r\\n\\r\\n    flex-direction: column;\\r\\n\\r\\n    padding-top: 120%;\\r\\n    padding-bottom: unset;\\r\\n  }\\r\\n\\r\\n.speedDialItem___KdwiZ {\\r\\n  transform: scale(0);\\r\\n\\r\\n  margin: 0.1em 0;\\r\\n\\r\\n  opacity: 0;\\r\\n\\r\\n  transition-delay: var(--hide-delay);\\r\\n  transition-duration: 230ms;\\r\\n  transition-property: transform, opacity;\\r\\n}\\r\\n\\r\\n/* 绉诲埌蹇嵎鎷ㄥ彿涓婃椂淇濇寔鏄剧ず */\\r\\n\\r\\n.speedDial___bnVgX:hover {\\r\\n  pointer-events: all;\\r\\n}\\r\\n\\r\\n.fabRoot___rGBDZ:is(:hover:not([data-show='false']), [data-focus='true']) .speedDial___bnVgX {\\r\\n  pointer-events: all;\\r\\n}\\r\\n\\r\\n:is(.fabRoot___rGBDZ:is(:hover:not([data-show='false']),[data-focus='true']) .speedDial___bnVgX) > .speedDialItem___KdwiZ {\\r\\n    transform: unset;\\r\\n    opacity: unset;\\r\\n    transition-delay: var(--show-delay);\\r\\n  }\\r\\n\\r\\n/* 鑳屾櫙钂欑増 */\\r\\n\\r\\n.backdrop___4Sdu1 {\\r\\n  pointer-events: none;\\r\\n\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n\\r\\n  opacity: 0;\\r\\n  background: black;\\r\\n\\r\\n  transition: opacity 500ms;\\r\\n}\\r\\n\\r\\n.fabRoot___rGBDZ[data-focus='true'] .backdrop___4Sdu1 {\\r\\n  pointer-events: unset;\\r\\n}\\r\\n\\r\\n:is(\\r\\n    .fabRoot___rGBDZ:hover:not([data-show='false']),\\r\\n    .fabRoot___rGBDZ[data-focus='true'],\\r\\n    .speedDial___bnVgX:hover\\r\\n  )\\r\\n  .backdrop___4Sdu1 {\\r\\n  opacity: 0.4;\\r\\n}\\r\\n";
//#endregion
//#region src/components/Fab/index.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<div><div>\`), _tmpl$2 = /* @__PURE__ */ solid_js_web.template(\`<div><button type=button tabindex=-1><span role=progressbar><svg viewBox="22 22 44 44"><circle cx=44 cy=44 r=20.2 fill=none stroke-width=3.6>\`), _tmpl$3 = /* @__PURE__ */ solid_js_web.template(\`<div>\`);
/**
* Fab 鎸夐挳
*/
const Fab = (_props) => {
	const props = solid_js.mergeProps({
		progress: 0,
		initialShow: true,
		autoTrans: false
	}, _props);
	let lastY = window.scrollY;
	const [show, setShow] = solid_js.createSignal(props.initialShow);
	const handleScroll = helper.throttle((e) => {
		if (!e.isTrusted) return;
		if (window.scrollY === lastY) return;
		setShow(window.scrollY + window.innerHeight >= document.body.scrollHeight || window.scrollY - lastY < 0);
		lastY = window.scrollY;
	}, 200);
	solid_js.onMount(() => window.addEventListener("scroll", handleScroll));
	solid_js.onCleanup(() => window.removeEventListener("scroll", handleScroll));
	solid_js.createEffect(() => props.show && setShow(props.show));
	return (() => {
		var _el$ = _tmpl$2(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild;
		solid_js_web.use((ref) => helper.useStyle(index_module_default, ref), _el$);
		solid_js_web.addEventListener(_el$2, "click", () => props.onClick?.());
		solid_js_web.use((ref) => props.ref?.(ref), _el$2);
		solid_js_web.insert(_el$2, () => props.children ?? solid_js_web.createComponent(menu_book_default, {}), _el$3);
		solid_js_web.insert(_el$2, (() => {
			var _c$ = solid_js_web.memo(() => !!props.tip);
			return () => _c$() ? (() => {
				var _el$7 = _tmpl$3();
				solid_js_web.insert(_el$7, () => props.tip);
				solid_js_web.effect(() => solid_js_web.className(_el$7, classes.popper));
				return _el$7;
			})() : null;
		})(), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return props.speedDial?.length;
			},
			get children() {
				var _el$5 = _tmpl$(), _el$6 = _el$5.firstChild;
				solid_js_web.addEventListener(_el$6, "click", () => props.onBackdropClick?.());
				solid_js_web.insert(_el$5, solid_js_web.createComponent(solid_js.For, {
					get each() {
						return props.speedDial;
					},
					children: (SpeedDialItem, i) => (() => {
						var _el$8 = _tmpl$3();
						solid_js_web.insert(_el$8, solid_js_web.createComponent(SpeedDialItem, {}));
						solid_js_web.effect((_p$) => {
							var _v$12 = classes.speedDialItem, _v$13 = \`\${(i() + 1) * 30}ms\`, _v$14 = \`\${(props.speedDial.length - 1 - i()) * 50}ms\`, _v$15 = i() * 30;
							_v$12 !== _p$.e && solid_js_web.className(_el$8, _p$.e = _v$12);
							_v$13 !== _p$.t && solid_js_web.setStyleProperty(_el$8, "--show-delay", _p$.t = _v$13);
							_v$14 !== _p$.a && solid_js_web.setStyleProperty(_el$8, "--hide-delay", _p$.a = _v$14);
							_v$15 !== _p$.o && solid_js_web.setAttribute(_el$8, "data-i", _p$.o = _v$15);
							return _p$;
						}, {
							e: void 0,
							t: void 0,
							a: void 0,
							o: void 0
						});
						return _el$8;
					})()
				}), null);
				solid_js_web.effect((_p$) => {
					var _v$ = classes.speedDial, _v$2 = props.speedDialPlacement, _v$3 = classes.backdrop;
					_v$ !== _p$.e && solid_js_web.className(_el$5, _p$.e = _v$);
					_v$2 !== _p$.t && solid_js_web.setAttribute(_el$5, "data-placement", _p$.t = _v$2);
					_v$3 !== _p$.a && solid_js_web.className(_el$6, _p$.a = _v$3);
					return _p$;
				}, {
					e: void 0,
					t: void 0,
					a: void 0
				});
				return _el$5;
			}
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$4 = classes.fabRoot, _v$5 = props.show ?? show(), _v$6 = props.autoTrans, _v$7 = props.focus, _v$8 = props.placement, _v$9 = {
				...props.style,
				"--hide-delay": \`\${(props.speedDial?.length ?? 0) * 50}ms\`
			}, _v$0 = classes.fab, _v$1 = classes.progress, _v$10 = props.progress, _v$11 = \`\${(1 - props.progress) * 290}%\`;
			_v$4 !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$4);
			_v$5 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$5);
			_v$6 !== _p$.a && solid_js_web.setAttribute(_el$, "data-trans", _p$.a = _v$6);
			_v$7 !== _p$.o && solid_js_web.setAttribute(_el$, "data-focus", _p$.o = _v$7);
			_v$8 !== _p$.i && solid_js_web.setAttribute(_el$, "data-placement", _p$.i = _v$8);
			_p$.n = solid_js_web.style(_el$, _v$9, _p$.n);
			_v$0 !== _p$.s && solid_js_web.className(_el$2, _p$.s = _v$0);
			_v$1 !== _p$.h && solid_js_web.className(_el$3, _p$.h = _v$1);
			_v$10 !== _p$.r && solid_js_web.setAttribute(_el$3, "aria-valuenow", _p$.r = _v$10);
			_v$11 !== _p$.d && solid_js_web.setStyleProperty(_el$4, "stroke-dashoffset", _p$.d = _v$11);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0,
			d: void 0
		});
		return _el$;
	})();
};
//#endregion
exports.Fab = Fab;
`,
	"components/Toast": `\nlet helper = require("helper");
let solid_js_web = require("solid-js/web");
let solid_js = require("solid-js");
//#region src/components/Toast/store.tsx
const { store, setState } = helper.useStore({
	ref: null,
	list: [],
	map: {}
});
const creatId = () => {
	let id = \`\${Date.now()}\`;
	while (Reflect.has(store.map, id)) id += "_";
	return id;
};
const dismiss = (id) => Reflect.has(store.map, id) && setState("map", id, "exit", true);
//#endregion
//#region src/components/Toast/index.module.css
const classes = {
	"root": "root___AXj2H",
	"item": "item___eASYv",
	"bounceInRight": "bounceInRight___94v9w",
	"bounceOutRight": "bounceOutRight___0RcOn",
	"schedule": "schedule___AWwkh",
	"msg": "msg___pGOp2"
};
//#endregion
//#region src/components/Toast/index.module.css?inline
var index_module_default = ".root___AXj2H {\\r\\n  pointer-events: none;\\r\\n\\r\\n  position: fixed;\\r\\n  z-index: 2147483647;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-end;\\r\\n\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.item___eASYv {\\r\\n  pointer-events: auto;\\r\\n  cursor: pointer;\\r\\n\\r\\n  position: relative;\\r\\n\\r\\n  overflow: hidden;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n\\r\\n  width: fit-content;\\r\\n  max-width: min(30em, 100vw);\\r\\n  margin: 1em;\\r\\n  padding: 0.8em 1em;\\r\\n  border-radius: 4px;\\r\\n\\r\\n  color: #000;\\r\\n\\r\\n  background: #fff;\\r\\n  box-shadow:\\r\\n    0 1px 10px 0 #0000001a,\\r\\n    0 2px 15px 0 #0000000d;\\r\\n\\r\\n  animation: bounceInRight___94v9w 0.5s 1;\\r\\n}\\r\\n\\r\\n.item___eASYv > svg {\\r\\n    width: 1.5em;\\r\\n    margin-right: 0.5em;\\r\\n    color: var(--theme);\\r\\n  }\\r\\n\\r\\n.item___eASYv[data-exit] {\\r\\n    animation: bounceOutRight___0RcOn 0.5s 1;\\r\\n  }\\r\\n\\r\\n.schedule___AWwkh {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  transform-origin: left;\\r\\n\\r\\n  width: 100%;\\r\\n  height: 0.2em;\\r\\n\\r\\n  background-color: var(--theme);\\r\\n}\\r\\n\\r\\n.item___eASYv[data-schedule] .schedule___AWwkh {\\r\\n  transition: transform 100ms;\\r\\n}\\r\\n\\r\\n.item___eASYv:not([data-schedule]) .schedule___AWwkh {\\r\\n  animation: schedule___AWwkh linear 1 forwards;\\r\\n}\\r\\n\\r\\n:is(.item___eASYv:hover, .item___eASYv[data-schedule], .root___AXj2H[data-paused]) .schedule___AWwkh {\\r\\n  animation-play-state: paused;\\r\\n}\\r\\n\\r\\n.msg___pGOp2 {\\r\\n  width: fit-content;\\r\\n\\r\\n  line-height: 1.4em;\\r\\n  text-align: start;\\r\\n  overflow-wrap: anywhere;\\r\\n  white-space: break-spaces;\\r\\n}\\r\\n\\r\\n.msg___pGOp2 h2 {\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n.msg___pGOp2 h3 {\\r\\n    margin: 0.7em 0;\\r\\n  }\\r\\n\\r\\n.msg___pGOp2 ul {\\r\\n    margin: 0;\\r\\n    text-align: left;\\r\\n  }\\r\\n\\r\\n.msg___pGOp2 button {\\r\\n    cursor: pointer;\\r\\n\\r\\n    margin: 0 0.5em;\\r\\n    padding: 0.2em 0.6em;\\r\\n    border: none;\\r\\n    border-radius: 0.4em;\\r\\n\\r\\n    font-size: inherit;\\r\\n\\r\\n    background-color: #eee;\\r\\n    outline: none;\\r\\n  }\\r\\n\\r\\n:is(.msg___pGOp2 button):hover {\\r\\n      background: #e0e0e0;\\r\\n    }\\r\\n\\r\\np {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n@keyframes schedule___AWwkh {\\r\\n  0% {\\r\\n    transform: scaleX(1);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: scaleX(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes bounceInRight___94v9w {\\r\\n  0%,\\r\\n  60%,\\r\\n  75%,\\r\\n  90%,\\r\\n  100% {\\r\\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\\r\\n  }\\r\\n\\r\\n  0% {\\r\\n    transform: translate3d(3000px, 0, 0) scaleX(3);\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  60% {\\r\\n    transform: translate3d(-25px, 0, 0) scaleX(1);\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    transform: translate3d(10px, 0, 0) scaleX(0.98);\\r\\n  }\\r\\n\\r\\n  90% {\\r\\n    transform: translate3d(-5px, 0, 0) scaleX(0.995);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: translate3d(0, 0, 0);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes bounceOutRight___0RcOn {\\r\\n  20% {\\r\\n    transform: translate3d(-20px, 0, 0) scaleX(0.9);\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: translate3d(2000px, 0, 0) scaleX(2);\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n";
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/check_circle.svg
var _tmpl$$5 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0">\`);
var check_circle_default = (props = {}) => (() => {
	var _el$ = _tmpl$$5();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/error.svg
var _tmpl$$4 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z">\`);
var error_default = (props = {}) => (() => {
	var _el$ = _tmpl$$4();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/info.svg
var _tmpl$$3 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z">\`);
var info_default = (props = {}) => (() => {
	var _el$ = _tmpl$$3();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/warning.svg
var _tmpl$$2 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z">\`);
var warning_default = (props = {}) => (() => {
	var _el$ = _tmpl$$2();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Toast/ToastItem.tsx
var _tmpl$$1 = /* @__PURE__ */ solid_js_web.template(\`<div>\`), _tmpl$2 = /* @__PURE__ */ solid_js_web.template(\`<div><div>\`);
const iconMap = {
	info: info_default,
	success: check_circle_default,
	warn: warning_default,
	error: error_default
};
const colorMap = {
	info: "#3a97d7",
	success: "#23bb35",
	warn: "#f0c53e",
	error: "#e45042",
	custom: "#1f2936"
};
/** 鍒犻櫎 toast */
const dismissToast = (id) => setState((state) => {
	state.map[id]?.onDismiss?.({ ...state.map[id] });
	const i = state.list.indexOf(id);
	if (i !== -1) state.list.splice(i, 1);
	Reflect.deleteProperty(state.map, id);
});
/** 閲嶇疆 toast 鐨?update 灞炴€?*/
const resetToastUpdate = (id) => setState("map", id, "update", void 0);
const ToastItem = (props) => {
	/** 鏄惁瑕佹樉绀鸿繘搴?*/
	const showSchedule = solid_js.createMemo(() => props.duration === Number.POSITIVE_INFINITY && props.schedule ? true : void 0);
	const triggerDismiss = (e) => {
		e.stopPropagation();
		if (showSchedule() && "animationName" in e) return;
		dismiss(props.id);
	};
	const handleAnimationEnd = () => {
		if (!props.exit) return;
		dismissToast(props.id);
	};
	let scheduleRef;
	solid_js.createEffect(() => {
		if (!props.update) return;
		resetToastUpdate(props.id);
		if (!scheduleRef) return;
		for (const animation of scheduleRef.getAnimations()) animation.currentTime = 0;
	});
	const handleClick = (e) => {
		props.onClick?.();
		triggerDismiss(e);
	};
	return (() => {
		var _el$ = _tmpl$2(), _el$2 = _el$.firstChild;
		_el$.addEventListener("animationend", handleAnimationEnd);
		solid_js_web.addEventListener(_el$, "click", handleClick);
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js_web.Dynamic, { get component() {
			return iconMap[props.type];
		} }), _el$2);
		solid_js_web.insert(_el$2, (() => {
			var _c$ = solid_js_web.memo(() => typeof props.msg === "string");
			return () => _c$() ? props.msg : solid_js_web.createComponent(props.msg, {});
		})());
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return props.duration !== Number.POSITIVE_INFINITY || props.schedule !== void 0;
			},
			get children() {
				var _el$3 = _tmpl$$1();
				_el$3.addEventListener("animationend", triggerDismiss);
				var _ref$ = scheduleRef;
				typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$3) : scheduleRef = _el$3;
				solid_js_web.effect((_p$) => {
					var _v$ = classes.schedule, _v$2 = \`\${props.duration}ms\`, _v$3 = showSchedule() ? \`scaleX(\${props.schedule})\` : void 0;
					_v$ !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$);
					_v$2 !== _p$.t && solid_js_web.setStyleProperty(_el$3, "animation-duration", _p$.t = _v$2);
					_v$3 !== _p$.a && solid_js_web.setStyleProperty(_el$3, "transform", _p$.a = _v$3);
					return _p$;
				}, {
					e: void 0,
					t: void 0,
					a: void 0
				});
				return _el$3;
			}
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$4 = classes.item, _v$5 = colorMap[props.type], _v$6 = showSchedule(), _v$7 = props.exit, _v$8 = classes.msg;
			_v$4 !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$4);
			_v$5 !== _p$.t && solid_js_web.setStyleProperty(_el$, "--theme", _p$.t = _v$5);
			_v$6 !== _p$.a && solid_js_web.setAttribute(_el$, "data-schedule", _p$.a = _v$6);
			_v$7 !== _p$.o && solid_js_web.setAttribute(_el$, "data-exit", _p$.o = _v$7);
			_v$8 !== _p$.i && solid_js_web.className(_el$2, _p$.i = _v$8);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Toast/Toaster.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<div>\`);
const Toaster = () => {
	const [visible, setVisible] = solid_js.createSignal(document.visibilityState === "visible");
	solid_js.onMount(() => {
		helper.useStyle(index_module_default, store.ref);
		const handleVisibilityChange = () => {
			setVisible(document.visibilityState === "visible");
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		solid_js.onCleanup(() => document.removeEventListener("visibilitychange", handleVisibilityChange));
	});
	return (() => {
		var _el$ = _tmpl$();
		solid_js_web.use((ref) => setState("ref", ref), _el$);
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.For, {
			get each() {
				return store.list;
			},
			children: (id) => solid_js_web.createComponent(ToastItem, solid_js_web.mergeProps(() => store.map[id]))
		}));
		solid_js_web.effect((_p$) => {
			var _v$ = classes.root, _v$2 = visible() ? void 0 : "";
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-paused", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
};
let dom;
const init = () => {
	if (dom || store.ref) return;
	dom = helper.mountComponents("toast", () => solid_js_web.createComponent(Toaster, {}));
	dom.style.setProperty("z-index", "2147483647", "important");
};
//#endregion
//#region src/components/Toast/toast.tsx
const toast = (msg, options) => {
	if (!msg) return;
	init();
	const id = options?.id ?? (typeof msg === "string" ? msg : creatId());
	setState((state) => {
		if (Reflect.has(state.map, id)) {
			Object.assign(state.map[id], {
				msg,
				...options,
				update: true
			});
			return;
		}
		state.map[id] = {
			id,
			type: "info",
			duration: 3e3,
			msg,
			...options
		};
		state.list.push(id);
	});
	/** 寮圭獥鍚庤褰曚竴涓?*/
	let fn = helper.log;
	switch (options?.type) {
		case "warn":
			fn = helper.log.warn;
			break;
		case "error":
			fn = helper.log.error;
			break;
	}
	fn("Toast:", msg);
	if (options?.throw && typeof msg === "string") throw new Error(msg);
};
toast.dismiss = dismiss;
toast.set = (id, options) => {
	if (!Reflect.has(store.map, id)) return;
	setState((state) => Object.assign(state.map[id], options));
};
toast.success = (msg, options) => toast(msg, {
	...options,
	exit: void 0,
	type: "success"
});
toast.warn = (msg, options) => toast(msg, {
	...options,
	exit: void 0,
	type: "warn"
});
toast.error = (msg, options) => toast(msg, {
	...options,
	exit: void 0,
	type: "error"
});
//#endregion
exports.Toaster = Toaster;
exports.toast = toast;
`,
	"userscript/copyApi": `\nlet core = require("core");
let helper = require("helper");
let request = require("request");
//#region src/userscript/copyApi.ts
let contentKey = "";
let decryptKey = "";
const getKeys = async (url) => {
	if (contentKey && decryptKey) return [contentKey, decryptKey];
	if (helper.querySelector(".disData[contentkey]")) {
		contentKey = helper.querySelector(".disData[contentkey]").getAttribute("contentkey");
		decryptKey = helper.querySelector(".disPass[contentkey]").getAttribute("contentkey");
		return [contentKey, decryptKey];
	}
	if (unsafeWindow.contentKey && unsafeWindow.cct) {
		contentKey = unsafeWindow.contentKey;
		decryptKey = unsafeWindow.cct;
		return [contentKey, decryptKey];
	}
	if (url) {
		const [script] = (await request.request(url, {
			fetch: false,
			headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36" }
		})).responseText.match(/(?<=<script>\\s+)(var .+?contentKey =.+?)(?=<\\/script)/gs);
		const res = {};
		for (const [, key, value] of script.matchAll(/var (\\S+) = '(.+?)';\\n/g)) res[key] = value;
		contentKey = res.contentKey;
		const passKey = Object.keys(res).find((key) => key !== "contentKey");
		if (!passKey) {
			core.toast.error(helper.t("site.changed_load_failed"));
			throw new Error(helper.t("site.changed_load_failed"));
		}
		decryptKey = res[passKey];
		return [contentKey, decryptKey];
	}
	core.toast.error(helper.t("site.changed_load_failed"));
	throw new Error(helper.t("site.changed_load_failed"));
};
const decryptData = async (raw, key) => {
	key ||= (await getKeys())[1];
	const cipher = raw.slice(16);
	const iv = raw.slice(0, 16);
	const decryptedBuffer = await crypto.subtle.decrypt({
		name: "AES-CBC",
		iv: new TextEncoder().encode(iv)
	}, await crypto.subtle.importKey("raw", new TextEncoder().encode(key), { name: "AES-CBC" }, false, ["decrypt"]), new Uint8Array(cipher.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16))).buffer);
	return JSON.parse(new TextDecoder().decode(decryptedBuffer));
};
/** 閫氳繃瑙ｆ瀽缃戦〉鍙橀噺鑾峰彇鍥剧墖鍒楄〃 */
const getImglistByHtml = async (pageUrl) => {
	return (await decryptData(...await getKeys(pageUrl))).map(({ url }) => url.replace(/(?<=(\\/|\\.))c800x/, "c1500x"));
};
//#endregion
exports.decryptData = decryptData;
exports.getImglistByHtml = getImglistByHtml;
`,
	"userscript/detectAd": `\n//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let comlink = require("comlink");
comlink = __toESM(comlink, 1);
let helper = require("helper");
let request = require("request");
let worker_detectAd = require("worker/detectAd");
worker_detectAd = __toESM(worker_detectAd, 1);
//#region src/userscript/detectAd.ts
/** 鐢ㄥ父璇嗛€昏緫杩涜鍒ゆ柇锛屼互鏈熻兘鍦ㄦ娴嬪け璇椂鍑忓皬褰卞搷鑼冨洿鍜岄仐婕?*/
const getAdPage = async (list, isAdPage, adList) => {
	let i = list.length - 1;
	let normalNum = 0;
	for (; i >= list.length - 10; i--) {
		if (i <= 2) break;
		if (adList.has(i)) continue;
		const item = list[i];
		if (!item) break;
		if (await isAdPage(item)) adList.add(i);
		else if (normalNum >= 2) break;
		else normalNum += 1;
	}
	let adNum = 0;
	for (i = Math.min(...adList); i < list.length; i++) {
		if (adList.has(i)) {
			adNum += 1;
			continue;
		}
		if (adNum >= 2) adList.add(i);
		else if (adList.has(i - 1) && adList.has(i + 1)) adList.add(i);
		else adNum = 0;
	}
	return adList;
};
const imgToCanvas = async (img) => {
	if (typeof img !== "string") {
		await helper.waitImgLoad(img);
		try {
			const canvas = new OffscreenCanvas(img.width, img.height);
			const ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0);
			if (ctx.getImageData(0, 0, 1, 1)) {
				const imgBitmap = canvas.transferToImageBitmap();
				return comlink.default.transfer(imgBitmap, [imgBitmap]);
			}
		} catch {}
	}
	const blob = await request.downloadImg(typeof img === "string" ? img : img.src);
	const imgBitmap = await createImageBitmap(blob);
	return comlink.default.transfer(imgBitmap, [imgBitmap]);
};
/** 閫氳繃鏂囦欢鍚嶅垽鏂槸鍚︽槸骞垮憡 */
const getAdPageByFileName = (fileNameList, adList) => getAdPage(fileNameList, (fileName) => /^z+/i.test(fileName), adList);
const isAdImg = (imgBitmap) => {
	initWorker();
	return worker_detectAd.default.isAdImg(comlink.default.transfer(imgBitmap, [imgBitmap]));
};
/** 閫氳繃鍥剧墖鍐呭鍒ゆ柇鏄惁鏄箍鍛?*/
const getAdPageByContent = (imgList, adList) => getAdPage(imgList, async (img) => isAdImg(img instanceof ImageBitmap ? img : await imgToCanvas(img)), adList);
const initWorker = helper.onec(() => {
	const mainFn = { log: helper.log };
	worker_detectAd.default.setMainFn(comlink.default.proxy(mainFn), Object.keys(mainFn));
});
//#endregion
exports.getAdPageByContent = getAdPageByContent;
exports.getAdPageByFileName = getAdPageByFileName;
exports.isAdImg = isAdImg;
`,
	"core": `\nlet helper = require("helper");
let solid_js_web = require("solid-js/web");
let components_Manga = require("components/Manga");
let components_Toast = require("components/Toast");
let solid_js = require("solid-js");
let components_Fab = require("components/Fab");
let components_IconButton = require("components/IconButton");
let request = require("request");
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/settings.svg
var _tmpl$$13 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5">\`);
var settings_default = (props = {}) => (() => {
	var _el$ = _tmpl$$13();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/cloud_download.svg
var _tmpl$$12 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4z">\`);
var cloud_download_default = (props = {}) => (() => {
	var _el$ = _tmpl$$12();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/image_search.svg
var _tmpl$$11 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 15v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.02c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1s-1 .45-1 1m-2.5 3H6.52c-.42 0-.65-.48-.39-.81l1.74-2.23a.5.5 0 0 1 .78-.01l1.56 1.88 2.35-3.02c.2-.26.6-.26.79.01l2.55 3.39c.25.32.01.79-.4.79m3.8-9.11c.48-.77.75-1.67.69-2.66-.13-2.15-1.84-3.97-3.97-4.2A4.5 4.5 0 0 0 11 6.5c0 2.49 2.01 4.5 4.49 4.5.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42zM15.5 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5">\`);
var image_search_default = (props = {}) => (() => {
	var _el$ = _tmpl$$11();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/import_contacts.svg
var _tmpl$$10 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z">\`);
var import_contacts_default = (props = {}) => (() => {
	var _el$ = _tmpl$$10();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/menu_book.svg
var _tmpl$$9 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03">\`);
var menu_book_default = (props = {}) => (() => {
	var _el$ = _tmpl$$9();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/auto_fix_high.svg
var _tmpl$$8 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m20.45 6 .49-1.06L22 4.45a.5.5 0 0 0 0-.91l-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05c.17.39.73.39.9 0M8.95 6l.49-1.06 1.06-.49a.5.5 0 0 0 0-.91l-1.06-.48L8.95 2a.492.492 0 0 0-.9 0l-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49L8.05 6c.17.39.73.39.9 0m10.6 7.5-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49.49 1.06a.5.5 0 0 0 .91 0l.49-1.06 1.05-.5a.5.5 0 0 0 0-.91l-1.06-.49-.49-1.06c-.17-.38-.73-.38-.9.01m-1.84-4.38-2.83-2.83a.996.996 0 0 0-1.41 0L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L17.7 10.53c.4-.38.4-1.02.01-1.41m-3.5 2.09L12.8 9.8l1.38-1.38 1.41 1.41z">\`);
var auto_fix_high_default = (props = {}) => (() => {
	var _el$ = _tmpl$$8();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/auto_fix_off.svg
var _tmpl$$7 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m22 3.55-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05a.5.5 0 0 0 .91 0l.49-1.06L22 4.45c.39-.17.39-.73 0-.9m-7.83 4.87 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-2.17 2.17 1.41 1.41zM2.1 4.93l6.36 6.36-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l6.17-6.17 6.36 6.36a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42">\`);
var auto_fix_off_default = (props = {}) => (() => {
	var _el$ = _tmpl$$7();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/flash_off.svg
var _tmpl$$6 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M16.12 11.5a.995.995 0 0 0-.86-1.5h-1.87l2.28 2.28zm.16-8.05c.33-.67-.15-1.45-.9-1.45H8c-.55 0-1 .45-1 1v.61l6.13 6.13zm2.16 14.43L4.12 3.56a.996.996 0 1 0-1.41 1.41L7 9.27V12c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l2.65-4.55 3.44 3.44c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41">\`);
var flash_off_default = (props = {}) => (() => {
	var _el$ = _tmpl$$6();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/flash_on.svg
var _tmpl$$5 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1">\`);
var flash_on_default = (props = {}) => (() => {
	var _el$ = _tmpl$$5();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/lock.svg
var _tmpl$$4 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z">\`);
var lock_default = (props = {}) => (() => {
	var _el$ = _tmpl$$4();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/lock_open.svg
var _tmpl$$3 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6-5h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-.14.54.18 1.08.72 1.22a1 1 0 0 0 1.22-.72A2.996 2.996 0 0 1 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 11c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1z">\`);
var lock_open_default = (props = {}) => (() => {
	var _el$ = _tmpl$$3();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/userscript/core/useSpeedDial.tsx
const useSpeedDial = ({ store, setState, options, setOptions }) => {
	const OptionButton = (props) => solid_js_web.createComponent(components_IconButton.IconButton, {
		get placement() {
			return store.fab.placement;
		},
		showTip: true,
		get tip() {
			return props.showName ?? (helper.t(\`site.add_feature.\${props.optionName}\`) || helper.t(\`other.\${props.optionName}\`) || props.optionName);
		},
		onClick: () => setOptions({ [props.optionName]: !options[props.optionName] }),
		get children() {
			return props.children ?? (options[props.optionName] ? solid_js_web.createComponent(auto_fix_high_default, {}) : solid_js_web.createComponent(auto_fix_off_default, {}));
		}
	});
	helper.createEffectOn(() => [
		store.fab.optionsSpeedDial,
		store.fab.extraSpeedDial,
		store.fab.overrideSpeedDial
	], () => {
		if (store.fab.overrideSpeedDial) return setState("fab", "speedDial", store.fab.overrideSpeedDial.map((btn) => () => solid_js_web.createComponent(components_IconButton.IconButton, {
			get placement() {
				return store.fab.placement;
			},
			showTip: true,
			get tip() {
				return btn.name;
			},
			get onClick() {
				return btn.onClick;
			},
			get children() {
				return btn.icon;
			}
		})));
		const list = [() => solid_js_web.createComponent(OptionButton, {
			optionName: "autoShow",
			get showName() {
				return helper.t("site.add_feature.auto_show");
			},
			get children() {
				return solid_js_web.memo(() => !!options.autoShow)() ? solid_js_web.createComponent(flash_on_default, {}) : solid_js_web.createComponent(flash_off_default, {});
			}
		}), () => solid_js_web.createComponent(OptionButton, {
			optionName: "lockOption",
			get showName() {
				return helper.t("site.add_feature.lock_option");
			},
			get children() {
				return solid_js_web.memo(() => !!options.lockOption)() ? solid_js_web.createComponent(lock_default, {}) : solid_js_web.createComponent(lock_open_default, {});
			}
		})];
		if (store.fab.extraSpeedDial) for (const btn of store.fab.extraSpeedDial) list.push(() => solid_js_web.createComponent(components_IconButton.IconButton, {
			get placement() {
				return store.fab.placement;
			},
			showTip: true,
			get tip() {
				return btn.name;
			},
			get onClick() {
				return btn.onClick;
			},
			get children() {
				return btn.icon;
			}
		}));
		if (store.fab.optionsSpeedDial) for (const optionName of store.fab.optionsSpeedDial) list.push(() => solid_js_web.createComponent(OptionButton, { optionName }));
		else for (const optionName of Object.keys(options)) switch (optionName) {
			case "hiddenFab":
			case "option":
			case "autoShow":
			case "lockOption": continue;
			default: if (typeof options[optionName] === "boolean") list.push(() => solid_js_web.createComponent(OptionButton, { optionName }));
		}
		setState("fab", "speedDial", list);
	});
};
//#endregion
//#region src/userscript/core/useFab.tsx
var _tmpl$$2 = /* @__PURE__ */ solid_js_web.template(\`<div style=text-align:center;line-height:1.2><span style=opacity:0.6;font-size:0.75em></span><br>\`);
const useFab = (coreCtx, nowImgList) => {
	const { store, setState, options, setOptions } = coreCtx;
	helper.useStyle(\`
    #fab {
      --text-bg: transparent;

      position: fixed;
      right: calc(3vw - var(--left, 0px));
      bottom: calc(6vh - var(--top, 0px));

      font-size: clamp(12px, 1.5vw, 16px);
    }
  \`);
	helper.useStyleMemo("#fab", {
		"--left": () => \`\${options.fabPosition.left}px\`,
		"--top": () => \`\${options.fabPosition.top}px\`
	});
	helper.createEffectOn([
		helper.createRootMemo(() => nowImgList()?.filter(Boolean)?.length),
		helper.createRootMemo(() => {
			let i = 0;
			for (const img of components_Manga.imgList()) if (img.loadType === "loaded") i += 1;
			return i;
		}),
		() => nowImgList()?.length,
		() => store.fab.multiSelectCount
	], ([doneNum, loadNum, totalNum, multiSelectCount]) => setState((state) => {
		if (helper.isNumber(multiSelectCount)) {
			state.fab.children = (() => {
				var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild;
				_el$2.nextSibling;
				solid_js_web.insert(_el$2, () => helper.t("other.selected"));
				solid_js_web.insert(_el$, multiSelectCount, null);
				return _el$;
			})();
			state.fab.tip = helper.t("other.multi_select_mode");
			return;
		}
		state.fab.children = void 0;
		if (totalNum === void 0 || doneNum === void 0) {
			state.fab.progress = void 0;
			return;
		}
		if (totalNum === 0) {
			state.fab.progress = 0;
			state.fab.tip = \`\${helper.t("other.loading_img")} - \${doneNum}/\${totalNum}\`;
			return;
		}
		if (doneNum < totalNum) {
			state.fab.progress = doneNum / totalNum;
			state.fab.tip = \`\${helper.t("other.loading_img")} - \${doneNum}/\${totalNum}\`;
			return;
		}
		if (loadNum < totalNum) {
			state.fab.progress = 1 + loadNum / totalNum;
			state.fab.tip = \`\${helper.t("other.img_loading")} - \${loadNum}/\${totalNum}\`;
			return;
		}
		state.fab.progress = 1 + loadNum / totalNum;
		state.fab.tip = helper.t("other.read_mode");
	}));
	const FabIcon = () => {
		switch (store.fab.progress) {
			case void 0: return import_contacts_default;
			case 1:
			case 2: return menu_book_default;
			default: return store.fab.progress > 1 ? cloud_download_default : image_search_default;
		}
	};
	const handleMount = (ref) => {
		const handleDrag = ({ xy: [x, y], last: [lx, ly] }) => {
			setOptions({ fabPosition: {
				left: options.fabPosition.left + x - lx,
				top: options.fabPosition.top + y - ly
			} });
		};
		helper.useDrag({
			ref,
			handleDrag,
			setCapture: true
		});
		new IntersectionObserver((entries) => {
			if (entries.length !== 1 || entries[0].isIntersecting) return;
			setOptions({ fabPosition: {
				left: 0,
				top: 0
			} });
		}, { threshold: .5 }).observe(ref);
	};
	helper.mountComponents("fab", () => {
		solid_js.createEffect(() => {
			setState("fab", {
				placement: -options.fabPosition.left < window.innerWidth / 2 ? "left" : "right",
				speedDialPlacement: -options.fabPosition.top < window.innerHeight / 2 ? "top" : "bottom"
			});
		});
		return solid_js_web.createComponent(components_Fab.Fab, solid_js_web.mergeProps({ ref: handleMount }, () => store.fab, { get children() {
			return store.fab.children ?? solid_js_web.createComponent(solid_js_web.Dynamic, { get component() {
				return FabIcon();
			} });
		} }));
	}).style.setProperty("z-index", "2147483646", "important");
	useSpeedDial(coreCtx);
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/sync.svg
var _tmpl$$1 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 4V2.21c0-.45-.54-.67-.85-.35l-2.8 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.86.09.86-.36V6c3.31 0 6 2.69 6 6 0 .79-.15 1.56-.44 2.25-.15.36-.04.77.23 1.04.51.51 1.37.33 1.64-.34.37-.91.57-1.91.57-2.95 0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-.79.15-1.56.44-2.25.15-.36.04-.77-.23-1.04-.51-.51-1.37-.33-1.64.34C4.2 9.96 4 10.96 4 12c0 4.42 3.58 8 8 8v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36z">\`);
var sync_default = (props = {}) => (() => {
	var _el$ = _tmpl$$1();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/userscript/core/migration.ts
const migrationOption = async (name, editFn) => {
	try {
		const option = await GM.getValue(name);
		if (!option) throw new Error(\`GM.getValue Error: not found \${name}\`);
		if (await editFn(option)) return;
		await GM.setValue(name, option);
	} catch (error) {
		helper.log.error(\`migration \${name} option error:\`, error);
	}
};
/** 閲嶅懡鍚嶉厤缃」 */
const renameOption = (name, list) => migrationOption(name, (option) => {
	for (const itemText of list) {
		const [path, newName] = itemText.split(" => ");
		helper.byPath(option, path, (parent, key) => {
			helper.log("rename Option", itemText);
			if (newName) Reflect.set(parent, newName, parent[key]);
			Reflect.deleteProperty(parent, key);
		});
	}
});
/** 鏃х増鏈厤缃縼绉?*/
const migration = async (version) => {
	await GM.deleteValue("ehTagColorizeCss");
	await GM.deleteValue("ehTagSortCss");
	const values = await GM.listValues();
	if (helper.versionLt(version, "7")) for (const key of values) switch (key) {
		case "Version":
		case "Languages": continue;
		case "HotKeys":
			await renameOption(key, [
				"鍚戜笂缈婚〉 => turn_page_up",
				"鍚戜笅缈婚〉 => turn_page_down",
				"鍚戝彸缈婚〉 => turn_page_right",
				"鍚戝乏缈婚〉 => turn_page_left",
				"璺宠嚦棣栭〉 => jump_to_home",
				"璺宠嚦灏鹃〉 => jump_to_end",
				"閫€鍑?=> exit",
				"鍒囨崲椤甸潰濉厖 => switch_page_fill",
				"鍒囨崲鍗疯酱妯″紡 => switch_scroll_mode",
				"鍒囨崲鍗曞弻椤垫ā寮?=> switch_single_double_page_mode",
				"鍒囨崲闃呰鏂瑰悜 => switch_dir",
				"杩涘叆闃呰妯″紡 => enter_read_mode"
			]);
			break;
		default: await renameOption(key, [
			"option.scrollbar.showProgress => showImgStatus",
			"option.clickPage => clickPageTurn",
			"option.clickPage.overturn => reverse",
			"option.swapTurnPage => swapPageTurnKey",
			"option.flipToNext => jumpToNext",
			"鍖归厤nhentai => associate_nhentai",
			"蹇嵎閿炕椤?=> hotkeys_page_turn",
			"鑷姩缈婚〉 => auto_page_turn",
			"褰诲簳灞忚斀婕敾 => block_totally",
			"鍦ㄦ柊椤甸潰涓墦寮€閾炬帴 => open_link_new_page",
			"璁颁綇褰撳墠绔欑偣 => remember_current_site"
		]);
	}
	if (helper.versionLt(version, "9")) for (const key of values) switch (key) {
		case "Version":
		case "Languages": continue;
		case "Hotkeys":
			await renameOption(key, [
				"turn_page_up => ",
				"turn_page_down => ",
				"turn_page_right => scroll_right",
				"turn_page_left => scroll_left"
			]);
			break;
		default: await migrationOption(key, (option) => {
			if (typeof option.option?.scrollMode !== "boolean") return true;
			option.option.scrollMode = {
				enabled: option.option.scrollMode,
				spacing: option.option.scrollModeSpacing,
				imgScale: option.option.scrollModeImgScale,
				fitToWidth: option.option.scrollModeFitToWidth
			};
		});
	}
	if (helper.versionLt(version, "9.4")) await migrationOption("ehentai", (option) => {
		if (!Reflect.has(option, "hotkeys_page_turn")) return true;
		option.hotkeys = option.hotkeys_page_turn;
		Reflect.deleteProperty(option, "hotkeys_page_turn");
	});
	if (helper.versionLt(version, "11.5")) await migrationOption("Hotkeys", (option) => {
		for (const [name, hotkeys] of Object.entries(option)) option[name] = hotkeys.map((key) => key.replaceAll(/\\b[A-Z]\\b/g, (match) => match.toLowerCase()));
	});
	if (helper.versionLt(version, "11.9.1")) for (const key of values) switch (key) {
		case "Version":
		case "Languages":
		case "Hotkeys": continue;
		default: await renameOption(key, ["option.translation => "]);
	}
	if (helper.versionLt(version, "11.12")) for (const key of values) switch (key) {
		case "Version":
		case "Languages":
		case "Hotkeys": continue;
		default: await renameOption(key, ["associate_nhentai => cross_site_link"]);
	}
	if (helper.versionLt(version, "12")) for (const key of values) switch (key) {
		case "Version":
		case "Languages":
		case "Hotkeys":
			await GM.setValue(\`@\${key}\`, await GM.getValue(key));
			await GM.deleteValue(key);
			continue;
		default: await renameOption(key, ["hotkeys => add_hotkeys_actions"]);
	}
	if (helper.versionLt(version, "12.6")) for (const key of values) {
		if (key.startsWith("@")) continue;
		await migrationOption(key, (option) => {
			const oldTranslation = option.option?.translation;
			if (!oldTranslation) return;
			delete option.option.translation;
			if (oldTranslation.localUrl) {
				option.option.translation ??= {};
				option.option.translation.mit ??= {};
				option.option.translation.mit.localUrl = oldTranslation.localUrl;
			}
		});
	}
};
//#endregion
//#region src/userscript/core/useManga.tsx
let dom;
/**
* 鏄剧ず婕敾闃呰绐楀彛
*/
const useManga = ({ store, setState, options, setOptions }) => {
	helper.useStyle(\`
    #comicRead {
      position: fixed;
      top: 0;
      left: 0;
      transform: scale(0);

      contain: strict;

      width: 100%;
      height: 100%;

      writing-mode: initial;
      font-size: 16px;

      opacity: 0;

      transition:
        opacity 300ms,
        transform 0s 300ms;
    }

    #comicRead[show] {
      transform: scale(1);
      opacity: 1;
      transition: opacity 300ms, transform 100ms;
    }

    /* 闃叉鍏朵粬鎵╁睍鐨勫厓绱犳樉绀哄埌婕敾涓婃潵 */
    #comicRead[show] ~ :not(#fab, #toast, .comicread-ignore) {
      display: none !important;
      pointer-events: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      z-index: 1 !important;
    }
  \`);
	setState("manga", {
		show: false,
		option: options.option,
		defaultOption: options.defaultOption,
		onOptionChange: (option) => setOptions({ option }),
		hotkeys: store.hotkeys,
		onHotkeysChange(newValue) {
			GM.setValue("@Hotkeys", newValue);
			setState("hotkeys", newValue);
		}
	});
	dom = helper.mountComponents("comicRead", () => solid_js_web.createComponent(components_Manga.Manga, solid_js_web.mergeProps(() => store.manga)));
	dom.style.setProperty("z-index", "2147483647", "important");
	const toastDom = helper.querySelector("#toast");
	if (toastDom) dom.after(toastDom);
	const htmlStyle = document.documentElement.style;
	let lastOverflow = htmlStyle.overflow;
	const wakeLock = new helper.WakeLock();
	helper.createEffectOn(helper.createRootMemo(() => store.manga.show && store.manga.imgList.length > 0), (show) => {
		if (show) {
			dom.setAttribute("show", "");
			lastOverflow = htmlStyle.overflow;
			htmlStyle.setProperty("overflow", "hidden", "important");
			htmlStyle.setProperty("scrollbar-width", "none", "important");
			if (components_Manga.store.option.autoFullscreen) components_Manga.refs.root.requestFullscreen();
			wakeLock.on();
		} else {
			dom.removeAttribute("show");
			htmlStyle.overflow = lastOverflow;
			htmlStyle.removeProperty("scrollbar-width");
			wakeLock.off();
		}
	}, { defer: true });
	setState("manga", {
		onExit: () => setState("manga", "show", false),
		editSettingList(list) {
			const SyncOptions = () => {
				const sync = async () => {
					const currentReadOption = helper.difference(components_Manga.store.option, components_Manga.store.defaultOption);
					for (const key of await GM.listValues()) {
						if (key.startsWith("@")) continue;
						await migrationOption(key, (option) => {
							option.option = currentReadOption;
						});
					}
					components_Toast.toast.success(helper.t("setting.sync_options_other_site"));
				};
				return solid_js_web.createComponent(components_Manga.SettingsItemButton, {
					get name() {
						return helper.t("setting.sync_options_other_site");
					},
					onClick: sync,
					get children() {
						return solid_js_web.createComponent(sync_default, {});
					}
				});
			};
			const otherSetting = list.find(([title]) => title === helper.t("other.other"));
			if (otherSetting) {
				const [, FC] = otherSetting;
				otherSetting[1] = () => [solid_js_web.createComponent(FC, {}), solid_js_web.createComponent(SyncOptions, {})];
			}
			return list;
		}
	});
};
//#endregion
//#region src/userscript/core/version.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<h2>馃コ ComicRead 宸叉洿鏂板埌 v\`), _tmpl$2 = /* @__PURE__ */ solid_js_web.template(\`<h3>鏂板\`), _tmpl$3 = /* @__PURE__ */ solid_js_web.template(\`<ul><li>瀹炵幇鍥剧墖鏀惧ぇ鍔熻兘锛堥渶瑕佹墦寮€銆屽浘鍍忚瘑鍒€嶅姛鑳斤級</li><li>澧炲姞 ehentai 鍦ㄧ缉鐣ュ浘鍒楄〃椤甸噷灞曞紑鏍囩鍒楄〃鍔熻兘\`);
/** 澶勭悊鐗堟湰鏇存柊鐩稿叧 */
const handleVersionUpdate = async () => {
	const version = await helper.ensureGmValue("@Version", GM.info.script.version);
	if (version === GM.info.script.version) return;
	await migration(version);
	if (helper.lang() === "zh") {
		components_Toast.toast(() => [
			(() => {
				var _el$ = _tmpl$();
				_el$.firstChild;
				solid_js_web.insert(_el$, () => GM.info.script.version, null);
				return _el$;
			})(),
			"<h3>鏂板</h3>\\n<h3>淇</h3>\\n",
			solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return helper.versionLt(version, "12");
				},
				get children() {
					return [_tmpl$2(), _tmpl$3()];
				}
			})
		], {
			id: "Version Tip",
			type: "custom",
			duration: Number.POSITIVE_INFINITY,
			onDismiss: () => GM.setValue("@Version", GM.info.script.version)
		});
		const listenerId = await GM.addValueChangeListener("@Version", async (_, __, newVersion) => {
			if (newVersion !== GM.info.script.version) return;
			components_Toast.toast.dismiss("Version Tip");
			await GM.removeValueChangeListener(listenerId);
		});
	} else await GM.setValue("@Version", GM.info.script.version);
};
//#endregion
//#region src/userscript/core/useInit.tsx
/** 瀵瑰熀纭€鐨勫垵濮嬪寲鎿嶄綔鐨勫皝瑁?*/
const useInit = async (name, initSiteOptions = {}) => {
	await helper.setInitLang();
	await handleVersionUpdate();
	const defaultOptions = {
		option: void 0,
		defaultOption: void 0,
		autoShow: true,
		lockOption: false,
		hiddenFab: false,
		fabPosition: {
			top: 0,
			left: 0
		},
		...initSiteOptions
	};
	const saveOptions = await GM.getValue(name);
	if (saveOptions) for (const key of Object.keys(saveOptions)) {
		if (Reflect.has(defaultOptions, key)) continue;
		Reflect.deleteProperty(saveOptions, key);
	}
	else await GM.setValue(name, {});
	const { store, setState } = helper.useStore({
		fab: {
			tip: helper.t("other.read_mode"),
			show: false
		},
		manga: { imgList: [] },
		hotkeys: await GM.getValue("@Hotkeys", {}),
		name,
		options: {
			...structuredClone(defaultOptions),
			...saveOptions
		},
		comicMap: { "": { getImgList: function init() {
			return [];
		} } },
		nowComic: "",
		flag: {
			isStored: saveOptions !== void 0,
			needAutoShow: true,
			hasPageHandler: false
		}
	});
	components_Manga.setDefaultHotkeys((_hotkeys) => ({
		..._hotkeys,
		enter_read_mode: ["v"],
		multi_select_load: ["Shift + v"]
	}));
	const { options } = store;
	const setOptions = (newOptions) => {
		setState((state) => Object.assign(state.options, newOptions));
		if (options.lockOption && newOptions?.lockOption !== false) return;
		return GM.setValue(store.name, helper.difference(options, defaultOptions));
	};
	const loadComic = async (id = store.nowComic) => {
		if (!Reflect.has(store.comicMap, id)) throw new Error("comic not found");
		try {
			setState("comicMap", id, "imgList", []);
			const newImgList = await store.comicMap[id].getImgList(coreCtx);
			if (newImgList.length === 0) throw new Error(helper.t("alert.fetch_comic_img_failed"));
			setState("comicMap", id, "imgList", newImgList);
		} catch (error) {
			setState("comicMap", id, "imgList", void 0);
			helper.log.error(error);
			throw error;
		}
	};
	const showComic = async (id = store.nowComic) => {
		if (!Reflect.has(store.comicMap, id)) throw new Error("comic not found");
		if (store.comicMap[id].getImgList?.name === "init") return;
		if (id !== store.nowComic) setState("nowComic", id);
		switch (store.comicMap[id].imgList?.length) {
			case 0: return components_Toast.toast.warn(helper.t("alert.repeat_load"), { duration: 1500 });
			case void 0: try {
				await loadComic(id);
				setState("flag", "needAutoShow", false);
			} catch (error) {
				return components_Toast.toast.error(error.message);
			}
		}
		setState("manga", "show", true);
	};
	let inited = false;
	const init = (autoShow = true) => {
		if (inited) return;
		inited = true;
		setState("fab", { onClick: () => void showComic() });
		if (autoShow && store.flag.needAutoShow && options.autoShow) showComic();
		(async () => {
			await GM.registerMenuCommand(helper.t("other.enter_comic_read_mode"), () => void showComic());
			await updateHideFabMenu();
		})();
		components_Manga.listenHotkey({ enter_read_mode: () => showComic() }, true);
	};
	helper.createEffectOn(() => store.comicMap[""].getImgList, (_, prev) => !prev && init(), { defer: true });
	const coreCtx = {
		store,
		setState,
		options,
		setOptions,
		loadComic,
		showComic,
		init,
		dynamicLoad: async (loadImgFn, length, id = "") => {
			if (store.comicMap[id].imgList?.length) return store.comicMap[id].imgList;
			setState("comicMap", id, "imgList", helper.range(typeof length === "number" ? length : length(), ""));
			await new Promise(async (resolve) => {
				try {
					await loadImgFn((i, img) => {
						setState("comicMap", id, "imgList", (list) => list.with(i, img));
						resolve();
					});
				} catch (error) {
					components_Toast.toast.error(error.message);
				}
			});
			return store.comicMap[id].imgList;
		},
		dynamicLazyLoad: async ({ loadImg, length, id = "", concurrency = 4, onLoad }) => {
			if (store.comicMap[id].imgList?.length) return store.comicMap[id].imgList;
			const imgNum = typeof length === "number" ? length : length();
			await new Promise((resolve) => {
				const queue = new helper.PQueue(async (i) => {
					const img = await loadImg(i);
					setState("comicMap", id, "imgList", (list) => list.with(i, img));
					resolve();
					onLoad?.(img, i, store.comicMap[id].imgList);
				}, concurrency);
				setState((state) => {
					state.comicMap[id].imgList = helper.range(imgNum, "");
					state.manga.onWaitUrlImgs = (imgs) => queue.set(...imgs);
				});
			});
			return store.comicMap[id].imgList;
		}
	};
	const nowImgList = helper.createRootMemo(() => {
		const comic = store.comicMap[store.nowComic];
		if (!comic?.imgList) return;
		if (!comic.adList?.size) return comic.imgList;
		return comic.imgList.filter((_, i) => !comic.adList?.has(i));
	});
	solid_js.createEffect(() => {
		if (store.fab.multiSelectCount !== void 0) return setState("fab", "show", true);
		setState("fab", "show", store.flag.hasPageHandler && !options.hiddenFab ? void 0 : false);
	});
	helper.createEffectOn(nowImgList, (list) => list && setState("manga", "imgList", list));
	useFab(coreCtx, nowImgList);
	useManga(coreCtx);
	let menuId;
	/** 鏇存柊鏄剧ず/闅愯棌鎮诞鎸夐挳鐨勮彍鍗曢」 */
	const updateHideFabMenu = async () => {
		await GM.unregisterMenuCommand(menuId);
		menuId = await GM.registerMenuCommand(options.hiddenFab ? helper.t("other.fab_show") : helper.t("other.fab_hidden"), () => {
			setOptions({ hiddenFab: !options.hiddenFab });
			return updateHideFabMenu();
		});
	};
	await GM.registerMenuCommand(helper.t("site.show_settings_menu"), () => setState("fab", {
		show: true,
		focus: true,
		tip: helper.t("other.setting"),
		children: solid_js_web.createComponent(settings_default, {}),
		onBackdropClick: () => setState("fab", {
			show: false,
			focus: false
		})
	}));
	return coreCtx;
};
//#endregion
//#region src/userscript/core/siteAdapter.ts
/** 蹇€熼€傞厤绠€鍗曠綉绔?*/
const setup = async ({ name, initOptions, isMangaPage, getImgList, onPrev, onNext, onExit, handler: userHandler }) => {
	await setupSiteAdapter({
		name,
		options: initOptions,
		getPageContext: async () => {
			const data = isMangaPage ? await isMangaPage() : {};
			if (!data) return;
			return {
				type: "manga",
				...data === true ? {} : data
			};
		},
		handlers: { manga: async (coreCtx, pageCtx) => {
			const { setState } = coreCtx;
			setState((state) => {
				state.comicMap[""] = { getImgList: (ctx) => getImgList(ctx, pageCtx) };
				state.manga.onExit = (isEnd) => {
					onExit?.(isEnd);
					setState("manga", "show", false);
				};
			});
			await userHandler?.(coreCtx);
			(async () => {
				if (onPrev) setState("manga", { onPrev: await helper.wait(onPrev, 5e3) });
				if (onNext) setState("manga", { onNext: await helper.wait(onNext, 5e3) });
			})();
		} }
	});
};
const setupSiteAdapter = async ({ name, options: initOptions, getPageContext, handlers, features }) => {
	let pageCtx;
	const cleanupFns = [];
	pageCtx = await helper.waitUrlChange(() => getPageContext(pageCtx));
	const coreCtx = await useInit(name, initOptions);
	const { store, setState, showComic, loadComic, init, options } = coreCtx;
	const processPageContext = async (newPageCtx, force = false) => {
		if (!force && helper.isEqual(pageCtx, newPageCtx)) return;
		for (const cleanup of cleanupFns) await cleanup(newPageCtx);
		cleanupFns.length = 0;
		pageCtx = newPageCtx;
		const isMangePage = newPageCtx?.type === "manga";
		setState((state) => {
			state.flag.hasPageHandler = Boolean(newPageCtx?.type) && Reflect.has(handlers, newPageCtx.type);
			state.manga.show = false;
		});
		if (!newPageCtx) return;
		init(isMangePage);
		const allCleanup = await handlers.all?.(coreCtx, newPageCtx);
		if (allCleanup) cleanupFns.push(allCleanup);
		const handlerCleanup = await handlers[newPageCtx.type]?.(coreCtx, newPageCtx);
		if (handlerCleanup) cleanupFns.push(handlerCleanup);
		if (features) for (const [featureName, handler] of Object.entries(features)) {
			if (!options[featureName] || !handler) continue;
			helper.requestIdleCallback(async () => {
				const cleanup = await handler(coreCtx, newPageCtx);
				if (cleanup && pageCtx === newPageCtx) cleanupFns.push(cleanup);
			}, 1e3);
		}
		if (!isMangePage || !store.options.autoShow) return;
		const lastImg = store.comicMap[store.nowComic].imgList?.[0];
		if (await helper.wait(async () => {
			await helper.sleep(200);
			await loadComic();
			return store.comicMap[store.nowComic].imgList?.[0] !== lastImg;
		}, 10 * 1e3)) await showComic();
	};
	helper.onUrlChange(async (lastUrl) => {
		if (!lastUrl) return await processPageContext(pageCtx, true);
		await processPageContext(await getPageContext(pageCtx));
	});
};
//#endregion
exports.handleVersionUpdate = handleVersionUpdate;
exports.listenHotkey = components_Manga.listenHotkey;
exports.request = request.request;
exports.setup = setup;
exports.setupSiteAdapter = setupSiteAdapter;
exports.toast = components_Toast.toast;
exports.useInit = useInit;
exports.useSpeedDial = useSpeedDial;
`,
	"worker/detectAd": `\n//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let jsqr = require("jsqr");
jsqr = __toESM(jsqr, 1);
//#region src/worker/detectAd/workHelper.ts
const mainFn = {};
const setMainFn = (helper, keys) => {
	for (const name of keys) Reflect.set(mainFn, name, (...args) => Reflect.apply(helper[name], helper, args));
};
/** 璁＄畻 rgb 鐨勭伆搴?*/
const toGray = (r, g, b) => Math.round(.299 * r + .587 * g + .114 * b);
//#endregion
//#region src/worker/detectAd/index.ts
/** 鍒ゆ柇涓€寮犲浘鏄惁鏄僵鍥?*/
const isColorImg = (data) => {
	for (let i = 0; i < data.length; i += 16) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		if (!(r === g && r === b)) return true;
	}
	return false;
};
/** 浜岀淮鐮佺櫧鍚嶅崟 */
const qrCodeWhiteList = [
	/^https:\\/\\/[^.]+\\.fanbox\\.cc/,
	/^https:\\/\\/twitter\\.com/,
	/^https:\\/\\/x\\.com/,
	/^https:\\/\\/fantia\\.jp/,
	/^https:\\/\\/marshmallow-qa\\.com/,
	/^https:\\/\\/www\\.dlsite\\.com/,
	/^https:\\/\\/hitomi\\.la/
];
const options = { inversionAttempts: "attemptBoth" };
/** 璇嗗埆鍥惧儚涓婄殑浜岀淮鐮?*/
const getQrCode = (img, width, height) => {
	try {
		const binaryData = jsqr.default(img, width, height, options)?.binaryData;
		if (!binaryData) return false;
		const text = new TextDecoder().decode(Uint8Array.from(binaryData));
		mainFn.log(\`妫€娴嬪埌浜岀淮鐮侊細 \${text}\`);
		return text;
	} catch (error) {
		mainFn.log(error);
	}
};
const getImgData = (img) => {
	const canvas = new OffscreenCanvas(img.width, img.height);
	const ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	return ctx.getImageData(0, 0, canvas.width, canvas.height);
};
const scanImgBlock = (img, sx, sy, w, h) => {
	if (w === img.width && h === img.height) return getQrCode(img.data, w, h);
	const data = new Uint8ClampedArray(/* @__PURE__ */ new ArrayBuffer(w * h * 4));
	for (let y = 0, height = sy + h; y < height; y++) for (let x = 0, width = sx + w; x < width; x++) {
		const i = (y * w + x) * 4;
		const target = ((y + sy) * img.width + (x + sx)) * 4;
		data[i] = img.data[target];
		data[i + 1] = img.data[target + 1];
		data[i + 2] = img.data[target + 2];
		data[i + 3] = img.data[target + 3];
	}
	return getQrCode(data, w, h);
};
const isAdImg = (imgBitmap) => {
	const imgData = getImgData(imgBitmap);
	if (!isColorImg(imgData.data)) return false;
	for (let i = 0; i < imgData.data.length; i += 4) {
		const val = toGray(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]) < 200 ? 0 : 255;
		imgData.data[i] = val;
		imgData.data[i + 1] = val;
		imgData.data[i + 2] = val;
		imgData.data[i + 3] = 255;
	}
	let text = getQrCode(imgData.data, imgData.width, imgData.height);
	if (!text) {
		const w = Math.floor(imgData.width / 2);
		const h = Math.floor(imgData.height / 2);
		for (const [sx, sy] of [
			[w, h],
			[0, h],
			[w, 0],
			[0, 0]
		]) {
			text = scanImgBlock(imgData, sx, sy, w, h);
			if (text) break;
		}
	}
	if (text) return qrCodeWhiteList.every((reg) => !reg.test(text));
	return false;
};
//#endregion
exports.isAdImg = isAdImg;
exports.setMainFn = setMainFn;
`,
	"worker/ImageRecognition": `\n//#region src/worker/ImageRecognition/workHelper.ts
const mainFn = {};
const setMainFn = (helper, keys) => {
	for (const name of keys) Reflect.set(mainFn, name, (...args) => Reflect.apply(helper[name], helper, args));
};
const getEdgeScope = (width, height) => Math.min(Math.ceil((width + height) * .01), 10);
/** 瀵规寚瀹氭暟鍊煎彇鏁?*/
const round = (n, int) => {
	if (int <= 0) return n;
	const remainder = n % int;
	return remainder < int / 2 ? n - remainder : n + (int - remainder);
};
/** 璁＄畻 rgb 鐨勭伆搴?*/
const toGray = (r, g, b) => Math.round(.299 * r + .587 * g + .114 * b);
/** 鑾峰彇鍥剧墖鐨勭伆搴﹁〃 */
const toGrayList = (imgData, roundNum) => {
	const grayList = new Uint8ClampedArray(/* @__PURE__ */ new ArrayBuffer(imgData.length / 4));
	for (let i = 0, gi = 0; i < imgData.length; i += 4, gi++) {
		const r = imgData[i];
		const g = imgData[i + 1];
		const b = imgData[i + 2];
		grayList[gi] = round(toGray(r, g, b), roundNum);
	}
	return grayList;
};
/** 閬嶅巻鍥剧墖鐨勬寚瀹氳 */
const forEachRows = (width, y, fn, start = 0, end = width) => {
	for (let i = start; i < end; i++) fn(width * y + i);
};
/** 閬嶅巻鍥剧墖鐨勬寚瀹氬垪 */
const forEachCols = (width, height, x, fn, start = 0, end = height) => {
	for (let i = start; i < end; i++) fn(i * width + x);
};
/** 閬嶅巻鍥剧墖鐨勮竟缂?*/
const forEachEdge = (width, height, scope, fn) => {
	for (let i = 0; i < scope; i++) {
		forEachRows(width, i, fn);
		forEachRows(width, height - i - 1, fn);
		forEachCols(width, height, i, fn, scope, height - scope);
		forEachCols(width, height, width - i - 1, fn, scope, height - scope);
	}
};
/** 缂╁皬鍥惧儚 */
const resizeImg = (rawImgData, width, height) => {
	const scale = Math.min(200 / width, 200 / height);
	const w = Math.floor(width * scale);
	const h = Math.floor(height * scale);
	const data = new Uint8ClampedArray(/* @__PURE__ */ new ArrayBuffer(w * h * 4));
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		const i = (y * w + x) * 4;
		const tx = Math.floor(x / scale);
		const target = (width * Math.floor(y / scale) + tx) * 4;
		data[i] = rawImgData[target];
		data[i + 1] = rawImgData[target + 1];
		data[i + 2] = rawImgData[target + 2];
		data[i + 3] = 255;
	}
	return {
		scale,
		w,
		h,
		data
	};
};
/** 閫氳繃浜掔浉姣旇緝鏁扮粍椤规眰鍑烘渶缁堥」 */
const boil = (array, compareFunc) => {
	if (!array || (array.length ?? 0) === 0) return null;
	return array.reduce(compareFunc);
};
//#endregion
//#region src/worker/ImageRecognition/colorArea.ts
/** 鑾峰彇棰滆壊鍖哄煙鍦ㄨ竟缂樺尯鍩熶笂鐨勫崰姣?*/
const getAreaEdgeRatio = (pixelList, width, height) => {
	let size = 0;
	const edgeScope = getEdgeScope(width, height);
	const add = (i) => pixelList.has(i) && size++;
	forEachEdge(width, height, edgeScope, add);
	return size / (width * edgeScope * 2 + (height - 2 * edgeScope) * edgeScope * 2);
};
/** 鏍规嵁鐏板害鍊艰幏鍙栧浘鐗囪竟缂樼浉浼奸鑹茬殑鍖哄煙 */
const getEdgeArea = (grayList, width, height) => {
	const maximum = width * height * .4;
	const areaMap = /* @__PURE__ */ new Map();
	/** 寰呮鏌ョ浉閭诲儚绱犵殑鍍忕礌 */
	const seedPixel = /* @__PURE__ */ new Set();
	const addSeedPixel = (index) => {
		const gray = grayList[index];
		if (gray === void 0) return;
		seedPixel.add(index);
		if (!areaMap.has(gray)) areaMap.set(gray, /* @__PURE__ */ new Set());
		areaMap.get(gray).add(index);
	};
	const popSeedPixel = () => {
		if (seedPixel.size === 0) return;
		const index = seedPixel.values().next().value;
		seedPixel.delete(index);
		return index;
	};
	forEachEdge(width, height, getEdgeScope(width, height), addSeedPixel);
	/** 鑾峰彇鐩搁偦鍍忕礌 */
	const getAdjacentPixel = (i) => {
		const adjacentPixel = [];
		const x = i % width;
		const y = Math.floor(i / width);
		const left = x !== 0;
		const up = y >= 1;
		const right = x < width - 1;
		const down = y < height - 1;
		if (left) adjacentPixel.push(i - 1);
		if (up) adjacentPixel.push(i - width);
		if (right) adjacentPixel.push(i + 1);
		if (down) adjacentPixel.push(i + width);
		if (left && up) adjacentPixel.push(i - width - 1);
		if (left && down) adjacentPixel.push(i + width - 1);
		if (right && up) adjacentPixel.push(i - width + 1);
		if (right && down) adjacentPixel.push(i + width + 1);
		return adjacentPixel;
	};
	for (let i = popSeedPixel(); i !== void 0; i = popSeedPixel()) {
		const gray = grayList[i];
		const areaPixelList = areaMap.get(gray);
		const adjacentPixelList = getAdjacentPixel(i);
		for (const adjacentPixel of adjacentPixelList) {
			if (areaPixelList.has(adjacentPixel)) continue;
			if (grayList[adjacentPixel] !== gray) continue;
			addSeedPixel(adjacentPixel);
		}
		if (areaPixelList.size > maximum) return [areaPixelList];
	}
	const areaList = [];
	for (const pixelList of areaMap.values()) {
		if (pixelList.size < 100) continue;
		areaList.push(pixelList);
	}
	return areaList;
};
/** 鑾峰彇鍥惧儚鎸囧畾鍖哄煙涓殑涓昏壊 */
const getAreaColor = (imgData, pixelList) => {
	const colorMap = /* @__PURE__ */ new Map();
	const maximum = pixelList.size * .5;
	let maxColor = "";
	let maxCount = 0;
	for (const i of pixelList.values()) {
		const index = i * 4;
		const color = \`rgb(\${imgData[index]}, \${imgData[index + 1]}, \${imgData[index + 2]})\`;
		if (!colorMap.has(color)) colorMap.set(color, 0);
		const colorCount = colorMap.get(color) + 1;
		colorMap.set(color, colorCount);
		if (colorCount > maxCount) {
			maxColor = color;
			maxCount = colorCount;
		}
		if (colorCount > maximum) break;
	}
	return maxColor;
};
/** 鑾峰彇鍥惧儚鎸囧畾鐭╁舰鍖哄煙涓殑涓昏壊 */
const getSquareAreaColor = (imgData, topLeftX, topLeftY, bottomRightX, bottomRightY) => {
	const startX = Math.floor(topLeftX);
	const startY = Math.floor(topLeftY);
	const endX = Math.floor(bottomRightX);
	const endY = Math.floor(bottomRightY);
	const colorMap = /* @__PURE__ */ new Map();
	const maximum = (endX - startX) * (endY - startY) * .5;
	let maxColor = "";
	let maxCount = 0;
	for (let x = startX; x < endX; x++) for (let y = startY; y < endY; y++) {
		const index = (x + y * endX) * 4;
		const color = \`rgb(\${imgData[index]}, \${imgData[index + 1]}, \${imgData[index + 2]})\`;
		if (!colorMap.has(color)) colorMap.set(color, 0);
		const colorCount = colorMap.get(color) + 1;
		colorMap.set(color, colorCount);
		if (colorCount > maxCount) {
			maxColor = color;
			maxCount = colorCount;
		}
		if (colorCount > maximum) break;
	}
	return maxColor;
};
//#endregion
//#region src/worker/ImageRecognition/background.ts
/** 鏍规嵁杈圭紭棰滆壊鍖哄煙鑾峰彇鑳屾櫙棰滆壊 */
const byEdgeArea = ({ data, grayList, width, height }) => {
	const areaList = getEdgeArea(grayList, width, height);
	if (areaList.length === 0) return;
	const minimum = width * height * .02;
	let maxArea;
	let maxRatio = .1;
	for (const pixelList of areaList) {
		if (pixelList.size < minimum) continue;
		const edgeRatio = getAreaEdgeRatio(pixelList, width, height);
		if (edgeRatio < maxRatio) continue;
		maxArea = pixelList;
		maxRatio = edgeRatio;
	}
	if (!maxArea) return;
	return getAreaColor(data, maxArea);
};
const getPosAreaColor = (pos, { data, blankMargin, width: w, height: h }) => {
	switch (pos) {
		case "top": return getSquareAreaColor(data, 0, 0, w, blankMargin.top * h);
		case "bottom": return getSquareAreaColor(data, 0, h - blankMargin.bottom * h, w, h);
		case "left": return getSquareAreaColor(data, 0, 0, blankMargin.left * w, h);
		case "right": return getSquareAreaColor(data, w - blankMargin.right * w, 0, w, h);
	}
};
/** 浠庤冻澶熷ぇ鐨勭┖鐧借竟缂樹腑鑾峰彇鑳屾櫙棰滆壊 */
const byBlankMargin = (context) => {
	const colorMap = {};
	for (const pos of [
		"top",
		"bottom",
		"left",
		"right"
	]) {
		if (!context.blankMargin[pos]) continue;
		const color = getPosAreaColor(pos, context);
		if (!color) continue;
		colorMap[color] = (colorMap[color] || 0) + context.blankMargin[pos];
	}
	const colorList = Object.entries(colorMap).filter(([, v]) => v > .04);
	if (colorList.length === 0) return;
	return boil(colorList, (a, b) => a[1] > b[1] ? a : b)?.[0];
};
/** 鍒ゆ柇鍥惧儚鐨勮儗鏅壊 */
const getBackground = (context) => "blankMargin" in context && byBlankMargin(context) || byEdgeArea(context);
//#endregion
//#region src/worker/ImageRecognition/blankMargin.ts
/** 鑾峰彇鍥剧墖绌虹櫧杈圭紭鐨勯暱搴?*/
const getBlankMargin = ({ grayList, width, height }) => {
	let blankColor;
	const isBlankLine = (x, y) => {
		const colorMap = /* @__PURE__ */ new Map();
		const eachFn = (i) => {
			const gray = grayList[i];
			colorMap.set(gray, (colorMap.get(gray) || 0) + 1);
		};
		if (x < 0) forEachRows(width, y, eachFn);
		else forEachCols(width, height, x, eachFn);
		let maxColor;
		let maxNum = height * .9;
		for (const [gray, num] of colorMap.entries()) {
			if (num < maxNum) continue;
			maxColor = gray;
			maxNum = num;
		}
		if (maxColor === void 0) return false;
		blankColor ||= maxColor;
		if (maxColor !== blankColor) return false;
		return true;
	};
	let left = 0;
	for (let x = 0, end = width * .4; x < end; x++, left++) if (!isBlankLine(x, -1)) break;
	blankColor = void 0;
	let right = 0;
	for (let x = width - 1, end = width * .6; x >= end; x--, right++) if (!isBlankLine(x, -1)) break;
	blankColor = void 0;
	let top = 0;
	for (let y = 0, end = height * .4; y < end; y++, top++) if (!isBlankLine(-1, y)) break;
	blankColor = void 0;
	let bottom = 0;
	for (let y = height - 1, end = height * .6; y >= end; y--, bottom++) if (!isBlankLine(-1, y)) break;
	if (left || right || top || bottom) return {
		left,
		right,
		top,
		bottom
	};
};
//#endregion
//#region src/worker/ImageRecognition/index.ts
const recognitionImg = (imgData, width, height, url, option) => {
	const startTime = Date.now();
	const { w, h, data } = resizeImg(imgData, width, height);
	const context = {
		data,
		grayList: toGrayList(data, 5),
		width: w,
		height: h
	};
	let blankMargin;
	if (option.pageFill || option.background) {
		blankMargin = getBlankMargin(context);
		if (blankMargin) {
			for (const key of [
				"top",
				"bottom",
				"left",
				"right"
			]) blankMargin[key] &&= blankMargin[key] / w;
			mainFn.setImg(url, "blankMargin", {
				left: blankMargin.left,
				right: blankMargin.right
			});
			mainFn.updatePageData();
			context.blankMargin = blankMargin;
		} else mainFn.setImg(url, "blankMargin", null);
	}
	let bgColor;
	if (option.background) {
		bgColor = getBackground(context);
		if (bgColor) mainFn.setImg(url, "background", bgColor);
	}
	let logText = \`\${url}\\n鑰楁椂 \${Date.now() - startTime}ms 澶勭悊瀹屾垚\`;
	const resList = [];
	if (blankMargin) resList.push(\`绌虹櫧杈圭紭锛歕${Object.entries(blankMargin).filter(([, v]) => v).map(([k, v]) => \`\${k}:\${v && (v * 100).toFixed(2)}%\`).join(" ")}\`);
	if (bgColor) resList.push(\`鑳屾櫙鑹? \${bgColor}\`);
	if (resList.length > 0) logText += \`\\n\${resList.join("\\n")}\`;
	mainFn.log?.(logText);
};
//#endregion
exports.getAreaEdgeRatio = getAreaEdgeRatio;
exports.recognitionImg = recognitionImg;
exports.setMainFn = setMainFn;
`,
	"worker/ImageUpscale": `\n//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let _tensorflow_tfjs = require("@tensorflow/tfjs");
_tensorflow_tfjs = __toESM(_tensorflow_tfjs, 1);
let _tensorflow_tfjs_backend_webgpu = require("@tensorflow/tfjs-backend-webgpu");
let helper = require("helper");
//#region src/worker/ImageUpscale/image.ts
var Img = class {
	width;
	height;
	data;
	constructor(width, height, data = new Uint8Array(width * height * 4)) {
		this.width = width;
		this.height = height;
		this.data = data;
	}
	getImageCrop(x, y, image, x1, y1, x2, y2) {
		const width = x2 - x1;
		for (let j = 0; j < y2 - y1; j++) {
			const srcIndex = (y1 + j) * image.width * 4 + x1 * 4;
			this.data.set(image.data.subarray(srcIndex, srcIndex + width * 4), (y + j) * this.width * 4 + x * 4);
		}
	}
	padToTileSize(tileSize) {
		let newWidth = this.width;
		let newHeight = this.height;
		if (this.width < tileSize) newWidth = tileSize;
		if (this.height < tileSize) newHeight = tileSize;
		if (newWidth === this.width && newHeight === this.height) return;
		const newData = new Uint8Array(newWidth * newHeight * 4);
		for (let y = 0; y < this.height; y++) {
			const srcStart = y * this.width * 4;
			newData.set(this.data.subarray(srcStart, srcStart + this.width * 4), y * newWidth * 4);
		}
		if (newWidth > this.width) {
			const rightColumnIndex = (this.width - 1) * 4;
			for (let y = 0; y < this.height; y++) {
				const destRowStart = y * newWidth * 4;
				const srcPixelIndex = y * this.width * 4 + rightColumnIndex;
				const padPixel = this.data.subarray(srcPixelIndex, srcPixelIndex + 4);
				for (let x = this.width; x < newWidth; x++) newData.set(padPixel, destRowStart + x * 4);
			}
		}
		if (newHeight > this.height) {
			const bottomRowStart = (this.height - 1) * newWidth * 4;
			const bottomRow = newData.subarray(bottomRowStart, bottomRowStart + newWidth * 4);
			for (let y = this.height; y < newHeight; y++) newData.set(bottomRow, y * newWidth * 4);
		}
		this.width = newWidth;
		this.height = newHeight;
		this.data = newData;
	}
	cropToOriginalSize(width, height) {
		const newData = new Uint8Array(width * height * 4);
		for (let y = 0; y < height; y++) {
			const srcStart = y * this.width * 4;
			newData.set(this.data.subarray(srcStart, srcStart + width * 4), y * width * 4);
		}
		this.width = width;
		this.height = height;
		this.data = newData;
	}
};
//#endregion
//#region src/worker/ImageUpscale/workHelper.ts
const mainFn = {};
const setMainFn = (helper, keys) => {
	for (const name of keys) Reflect.set(mainFn, name, (...args) => Reflect.apply(helper[name], helper, args));
};
const base64ToArrayBuffer = (base64) => {
	const binaryString = atob(base64);
	const len = binaryString.length;
	const bytes = new Uint8Array(len);
	for (let i = 0; i < len; i++) bytes[i] = binaryString.codePointAt(i);
	return bytes.buffer;
};
//#endregion
//#region src/worker/ImageUpscale/model.ts
console.debug(_tensorflow_tfjs_backend_webgpu.webgpu_util);
let model;
let loading = false;
const getModel = async () => {
	if (model) return model;
	if (loading) return helper.wait(() => model);
	loading = true;
	try {
		await _tensorflow_tfjs.setBackend("webgpu");
	} catch (error) {
		mainFn.toast.warn(mainFn.t("upscale.webgpu_tip"));
		mainFn.log.error("鍒囨崲 WebGPU 鍑洪敊", error);
	}
	const { buffer, base64, json } = await mainFn.getModel();
	Reflect.set(_tensorflow_tfjs.env().platform, "fetch", () => ({
		ok: true,
		json: () => JSON.parse(json),
		arrayBuffer: () => buffer || base64ToArrayBuffer(base64)
	}));
	model = await _tensorflow_tfjs.loadGraphModel("xxx");
	return model;
};
//#endregion
//#region src/worker/ImageUpscale/upscale.ts
const upscaleImg = async (image) => {
	const model = await getModel();
	const result = _tensorflow_tfjs.default.tidy(() => model.predict(img2tensor(image)));
	const resultImage = await tensor2img(result);
	_tensorflow_tfjs.default.dispose(result);
	return resultImage;
};
const img2tensor = (image) => {
	const imgdata = new ImageData(image.width, image.height);
	imgdata.data.set(image.data);
	return _tensorflow_tfjs.default.browser.fromPixels(imgdata).div(255).toFloat().expandDims();
};
const tensor2img = async (tensor) => {
	const [, height, width] = tensor.shape;
	const clipped = _tensorflow_tfjs.default.tidy(() => tensor.reshape([
		height,
		width,
		3
	]).mul(255).cast("int32").clipByValue(0, 255));
	tensor.dispose();
	const data = await _tensorflow_tfjs.default.browser.toPixels(clipped);
	clipped.dispose();
	return new Img(width, height, data);
};
//#endregion
//#region src/worker/ImageUpscale/index.ts
const factor = 2;
const input_size = 128;
const min_lap = 12;
const upscale = async (data, width, height) => {
	const input = new Img(width, height, new Uint8Array(data));
	input.padToTileSize(input_size);
	const output = new Img(width * factor, height * factor);
	let num_x = 1;
	for (; (input_size * num_x - width) / (num_x - 1) < min_lap; num_x++);
	let num_y = 1;
	for (; (input_size * num_y - height) / (num_y - 1) < min_lap; num_y++);
	const locs_x = Array.from({ length: num_x }, () => 0);
	const locs_y = Array.from({ length: num_y }, () => 0);
	const pad_left = Array.from({ length: num_x }, () => 0);
	const pad_top = Array.from({ length: num_y }, () => 0);
	const pad_right = Array.from({ length: num_x }, () => 0);
	const pad_bottom = Array.from({ length: num_y }, () => 0);
	const total_lap_x = input_size * num_x - width;
	const total_lap_y = input_size * num_y - height;
	const base_lap_x = Math.floor(total_lap_x / (num_x - 1));
	const base_lap_y = Math.floor(total_lap_y / (num_y - 1));
	const extra_lap_x = total_lap_x - base_lap_x * (num_x - 1);
	const extra_lap_y = total_lap_y - base_lap_y * (num_y - 1);
	locs_x[0] = 0;
	for (let i = 1; i < num_x; i++) locs_x[i] = locs_x[i - 1] + input_size - base_lap_x - (i <= extra_lap_x ? 1 : 0);
	locs_y[0] = 0;
	for (let i = 1; i < num_y; i++) locs_y[i] = locs_y[i - 1] + input_size - base_lap_y - (i <= extra_lap_y ? 1 : 0);
	pad_left[0] = 0;
	pad_top[0] = 0;
	pad_right[num_x - 1] = 0;
	pad_bottom[num_y - 1] = 0;
	for (let i = 1; i < num_x; i++) pad_left[i] = Math.floor((locs_x[i - 1] + input_size - locs_x[i]) / 2);
	for (let i = 1; i < num_y; i++) pad_top[i] = Math.floor((locs_y[i - 1] + input_size - locs_y[i]) / 2);
	for (let i = 0; i < num_x - 1; i++) pad_right[i] = locs_x[i] + input_size - locs_x[i + 1] - pad_left[i + 1];
	for (let i = 0; i < num_y - 1; i++) pad_bottom[i] = locs_y[i] + input_size - locs_y[i + 1] - pad_top[i + 1];
	for (let i = 0; i < num_x; i++) for (let j = 0; j < num_y; j++) {
		const x1 = locs_x[i];
		const y1 = locs_y[j];
		const x2 = locs_x[i] + input_size;
		const y2 = locs_y[j] + input_size;
		const tile = new Img(input_size, input_size);
		tile.getImageCrop(0, 0, input, x1, y1, x2, y2);
		const scaled = await upscaleImg(tile);
		output.getImageCrop((x1 + pad_left[i]) * factor, (y1 + pad_top[j]) * factor, scaled, pad_left[i] * factor, pad_top[j] * factor, scaled.width - pad_right[i] * factor, scaled.height - pad_bottom[j] * factor);
	}
	return output;
};
const upscaleImage = async (data, width, height, url) => {
	const startTime = Date.now();
	const output = await upscale(data, width, height);
	const canvas = new OffscreenCanvas(output.width, output.height);
	const ctx = canvas.getContext("2d");
	const imgData = ctx.createImageData(output.width, output.height);
	for (let i = 0; i < imgData.data.length; i++) imgData.data[i] = output.data[i];
	ctx.putImageData(imgData, 0, 0);
	const blob = await canvas.convertToBlob({ type: "image/png" });
	mainFn.setImg(url, "upscaleUrl", URL.createObjectURL(blob));
	mainFn.log?.(\`\${url}\\n\${width}x\${height}\\n鑰楁椂 \${Date.now() - startTime}ms 鏀惧ぇ瀹屾垚\`);
};
//#endregion
exports.setMainFn = setMainFn;
exports.upscaleImage = upscaleImage;
`,
	"userscript/otherSite": `\nlet solid_js_web = require("solid-js/web");
let core = require("core");
let helper = require("helper");
//#region src/userscript/otherSite/chapterSwitch.ts
const prevRe = /^涓婁竴?(?:[绔犺┍璇漖|绔犺妭)$|^(?:prev|previous)(?:\\s+chapter)?$|^鍓嶃伄绔?/i;
const nextRe = /^涓嬩竴?(?:[绔犺┍璇漖|绔犺妭)$|^next(?:\\s+chapter)?$|^娆°伄绔?/i;
const getChapterSwitch = () => {
	let onPrev;
	let onNext;
	const checkElement = (e) => {
		const texts = [e.textContent, e.ariaLabel].filter(Boolean).map((text) => text.replaceAll(/[<>()銆娿€嬶紙锛夈€屻€嶃€庛€廬/g, "").trim());
		if (texts.length === 0) return;
		for (const text of texts) {
			if (!onPrev && prevRe.test(text)) {
				onPrev = () => e.click();
				break;
			}
			if (!onNext && nextRe.test(text)) {
				onNext = () => e.click();
				break;
			}
		}
	};
	for (const e of helper.querySelectorAll("a, button")) {
		checkElement(e);
		if (onPrev && onNext) break;
		for (const element of e.querySelectorAll("div, span, p")) {
			checkElement(element);
			if (onPrev && onNext) break;
		}
	}
	return {
		onPrev,
		onNext
	};
};
//#endregion
//#region src/userscript/otherSite/eleSelector.ts
const getTagText = (ele) => {
	let text = ele.nodeName;
	if (ele.id && !/\\d/.test(ele.id)) text += \`#\${ele.id}\`;
	return text;
};
/** 鑾峰彇鍏冪礌浠呰褰曚簡灞傜骇缁撴瀯鍏崇郴鐨勯€夋嫨鍣?*/
const getEleSelector = (ele) => {
	const parents = [ele.nodeName];
	const root = ele.getRootNode();
	let e = ele;
	while (e.parentNode && e.parentNode !== root) {
		e = e.parentNode;
		parents.push(getTagText(e));
	}
	return parents.toReversed().join(">");
};
/** 鍒ゆ柇鎸囧畾鍏冪礌鏄惁绗﹀悎閫夋嫨鍣?*/
const isEleSelector = (ele, selector) => {
	const parents = selector.split(">").toReversed();
	let e = ele;
	for (let i = 0; e && i < parents.length; i++) {
		if (getTagText(e) !== parents[i]) return false;
		e = e.parentNode;
	}
	return e === e.getRootNode();
};
//#endregion
//#region src/userscript/otherSite/ImageWatcher.ts
/** 鐩戝惉缃戦〉涓婄殑鎵€鏈夊浘鐗囧厓绱犵殑鍙樺寲锛岀瓫閫夊嚭绗﹀悎鏉′欢鐨勫浘鐗?*/
var ImageWatcher = class {
	options;
	ro;
	mo;
	qualifiedMap = /* @__PURE__ */ new Map();
	targetAttributes = [
		"src",
		"srcset",
		"data-src",
		"data-original",
		"data-srcset"
	];
	constructor(options) {
		this.options = options;
		this.ro = new ResizeObserver(this.handleResize);
		this.mo = new MutationObserver(this.handleMutation);
	}
	start() {
		for (const e of document.querySelectorAll("img")) this.observeImage(e);
		this.mo.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: this.targetAttributes
		});
	}
	/** 鍋滄鐩戝惉骞舵竻鐞嗚祫婧?*/
	stop() {
		this.mo.disconnect();
		this.ro.disconnect();
		this.qualifiedMap.clear();
	}
	/** 浣跨敤 ResizeObserver 鐩戞祴鍥剧墖灏哄鍙樺寲 */
	observeImage = (img) => this.ro.observe(img);
	/** 澶勭悊 ResizeObserver 鐨勫洖璋冿紝鍙湁鍦ㄥ浘鐗囧昂瀵稿彂鐢熷疄闄呭彉鍖栵紙鎴栧垵濮嬪寲锛夋椂鎵嶄細瑙﹀彂 */
	handleResize = (entries) => {
		let changed = false;
		for (const entry of entries) {
			const img = entry.target;
			const imageInfo = {
				display: {
					width: entry.contentRect.width,
					height: entry.contentRect.height
				},
				natural: {
					width: img.naturalWidth,
					height: img.naturalHeight
				}
			};
			if (this.qualifiedMap.has(img) || !this.options.filter(imageInfo, img)) continue;
			this.qualifiedMap.set(img, imageInfo);
			changed = true;
			this.ro.unobserve(img);
		}
		if (changed) this.options.onChanged(this.qualifiedMap);
	};
	/**
	* 閬嶅巻鑺傜偣鍙婂叾瀛愭爲涓殑鎵€鏈夊浘鐗囧厓绱?	*/
	forEachImage(nodes, callback) {
		for (const node of nodes) if (helper.isImageElement(node)) callback(node);
		else if (helper.isHTMLElement(node)) for (const img of node.querySelectorAll("img")) callback(img);
	}
	/**
	* 澶勭悊 MutationObserver 鐨勫洖璋?	* 璐熻矗鍙戠幇鏂板厓绱犲拰灞炴€у彉鍖?	*/
	handleMutation = (mutations) => {
		let changed = false;
		const deleteImg = (img) => {
			if (!this.qualifiedMap.has(img)) return;
			this.qualifiedMap.delete(img);
			changed = true;
		};
		for (const mutation of mutations) switch (mutation.type) {
			case "childList":
				this.forEachImage(mutation.addedNodes, this.observeImage);
				this.forEachImage(mutation.removedNodes, deleteImg);
				break;
			case "attributes": {
				const node = mutation.target;
				if (helper.isImageElement(node)) {
					deleteImg(node);
					this.observeImage(node);
				}
				break;
			}
		}
		if (changed) this.options.onChanged(this.qualifiedMap);
	};
};
//#endregion
//#region src/userscript/otherSite/triggerLazyLoad.ts
const createImgData = (oldSrc = "") => ({
	triggedNum: 0,
	observerTimeout: 0,
	oldSrc
});
/** 鐢ㄤ簬鍒ゆ柇鏄惁鏄浘鐗?url 鐨勬鍒?*/
const isImgUrlRe = /^(?:(?:(?:https?|ftp|file):)?\\/)?\\/[-\\w+&@#/%?=~|!:,.;]+[-\\w+&@#%=~|]$/;
/** 鎵惧嚭鏍煎紡涓哄浘鐗?url 鐨勫厓绱犲睘鎬?*/
const getDatasetUrl = (e) => {
	for (const key of e.getAttributeNames()) {
		switch (key) {
			case "src":
			case "alt":
			case "class":
			case "style":
			case "id":
			case "title":
			case "onload":
			case "onerror": continue;
		}
		const val = e.getAttribute(key).trim();
		if (!isImgUrlRe.test(val)) continue;
		return val;
	}
};
/**
*
* 閫氳繃婊氬姩鍒版寚瀹氬浘鐗囧厓绱犱綅缃苟鍋滅暀涓€浼氭潵瑙﹀彂鍥剧墖鐨勬噿鍔犺浇锛岃繑鍥炲浘鐗?src 鏄惁鍙戠敓鍙樺寲
*
* 浼氬湪瑙﹀彂鍚庨噸鏂版粴鍥炲師浣嶏紝褰?time 涓?0 鏃讹紝鍥犱负婊氬姩閫熷害寰堝揩鎵€浠ユ槸鏃犳劅鐨?*/
const triggerEleLazyLoad = async ({ e, waitTime, isLazyLoaded, runCondition }) => {
	const nowScroll = window.scrollY;
	e.scrollIntoView({ behavior: "instant" });
	e.dispatchEvent(new Event("scroll", { bubbles: true }));
	try {
		if (isLazyLoaded && waitTime) return await helper.wait(isLazyLoaded, waitTime);
	} finally {
		if (runCondition()) window.scroll({
			top: nowScroll,
			behavior: "instant"
		});
	}
};
/** 鍒ゆ柇涓€涓厓绱犳槸鍚﹀凡缁忔垚鍔熻Е鍙戝畬鎳掑姞杞?*/
const isLazyLoaded = (e, oldSrc) => {
	if (helper.isImageElement(e)) {
		if (!e.src) return false;
		if (!e.offsetParent) return false;
		if (e.src.startsWith("data:image/svg")) return false;
		if (e.naturalWidth > 500 || e.naturalHeight > 500) return true;
		if (oldSrc !== void 0 && e.src !== oldSrc) return true;
	} else {
		const imgDomList = e.querySelectorAll("img");
		for (const imgDom of imgDomList) if (isLazyLoaded(imgDom, oldSrc)) return true;
	}
	return false;
};
const imgMap = /* @__PURE__ */ new WeakMap();
const getImg = (e) => imgMap.get(e) ?? createImgData();
const MAX_TRIGGED_NUM = 5;
/** 鍒ゆ柇鍥剧墖鍏冪礌鏄惁闇€瑕佽Е鍙戞噿鍔犺浇 */
const needTrigged = (e) => !isLazyLoaded(e, imgMap.get(e)?.oldSrc) && (imgMap.get(e)?.triggedNum ?? 0) < MAX_TRIGGED_NUM;
/** 鍥剧墖鎳掑姞杞借Е鍙戝畬鍚庤皟鐢?*/
const handleTrigged = (e) => {
	const img = getImg(e);
	img.observerTimeout = 0;
	img.triggedNum += 1;
	if (isLazyLoaded(e, img.oldSrc) && img.triggedNum < MAX_TRIGGED_NUM) img.triggedNum = MAX_TRIGGED_NUM;
	imgMap.set(e, img);
	if (!needTrigged(e)) imgShowObserver.unobserve(e);
};
/** 鐩戣鍥剧墖鏄惁琚樉绀虹殑 Observer */
const imgShowObserver = new IntersectionObserver((entries) => {
	for (const img of entries) {
		const e = img.target;
		if (img.isIntersecting) imgMap.set(e, {
			...getImg(e),
			observerTimeout: window.setTimeout(handleTrigged, 290, e)
		});
		else window.clearTimeout(imgMap.get(e)?.observerTimeout);
	}
});
const turnPageScheduled = helper.createScheduled((fn) => helper.throttle(fn, 1e3));
/** 瑙﹀彂缈婚〉 */
const triggerTurnPage = async (waitTime, runCondition) => {
	if (!turnPageScheduled()) return;
	const nowScroll = window.scrollY;
	window.scroll({
		top: document.body.scrollHeight,
		behavior: "instant"
	});
	document.body.dispatchEvent(new Event("scroll", { bubbles: true }));
	if (waitTime) await helper.sleep(waitTime);
	if (runCondition()) window.scroll({
		top: nowScroll,
		behavior: "instant"
	});
};
const waitTime = 300;
/** 瑙﹀彂椤甸潰涓婂浘鐗囧厓绱犵殑鎳掑姞杞?*/
const triggerLazyLoad = helper.singleThreaded(async (_, targetImgList, runCondition) => {
	for (const e of targetImgList) {
		imgShowObserver.observe(e);
		if (!imgMap.has(e)) imgMap.set(e, createImgData(helper.isImageElement(e) ? e.src : ""));
	}
	for (const e of targetImgList) {
		await helper.wait(runCondition);
		await triggerTurnPage(0, runCondition);
		if (!needTrigged(e)) continue;
		const datasetUrl = getDatasetUrl(e);
		if (datasetUrl) e.setAttribute("src", datasetUrl);
		if (await triggerEleLazyLoad({
			e,
			waitTime,
			isLazyLoaded: () => isLazyLoaded(e, imgMap.get(e)?.oldSrc),
			runCondition
		})) handleTrigged(e);
	}
	await triggerTurnPage(waitTime, runCondition);
});
//#endregion
//#region src/userscript/otherSite/index.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<div><button>\`);
/** 鎵ц鑴氭湰鎿嶄綔銆傚鏋滀腑閫斾腑鏂紝灏嗚繑鍥?true */
const otherSite = async () => {
	let laseScroll = window.scrollY;
	const { store, setState, options, setOptions } = await core.useInit(location.hostname, {
		remember_current_site: true,
		selector: ""
	});
	helper.createEffectOn(() => options.remember_current_site, async (remember) => {
		if (remember) return;
		await GM.deleteValue(location.hostname);
		location.reload();
	});
	if (!store.flag.isStored) core.toast(() => (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild;
		solid_js_web.insert(_el$, () => helper.t("site.simple.auto_read_mode_message"), _el$2);
		solid_js_web.addEventListener(_el$2, "click", () => setOptions({ autoShow: false }));
		solid_js_web.insert(_el$2, () => helper.t("other.disable"));
		return _el$;
	})(), { duration: 1e3 * 7 });
	const menuId = await GM.registerMenuCommand(helper.t("site.simple.simple_read_mode"), () => setOptions({ selector: "" }));
	await helper.wait(() => !options.selector || helper.querySelectorAll(options.selector).length >= 2);
	await GM.unregisterMenuCommand(menuId);
	/** 璁板綍浼犲叆鐨勫浘鐗囧厓绱犱腑鏈€甯歌鐨勯偅涓?selector */
	const saveImgEleSelector = (imgEleList) => {
		if (imgEleList.length < 7) return;
		const selector = helper.getMostItem(imgEleList.map(getEleSelector));
		if (selector !== options.selector) setOptions({ selector });
	};
	const blobUrlMap = /* @__PURE__ */ new Map();
	const handleBlobImg = async (e) => {
		if (blobUrlMap.has(e.src)) return blobUrlMap.get(e.src);
		if (!e.src.startsWith("blob:")) return e.src;
		if (await helper.testImgUrl(e.src)) return e.src;
		const canvas = new OffscreenCanvas(e.naturalWidth, e.naturalHeight);
		canvas.getContext("2d").drawImage(e, 0, 0);
		const url = URL.createObjectURL(await helper.canvasToBlob(canvas));
		blobUrlMap.set(e.src, url);
		return url;
	};
	const handleImgUrl = async (e) => {
		const url = await handleBlobImg(e);
		if (url.startsWith("http:") && location.protocol === "https:") return url.replace("http:", "https:");
		return url;
	};
	/** 閲嶅鐨勫姞杞藉崰浣嶅浘 */
	const placeholderImgList = /* @__PURE__ */ new Set();
	helper.createEffectOn(() => store.manga.imgList.filter((url) => url && !placeholderImgList.has(url)), helper.throttle((imgList) => {
		if (!imgList?.length || imgList.length - new Set(imgList).size <= 4) return;
		const repeatNumMap = /* @__PURE__ */ new Map();
		for (const url of imgList) {
			const repeatNum = (repeatNumMap.get(url) ?? 0) + 1;
			repeatNumMap.set(url, repeatNum);
			if (repeatNum > 5) placeholderImgList.add(url);
		}
	}));
	const imgBlackList = ["#pagetual-preload", "noscript"];
	const getAllImg = () => helper.querySelectorAll(\`:not(\${imgBlackList.join(",")}) > img\`);
	/** 鑾峰彇澶ф鐜囨槸婕敾鍥剧墖鐨勫浘鐗囧厓绱?*/
	const getExpectImgList = () => helper.querySelectorAll(options.selector).filter((e) => isLazyLoaded(e, imgMap.get(e)?.oldSrc) || !imgMap.has(e) || imgMap.get(e).triggedNum <= 5);
	let imgEleList = [];
	let timeout = 0;
	/** 鍙湪\`寮€鍚簡闃呰妯″紡\`鍜孿`褰撳墠鍙樉绀哄浘鐗囨暟閲忎笉瓒砛`鏃堕€氳繃婊氬姩瑙﹀彂鎳掑姞杞?*/
	const runCondition = () => store.manga.show || !timeout && store.manga.imgList.length === 0;
	/** 瑙﹀彂澶ф鐜囨槸婕敾鍥剧墖鐨勬噿鍔犺浇 */
	const triggerExpectImg = (num, time) => helper.wait(async () => {
		let expectImgList = getExpectImgList().filter(needTrigged);
		if (num) expectImgList = expectImgList.slice(0, num);
		await triggerLazyLoad(expectImgList, runCondition);
		return expectImgList.every((e) => !needTrigged(e));
	}, time);
	/** 鎸夌収鍏冪礌鐨勬樉绀洪珮搴︽潵鎺掑簭鍏冪礌 */
	const sortElementsByTop = (elements) => {
		const topMap = /* @__PURE__ */ new WeakMap();
		for (const e of elements) topMap.set(e, e.getBoundingClientRect().top);
		return elements.toSorted((a, b) => topMap.get(a) - topMap.get(b));
	};
	const imageWatcher = new ImageWatcher({
		filter: (info, img) => {
			if (info.display.height <= 100 || info.display.width <= 100) return false;
			if (img.closest(imgBlackList.join(","))) return false;
			if (isEleSelector(img, options.selector)) return true;
			return info.natural.height > 500 && info.natural.width > 500;
		},
		onChanged: helper.throttle(async (map) => {
			imgEleList = sortElementsByTop([...map.keys()]);
			if (imgEleList.length === 0) return setState((state) => {
				state.fab.show = false;
				state.manga.show = false;
			});
			if (store.manga.imgList.length < imgEleList.length) setState("comicMap", "", "imgList", [...store.manga.imgList, ...Array.from({ length: imgEleList.length - store.manga.imgList.length }, () => "")]);
			else if (store.manga.imgList.length > imgEleList.length) setState("comicMap", "", "imgList", store.manga.imgList.sliceimgEleList.length);
			let isEdited = false;
			await helper.plimit(imgEleList.map((e, i) => async () => {
				let newUrl = await handleImgUrl(e);
				if (placeholderImgList.has(newUrl)) newUrl = getDatasetUrl(e) ?? "";
				if (newUrl === store.manga.imgList[i]) return;
				isEdited ||= true;
				setState("comicMap", "", "imgList", (list) => list.with(i, newUrl));
			}));
			if (isEdited) saveImgEleSelector(imgEleList);
			triggerAllLazyLoad();
			setState("manga", getChapterSwitch());
		}, 500)
	});
	/** 妫€鏌ュ厔寮熷厓绱犱腑鏄惁鏈夎冻澶熷鐨勫厓绱犱笌 parent 鍏锋湁鐩稿悓鐨?dataset */
	const hasEnoughSimilarSiblings = (parent, children, threshold) => {
		let sameNum = 0;
		for (const siblingDom of children) {
			if (siblingDom === parent) continue;
			if (!("dataset" in siblingDom)) continue;
			if (!helper.isEqual(siblingDom.dataset, parent.dataset)) continue;
			sameNum++;
			if (sameNum >= threshold) return true;
		}
		return false;
	};
	const triggerAllLazyLoad = async () => {
		if (options.selector) {
			await triggerExpectImg(3, 1e3 * 5);
			await triggerExpectImg();
		}
		await triggerLazyLoad(getAllImg().filter(needTrigged), runCondition);
		if (imgEleList.length > 3) {
			let parent = imgEleList[0];
			while (parent?.parentElement) {
				const siblingList = parent.parentElement.children;
				if (siblingList.length >= 5 && hasEnoughSimilarSiblings(parent, siblingList, 5)) {
					await triggerLazyLoad(helper.querySelectorAll(getEleSelector(parent)), runCondition);
					break;
				}
				parent = parent.parentElement;
			}
		}
	};
	setState("comicMap", "", { async getImgList() {
		if (imgEleList.length === 0) {
			imageWatcher.start();
			triggerAllLazyLoad();
			timeout = window.setTimeout(() => {
				if (store.manga.imgList.length > 0) return;
				core.toast.warn(helper.t("site.simple.no_img"), {
					id: "no_img",
					duration: Number.POSITIVE_INFINITY,
					onClick() {
						setOptions({ remember_current_site: false });
						location.reload();
					}
				});
			}, 3e3);
		}
		await helper.wait(() => store.manga.imgList.length);
		core.toast.dismiss("no_img");
		return store.manga.imgList;
	} });
	setState("manga", "onShowImgsChange", helper.throttle((showImgs) => {
		if (!store.manga.show) return;
		imgEleList[[...showImgs].at(-1)]?.scrollIntoView({
			behavior: "instant",
			block: "end"
		});
	}, 1e3));
	helper.createEffectOn(() => store.manga.show, (show) => {
		if (show) laseScroll = window.scrollY;
		else window.scroll({
			top: laseScroll,
			behavior: "instant"
		});
	});
	helper.onUrlChange((lastUrl, nowUrl) => {
		if (!lastUrl || lastUrl.split("/").length === nowUrl.split("/").length) return;
		setState("comicMap", "", "imgList", void 0);
	});
};
//#endregion
exports.otherSite = otherSite;
`,
	"userscript/ehTagRules": `\n//#region src/userscript/ehTagRules/index.ts
const rules = {
	"prerequisite": {
		"(x|f):incest": [
			"f:cousin",
			"f:aunt",
			"f:daughter",
			"f:mother",
			"f:granddaughter",
			"f:sister",
			"f:grandmother",
			"f:niece"
		],
		"(x|m):incest": ["m:cousin"],
		"f:incest": ["f:inseki", "f:low_incest"],
		"m:incest": ["m:inseki", "m:low_incest"],
		"x:incest": ["x:inseki", "x:low_incest"],
		"f:group": [
			"f:fff_threesome",
			"f:ttt_threesome",
			"f:fft_threesome",
			"f:ttf_threesome"
		],
		"m:group": ["m:mmm_threesome"],
		"x:group": [
			"x:mmf_threesome",
			"x:mmt_threesome",
			"x:ttm_threesome",
			"x:ffm_threesome",
			"x:mtf_threesome",
			"x:oyakodon",
			"x:shimaidon",
			"x:gang_rape"
		],
		"(x|f):group": [
			"f:oyakodon",
			"f:shimaidon",
			"f:multiple_straddling",
			"f:gang_rape",
			"f:layer_cake",
			"f:harem"
		],
		"(x|m):group": [
			"m:oyakodon",
			"m:shimaidon",
			"m:multiple_straddling",
			"m:gang_rape",
			"m:layer_cake",
			"m:harem"
		],
		"f:yuri": ["f:fff_threesome"],
		"m:yaoi": ["m:group", "m:mmm_threesome"],
		"f:futanari": [
			"f:ttt_threesome",
			"f:fft_threesome",
			"f:ttf_threesome",
			"f:full-packaged_futanari",
			"f:futanarization"
		],
		"f:shemale": ["f:ball-less_shemale"],
		"f:lolicon": [
			"f:kodomo_doushi",
			"x:kodomo_doushi",
			"f:oppai_loli",
			"f:mesugaki",
			"f:low_lolicon"
		],
		"m:shotacon": ["m:kodomo_doushi", "x:kodomo_doushi"],
		"f:blowjob": [
			"f:multimouth_blowjob",
			"f:blowjob_face",
			"f:deepthroat",
			"f:focus_blowjob"
		],
		"m:blowjob": [
			"m:multimouth_blowjob",
			"m:blowjob_face",
			"m:deepthroat",
			"m:focus_blowjob"
		],
		"f:handjob": ["f:multiple_handjob"],
		"m:handjob": ["m:multiple_handjob"],
		"f:assjob": ["f:multiple_assjob"],
		"m:assjob": ["m:multiple_assjob"],
		"f:footjob": ["f:multiple_footjob"],
		"m:footjob": ["m:multiple_footjob"],
		"f:paizuri": ["f:focus_paizuri"],
		"m:paizuri": ["m:focus_paizuri"],
		"f:rimjob": ["f:focus_rimjob"],
		"m:rimjob": ["m:focus_rimjob"],
		"f:cunnilingus": ["f:focus_cunnilingus"],
		"f:anal": [
			"f:focus_anal",
			"f:anal_intercourse",
			"f:tail_plug",
			"f:butt_plug"
		],
		"m:anal": [
			"m:focus_anal",
			"m:anal_intercourse",
			"m:tail_plug",
			"m:butt_plug"
		],
		"f:rape": ["f:gang_rape"],
		"m:rape": ["m:gang_rape"],
		"(f|m):corpse": ["f:necrophilia", "m:necrophilia"],
		"(f|m):masturbation": ["f:phone_sex", "m:phone_sex"],
		"f:bondage": [
			"f:fanny_packing",
			"f:shibari",
			"f:straitjacket"
		],
		"m:bondage": [
			"m:fanny_packing",
			"m:shibari",
			"m:straitjacket"
		],
		"f:inflation": ["f:cumflation"],
		"m:inflation": ["m:cumflation"],
		"f:lactation": ["f:milking"],
		"m:lactation": ["m:milking"],
		"f:piercing": ["f:nipple_piercing", "f:genital_piercing"],
		"m:piercing": ["m:nipple_piercing", "m:genital_piercing"],
		"f:big_breasts": ["f:huge_breasts", "f:gigantic_breasts"],
		"f:huge_breasts": ["f:gigantic_breasts"],
		"f:sex_toys": [
			"f:tail_plug",
			"f:butt_plug",
			"f:unusual_insertions"
		],
		"m:sex_toys": [
			"m:tail_plug",
			"m:butt_plug",
			"m:unusual_insertions"
		],
		"f:swimsuit": ["f:bikini"],
		"m:swimsuit": ["m:bikini"],
		"f:crossdressing": ["f:schoolboy_uniform"],
		"f:bandages": ["f:sarashi"],
		"f:monster_girl": ["f:zombie", "f:skeleton"],
		"f:tail": ["f:multiple_tails"],
		"(f|m):robot": ["f:dismantling", "m:dismantling"]
	},
	"conflict": {
		"f:females_only": [
			"f:futanari",
			"f:bisexual",
			"f:ttt_threesome",
			"f:fft_threesome",
			"f:ttf_threesome",
			"x:mmf_threesome",
			"x:mmt_threesome",
			"x:ttm_threesome",
			"x:mtf_threesome",
			"x:group",
			"m:*",
			"x:*"
		],
		"f:sole_female": [
			"f:ttt_threesome",
			"f:fft_threesome",
			"x:mmt_threesome",
			"x:ttm_threesome",
			"m:mmm_threesome"
		],
		"f:sole_dickgirl": [
			"f:fff_threesome",
			"f:ttt_threesome",
			"f:ttf_threesome",
			"x:mmf_threesome",
			"x:ttm_threesome",
			"m:mmm_threesome"
		]
	},
	"possibleConflict": {
		"f:dark_skin": ["f:tanlines"],
		"m:dark_skin": ["m:tanlines"],
		"f:lolicon": ["f:small_breasts"],
		"f:breast_feeding": ["f:nipple_stimulation"]
	},
	"combo": {
		"f:kemonomimi": [
			"f:horse_girl",
			"f:dog_girl",
			"f:mouse_girl",
			"f:bunny_girl",
			"f:catgirl",
			"f:cowgirl",
			"c:amiya",
			"c:rosmontis",
			"c:suzuran",
			"c:shamare",
			"c:schwarz"
		],
		"f:tail": [
			"f:horse_girl",
			"c:suzuran",
			"c:schwarz",
			"c:yuko_yoshida"
		],
		"f:leotard": ["f:bunny_girl"],
		"f:horns": ["f:oni", "c:yuko_yoshida"],
		"f:horse_girl": ["p:uma_musume_pretty_derby"],
		"f:halo": [
			"p:blue_archive",
			"c:nagisa_kirifuji",
			"c:mika_misono"
		],
		"f:zombie": ["p:zombie_land_saga"],
		"f:hair_buns": [
			"c:ayumu_uehara",
			"c:yoshiko_tsushima",
			"c:chisato_arashi",
			"c:ceylon"
		],
		"f:twintails": [
			"c:yu_takasaki",
			"c:rurino_osawa",
			"c:sayaka_murano",
			"c:nico_yazawa",
			"c:nozomi_tojo",
			"c:ruby_kurosawa",
			"c:ria_kazuno",
			"c:arisa_ichigaya",
			"c:himari_uehara",
			"c:ako_udagawa",
			"c:reona_nyubara",
			"c:tsukushi_futaba",
			"c:kotone_fujita"
		],
		"f:ponytail": [
			"c:hime_anyoji",
			"c:eli_ayase",
			"c:honoka_kosaka",
			"c:kanan_matsuura",
			"c:seira_kazuno",
			"c:ren_hazuki",
			"c:saaya_yamabuki",
			"c:nijika_ijichi",
			"c:schwarz",
			"c:mafuyu_asahina"
		],
		"f:very_long_hair": [
			"c:hitori_gotou",
			"c:nijika_ijichi",
			"c:euphyllia_magenta",
			"c:nagisa_kirifuji",
			"c:mika_misono",
			"c:kanade_yoisaki"
		],
		"f:lolicon": ["c:suzuran", "c:shamare"],
		"f:multiple_tails": ["c:suzuran"],
		"f:wings": [
			"c:remilia_scarlet",
			"c:flandre_scarlet",
			"c:koakuma",
			"c:nagisa_kirifuji",
			"c:mika_misono"
		],
		"f:vampire": ["c:remilia_scarlet", "c:flandre_scarlet"],
		"f:demon_girl": ["c:koakuma", "c:yuko_yoshida"],
		"f:thick_eyebrows": ["c:suletta_mercury"],
		"f:glasses": ["c:junna_hoshimi"],
		"f:beauty_mark": ["c:misuzu_hataya"],
		"m:crossdressing": ["c:mizuki_akiyama"],
		"f:angel": ["c:nagisa_kirifuji", "c:mika_misono"]
	}
};
const getTagLintRules = () => {
	const shortNamespace = new Map([
		["p", "parody"],
		["c", "character"],
		["g", "group"],
		["a", "artist"],
		["m", "male"],
		["f", "female"],
		["x", "mixed"],
		["o", "other"]
	].map(([short, full]) => [new RegExp(\`\\\\b\${short}\\\\b(?=.*:)\`), full]));
	const getTagName = (tag) => {
		let fullTag = tag;
		for (const re of shortNamespace.keys()) if (re.test(fullTag)) fullTag = fullTag.replace(re, shortNamespace.get(re));
		return fullTag;
	};
	const createRuleMap = (map, reverse = false) => {
		const ruleMap = /* @__PURE__ */ new Map();
		if (reverse) for (let [targetTag, tags] of Object.entries(map)) {
			targetTag = getTagName(targetTag);
			for (let tag of tags) {
				tag = getTagName(tag);
				if (ruleMap.has(tag)) ruleMap.get(tag).add(targetTag);
				else ruleMap.set(tag, new Set([targetTag]));
			}
		}
		else for (const [tag, targetTag] of Object.entries(map)) ruleMap.set(getTagName(tag), new Set(targetTag.map(getTagName)));
		return ruleMap;
	};
	return {
		prerequisite: createRuleMap(rules.prerequisite, true),
		conflict: createRuleMap(rules.conflict),
		possibleConflict: createRuleMap(rules.possibleConflict),
		combo: createRuleMap(rules.combo, true)
	};
};
/** 鎷嗗垎澶氫釜鍛藉悕绌洪棿鐨勬爣绛?*/
const splitTagNamespace = (tag) => {
	if (!tag.startsWith("(")) return [tag];
	const [, namespaces, tagName] = /\\((.+?)\\)(.+)/.exec(tag);
	return namespaces.split("|").map((namespace) => \`\${namespace}\${tagName}\`);
};
/** 鍒ゆ柇鏄惁缂哄皯鎸囧畾鍛藉悕绌洪棿涓嬬殑鏍囩 */
const isMissingNamespace = (tagList, ...namespaces) => {
	for (const namespace of namespaces) for (const tag of tagList) if (tag.startsWith(namespace)) return false;
	return true;
};
/** 妫€鏌ユ爣绛炬槸鍚﹀瓨鍦?*/
const hasTag = (tagList, tagName) => {
	if (tagName.startsWith("(")) {
		for (const tag of splitTagNamespace(tagName)) if (tagList.has(tag)) return true;
	}
	if (tagName.endsWith(":*")) return !isMissingNamespace(tagList, tagName.split(":*")[0]);
	return tagList.has(tagName);
};
/** 鍒ゆ柇鏄惁缂哄皯鎸囧畾鏍囩 */
const isMissingTags = (tagList, ...tags) => {
	for (const tag of tags) if (tagList.has(tag)) return false;
	return true;
};
//#endregion
exports.getTagLintRules = getTagLintRules;
exports.hasTag = hasTag;
exports.isMissingNamespace = isMissingNamespace;
exports.isMissingTags = isMissingTags;
exports.splitTagNamespace = splitTagNamespace;
`,
	"site/copymanga": `\nlet solid_js_web = require("solid-js/web");
let core = require("core");
let helper = require("helper");
let solid_js = require("solid-js");
let userscript_copyApi = require("userscript/copyApi");
//#region src/site/copymanga.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<span>\`), _tmpl$2 = /* @__PURE__ */ solid_js_web.template(\`<div class=table-default><div class=table-default-title><ul class="nav nav-tabs"role=tablist></ul><div class=table-default-right><span>鏇存柊鍏у锛?/span><a target=_blank></a><span>鏇存柊鏅傞枔锛?/span><span></span></div></div><div class=table-default-box><div class=tab-content>\`), _tmpl$3 = /* @__PURE__ */ solid_js_web.template(\`<div class="detailsTextContentTabs van-tabs van-tabs--line">\`), _tmpl$4 = /* @__PURE__ */ solid_js_web.template(\`<div class=van-tabs__wrap><div role=tablist class="van-tabs__nav van-tabs__nav--line"style=background:transparent><div role=tab class="van-tab van-tab--active"><span class="van-tab__text van-tab__text--ellipsis"><span></span></span></div><div class=van-tabs__line style="width:0.24rem;transform:translateX(187.5px) translateX(-50%);transition-duration:0.3s">\`), _tmpl$5 = /* @__PURE__ */ solid_js_web.template(\`<div class=van-tab__pane><div class="chapterList van-grid"style=padding-left:0.24rem>\`), _tmpl$6 = /* @__PURE__ */ solid_js_web.template(\`<div class="chapterItem oneLines van-grid-item"style=flex-basis:25%;padding-right:0.24rem;margin-top:0.24rem><a class="van-grid-item__content van-grid-item__content--center"><span class=van-grid-item__text>\`), _tmpl$7 = /* @__PURE__ */ solid_js_web.template(\`<li class=nav-item><a class=nav-link data-toggle=tab role=tab aria-selected=false>\`), _tmpl$8 = /* @__PURE__ */ solid_js_web.template(\`<div role=tabpanel class="tab-pane fade"><ul>\`), _tmpl$9 = /* @__PURE__ */ solid_js_web.template(\`<a target=_blank style=display:block><li>\`), _tmpl$0 = /* @__PURE__ */ solid_js_web.template(\`<div class=card style="max-width:100em;margin:1em auto"><div class=card-body><h2 class=card-title></h2><ul>\`), _tmpl$1 = /* @__PURE__ */ solid_js_web.template(\`<a class="btn btn-outline-primary">\`);
const token = document.cookie.split("; ").find((cookie) => cookie.startsWith("token="))?.replace("token=", "");
const mobileApi = new class {
	headers = {
		webp: "1",
		region: "1",
		"User-Agent": "COPY/3.0.0",
		version: "2025.08.15",
		source: "copyApp",
		referer: "com.copymanga.app-3.0.0",
		Authorization: token ? \`Token \${token}\` : ""
	};
	get = (url, details, ...args) => core.request(url, {
		responseType: "json",
		headers: this.headers,
		...details
	}, ...args);
}();
const pcApi = new class {
	headers = {
		"User-Agent": navigator.userAgent,
		referer: location.href,
		Authorization: token ? \`Token \${token}\` : ""
	};
	get = (url, details, ...args) => core.request(\`https://api.2025copy.com\${url}\`, {
		responseType: "json",
		headers: this.headers,
		fetch: false,
		...details
	}, ...args);
}();
const handleLastChapter = (comicName) => {
	let a;
	const stylesheet = new CSSStyleSheet();
	document.adoptedStyleSheets.push(stylesheet);
	const updateLastChapter = async () => {
		if (!a) (async () => {
			a = document.createElement("a");
			const tableRight = await helper.wait(() => helper.querySelector(".table-default-right"));
			a.target = "_blank";
			tableRight.firstElementChild?.before(a);
			const span = document.createElement("span");
			span.textContent = "鏈€寰岄柋璁€锛?;
			tableRight.firstElementChild?.before(span);
		})();
		a.textContent = "鐛插彇涓?;
		a.removeAttribute("href");
		const data = (await pcApi.get(\`/api/v3/comic2/\${comicName}/query?platform=3\`)).response?.results?.browse;
		if (!data) {
			a.textContent = data === null ? "鐒? : "鏈繑鍥炴暩鎿?;
			return;
		}
		const lastChapterId = data.chapter_id;
		if (!lastChapterId) {
			a.textContent = "鎺ュ彛鐣板父";
			return;
		}
		await stylesheet.replace(\`ul a[href*="\${lastChapterId}"] {
        color: #fff !important;
        background: #1790E6;
      }\`);
		a.href = \`\${location.pathname}/chapter/\${lastChapterId}\`;
		a.textContent = data.chapter_name;
	};
	setTimeout(updateLastChapter);
	document.addEventListener("visibilitychange", updateLastChapter);
};
const buildChapters = async (comicName, hiddenType) => {
	const { response: { results } } = await mobileApi.get(\`/comicdetail/\${comicName}/chapters\`, { errorText: "鍔犺級婕暙鐩寗澶辨晽" });
	const data = await userscript_copyApi.decryptData(results);
	helper.log(data);
	const { build: { type }, groups } = data;
	const Group = (props) => {
		const chapters = Object.fromEntries(type.map(({ id }) => [id, []]));
		for (const chapter of props.chapters) chapters[chapter.type].push(chapter);
		return solid_js_web.createComponent(solid_js.Switch, { get children() {
			return [
				solid_js_web.createComponent(solid_js.Match, {
					when: hiddenType === "mobile",
					get children() {
						return (() => {
							for (const dom of helper.querySelectorAll(".van-divider")) dom.remove();
							return (() => {
								var _el$10 = _tmpl$3();
								solid_js_web.insert(_el$10, solid_js_web.createComponent(solid_js.For, {
									each: type,
									children: ({ id, name }) => solid_js_web.createComponent(solid_js.Show, {
										get when() {
											return chapters[id].length;
										},
										get children() {
											return [(() => {
												var _el$11 = _tmpl$4(), _el$13 = _el$11.firstChild.firstChild, _el$15 = _el$13.firstChild.firstChild;
												_el$13.nextSibling;
												solid_js_web.insert(_el$15, name);
												return _el$11;
											})(), (() => {
												var _el$17 = _tmpl$5(), _el$18 = _el$17.firstChild;
												solid_js_web.insert(_el$18, solid_js_web.createComponent(solid_js.For, {
													get each() {
														return chapters[id];
													},
													children: (chapter) => (() => {
														var _el$19 = _tmpl$6(), _el$20 = _el$19.firstChild, _el$21 = _el$20.firstChild;
														solid_js_web.insert(_el$21, () => chapter.name);
														solid_js_web.effect((_p$) => {
															var _v$ = !!(props.last_chapter.uuid === chapter.id), _v$2 = \`/comic/\${comicName}/chapter/\${chapter.id}\`;
															_v$ !== _p$.e && _el$19.classList.toggle("red", _p$.e = _v$);
															_v$2 !== _p$.t && solid_js_web.setAttribute(_el$20, "href", _p$.t = _v$2);
															return _p$;
														}, {
															e: void 0,
															t: void 0
														});
														return _el$19;
													})()
												}));
												return _el$17;
											})()];
										}
									})
								}));
								return _el$10;
							})();
						})();
					}
				}),
				solid_js_web.createComponent(solid_js.Match, {
					when: hiddenType === "web",
					get children() {
						return [(() => {
							var _el$ = _tmpl$();
							solid_js_web.insert(_el$, () => props.name);
							return _el$;
						})(), (() => {
							var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$7 = _el$4.nextSibling.firstChild.nextSibling, _el$9 = _el$7.nextSibling.nextSibling, _el$1 = _el$3.nextSibling.firstChild;
							solid_js_web.insert(_el$4, solid_js_web.createComponent(solid_js.For, {
								each: type,
								children: ({ id, name }) => (() => {
									var _el$22 = _tmpl$7(), _el$23 = _el$22.firstChild;
									solid_js_web.insert(_el$23, name);
									solid_js_web.effect((_p$) => {
										var _v$3 = !!(chapters[id].length === 0), _v$4 = \`#\${props.path_word}\${name}\`;
										_v$3 !== _p$.e && _el$23.classList.toggle("disabled", _p$.e = _v$3);
										_v$4 !== _p$.t && solid_js_web.setAttribute(_el$23, "href", _p$.t = _v$4);
										return _p$;
									}, {
										e: void 0,
										t: void 0
									});
									return _el$22;
								})()
							}));
							solid_js_web.insert(_el$7, () => props.last_chapter.name);
							solid_js_web.insert(_el$9, () => props.last_chapter.datetime_created);
							solid_js_web.insert(_el$1, solid_js_web.createComponent(solid_js.For, {
								each: type,
								children: ({ id, name }) => (() => {
									var _el$24 = _tmpl$8(), _el$25 = _el$24.firstChild;
									solid_js_web.insert(_el$25, solid_js_web.createComponent(solid_js.For, {
										get each() {
											return chapters[id];
										},
										children: (chapter) => (() => {
											var _el$26 = _tmpl$9(), _el$27 = _el$26.firstChild;
											solid_js_web.insert(_el$27, () => chapter.name);
											solid_js_web.effect((_p$) => {
												var _v$5 = \`/comic/\${comicName}/chapter/\${chapter.id}\`, _v$6 = chapter.name;
												_v$5 !== _p$.e && solid_js_web.setAttribute(_el$26, "href", _p$.e = _v$5);
												_v$6 !== _p$.t && solid_js_web.setAttribute(_el$26, "title", _p$.t = _v$6);
												return _p$;
											}, {
												e: void 0,
												t: void 0
											});
											return _el$26;
										})()
									}));
									solid_js_web.effect(() => solid_js_web.setAttribute(_el$24, "id", \`\${props.path_word}\${name}\`));
									return _el$24;
								})()
							}));
							solid_js_web.effect(() => solid_js_web.setAttribute(_el$7, "href", \`/comic/\${comicName}/chapter/\${props.last_chapter.comic_id}\`));
							return _el$2;
						})()];
					}
				}),
				solid_js_web.createComponent(solid_js.Match, {
					when: true,
					get children() {
						return solid_js_web.createComponent(solid_js.For, {
							each: type,
							children: ({ id, name }) => solid_js_web.createComponent(solid_js.Show, {
								get when() {
									return chapters[id].length;
								},
								get children() {
									var _el$28 = _tmpl$0(), _el$30 = _el$28.firstChild.firstChild, _el$31 = _el$30.nextSibling;
									solid_js_web.insert(_el$30, name);
									solid_js_web.insert(_el$31, solid_js_web.createComponent(solid_js.For, {
										get each() {
											return chapters[id];
										},
										children: (chapter) => (() => {
											var _el$32 = _tmpl$1();
											solid_js_web.insert(_el$32, () => chapter.name);
											solid_js_web.effect((_p$) => {
												var _v$7 = !!(props.last_chapter.uuid === chapter.id), _v$8 = \`/comic/\${comicName}/chapter/\${chapter.id}\`;
												_v$7 !== _p$.e && _el$32.classList.toggle("active", _p$.e = _v$7);
												_v$8 !== _p$.t && solid_js_web.setAttribute(_el$32, "href", _p$.t = _v$8);
												return _p$;
											}, {
												e: void 0,
												t: void 0
											});
											return _el$32;
										})()
									}));
									return _el$28;
								}
							})
						});
					}
				})
			];
		} });
	};
	let root;
	switch (hiddenType) {
		case "mobile":
			root = helper.querySelector(".detailsTextContent");
			for (const element of helper.querySelectorAll("button.van-dialog__confirm")) element.click();
			break;
		case "web":
			root = helper.querySelector(".upLoop");
			break;
		default:
			root = helper.querySelector("main");
			root.textContent = "";
			helper.useStyle(\`ul .btn { height: fit-content; width: fit-content; margin: 1em; }\`);
			break;
	}
	solid_js_web.render(() => solid_js_web.createComponent(solid_js.For, {
		get each() {
			return Object.values(groups);
		},
		children: Group
	}), root);
	for (const group of helper.querySelectorAll(".upLoop .table-default-title")) group.querySelector(".nav-link:not(.disabled)")?.click();
};
core.setupSiteAdapter({
	name: "copymanga",
	getPageContext: async () => {
		let comicName = "";
		let id = "";
		if (location.href.includes("/chapter/")) [, , comicName, , id] = location.pathname.split("/");
		else if (location.href.includes("/comicContent/")) [, , , comicName, id] = location.pathname.split("/");
		if (comicName && id) return {
			type: "manga",
			comicName,
			id
		};
		if (!id && location.href.includes("/comic/")) {
			[, comicName] = location.href.split("/comic/");
			if (!comicName) return;
			const isMobile = location.href.includes("/h5/");
			let hiddenType;
			if (document.title === "404 - 鎷疯矟婕暙") hiddenType = isMobile ? "mobile" : "404";
			else if (isMobile) {
				await helper.wait(() => helper.querySelector(".van-toast__text")?.parentElement?.style.display === "none");
				hiddenType = await helper.wait(() => {
					if (helper.querySelector(".isBan")?.textContent?.includes("涓嶆彁渚涢柋瑕?)) return "mobile";
					const dialog = helper.querySelector(".van-dialog__message");
					if (dialog?.textContent?.includes("婕暙鏈壘鍒?)) {
						dialog.textContent = "婕暙鏈壘鍒?\\n璜嬪潗鍜屾斁瀵紝绛夊緟鐩寗鐢熸垚";
						for (const element of helper.querySelectorAll(".detailsTextContentTabs")) element.remove();
						return "mobile";
					}
				}, 1e3);
			} else if (Boolean(helper.querySelector(".wargin")?.textContent?.includes("涓嶆彁渚涢柋瑕?)) || !await helper.wait(() => helper.querySelector(".upLoop .table-default-title"), 1e3)) hiddenType = helper.querySelector(".comicParticulars-title") ? "web" : "404";
			return {
				type: "catalog",
				comicName,
				hiddenType,
				isMobile
			};
		}
	},
	handlers: {
		manga: async ({ setState }, { comicName, id }) => {
			/** 婕敾涓嶅瓨鍦ㄦ椂鎵嶄細鍑虹幇鐨勬彁绀?*/
			const titleDom = helper.querySelector("main .img+.title");
			if (titleDom) titleDom.textContent = "ComicRead 鎻愮ず鎮細浣犺í鍟忕殑鍏у鏆笉瀛樺湪锛岃珛榛為伕鍙充笅瑙掓寜閳曞槜瑭﹀姞杓夋极鐣?;
			/** 閫氳繃缃戦〉 API 鍔犺浇婕敾锛堝彲浠ヨ幏鍙栭殣钘忔极鐢伙級 */
			const getImglistByApi = async () => {
				const res = await pcApi.get(\`/api/v3/comic/\${comicName}/chapter2/\${id}?platform=3\`, { noCheckCode: true });
				if (res.status !== 200) {
					const message = \`婕暙鍔犺級澶辨晽锛歕${res.response.message || res.status}\`;
					if (titleDom) titleDom.textContent = message;
					throw new Error(message);
				}
				if (titleDom) {
					titleDom.textContent = "婕暙鍔犺級鎴愬姛馃コ";
					const { chapter: { name: chapterName }, comic: { name } } = res.response.results;
					document.title = \`\${name} - \${chapterName} - 鎷疯矟婕暙 鎷疯礉婕敾\`;
				}
				if (titleDom ?? !helper.querySelector(".comicContent-next")) {
					const { chapter: { next, prev } } = res.response.results;
					setState("manga", {
						onNext: next ? () => location.assign(\`/comic/\${comicName}/chapter/\${next}\`) : void 0,
						onPrev: prev ? () => location.assign(\`/comic/\${comicName}/chapter/\${prev}\`) : void 0
					});
				}
				const imgList = [];
				const { words, contents } = res.response.results.chapter;
				for (let i = 0; i < contents.length; i++) imgList[words[i]] = contents[i].url.replace(/(?<=(\\/|\\.))c800x/, "c1500x");
				return imgList;
			};
			setState("comicMap", "", { async getImgList() {
				if (helper.querySelector(".comicContent-next")) setState("manga", {
					onNext: helper.querySelectorClick(".comicContent-next a:not(.prev-null)"),
					onPrev: helper.querySelectorClick(".comicContent-prev:not(.index,.list) a:not(.prev-null)")
				});
				if (titleDom) return getImglistByApi();
				try {
					const imgList = await userscript_copyApi.getImglistByHtml(\`\${location.origin}/comic/\${comicName}/chapter/\${id}\`);
					if (imgList.length === 0) throw new Error("瑙ｆ瀽缃戦〉鍙橀噺澶辫触");
					return imgList;
				} catch (error) {
					helper.log.error(error);
					return getImglistByApi();
				}
			} });
			const getCommentList = async (commentList = []) => {
				const chapter_id = location.pathname.split("/").at(-1);
				const res = await pcApi.get(\`/api/v3/roasts?chapter_id=\${chapter_id}&limit=100&offset=\${commentList.length}&_update=true\`, {
					errorText: "鑾峰彇婕敾璇勮澶辫触",
					responseType: "blob"
				});
				const { list, total } = JSON.parse(await res.response.text()).results;
				for (const { comment } of list) commentList.push(comment);
				if (commentList.length < total) return getCommentList(commentList);
				return commentList;
			};
			setState("manga", "commentList", await getCommentList());
		},
		catalog: async (_, { comicName, hiddenType, isMobile }) => {
			if (hiddenType) {
				const tip = helper.querySelector(".isBan, .wargin");
				if (tip) tip.style.textDecoration = "line-through";
				const titleDom = helper.querySelector("main .img+.title");
				if (titleDom) titleDom.textContent = "ComicRead 鎻愮ず鎮細浣犺í鍟忕殑鍏у鏆笉瀛樺湪锛岃珛鍧愬拰鏀惧锛岀瓑寰呯洰閷勭敓鎴?;
				try {
					await buildChapters(comicName, hiddenType);
				} catch (error) {
					helper.log.error(error);
					if (titleDom) titleDom.textContent = "ComicRead 鎻愮ず鎮細鐩寗鐢熸垚澶辨晽馃槩";
					core.toast.error("鐩寗鐢熸垚澶辨晽馃槩", { duration: Number.POSITIVE_INFINITY });
				}
			}
			if (!isMobile && token) handleLastChapter(comicName);
		}
	}
});
//#endregion
`,
	"site/ehentai": `\nlet solid_js_web = require("solid-js/web");
let components_Manga = require("components/Manga");
let core = require("core");
let helper = require("helper");
let solid_js = require("solid-js");
let solid_js_store = require("solid-js/store");
let request = require("request");
let userscript_detectAd = require("userscript/detectAd");
let components_Toast = require("components/Toast");
let userscript_ehTagRules = require("userscript/ehTagRules");
//#region src/site/ehentai/myTags.ts
const getTagSetHtml = async (tagset) => {
	return helper.domParse((await core.request(tagset ? \`/mytags?tagset=\${tagset}\` : "/mytags", { fetch: true })).responseText);
};
const collectTags = (html, tagList = []) => {
	const defaultColor = html.querySelector("#tagcolor").value.slice(1) || "0";
	const [, ...tagEleList] = [...html.getElementById("usertags_outer").children];
	for (const e of tagEleList) {
		const id = Number(e.id.split("usertag_")[1]);
		const preview = e.querySelector(\`#tagpreview_\${id}\`);
		const { color: fontColor, borderColor } = preview.style;
		let [group, name] = preview.title.split(":");
		switch (group) {
			case "female":
			case "male":
			case "mixed": group = "gender";
		}
		const color = Number.parseInt(e.querySelector(\`#tagcolor_\${id}\`).value.slice(1) || defaultColor, 16);
		tagList.push({
			e,
			id,
			title: preview.title,
			color,
			fontColor,
			borderColor,
			group,
			name,
			weight: Number(e.querySelector("input[id^=tagweight_]").value),
			watch: e.querySelector(\`#tagwatch_\${id}\`).checked,
			hidden: e.querySelector(\`#taghide_\${id}\`).checked,
			order: -1
		});
	}
	return tagList;
};
const sortTagList = (tagList) => {
	const collator = new Intl.Collator();
	const sortFn = (a, b) => {
		if (a.color !== b.color) return b.color - a.color;
		if (a.group !== b.group) return collator.compare(a.group, b.group);
		if (a.hidden !== b.hidden) return a.hidden ? 1 : -1;
		if (a.watch !== b.watch) return a.watch ? -1 : 1;
		if (a.weight !== b.weight) return b.weight - a.weight;
		return collator.compare(a.name, b.name);
	};
	let i = -tagList.length;
	for (const tag of tagList.sort(sortFn)) tag.order = i++;
	return tagList;
};
const getMyTags = async () => {
	const tagSetList = [];
	const defaultTagSet = await getTagSetHtml();
	await Promise.all([...defaultTagSet.querySelectorAll("#tagset_outer select option")].map(async (option) => {
		const tagSet = option.selected ? defaultTagSet : await getTagSetHtml(option.value);
		if (tagSet.querySelector("#tagset_enable")?.checked) tagSetList.push(tagSet);
	}));
	const tagList = [];
	for (const html of tagSetList) collectTags(html, tagList);
	return sortTagList(tagList);
};
const handleMyTagsChange = /* @__PURE__ */ new Set();
const updateMyTags = async () => {
	const tagList = await getMyTags();
	for (const fn of handleMyTagsChange) await fn(tagList);
};
//#endregion
//#region src/site/ehentai/sortTags.ts
const updateSortCss = (tagList) => {
	let css = "tr a :is(.gltm, .glink + div:not([class])) { display: flex; }";
	for (const { title, order } of tagList) css += \`\\n.gt[title="\${title}"] { order: \${order}; }\`;
	return GM.setValue("ehTagSortCss", css);
};
/** 鎸夌収 mytags 涓婇厤缃殑鏍囩椤哄簭瀵瑰叾浠栭〉闈笂鐨勬爣绛捐繘琛屾帓搴?*/
const sortTags = async (pageCtx) => {
	handleMyTagsChange.add(updateSortCss);
	switch (pageCtx.type) {
		case "p":
		case "l":
		case "t": return helper.useStyle(await helper.ensureGmValue("ehTagSortCss", updateMyTags));
		case "mytags": {
			let style;
			const sortDom = (tagList) => {
				let css = \`
          #usertags_outer { display: flex; flex-direction: column; }
          #usertags_outer > div { margin: unset; }
          #usertag_0 { order: -\${tagList.length}; }\`;
				for (const { order, id } of tagList) css += \`\\n#usertag_\${id} { view-transition-name: _\${id}; order: \${order}; }\`;
				style ||= GM_addElement("style", { textContent: css });
				style.textContent = css;
			};
			handleMyTagsChange.add((tagList) => {
				if (!document.startViewTransition) return sortDom(tagList);
				document.startViewTransition(() => sortDom(tagList));
			});
		}
	}
};
//#endregion
//#region src/site/ehentai/colorizeTag.ts
const buildTagList = (tagList, prefix) => \`\\n\${Array.from(tagList, (tag) => \`\${prefix}\${CSS.escape(tag)}\`).join(",\\n")}\\n\`;
/** 鑾峰彇鏈€鏂扮殑鏍囩棰滆壊鏁版嵁 */
const updateTagColor = async (tagList) => {
	const backgroundMap = {};
	const borderMap = {};
	const colorMap = {};
	for (const tag of tagList) {
		const { color, borderColor, fontColor } = tag;
		const title = tag.title.replaceAll(" ", "_");
		(backgroundMap[color] ||= /* @__PURE__ */ new Set()).add(title);
		(borderMap[borderColor] ||= /* @__PURE__ */ new Set()).add(title);
		(colorMap[fontColor] ||= /* @__PURE__ */ new Set()).add(title);
	}
	let css = "";
	for (const [background, tags] of Object.entries(backgroundMap)) {
		css += \`:is(\${buildTagList(tags, "#td_")})\`;
		css += \`{ background: #\${Number(background).toString(16).padStart(6, "0")}; }\\n\\n\`;
	}
	for (const [border, tags] of Object.entries(borderMap)) {
		css += \`:is(\${buildTagList(tags, "#td_")}).gt\`;
		css += \`{ border-color: \${border}; }\\n\\n\`;
	}
	for (const [color, tags] of Object.entries(colorMap)) {
		css += \`:is(\${buildTagList(tags, "#td_")}):not(.gt)\`;
		css += \`{ border-color: \${color}; }\\n\\n\`;
		css += \`#taglist a:is(\${buildTagList(tags, "#ta_")})\`;
		css += \`{ color: \${color} !important; position: relative; }\\n\\n\`;
	}
	css += \`
    /* 绂佺敤 eh 鐨勫彉鑹叉晥鏋滐紝蹇呴』浣跨敤 !important */
    #taglist a[id] { color: var(--tag) !important; position: relative; }
    #taglist a[id]:hover { color: var(--tag-hover) !important; }

    #taglist a[id]::after {
      content: "";
      background: var(--color);
      width: 100%;
      position: absolute;
      left: 0;
      height: 2px;
      bottom: -7px;
    }
    .tup { --color: var(--tup) }
    .tdn { --color: var(--tdn) }
    #taglist a[id][style="color: blue;"] { --color: blue; }

    /* 閬垮厤琚笂涓€琛岀殑涓嬪垝绾跨鍒?*/
    #taglist div:is(.gt, .gtl, .gtw) { margin-top: 1px; }
  \`;
	await GM.setValue("ehTagColorizeCss", css);
	return css;
};
/** 鏍囩鏌撹壊 */
const colorizeTag = async (_, pageCtx) => {
	handleMyTagsChange.add(updateTagColor);
	switch (pageCtx.type) {
		case "gallery": {
			let css = getComputedStyle(document.body).backgroundColor === "rgb(52, 53, 59)" ? "--tag: #DDDDDD; --tag-hover: #EEEEEE; --tup: #00E639; --tdn: #FF3333;" : "--tag: #5C0D11; --tag-hover: #8F4701; --tup: green; --tdn: red;";
			css = \`#taglist { \${css} }\\n\\n\`;
			css += await helper.ensureGmValue("ehTagColorizeCss", updateMyTags);
			helper.useStyle(css);
			break;
		}
		case "mytags":
			helper.hijackFn("usertag_callback", helper.debounce(updateMyTags));
			await updateMyTags();
			break;
	}
	await sortTags(pageCtx);
};
//#endregion
//#region src/userscript/nhentaiApi.ts
const nhApi = (url, details) => core.request(url, {
	responseType: "json",
	headers: { "User-Agent": navigator.userAgent },
	fetch: false,
	...details
});
const getNhentaiData = async (id) => {
	const { response } = await nhApi(\`https://nhentai.net/api/v2/galleries/\${id}\`, {
		errorText: helper.t("site.ehentai.nhentai_error"),
		noTip: true
	});
	return response;
};
const searchNhentai = async (title) => {
	const { response } = await nhApi(\`https://nhentai.net/api/v2/search?query=\${encodeURIComponent(title)}\`, {
		errorText: helper.t("site.ehentai.nhentai_error"),
		noTip: true
	});
	return response.result;
};
const toImgList = (data) => data.pages.map((page) => ({
	src: \`https://i.nhentai.net/\${page.path}\`,
	width: page.width,
	height: page.height
}));
//#endregion
//#region src/site/ehentai/helper/context.tsx
const featureOptions = {
	/** 鍏宠仈澶栫珯 */
	cross_site_link: true,
	/** 澧炲姞蹇嵎閿搷浣?*/
	add_hotkeys_actions: true,
	/** 璇嗗埆骞垮憡椤?*/
	detect_ad: true,
	/** 蹇嵎鏀惰棌 */
	quick_favorite: true,
	/** 鏍囩鏌撹壊 */
	colorize_tag: false,
	/** 蹇嵎璇勫垎 */
	quick_rating: true,
	/** 蹇嵎鏌ョ湅鏍囩瀹氫箟 */
	quick_tag_define: true,
	/** 鎮诞鏍囩鍒楄〃 */
	float_tag_list: false,
	/** 鑷姩璋冩暣閰嶇疆 */
	auto_adjust_option: false,
	/** 鏍囩妫€鏌?*/
	tag_lint: false,
	/** 灞曞紑鏍囩鍒楄〃 */
	expand_tag_list: true,
	autoShow: false
};
const getPageContext = async () => {
	if (location.pathname === "/mytags") return { type: "mytags" };
	if (Reflect.has(unsafeWindow, "mpvkey")) return { type: "mpv" };
	if (!Reflect.has(unsafeWindow, "display_comment_field")) {
		const type = (helper.querySelector("option[value=\\"t\\"]")?.parentElement)?.value;
		if (type) return { type };
		return;
	}
	let imgNum = 0;
	imgNum = Number(helper.querySelector(".gtb .gpc")?.textContent?.replaceAll(",", "").match(/\\d+/g)?.at(-1));
	if (Number.isNaN(imgNum)) {
		const { responseText: html } = await core.request(location.href);
		imgNum = Number(/(?<=class="gdt2">)\\d+(?= pages<\\/td>)/.exec(html)?.[0]);
	}
	return {
		type: "gallery",
		galleryId: Number(location.pathname.split("/")[2]),
		galleryTitle: helper.querySelector("#gn")?.textContent || void 0,
		japanTitle: helper.querySelector("#gj")?.textContent || void 0,
		imgNum,
		imgList: helper.range(imgNum, ""),
		pageList: [],
		fileNameList: [],
		dom: {
			newTagField: helper.querySelector("#newtagfield"),
			sidebar: helper.querySelector("#gd5")
		}
	};
};
//#endregion
//#region src/site/ehentai/helper/LoadButton.tsx
var _tmpl$$7 = /* @__PURE__ */ solid_js_web.template(\`<a href=javascript:;>\`);
/** 鏀惧湪鍘熺敓鍙充晶宸ュ叿鏍忓拰鏍囩閫夐」閲岀殑婕敾鍔犺浇鎸夐挳 */
const LoadButton = (props) => {
	const tip = solid_js.createMemo(() => {
		const imgList = props.context.store.comicMap[props.id]?.imgList;
		if (imgList?.length === 0) return \` loading - 0/\${props.imgNum}\`;
		const progress = imgList?.filter(Boolean).length;
		switch (imgList?.length) {
			case void 0: return " Load comic";
			case progress: return " Read";
			default: return \` loading - \${progress}/\${props.imgNum}\`;
		}
	});
	return (() => {
		var _el$ = _tmpl$$7();
		_el$.$$click = (e) => {
			props.onClick?.(e);
			props.context.showComic(props.id);
		};
		solid_js_web.insert(_el$, tip);
		return _el$;
	})();
};
solid_js_web.delegateEvents(["click"]);
//#endregion
//#region src/site/ehentai/helper/index.ts
const escHandler = new Map([
	"鍏抽棴鏄剧ず鏍囩瀹氫箟",
	"鍙栨秷閫変腑褰撳墠鏍囩",
	"鍏抽棴娴姩鏍囩鏍?
].map((name) => [name, () => true]));
/** 鑾峰彇鎵€鏈夋爣绛?*/
const getTaglist = () => {
	const lockTags = /* @__PURE__ */ new Set();
	const weakTags = /* @__PURE__ */ new Set();
	for (const tag of helper.querySelectorAll("#taglist table [id^=td_]")) {
		const [a] = tag.getElementsByTagName("a");
		if (a.classList.contains("tdn")) continue;
		if (a.classList.contains("tup") || tag.classList.contains("gt")) lockTags.add(tag.id.slice(3));
		else if (tag.classList.contains("gtl")) weakTags.add(tag.id.slice(3));
	}
	return [lockTags, weakTags];
};
const handleTagName = (tag) => {
	const [namespace, name] = tag.trim().split(":");
	if (!name) return ["", ""];
	return [namespace, name.replaceAll(/[^a-z-_ ]/gi, "")];
};
/** 鍛藉悕绌洪棿缂╁啓 */
const namespaceAbbr = [
	["artist", "a"],
	[
		"character",
		"c",
		"char"
	],
	[
		"cosplayer",
		"c",
		"os"
	],
	["female", "f"],
	[
		"group",
		"g",
		"circle"
	],
	[
		"language",
		"l",
		"lang"
	],
	["male", "m"],
	["mixed", "x"],
	["other", "o"],
	[
		"parody",
		"p",
		"series"
	],
	["reclass", "r"]
];
/** 鑾峰彇鏍囩鐨勫畬鏁村啓娉?*/
const getTagNameFull = (tag) => {
	const [namespace, name] = handleTagName(tag);
	for (const target of namespaceAbbr) if (target.includes(namespace)) return \`\${target[0]}:\${name}\`;
	return tag;
};
/** 鐢诲粖鍒嗙被鍥炬爣瀵瑰簲鐨?class銆傚湪鍒楄〃椤垫槸銆?ct2銆嶏紝鍦ㄧ敾寤婇噷鏄€?gt2銆?*/
const categoriesMap = {
	Western: "ta",
	Misc: "t1",
	Doujinshi: "t2",
	Manga: "t3",
	"Artist CG": "t4",
	"Game CG": "t5",
	"Image Set": "t6",
	Cosplay: "t7",
	"Asian Porn": "t8",
	"Non-H": "t9"
};
/** 鍒ゆ柇鏄惁褰撳墠鐢诲粖鏄惁鏄寚瀹氱殑鍒嗙被 */
const isInCategories = (...name) => Boolean(helper.querySelector(\`#gdc > .cs:is(\${name.map((c) => \`.c\${categoriesMap[c]}\`).join(", ")})\`));
/** 鏇存柊 pagelist 閲岀殑 nl 鍙傛暟 */
const setNl = (pageCtx, i, nl) => {
	const url = new URL(pageCtx.pageList[i]);
	url.searchParams.set("nl", nl);
	pageCtx.pageList[i] = url.href;
};
//#endregion
//#region src/site/ehentai/crossSiteLink.tsx
var _tmpl$$6 = /* @__PURE__ */ solid_js_web.template(\`<div style=opacity:1.0><a>\`), _tmpl$2$5 = /* @__PURE__ */ solid_js_web.template(\`<td>\`), _tmpl$3$3 = /* @__PURE__ */ solid_js_web.template(\`<tr><td class=tc>:\`), _tmpl$4$3 = /* @__PURE__ */ solid_js_web.template(\`<td class=tc style=text-align:left>\`), _tmpl$5$1 = /* @__PURE__ */ solid_js_web.template(\`<img src=https://ehgt.org/g/mr.gif class=mr alt=">">\`), _tmpl$6 = /* @__PURE__ */ solid_js_web.template(\`<a target=_blank>\`);
const nhentai = async ({ setState }, { galleryTitle, galleryId }) => {
	return (await searchNhentai(galleryTitle)).map(({ id, english_title, japanese_title, media_id }) => {
		const itemId = \`@nh:\${id}\`;
		setState("comicMap", itemId, { getImgList: async ({ dynamicLazyLoad }) => {
			const imgList = toImgList(await getNhentaiData(\`\${id}\`));
			return dynamicLazyLoad({
				loadImg: async (i) => {
					const imgRes = await core.request(imgList[i].src, {
						headers: { Referer: \`https://nhentai.net/g/\${id}\` },
						responseType: "blob",
						fetch: false
					});
					return URL.createObjectURL(imgRes.response);
				},
				length: imgList.length,
				id: itemId
			});
		} });
		return {
			id: itemId,
			showText: \`\${id}\`,
			title: japanese_title || english_title,
			href: \`https://nhentai.net/g/\${id}\`,
			class: \`\${galleryId}\` === media_id ? "gt" : "gtl"
		};
	}).toSorted((a, b) => (a.class === "gt" ? 0 : 1) - (b.class === "gt" ? 0 : 1) || Number(b.showText) - Number(a.showText));
};
nhentai.errorTip = (_, { galleryTitle }) => helper.t("site.ehentai.nhentai_failed", { nhentai: \`<a href='https://nhentai.net/search/?q=\${galleryTitle}' target="_blank"> <u> nhentai </u> </a>\` });
const hitomi = async ({ setState }, { galleryId }) => {
	const domain = "gold-usergeneratedcontent.net";
	const downImg = async (url) => {
		const imgRes = await core.request(url, {
			headers: { Referer: \`https://hitomi.la/reader/\${galleryId}.html\` },
			responseType: "blob",
			fetch: false
		});
		return URL.createObjectURL(imgRes.response);
	};
	const res = await core.request(\`https://ltn.\${domain}/galleries/\${galleryId}.js\`, {
		errorText: helper.t("site.ehentai.hitomi_error"),
		noTip: true,
		noCheckCode: true
	});
	switch (res.status) {
		case 404: return [];
		case 200: break;
		default: throw new Error(helper.t("site.ehentai.hitomi_error"));
	}
	const data = JSON.parse(res.responseText.slice(18));
	const itemId = \`@hitomi:\${data.id}\`;
	setState("comicMap", itemId, { getImgList: async ({ dynamicLazyLoad }) => {
		const { responseText: ggScript } = await core.request(\`https://ltn.\${domain}/gg.js?_=\${Date.now()}\`, {
			errorText: helper.t("site.ehentai.hitomi_error"),
			noTip: true
		});
		let gg = {};
		eval(ggScript);
		return dynamicLazyLoad({
			loadImg: async (i) => {
				const { hash, name } = data.files[i];
				const imageId = gg.s(hash);
				const m = /[\\da-f]{61}([\\da-f]{2})([\\da-f])/.exec(hash);
				const g = Number.parseInt(m[2] + m[1], 16);
				return {
					src: await downImg(\`https://w\${gg.m(g) + 1}.\${domain}/\${gg.b}\${imageId}/\${hash}.webp\`),
					name
				};
			},
			length: data.files.length,
			id: itemId,
			concurrency: 1
		});
	} });
	return [{
		id: itemId,
		showText: data.id,
		title: data.title,
		href: \`https://hitomi.la/galleries/\${data.id}\`,
		class: "gt"
	}];
};
hitomi.errorTip = () => helper.t("site.ehentai.hitomi_error");
/** 鍏宠仈澶栫珯 */
const crossSiteLink = async (coreCtx, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	if (!pageCtx.galleryTitle) return core.toast.error(helper.t("site.ehentai.html_changed_link_failed"));
	const siteList = [];
	if (isInCategories("Doujinshi", "Manga", "Artist CG", "Game CG", "Image Set")) siteList.push(hitomi);
	if (isInCategories("Doujinshi", "Manga")) siteList.push(nhentai);
	if (siteList.length === 0) return;
	const [comicMap, setComicMap] = solid_js_store.createStore({});
	const ItemTag = (props) => (() => {
		var _el$ = _tmpl$$6(), _el$2 = _el$.firstChild;
		solid_js_web.effect((_p$) => {
			var _v$ = \`td_\${props.id}\`, _v$2 = props.class, _v$3 = props.title, _v$4 = props.id, _v$5 = props.href, _v$6 = \`return toggle_tagmenu(1, '\${props.id}',this)\`, _v$7 = props.title, _v$8 = props.showText;
			_v$ !== _p$.e && solid_js_web.setAttribute(_el$, "id", _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.className(_el$, _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "title", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$2, "id", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setAttribute(_el$2, "href", _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.setAttribute(_el$2, "onclick", _p$.n = _v$6);
			_v$7 !== _p$.s && solid_js_web.setAttribute(_el$2, "title", _p$.s = _v$7);
			_v$8 !== _p$.h && (_el$2.innerText = _p$.h = _v$8);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0
		});
		return _el$;
	})();
	const renderList = () => solid_js_web.render(() => solid_js_web.createComponent(solid_js.For, {
		get each() {
			return Object.entries(comicMap);
		},
		children: ([site, itemList]) => (() => {
			var _el$3 = _tmpl$3$3(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild;
			solid_js_web.setAttribute(_el$3, "id", \`\${site}_tagline\`);
			solid_js_web.insert(_el$4, site, _el$5);
			solid_js_web.insert(_el$3, solid_js_web.createComponent(solid_js.Show, {
				when: typeof itemList !== "string",
				get fallback() {
					return (() => {
						var _el$7 = _tmpl$4$3();
						_el$7.innerHTML = itemList;
						return _el$7;
					})();
				},
				get children() {
					var _el$6 = _tmpl$2$5();
					solid_js_web.insert(_el$6, solid_js_web.createComponent(solid_js.For, {
						each: itemList,
						children: ItemTag
					}));
					return _el$6;
				}
			}), null);
			return _el$3;
		})()
	}), helper.querySelector("#taglist tbody"));
	renderList();
	helper.hijackFn("tag_update_vote", () => {
		for (const e of helper.querySelectorAll("#nh_tagline")) e.remove();
		renderList();
	});
	const icon = () => _tmpl$5$1();
	const TagMenu = (props) => solid_js_web.createComponent(solid_js.For, {
		get each() {
			return props.children;
		},
		children: (item) => [icon(), item]
	});
	const tagmenu_act_dom = document.getElementById("tagmenu_act");
	let dispose;
	helper.hijackFn("_refresh_tagmenu_act", (rawFn, [a]) => {
		dispose?.();
		if (!a.id.startsWith("@")) return rawFn(a);
		if (tagmenu_act_dom.children.length > 0) tagmenu_act_dom.innerHTML = "";
		dispose = solid_js_web.render(() => solid_js_web.createComponent(TagMenu, { get children() {
			return [(() => {
				var _el$9 = _tmpl$6();
				_el$9.innerText = " Jump";
				solid_js_web.effect(() => solid_js_web.setAttribute(_el$9, "href", a.href));
				return _el$9;
			})(), solid_js_web.createComponent(LoadButton, {
				get id() {
					return a.id;
				},
				get imgNum() {
					return pageCtx.imgNum;
				},
				context: coreCtx
			})];
		} }), tagmenu_act_dom);
	});
	for (const getSiteComic of siteList) {
		setComicMap(getSiteComic.name, "searching...");
		try {
			const itemList = await getSiteComic(coreCtx, pageCtx);
			if (itemList.length > 0) setComicMap(getSiteComic.name, itemList);
			else setComicMap(getSiteComic.name, "null");
		} catch (error) {
			const errorTip = getSiteComic.errorTip(coreCtx, pageCtx);
			console.error(errorTip, error);
			setComicMap(getSiteComic.name, errorTip);
		}
	}
	const { adList } = coreCtx.store.comicMap[""];
	if (!adList) return;
	for (const itemList of Object.values(comicMap)) {
		if (typeof itemList === "string") continue;
		if (itemList.length === 1) coreCtx.setState("comicMap", itemList[0].id, { adList });
	}
};
//#endregion
//#region src/site/ehentai/detectAd.ts
const imageBitmapCache = /* @__PURE__ */ new Map();
const loadImageBitmap = async (url) => {
	if (imageBitmapCache.has(url)) return imageBitmapCache.get(url);
	const imageBitmap = await createImageBitmap(await request.downloadImg(url));
	imageBitmapCache.set(url, imageBitmap);
	return imageBitmap;
};
/** 浠庨洩纰у浘涓垏鍓叉寚瀹氬尯鍩熺殑鍥剧墖 */
const extractSpriteImage = async (style) => {
	const { width, height, backgroundImage, backgroundPositionX: backgroundX, backgroundPositionY: backgroundY } = style;
	const urlMatch = /url\\(['"]([^)]+)['"]\\)/.exec(backgroundImage);
	if (!urlMatch) throw new Error("瑙ｆ瀽涓嶅埌鑳屾櫙鍥剧墖URL");
	const [, url] = urlMatch;
	const spriteImage = await loadImageBitmap(url);
	const w = parseFloat(width);
	const h = parseFloat(height);
	const canvas = new OffscreenCanvas(w, h);
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, w, h);
	const sourceX = -parseFloat(backgroundX);
	const sourceY = -parseFloat(backgroundY);
	ctx.drawImage(spriteImage, sourceX, sourceY, w, h, 0, 0, w, h);
	return canvas.transferToImageBitmap();
};
/** 璇嗗埆骞垮憡 */
const detectAd = ({ store, setState, options }, { imgList, pageList, fileNameList }) => {
	if (!(options.detect_ad && document.getElementById("ta_other:extraneous_ads"))) return;
	setState("comicMap", "", "adList", new helper.ReactiveSet());
	/** 缂╃暐鍥惧垪琛?*/
	const thumbnailList = [];
	(async () => {
		for (const e of helper.querySelectorAll("#gdt > a")) {
			const index = Number(/.+-(\\d+)/.exec(e.href)?.[1]) - 1;
			if (Number.isNaN(index)) continue;
			pageList[index] = e.href;
			const thumbnail = e.querySelector("[title]");
			[, fileNameList[index]] = thumbnail.title.split(/锛殀: /);
			if (helper.isImageElement(thumbnail)) thumbnailList[index] = thumbnail;
			if (thumbnail.style.background.includes("url(")) thumbnailList[index] = await extractSpriteImage(thumbnail.style);
		}
		await userscript_detectAd.getAdPageByFileName(fileNameList, store.comicMap[""].adList);
		if (store.comicMap[""].adList.size === 0) await userscript_detectAd.getAdPageByContent(thumbnailList, store.comicMap[""].adList);
	})();
	helper.useStyle(helper.createRootMemo(() => {
		if (!store.comicMap[""]?.adList?.size) return "";
		return [...store.comicMap[""].adList].map((i) => \`a[href="\${pageList[i]}"] [title]:not(:hover) {
              filter: blur(8px);
              clip-path: border-box;
              backdrop-filter: blur(8px);
            }\`).join("\\n");
	}));
	return {
		checkFileName: () => userscript_detectAd.getAdPageByFileName(fileNameList, store.comicMap[""].adList),
		checkContent: () => userscript_detectAd.getAdPageByContent(imgList, store.comicMap[""].adList)
	};
};
//#endregion
//#region src/site/ehentai/expandTagList.tsx
/** 灞曞紑鏍囩鍒楄〃 */
const expandTagList = (_, pageCtx) => {
	if (pageCtx.type !== "t") return;
	helper.useStyle(\`
    #taglist {
      height: auto;
      max-height: 230px;
      padding: 0 3px;

      --scrollbar-slider: \${getComputedStyle(helper.querySelector(".ido")).backgroundColor};
      scrollbar-color: var(--scrollbar-slider) transparent;
      scrollbar-width: thin;
      &::-webkit-scrollbar { width: 5px; height: 10px; }
      &::-webkit-scrollbar-track { background: transparent; }
      &::-webkit-scrollbar-thumb { background: var(--scrollbar-slider); }
    }
    .gl1t[data-tag-list-loading], .gl1t[data-tag-list-loading] * { cursor: progress; }
    .gl1t[data-show-tag-list] .gl6t { display: none; }
    .gl1t:not([data-show-tag-list]) #taglist { display: none; }

    /* 闀挎爣绛炬崲琛?*/
    #taglist [id^=td_] a[id^=ta_] {
      text-wrap: balance;
      word-break: keep-all;
      overflow-wrap: anywhere;
    }
  \`);
	const tagListMap = /* @__PURE__ */ new Map();
	const handleShow = async (item) => {
		if (item.style.cursor === "progress") return;
		if (!tagListMap.has(item)) {
			let html;
			let taglist = null;
			try {
				item.dataset.tagListLoading = "";
				html = helper.domParse((await core.request(item.querySelector("a").href, {
					noTip: true,
					errorText: "Fetch tag list error",
					noCheckCode: true
				})).responseText);
				taglist = html.querySelector("#taglist");
				if (!taglist) throw new Error("Fetch tag list error");
				const [, thumbnail] = html.querySelector("#gdt div[title][style]").style.background.split("\\"");
				new Image().src = thumbnail;
				for (const a of taglist.querySelectorAll("a")) a.target = "_blank";
			} catch {
				taglist = document.createElement("div");
				taglist.id = "taglist";
				taglist.textContent = html?.querySelector(".d p")?.textContent || "Fetch tag list error";
			}
			item.querySelector(".gl3t").after(taglist);
			tagListMap.set(item, taglist);
			Reflect.deleteProperty(item.dataset, "tagListLoading");
		}
		if (Reflect.has(item.dataset, "showTagList")) Reflect.deleteProperty(item.dataset, "showTagList");
		else item.dataset.showTagList = "";
	};
	for (const item of helper.querySelectorAll(".gl1t")) item.addEventListener("click", (e) => e.target.matches(":not(a):is(.gl1t, .gl6t, .gl6t *, #taglist, #taglist *)") && handleShow(item));
	components_Manga.setDefaultHotkeys((hotkeys) => ({
		...hotkeys,
		float_tag_list: ["q"]
	}));
	const [mouseXY, setMouseXY] = solid_js.createSignal([0, 0]);
	document.addEventListener("pointermove", (e) => setMouseXY([e.clientX, e.clientY]));
	components_Manga.listenHotkey({ float_tag_list: () => {
		for (const item of document.elementsFromPoint(...mouseXY())) if (item.matches(".gl1t")) return handleShow(item);
	} });
	colorizeTag(_, pageCtx);
};
//#endregion
//#region src/site/ehentai/floatTagList.tsx
const MdPictureInPicture = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M18 7h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m3-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m-1 16.01H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1"/></svg>\`;
const getDomPosition = (dom) => {
	const rect = dom.getBoundingClientRect();
	const computedStyle = getComputedStyle(dom);
	const leftBorder = Number.parseFloat(computedStyle.borderLeftWidth);
	const leftPadding = Number.parseFloat(computedStyle.paddingLeft);
	const topPadding = Number.parseFloat(computedStyle.paddingTop);
	const topBorder = Number.parseFloat(computedStyle.borderTopWidth);
	return {
		left: rect.left + leftBorder + leftPadding,
		top: rect.top + topBorder + topPadding,
		width: computedStyle.width,
		height: computedStyle.height
	};
};
const floatTagList = ({ store: coreStore }, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	const gd4 = helper.querySelector("#gd4");
	const gd4Style = getComputedStyle(gd4);
	/** 鑳屾櫙棰滆壊 */
	let background = "rgba(0, 0, 0, 0)";
	let dom = gd4;
	while (background === "rgba(0, 0, 0, 0)") {
		background = getComputedStyle(dom).backgroundColor;
		dom = dom.parentElement;
	}
	const { borderColor } = getComputedStyle(helper.querySelector("#gdt"));
	/** 杈规鏍峰紡 */
	const border = \`1px solid \${borderColor}\`;
	helper.useStyle(\`
      #comicread-tag-box {
        position: fixed;
        z-index: 2147483647;

        font-size: 12px;
        text-align: justify;

        background: \${background};
        box-shadow: 0 0 15px -3px #0004;
      }

      #comicread-tag-box > #gd4 {
        margin: 0;
        padding: 0;
        border: none;
      }

      #comicread-tag-box > #ehs-introduce-box {
        position: relative;
        width: 161px;
        height: 100%;
        border-left: \${border};
      }

      /* 纭繚濮嬬粓鏄剧ず鍦ㄦ渶涓婂眰锛岄槻姝㈠拰鍏朵粬鑴氭湰鍐茬獊 */
      #ehs-introduce-box { z-index: 1; }

      #comicread-tag-box-placeholder {
        cursor: pointer;

        float: left;
        display: flex;
        grid-area: gd4;
        justify-content: center;

        margin: 0 0 0 10px;
        padding: 0 0 0 5px;

        border-right: 1px solid \${borderColor};
        border-left: 1px solid \${borderColor};
      }

      #comicread-tag-box-placeholder svg {
        width: 17em;
        opacity: 0.5;
      }

      /* 闃叉鍦ㄧ獥鍙ｅ彉灏忔椂纭鎸夐挳琚尋鍑鸿寖鍥?*/
      #tagmenu_new {
        width: fit-content;
      }
    \`);
	const { store, setState } = helper.useStore({
		open: false,
		top: 0,
		left: 0,
		opacity: 1,
		mouse: {
			x: 0,
			y: 0
		},
		bound: {
			width: 0,
			height: 0
		}
	});
	const setPos = (state, top, left) => {
		state.top = helper.clamp(-gd4.clientHeight * .75, top, state.bound.height);
		state.left = helper.clamp(-gd4.clientWidth * .75, left, state.bound.width);
	};
	const setOpacity = (opacity) => setState("opacity", helper.clamp(.5, opacity, 1));
	setOpacity(Number(localStorage.getItem("floatTagListOpacity")) || 1);
	document.addEventListener("pointermove", (e) => {
		setState((state) => {
			state.mouse.x = e.clientX;
			state.mouse.y = e.clientY;
		});
	});
	const hadnleResize = () => {
		setState((state) => {
			state.bound.width = window.innerWidth - gd4.clientWidth / 4;
			state.bound.height = window.innerHeight - gd4.clientHeight / 4;
			setPos(state, state.top, state.left);
		});
	};
	window.addEventListener("resize", hadnleResize);
	hadnleResize();
	helper.useStyleMemo("#comicread-tag-box", {
		display: () => store.open ? void 0 : "none",
		top: () => \`\${store.top}px\`,
		left: () => \`\${store.left}px\`,
		opacity: () => store.opacity
	});
	const placeholder = gd4.cloneNode();
	placeholder.id = "comicread-tag-box-placeholder";
	placeholder.style.display = "none";
	placeholder.addEventListener("click", () => setState("open", false));
	placeholder.innerHTML = MdPictureInPicture;
	gd4.before(placeholder);
	const ref = document.createElement("div");
	ref.id = "comicread-tag-box";
	ref.classList.add("comicread-ignore");
	document.body.append(ref);
	ref.addEventListener("wheel", (e) => {
		if (!e.shiftKey) return;
		e.stopPropagation();
		e.preventDefault();
		setOpacity(store.opacity + (e.deltaY > 0 ? -.05 : .05));
		localStorage.setItem("floatTagListOpacity", \`\${store.opacity}\`);
	}, { passive: false });
	const initPos = {
		top: 0,
		left: 0
	};
	helper.useDrag({
		ref: gd4,
		handleDrag({ type, xy: [x, y], initial: [ix, iy] }) {
			switch (type) {
				case "down":
					if (!store.open) {
						const pos = getDomPosition(gd4);
						setState((state) => {
							state.top = pos.top;
							state.left = pos.left;
						});
					}
					initPos.top = store.top;
					initPos.left = store.left;
					break;
				case "up":
					setState((state) => {
						if (coreStore.manga.show) return;
						const rect = placeholder.getBoundingClientRect();
						if (helper.approx(state.top, rect.top, 50) && helper.approx(state.left, rect.left, 50)) state.open = false;
					});
					break;
				case "move":
					setState((state) => {
						setPos(state, initPos.top + y - iy, initPos.left + x - ix);
						state.open = true;
					});
					break;
			}
		},
		handleClick: (_, target) => target.click(),
		skip: (e) => !e.target.matches("#gd4, #taglist, #gwrd, td+td, [id^=comidread] *:not(a)")
	});
	let ehs;
	let ehsParent;
	const handleEhs = () => {
		if (ehs) return;
		ehs = helper.querySelector("#ehs-introduce-box");
		if (!ehs) return;
		ehsParent = ehs.parentElement;
		const autoComplete = helper.querySelector(".eh-syringe-lite-auto-complete-list");
		if (autoComplete) {
			autoComplete.classList.add("comicread-ignore");
			autoComplete.style.zIndex = "2147483647";
			document.body.append(autoComplete);
		}
		helper.hijackFn("toggle_tagmenu", () => unsafeWindow.selected_tagname || helper.querySelector("#ehs-introduce-box .ehs-close")?.click());
	};
	helper.createEffectOn(() => store.open, (open) => {
		handleEhs();
		if (open) {
			const { height, width } = gd4Style;
			placeholder.style.cssText = \`height: \${height}; width: \${width};\`;
			ref.style.height = height;
			gd4.style.width = width;
			ref.append(gd4);
			if (ehs) ref.append(ehs);
			document.activeElement.blur();
		} else {
			placeholder.style.cssText = \`display: none;\`;
			gd4.style.width = "";
			placeholder.after(gd4);
			if (ehs) ehsParent.append(ehs);
			components_Manga.focus();
		}
	}, { defer: true });
	components_Manga.setDefaultHotkeys((hotkeys) => ({
		...hotkeys,
		float_tag_list: ["q"]
	}));
	escHandler.set("鍏抽棴娴姩鏍囩鏍?, () => store.open ? setState("open", false) : true);
	components_Manga.listenHotkey({ float_tag_list: () => {
		setState((state) => {
			state.open = !state.open;
			if (!state.open) return;
			setPos(state, state.mouse.y - gd4.clientHeight / 2, state.mouse.x - gd4.clientWidth / 2);
		});
	} });
	helper.hijackFn("tag_from_field", (rawFn, args) => {
		if (store.open) document.activeElement.blur();
		return rawFn(...args);
	});
	const { newTagField } = pageCtx.dom;
	newTagField.addEventListener("pointerenter", () => store.open && newTagField.focus());
	/** 鏍规嵁鏍囩閾炬帴鑾峰彇瀵瑰簲鐨勬爣绛惧悕 */
	const getDropTag = (tagUrl) => {
		const tagDom = helper.querySelector(\`a[href=\${CSS.escape(tagUrl)}]\`);
		if (!tagDom) return;
		return tagDom.title || tagDom.id.slice(3).replaceAll("_", " ");
	};
	const handleDrop = (e) => {
		const tag = getDropTag(e.dataTransfer.getData("text"));
		if (!tag) return;
		e.preventDefault();
		if (!newTagField.value.includes(tag)) newTagField.value += \`\${tag}, \`;
		newTagField.dispatchEvent(new Event("input"));
	};
	newTagField.addEventListener("drop", handleDrop);
	const taglist = helper.querySelector("#taglist");
	taglist.addEventListener("dragover", (e) => e.preventDefault());
	taglist.addEventListener("dragenter", (e) => e.preventDefault());
	taglist.addEventListener("drop", handleDrop);
};
//#endregion
//#region src/site/ehentai/helper/api.ts
const ehApi = async (data, details) => {
	const res = await request.request(\`/api.php\`, {
		fetch: false,
		method: "POST",
		responseType: "json",
		cookie: document.cookie,
		data: JSON.stringify(data),
		...details
	});
	if (res.response.error) {
		helper.log.error(res.response.error);
		throw new Error(res.response.error);
	}
	return res.response;
};
/** 浣跨敤 api 鑾峰彇鍥剧墖閾炬帴 */
const getImgUrlByApi = async (pageCtx, i, nextLink) => {
	const imgPageUrl = pageCtx.pageList[i];
	const [, imgkey, gid, page, nl] = /\\/s\\/(\\S+)\\/(\\d+)-(\\d+)(?=$|\\?nl=(\\d+))/.exec(imgPageUrl);
	const data = {
		gid,
		page,
		imgkey
	};
	if (nl) data.nl = nl;
	if (pageCtx.mpvkey) {
		const res = await ehApi({
			method: "imagedispatch",
			...data,
			mpvkey: pageCtx.mpvkey
		}, { noTip: true });
		if (nextLink) setNl(pageCtx, i, res.s);
		return res.i;
	}
	const res = await ehApi({
		method: "showpage",
		...data,
		showkey: pageCtx.showkey
	}, { noTip: true });
	if (nextLink) setNl(pageCtx, i, /nl\\('(\\d+-\\d+)'\\)/.exec(res.i3)[1]);
	return /src="(\\S+)"/.exec(res.i3)[1];
};
/** 妫€鏌?showkey */
const checkShowkey = async (pageCtx, imgPageUrl) => {
	if (pageCtx.showkey) return;
	const res = await request.request(imgPageUrl, { fetch: true }, 10);
	const [, showkey] = /showkey="(\\S+)"/.exec(res.responseText);
	pageCtx.showkey = showkey;
};
/** 妫€鏌?mpvkey */
const checkMpvKey = async (pageCtx) => {
	if (pageCtx.mpvkey) return;
	const mpvUrl = \`\${location.origin}\${location.pathname}\`.replace("/g/", "/mpv/");
	if (!helper.querySelector(\`.g2 a[href="\${mpvUrl}"]\`)) return;
	const res = await request.request(mpvUrl, { fetch: true });
	const reRes = /mpvkey = "(\\S+)"/.exec(res.responseText);
	if (!reRes) return;
	const [, mpvkey] = reRes;
	pageCtx.mpvkey = mpvkey;
};
/** 妫€鏌?IP 鏄惁琚皝绂?*/
const checkIpBanned = (text) => text.includes("IP address has been temporarily banned") && components_Toast.toast.error(helper.t("site.ehentai.ip_banned"), {
	throw: true,
	duration: Number.POSITIVE_INFINITY
});
/** 浠庡浘鐗囬〉鑾峰彇鍥剧墖鍦板潃 */
const getImgUrl = async (pageCtx, i) => {
	try {
		return await getImgUrlByApi(pageCtx, i);
	} catch (error) {
		helper.log.warn("getImgUrlByApi failed", error);
	}
	const res = await request.request(pageCtx.pageList[i], {
		fetch: true,
		errorText: helper.t("site.ehentai.fetch_img_page_source_failed")
	}, 10);
	checkIpBanned(res.responseText);
	try {
		return /id="img" src="(.+?)"/.exec(res.responseText)[1];
	} catch {
		throw new Error(helper.t("site.ehentai.fetch_img_url_failed"));
	}
};
/** 浠庤鎯呴〉鑾峰彇鍥剧墖椤电殑鍦板潃 */
const getImgPageUrl = async (pageNum = 0) => {
	const res = await request.request(\`\${location.pathname}\${pageNum ? \`?p=\${pageNum}\` : ""}\`, {
		fetch: true,
		errorText: helper.t("site.ehentai.fetch_img_page_url_failed")
	});
	checkIpBanned(res.responseText);
	const pageList = [...res.responseText.matchAll(/<a href="(.{20,50})"><(img alt=.+?|div><div |div )title=".+?: (.+?)"/g)].map(([, url, , fileName]) => [url, fileName]);
	if (pageList.length === 0) throw new Error(helper.t("site.ehentai.fetch_img_page_url_failed"));
	return pageList;
};
/** 鑾峰彇鏂扮殑鍥剧墖椤靛湴鍧€ */
const updatePageUrl = async (pageCtx, i) => {
	try {
		return await getImgUrlByApi(pageCtx, i, true);
	} catch {}
	const res = await request.request(pageCtx.pageList[i], { errorText: helper.t("site.ehentai.fetch_img_page_source_failed") });
	checkIpBanned(res.responseText);
	const nl = /nl\\('(.+?)'\\)/.exec(res.responseText)?.[1];
	if (!nl) throw new Error(helper.t("site.ehentai.fetch_img_url_failed"));
	setNl(pageCtx, i, nl);
};
//#endregion
//#region src/site/ehentai/hotkeys.ts
const addHotkeysActions = (_, pageCtx) => {
	if (pageCtx.type !== "gallery") return components_Manga.listenHotkey({
		scroll_right: () => helper.querySelector("#unext")?.click(),
		scroll_left: () => helper.querySelector("#uprev")?.click()
	});
	escHandler.set("鍙栨秷閫変腑褰撳墠鏍囩", () => unsafeWindow.selected_tagname ? unsafeWindow.toggle_tagmenu() : true);
	return components_Manga.listenHotkey({
		ArrowUp: () => unsafeWindow.selected_tagid && unsafeWindow?.tag_vote_up(),
		ArrowDown: () => unsafeWindow.selected_tagid && unsafeWindow?.tag_vote_down(),
		scroll_right: () => helper.querySelector(".ptt td:last-child:not(.ptdd)")?.click(),
		scroll_left: () => helper.querySelector(".ptt td:first-child:not(.ptdd)")?.click()
	});
};
//#endregion
//#region src/site/ehentai/multiSelectLoad.tsx
const multiSelectLoad = async (coreCtx, { imgNum, imgList, galleryId }) => {
	const { setState, showComic } = coreCtx;
	const [loadImgsText, setLoadImgsText] = solid_js.createSignal(\`1-\${imgNum}\`);
	/** 闇€瑕佸姞杞界殑鍥剧墖鐨?index */
	const loadImgs = helper.createRootMemo(() => [...helper.extractRange(loadImgsText(), imgList.length || imgNum)]);
	const cache = await helper.useCache({ pageRange: "id" });
	const handleClick = async (e) => {
		if (!e.shiftKey) return;
		e.stopPropagation();
		const saveRange = await cache.get("pageRange", unsafeWindow.gid);
		const pageRange = prompt(helper.t("other.page_range"), saveRange?.range);
		if (!pageRange) return;
		await cache.set("pageRange", {
			id: unsafeWindow.gid ?? galleryId,
			range: pageRange
		});
		setLoadImgsText(pageRange ?? \`1-\${imgNum}\`);
		setState("comicMap", "", "imgList", void 0);
		await showComic();
	};
	return {
		loadImgs,
		handleClick
	};
};
//#endregion
//#region src/site/ehentai/quickFavorite.tsx
var _tmpl$$5 = /* @__PURE__ */ solid_js_web.template(\`<div>\`), _tmpl$2$4 = /* @__PURE__ */ solid_js_web.template(\`<div class=comidread-favorites-item><input type=radio>\`), _tmpl$3$2 = /* @__PURE__ */ solid_js_web.template(\`<span class=comidread-favorites>\`), _tmpl$4$2 = /* @__PURE__ */ solid_js_web.template(\`<h3>loading...\`);
const style = \`
  .comidread-favorites {
    position: absolute;
    z-index: 75;
    left: 0;

    overflow: auto;
    align-content: center;

    box-sizing: border-box;
    width: 100%;
    padding-left: 0.6em;

    border: none;
    border-radius: 0;
  }

  .comidread-favorites-item {
    cursor: pointer;

    display: flex;
    align-items: center;

    width: 100%;
    margin: 1em 0;

    text-align: left;
    overflow-wrap: anywhere;
  }

  .comidread-favorites-item > input {
    pointer-events: none;
    margin: 0 0.5em 0 0;
  }

  .comidread-favorites-item > div {
    flex-shrink: 0;

    width: 15px;
    height: 15px;
    margin: 0 0.5em 0 0;

    background-image: url("https://ehgt.org/g/fav.png");
    background-repeat: no-repeat;
  }

  .gl1t > .comidread-favorites {
    padding: 1em 1.5em;
  }
\`;
const addQuickFavorite = ({ button: favoriteButton, root, apiUrl, height, top = 0 }) => {
	root.style.position = "relative";
	const [show, setShow] = solid_js.createSignal(false);
	const [favorites, setFavorites] = solid_js.createSignal([]);
	const [favnote, setFavnote] = solid_js.createSignal("");
	const updateFavorite = async () => {
		try {
			const dom = helper.domParse((await core.request(apiUrl, { errorText: helper.t("site.ehentai.fetch_favorite_failed") })).responseText);
			const list = [...dom.querySelectorAll(".nosel > div")];
			if (list.length === 10) list[0].querySelector("input").checked = false;
			setFavnote(dom.querySelector("#galpop textarea[name=\\"favnote\\"]")?.value ?? "");
			setFavorites(list);
		} catch {
			core.toast.error(helper.t("site.ehentai.fetch_favorite_failed"));
			setFavorites([]);
		}
	};
	let hasRender = false;
	const renderDom = () => {
		if (hasRender) return;
		hasRender = true;
		const FavoriteItem = (e, index) => {
			const { checked } = e.querySelector("input");
			const handleClick = async () => {
				if (checked) return;
				setShow(false);
				const formData = new FormData();
				formData.append("favcat", index() === 10 ? "favdel" : \`\${index()}\`);
				formData.append("apply", "Apply Changes");
				formData.append("favnote", favnote());
				formData.append("update", "1");
				const res = await core.request(apiUrl, {
					method: "POST",
					data: formData,
					errorText: helper.t("site.ehentai.change_favorite_failed")
				});
				core.toast.success(helper.t("site.ehentai.change_favorite_success"));
				const updateCode = /\\nif\\(window.opener.document.+\\n/.exec(res.responseText)?.[0]?.replaceAll("window.opener.document", "window.document");
				if (updateCode) eval(updateCode);
				await updateFavorite();
			};
			return (() => {
				var _el$ = _tmpl$2$4(), _el$2 = _el$.firstChild;
				_el$.$$click = handleClick;
				_el$2.checked = checked;
				solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.Show, {
					get when() {
						return index() <= 9;
					},
					get children() {
						var _el$3 = _tmpl$$5();
						solid_js_web.effect((_$p) => solid_js_web.setStyleProperty(_el$3, "background-position", \`0px -\${2 + 19 * index()}px\`));
						return _el$3;
					}
				}), null);
				solid_js_web.insert(_el$, () => e.textContent?.trim(), null);
				return _el$;
			})();
		};
		let background = "rgba(0, 0, 0, 0)";
		let dom = root;
		while (background === "rgba(0, 0, 0, 0)") {
			background = getComputedStyle(dom).backgroundColor;
			dom = dom.parentElement;
		}
		solid_js_web.render(() => solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return show();
			},
			get children() {
				var _el$4 = _tmpl$3$2();
				solid_js_web.setStyleProperty(_el$4, "background", background);
				solid_js_web.setStyleProperty(_el$4, "height", \`\${height}px\`);
				solid_js_web.setStyleProperty(_el$4, "top", \`\${top}px\`);
				solid_js_web.insert(_el$4, solid_js_web.createComponent(solid_js.For, {
					get each() {
						return favorites();
					},
					children: FavoriteItem,
					get fallback() {
						return _tmpl$4$2();
					}
				}));
				return _el$4;
			}
		}), root);
	};
	const rawClick = favoriteButton.onclick;
	favoriteButton.onclick = null;
	favoriteButton.addEventListener("mousedown", async (e) => {
		if (e.buttons !== 1 && e.buttons !== 4) return;
		e.stopPropagation();
		e.preventDefault();
		if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey || e.buttons === 4) return rawClick.call(favoriteButton, e);
		renderDom();
		setShow((val) => !val);
		if (show()) await updateFavorite();
	});
};
/** 蹇嵎鏀惰棌 */
const quickFavorite = (_, pageCtx) => {
	if (unsafeWindow.apiuid === -1) return;
	switch (pageCtx.type) {
		case "gallery":
			helper.useStyle(style);
			addQuickFavorite({
				root: helper.querySelector("#gd3"),
				button: helper.querySelector("#gdf"),
				apiUrl: \`\${unsafeWindow.popbase}addfav\`,
				height: helper.querySelector("#gdf").firstElementChild.offsetTop
			});
			break;
		case "t":
			helper.useStyle(style);
			for (const item of helper.querySelectorAll(".gl1t")) {
				const button = item.querySelector("[id^=posted_]");
				const top = item.firstElementChild.getBoundingClientRect().bottom - item.getBoundingClientRect().top;
				const bottom = item.lastElementChild.getBoundingClientRect().top - item.getBoundingClientRect().top;
				const [apiUrl] = /http.+?(?=')/.exec(button.getAttribute("onclick"));
				addQuickFavorite({
					root: item,
					top,
					height: bottom - top,
					button,
					apiUrl
				});
			}
			break;
		case "e":
			helper.useStyle(style);
			for (const item of helper.querySelectorAll(".gl1e")) {
				const button = item.nextElementSibling.querySelector("[id^=posted_]");
				const height = Number.parseInt(getComputedStyle(item).height, 10);
				const [apiUrl] = /http.+?(?=')/.exec(button.getAttribute("onclick"));
				addQuickFavorite({
					root: item,
					button,
					height,
					apiUrl
				});
			}
			break;
	}
};
solid_js_web.delegateEvents(["click"]);
//#endregion
//#region src/site/ehentai/quickRating.tsx
var _tmpl$$4 = /* @__PURE__ */ solid_js_web.template(\`<span class=comidread-quick-rating><img src=https://ehgt.org/g/blank.gif><map>\`), _tmpl$2$3 = /* @__PURE__ */ solid_js_web.template(\`<area shape=rect>\`);
/** 蹇嵎璇勫垎 */
const quickRating = (_, pageCtx) => {
	let list;
	switch (pageCtx.type) {
		case "e":
			list = helper.querySelectorAll("#favform > table > tbody > tr");
			break;
		case "m":
		case "p":
		case "l":
			list = helper.querySelectorAll("#favform > table > tbody > tr").slice(1);
			break;
		case "t":
			list = helper.querySelectorAll(".gl1t");
			break;
		default: return;
	}
	helper.useStyle(\`
    .comidread-quick-rating {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: click;
    }
  \`);
	const coordsList = [
		"0,0,7,16",
		"8,0,15,16",
		"16,0,23,16",
		"24,0,31,16",
		"32,0,39,16",
		"40,0,47,16",
		"48,0,55,16",
		"56,0,63,16",
		"64,0,71,16",
		"72,0,79,16"
	];
	/** 淇敼璇勫垎 */
	const editRating = async (url, num) => {
		try {
			const dataRes = await core.request(url, {
				errorText: helper.t("site.ehentai.change_rating_failed"),
				noTip: true
			});
			const reRes = /api_url = "(.+?)";.+?gid = (\\d+);.+?token = "(.+?)";.+?apiuid = (\\d+);.+?apikey = "(.+?)"/s.exec(dataRes.responseText);
			if (!reRes) throw new Error(helper.t("site.ehentai.change_rating_failed"));
			const [, api_url, gid, token, apiuid, apikey] = reRes;
			const res = await core.request(api_url, {
				method: "POST",
				responseType: "json",
				data: JSON.stringify({
					method: "rategallery",
					rating: \`\${num}\`,
					apikey,
					apiuid,
					gid,
					token
				}),
				fetch: true,
				noTip: true
			});
			core.toast.success(\`\${helper.t("site.ehentai.change_rating_success")}: \${res.response.rating_usr}\`);
			return res.response;
		} catch {
			core.toast.error(helper.t("site.ehentai.change_rating_failed"));
			throw new Error(helper.t("site.ehentai.change_rating_failed"));
		}
	};
	/** 鏍规嵁璇勫垎淇敼鏄剧ず鏁堟灉 */
	const updateRatingImage = (dom, num) => {
		let a = Math.round(num + 1);
		const b = -80 + 16 * Math.ceil(a / 2);
		a = a % 2 === 1 ? -21 : -1;
		dom.style.backgroundPosition = \`\${b}px \${a}px\`;
	};
	const renderQuickRating = (item, ir, index) => {
		let basePosition = ir.style.backgroundPosition;
		solid_js_web.render(() => (() => {
			var _el$ = _tmpl$$4(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
			_el$.$$mouseout = () => {
				ir.style.backgroundPosition = basePosition;
			};
			solid_js_web.setAttribute(_el$, "data-index", index);
			solid_js_web.setAttribute(_el$2, "usemap", \`#rating-\${index}\`);
			solid_js_web.setAttribute(_el$3, "name", \`rating-\${index}\`);
			solid_js_web.insert(_el$3, solid_js_web.createComponent(solid_js.For, {
				each: coordsList,
				children: (coords, i) => (() => {
					var _el$4 = _tmpl$2$3();
					_el$4.$$click = async () => {
						const res = await editRating(item.querySelector("a").href, i() + 1);
						ir.className = res.rating_cls;
						updateRatingImage(ir, res.rating_usr * 2 - 1);
						basePosition = ir.style.backgroundPosition;
					};
					_el$4.$$mouseover = () => updateRatingImage(ir, i());
					solid_js_web.setAttribute(_el$4, "coords", coords);
					return _el$4;
				})()
			}));
			return _el$;
		})(), ir);
	};
	for (const [index, item] of list.entries()) {
		const ir = [...item.querySelectorAll(".ir")].at(-1);
		if (!ir) continue;
		ir.addEventListener("mouseenter", () => renderQuickRating(item, ir, index), { once: true });
	}
};
solid_js_web.delegateEvents([
	"mouseout",
	"mouseover",
	"click"
]);
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/launch.svg
var _tmpl$$3 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 1 0 1.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1">\`);
var launch_default = (props = {}) => (() => {
	var _el$ = _tmpl$$3();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/site/ehentai/quickTagDefine.tsx
var _tmpl$$2 = /* @__PURE__ */ solid_js_web.template(\`<h3>\`), _tmpl$2$2 = /* @__PURE__ */ solid_js_web.template(\`<h1><a target=_blank>\`), _tmpl$3$1 = /* @__PURE__ */ solid_js_web.template(\`<span id=comidread-tag-define>\`), _tmpl$4$1 = /* @__PURE__ */ solid_js_web.template(\`<h3>loading...\`);
/** 蹇嵎鏌ョ湅鏍囩瀹氫箟 */
const quickTagDefine = (_, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	const tagContent = solid_js_store.createMutable({});
	const saveTagContent = async (tag) => {
		if (Reflect.has(tagContent, tag)) return;
		const url = \`https://ehwiki.org/wiki/\${tag.replaceAll(/[a-z]+:\\s?/gi, "")}\`;
		const res = await core.request(url, { noCheckCode: true });
		if (res.status !== 200) {
			tagContent[tag] = (() => {
				var _el$ = _tmpl$$2();
				solid_js_web.insert(_el$, () => \`\${res.status} - \${res.statusText}\`);
				return _el$;
			})();
			return;
		}
		const content = helper.domParse(res.responseText).querySelector("#mw-content-text");
		for (const dom of content.querySelectorAll("img[src^=\\"/\\"]")) dom.setAttribute("src", \`https://ehwiki.org\${dom.getAttribute("src")}\`);
		for (const dom of content.getElementsByTagName("a")) {
			const href = dom.getAttribute("href") ?? "";
			if (href.startsWith("/")) dom.setAttribute("href", \`https://ehwiki.org\${href}\`);
			dom.target = "_blank";
		}
		for (const dom of content.querySelectorAll(".thumb")) dom.remove();
		tagContent[tag] = [(() => {
			var _el$2 = _tmpl$2$2(), _el$3 = _el$2.firstChild;
			solid_js_web.setAttribute(_el$3, "href", url);
			solid_js_web.insert(_el$3, tag, null);
			solid_js_web.insert(_el$3, solid_js_web.createComponent(launch_default, {}), null);
			return _el$2;
		})(), content];
	};
	helper.useStyle(\`
    #comidread-tag-define {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      text-align: start;
      padding: 0 1em;
      box-sizing: border-box;
    }

    #taglist {
      position: relative;
    }

    #comidread-tag-define h1 {
      border-bottom: 1px solid #a2a9b1;
      margin: 0.4em 0;
    }

    #comidread-tag-define h1 svg {
      height: 0.7em;
      margin-left: 0.2em;
    }

    #comidread-tag-define ul {
      margin: 0.3em 0 0 1.6em;
      padding: 0;
    }

    #comidread-tag-define li {
      margin-bottom: 0.2em;
    }

    #comidread-tag-define div a {
      text-decoration: underline;
    }

    #comidread-tag-define dd {
      margin-left: 1.6em;
    }

    #comidread-tag-define dl {
      margin-top: 0.2em;
      margin-bottom: 0.5em;
    }
  \`);
	const [show, setShow] = solid_js.createSignal(false);
	const root = helper.querySelector("#taglist");
	let background = "rgba(0, 0, 0, 0)";
	let dom = root;
	while (background === "rgba(0, 0, 0, 0)") {
		background = getComputedStyle(dom).backgroundColor;
		dom = dom.parentElement;
	}
	solid_js_web.render(() => solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return show();
		},
		get children() {
			var _el$4 = _tmpl$3$1();
			solid_js_web.setStyleProperty(_el$4, "background", background);
			solid_js_web.insert(_el$4, () => tagContent[unsafeWindow.selected_tagname] ?? _tmpl$4$1());
			solid_js_web.effect((_$p) => solid_js_web.setStyleProperty(_el$4, "height", \`\${root.scrollHeight}px\`));
			return _el$4;
		}
	}), root);
	unsafeWindow.tag_define = async () => {
		if (!unsafeWindow.selected_tagname) return;
		if (show()) return setShow(false);
		setShow(true);
		try {
			await saveTagContent(unsafeWindow.selected_tagname);
		} catch (error) {
			console.error(error);
			setShow(false);
		}
	};
	helper.hijackFn("toggle_tagmenu", () => setShow(false));
	escHandler.set("鍏抽棴鏄剧ず鏍囩瀹氫箟", () => show() ? setShow(false) : true);
};
//#endregion
//#region src/site/ehentai/sidebarOverflow.ts
/** 澶勭悊渚ц竟鏍忔孩鍑?*/
const sidebarOverflow = (_, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	const { sidebar } = pageCtx.dom;
	new ResizeObserver(() => {
		Reflect.deleteProperty(sidebar.dataset, "long");
		const lastNode = helper.querySelector("#gd5 p:last-of-type");
		if (lastNode.offsetTop + lastNode.offsetHeight > 352) sidebar.dataset.long = "";
	}).observe(sidebar);
	helper.useStyle(\`
    #gd5[data-long] {
      --scrollbar-slider: \${getComputedStyle(helper.querySelector(".gm")).borderColor};
      scrollbar-color: var(--scrollbar-slider) transparent;
      scrollbar-width: thin;
      overflow: auto;
      max-height: 352px;
      &::-webkit-scrollbar { width: 5px; height: 10px; }
      &::-webkit-scrollbar-track { background: transparent; }
      &::-webkit-scrollbar-thumb { background: var(--scrollbar-slider); }
    }
    /* 鍦ㄦ樉绀?ehs 鏃堕殣钘?gd5 涓婄殑婊氬姩鏉★紝閬垮厤鍚屾椂鏄剧ず涓や釜婊氬姩鏉?*/
    #gd5[data-long]:has(#ehs-introduce-box .ehs-content) { overflow: hidden; }
    #gmid #ehs-introduce-box { width: 100%; }

    /*
      娑堥櫎 ehs 閽堝鎸夐挳澶鏃剁殑瑙ｅ喅鍔炴硶锛岀敤鑴氭湰鐨勫鐞嗘柟寮忓氨濂戒簡锛岄伩鍏嶅湪娴姩鏍囩鏍忔椂瀵艰嚧婊氬姩
      https://github.com/EhTagTranslation/EhSyringe/commit/009054cc34ee818972d2a042990bf89bdff1895a
    */
    body #gmid #gd5 { --ehs-gap: 1; justify-content: unset; }
  \`);
};
//#endregion
//#region src/site/ehentai/tagLint.tsx
var _tmpl$$1 = /* @__PURE__ */ solid_js_web.template(\`<div><a>\`), _tmpl$2$1 = /* @__PURE__ */ solid_js_web.template(\`<span>銆?!>銆峔`), _tmpl$3 = /* @__PURE__ */ solid_js_web.template(\`<li>\`), _tmpl$4 = /* @__PURE__ */ solid_js_web.template(\`<hr>\`), _tmpl$5 = /* @__PURE__ */ solid_js_web.template(\`<ul>\`);
const tagLint = (_, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	/** 鏄惁鏄€孌oujinshi銆嶃€孧anga銆嶃€孨on-H銆?*/
	const isManga = isInCategories("Doujinshi", "Manga", "Non-H");
	const lintRules = userscript_ehTagRules.getTagLintRules();
	const [warnList, setWarnList] = solid_js.createSignal({});
	helper.useStyle(\`
    #comidread-tag-lint [id^=td_] {
      display: inline-block;
      float: none;
    }
  \`);
	const getTagClass = (tag, weak) => {
		if (weak === void 0) return document.getElementById(\`td_\${tag}\`)?.className;
		return weak ? "gtl" : "gt";
	};
	const TagBase = (props) => (() => {
		var _el$ = _tmpl$$1(), _el$2 = _el$.firstChild;
		_el$2.$$click = (e) => e.preventDefault();
		solid_js_web.insert(_el$2, () => props.name);
		solid_js_web.effect((_p$) => {
			var _v$ = \`td_\${props.name}\`, _v$2 = getTagClass(props.name, props.weak), _v$3 = \`ta_\${props.name}\`, _v$4 = \`https://exhentai.org/tag/\${props.name.replaceAll("_", "+")}\`;
			_v$ !== _p$.e && solid_js_web.setAttribute(_el$, "id", _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.className(_el$, _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$2, "id", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$2, "href", _p$.o = _v$4);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0
		});
		return _el$;
	})();
	const Tag = (props) => {
		const tags = userscript_ehTagRules.splitTagNamespace(props.name);
		return solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return tags.length > 1;
			},
			get fallback() {
				return TagBase(props);
			},
			get children() {
				var _el$3 = _tmpl$2$1(), _el$6 = _el$3.firstChild.nextSibling;
				_el$6.nextSibling;
				solid_js_web.insert(_el$3, solid_js_web.createComponent(solid_js.For, {
					each: tags,
					children: (name, i) => [solid_js_web.memo(() => solid_js_web.memo(() => !!i())() ? \` \${helper.t("other.or")} \` : ""), solid_js_web.createComponent(TagBase, {
						name,
						get weak() {
							return props.weak;
						}
					})]
				}), _el$6);
				return _el$3;
			}
		});
	};
	const WarnItem = (props) => {
		const [before, middle, after] = props.text.split("[tag]");
		return solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return props.warnList?.size;
			},
			get children() {
				return solid_js_web.createComponent(solid_js.For, {
					get each() {
						return [...props.warnList.entries()];
					},
					children: ([tag, tags]) => (() => {
						var _el$7 = _tmpl$3();
						solid_js_web.insert(_el$7, before, null);
						solid_js_web.insert(_el$7, solid_js_web.createComponent(Tag, { name: tag }), null);
						solid_js_web.insert(_el$7, middle, null);
						solid_js_web.insert(_el$7, solid_js_web.createComponent(solid_js.For, {
							each: tags,
							children: (tagName) => solid_js_web.createComponent(Tag, {
								name: tagName,
								get weak() {
									return props.weak;
								}
							})
						}), null);
						solid_js_web.insert(_el$7, after, null);
						return _el$7;
					})()
				});
			}
		});
	};
	let root;
	let dispose;
	const updateLint = helper.singleThreaded(() => {
		const newWarnList = {};
		const [lockTags, weakTags] = getTaglist();
		const tagList = new Set([...lockTags, ...weakTags]);
		/** 鏍规嵁鎸囧畾瑙勫垯妫€鏌ユ爣绛惧苟璁板綍 */
		const checkRules = (tag, ruleName, has = false) => {
			const rules = lintRules[ruleName];
			if (!rules.has(tag)) return;
			for (const targetTag of rules.get(tag)) {
				if (userscript_ehTagRules.hasTag(has ? lockTags : tagList, targetTag) === has) continue;
				newWarnList[ruleName] ??= new Map([[tag, []]]);
				const warn = newWarnList[ruleName];
				if (!warn.has(tag)) warn.set(tag, []);
				warn.get(tag).push(targetTag);
			}
		};
		for (const tag of tagList) {
			checkRules(tag, "prerequisite", true);
			checkRules(tag, "conflict");
			if (isManga) checkRules(tag, "possibleConflict");
			checkRules(tag, "combo", true);
		}
		const addOtherWarn = (text, tags) => {
			newWarnList.other ??= [];
			newWarnList.other.push([text, tags]);
		};
		const correctTags = [];
		for (const tag of weakTags) if (/^(?:artist|group):/.test(tag)) {
			const title = helper.querySelector("#gd2").textContent.toLowerCase();
			if (title.includes(tag.replaceAll(/^(artist|group):|_/g, " ").trim())) correctTags.push(tag);
			else {
				const showName = document.getElementById(\`ta_\${tag}\`)?.textContent;
				if (showName && title.includes(showName)) correctTags.push(tag);
			}
		}
		if (correctTags.length > 0) addOtherWarn(helper.t("eh_tag_lint.correct_tag"), correctTags);
		if (isInCategories("Doujinshi") && userscript_ehTagRules.isMissingNamespace(tagList, "parody")) addOtherWarn(helper.t("eh_tag_lint.miss_parody"), ["parody:original"]);
		if (isManga && userscript_ehTagRules.isMissingTags(lockTags, "female:females_only", "female:futanari", "female:shemale") && userscript_ehTagRules.isMissingNamespace(tagList, "male", "mixed")) addOtherWarn(helper.t("eh_tag_lint.miss_female"), ["female:females_only"]);
		setWarnList(newWarnList);
		if (!root?.isConnected) {
			root = document.createElement("div");
			root.id = "comidread-tag-lint";
			helper.querySelector("#taglist").append(root);
		}
		dispose?.();
		dispose = solid_js_web.render(() => solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return Object.keys(warnList()).length;
			},
			get children() {
				return [_tmpl$4(), (() => {
					var _el$9 = _tmpl$5();
					solid_js_web.insert(_el$9, solid_js_web.createComponent(solid_js.For, {
						get each() {
							return warnList().other;
						},
						children: ([text, tags]) => (() => {
							var _el$0 = _tmpl$3();
							solid_js_web.insert(_el$0, text, null);
							solid_js_web.insert(_el$0, solid_js_web.createComponent(solid_js.For, {
								each: tags,
								children: (tagName) => solid_js_web.createComponent(Tag, {
									name: tagName,
									weak: true
								})
							}), null);
							return _el$0;
						})()
					}), null);
					solid_js_web.insert(_el$9, solid_js_web.createComponent(WarnItem, {
						get warnList() {
							return warnList().prerequisite;
						},
						get text() {
							return helper.t("eh_tag_lint.prerequisite");
						},
						weak: false
					}), null);
					solid_js_web.insert(_el$9, solid_js_web.createComponent(WarnItem, {
						get warnList() {
							return warnList().conflict;
						},
						get text() {
							return helper.t("eh_tag_lint.conflict");
						}
					}), null);
					solid_js_web.insert(_el$9, solid_js_web.createComponent(WarnItem, {
						get warnList() {
							return warnList().possibleConflict;
						},
						get text() {
							return helper.t("eh_tag_lint.possible_conflict");
						}
					}), null);
					solid_js_web.insert(_el$9, solid_js_web.createComponent(WarnItem, {
						get warnList() {
							return warnList().combo;
						},
						get text() {
							return helper.t("eh_tag_lint.combo");
						},
						weak: true
					}), null);
					return _el$9;
				})()];
			}
		}), root);
	});
	updateLint();
	helper.hijackFn("tag_update_vote", updateLint);
	const [inputTagList, setInputTagList] = helper.createEqualsSignal([]);
	helper.useStyle(helper.createRootMemo(() => inputTagList().map((tag) => \`#td_\${CSS.escape(tag.replaceAll(" ", "_"))} { box-shadow: 0px 0px 4px var(--tag); }\`).join("\\n")));
	const { newTagField } = pageCtx.dom;
	const updateInputTagList = () => setInputTagList(newTagField.value.split(",").map((tag) => getTagNameFull(tag.trim())).filter(Boolean));
	newTagField.addEventListener("input", updateInputTagList);
	newTagField.addEventListener("keydown", updateInputTagList);
	helper.hijackFn("tag_update_vote", updateInputTagList);
};
solid_js_web.delegateEvents(["click"]);
//#endregion
//#region src/site/ehentai/index.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<hr>\`), _tmpl$2 = /* @__PURE__ */ solid_js_web.template(\`<p class="g2 gsp"style=padding-bottom:0><img src=https://ehgt.org/g/mr.gif>\`);
core.setupSiteAdapter({
	name: "ehentai",
	options: featureOptions,
	getPageContext,
	handlers: {
		all: ({ setState, setOptions, options }) => {
			const SiteSettings = () => [
				solid_js_web.createComponent(solid_js.For, {
					each: [
						"colorize_tag",
						"float_tag_list",
						"expand_tag_list",
						"tag_lint",
						"",
						"quick_favorite",
						"quick_rating",
						"quick_tag_define",
						"",
						"cross_site_link",
						"detect_ad",
						"add_hotkeys_actions",
						"auto_adjust_option"
					],
					children: (name) => solid_js_web.createComponent(solid_js.Show, {
						when: name,
						get fallback() {
							return _tmpl$();
						},
						get children() {
							return solid_js_web.createComponent(components_Manga.SettingsItemSwitch, {
								get name() {
									return helper.t(\`site.add_feature.\${name}\`);
								},
								get value() {
									return options[name];
								},
								onChange: (v) => setOptions({ [name]: v })
							});
						}
					})
				}),
				_tmpl$(),
				solid_js_web.createComponent(components_Manga.SettingBlockSubtitle, { get children() {
					return helper.t("other.hotkeys");
				} }),
				solid_js_web.createComponent(components_Manga.SettingHotkeys, { keys: ["float_tag_list"] })
			];
			setState((state) => {
				state.manga.editSettingList = (list) => [...list, ["E-Hentai", SiteSettings]];
				state.fab.optionsSpeedDial = [
					"tag_lint",
					"colorize_tag",
					"cross_site_link",
					"detect_ad"
				];
			});
			components_Manga.listenHotkey({ Escape: (e) => {
				for (const handler of escHandler.values()) if (handler() !== true) return e.stopImmediatePropagation();
			} });
		},
		mpv: ({ setState }) => {
			setState("comicMap", "", { getImgList({ dynamicLazyLoad }) {
				const imagelist = unsafeWindow.imagelist;
				const loadImg = async (i) => {
					const url = () => imagelist[i].i;
					while (!url()) {
						if (!Reflect.has(imagelist[i], "xhr")) {
							unsafeWindow.load_image(i + 1);
							unsafeWindow.next_possible_request = 0;
						}
						await helper.wait(url);
					}
					return url();
				};
				return dynamicLazyLoad({
					loadImg,
					length: imagelist.length
				});
			} });
		},
		gallery: async (coreCtx, pageCtx) => {
			if (Number.isNaN(pageCtx.imgNum)) return core.toast.error(helper.t("site.changed_load_failed"));
			const { newTagField, sidebar } = pageCtx.dom;
			newTagField.addEventListener("keydown", (e) => e.key === "Escape" && newTagField.blur());
			const { setState, options } = coreCtx;
			sidebarOverflow(coreCtx, pageCtx);
			const checkAd = detectAd(coreCtx, pageCtx);
			const totalPageNum = Number(helper.querySelector(".ptt td:nth-last-child(2)").textContent);
			coreCtx.setState("comicMap", "", { getImgList: async ({ dynamicLazyLoad }) => {
				if (pageCtx.pageList.length !== totalPageNum) {
					const allPageList = await helper.plimit(helper.range(totalPageNum, (pageNum) => () => getImgPageUrl(pageNum)));
					pageCtx.pageList.length = 0;
					pageCtx.fileNameList.length = 0;
					for (const pageList of allPageList) for (const [url, fileName] of pageList) {
						pageCtx.pageList.push(url);
						pageCtx.fileNameList.push(fileName);
					}
					checkAd?.checkFileName();
				}
				try {
					await checkMpvKey(pageCtx);
					await checkShowkey(pageCtx, pageCtx.pageList[0]);
				} catch (error) {
					helper.log.warn("checkKey failed", error);
				}
				return dynamicLazyLoad({
					loadImg: async (index) => {
						const i = loadImgs()[index];
						pageCtx.imgList[i] ||= await getImgUrl(pageCtx, i);
						return {
							src: pageCtx.imgList[i],
							name: pageCtx.fileNameList[i]
						};
					},
					length: () => loadImgs().length,
					onLoad: checkAd?.checkContent && ((_, __, list) => list.slice(-10, -1).every(Boolean) && checkAd?.checkContent())
				});
			} });
			const { loadImgs, handleClick } = await multiSelectLoad(coreCtx, pageCtx);
			solid_js_web.render(() => {
				const hasMultiPage = sidebar.children[6]?.classList.contains("gsp");
				return (() => {
					var _el$3 = _tmpl$2();
					_el$3.firstChild;
					solid_js_web.setStyleProperty(_el$3, "padding-top", hasMultiPage ? 0 : void 0);
					_el$3.addEventListener("click", handleClick, true);
					solid_js_web.insert(_el$3, solid_js_web.createComponent(LoadButton, {
						id: "",
						context: coreCtx,
						get imgNum() {
							return pageCtx.imgNum;
						}
					}), null);
					return _el$3;
				})();
			}, sidebar);
			/** 鍒锋柊鎸囧畾鍥剧墖 */
			const reloadImg = helper.singleThreaded(async (_, url) => {
				const i = pageCtx.imgList.indexOf(url);
				if (i === -1) return;
				pageCtx.imgList[i] = await getImgUrl(pageCtx, i);
				if (!await helper.testImgUrl(pageCtx.imgList[i])) {
					await updatePageUrl(pageCtx, i);
					pageCtx.imgList[i] = await getImgUrl(pageCtx, i);
					core.toast.warn(helper.t("alert.retry_get_img_url", { i }));
					if (!await helper.testImgUrl(pageCtx.imgList[i])) {
						await helper.sleep(500);
						return reloadImg(url);
					}
				}
				setState("comicMap", "", "imgList", [...pageCtx.imgList]);
				for (const img of components_Manga.imgList()) if (img.loadType === "error") return reloadImg(img.src);
			});
			setState((state) => {
				state.manga.title = pageCtx.japanTitle || pageCtx.galleryTitle;
				state.manga.onExit = (isEnd) => {
					if (isEnd) helper.scrollIntoView("#cdiv");
					setState("manga", "show", false);
				};
				state.manga.onImgError = reloadImg;
				state.fab.initialShow = options.autoShow;
			});
		}
	},
	features: {
		colorize_tag: colorizeTag,
		quick_favorite: quickFavorite,
		quick_rating: quickRating,
		expand_tag_list: expandTagList,
		add_hotkeys_actions: addHotkeysActions,
		float_tag_list: floatTagList,
		quick_tag_define: quickTagDefine,
		tag_lint: tagLint,
		cross_site_link: crossSiteLink,
		auto_adjust_option: ({ options, setState }, pageCtx) => {
			if (pageCtx.type !== "gallery") return;
			if (!isInCategories("Doujinshi", "Manga", "Non-H")) return;
			let option = {
				pageNum: 1,
				imgRecognition: { enabled: false }
			};
			if (options.option) option = helper.assign(options.option, option);
			setState("manga", "option", option);
		}
	}
});
//#endregion
`,
	"site/jm": `\nlet core = require("core");
let helper = require("helper");
//#region src/site/jm.tsx
core.setupSiteAdapter({
	name: "jm",
	getPageContext: () => {
		if (!location.pathname.includes("/photo/")) return;
		return { type: "manga" };
	},
	handlers: { manga: async ({ setState }) => {
		if (!await helper.wait(() => unsafeWindow?.onImageLoaded, 1e3 * 5)) {
			core.toast.error("鏃犳硶鑾峰彇鍥剧墖", { duration: Number.POSITIVE_INFINITY });
			return;
		}
		setState("manga", {
			onPrev: helper.querySelectorClick(".menu-bolock-ul :has(> .fa-angle-double-left)"),
			onNext: helper.querySelectorClick(".menu-bolock-ul :has(> .fa-angle-double-right)")
		});
		const imgEleList = helper.querySelectorAll(".scramble-page:not(.thewayhome) > img");
		if (unsafeWindow.aid < unsafeWindow.scramble_id || unsafeWindow.speed === "1") return setState("comicMap", "", { getImgList: () => imgEleList.map((e) => e.dataset.original ?? "") });
		const downloadImg = async (url) => {
			try {
				return await core.request(url, {
					responseType: "blob",
					fetch: true,
					noTip: true
				}, 3);
			} catch {
				return await core.request(url, {
					responseType: "blob",
					revalidate: true,
					fetch: false
				}, 3);
			}
		};
		const loadImg = async (i) => {
			const imgEle = imgEleList[i];
			const originalUrl = imgEle.dataset.original;
			const name = helper.getFileName(originalUrl);
			if (imgEle.dataset.imgUrl) return {
				name,
				src: imgEle.dataset.imgUrl
			};
			const res = await downloadImg(imgEle.dataset.original);
			if (res.response.size === 0) {
				core.toast.warn(\`涓嬭浇鍘熷浘鏃跺嚭閿? \${imgEle.dataset.page}\`);
				return "";
			}
			imgEle.src = \`\${URL.createObjectURL(res.response)}#\${imgEle.src}\`;
			try {
				await helper.waitImgLoad(imgEle, 1e3 * 10);
			} catch {
				URL.revokeObjectURL(imgEle.src);
				imgEle.src = originalUrl;
				core.toast.warn(\`鍔犺浇鍘熷浘鏃跺嚭閿? \${imgEle.dataset.page}\`);
				return "";
			}
			try {
				if (imgEle.nextElementSibling?.tagName === "CANVAS") imgEle.nextElementSibling.remove();
				unsafeWindow.onImageLoaded(imgEle);
				const blob = await helper.canvasToBlob(imgEle.nextElementSibling, "image/webp", 1);
				URL.revokeObjectURL(imgEle.src);
				if (!blob) throw new Error("杞崲鍥剧墖鏃跺嚭閿?);
				const url = URL.createObjectURL(blob);
				imgEle.dataset.imgUrl = url;
				return {
					name,
					src: url
				};
			} catch (error) {
				imgEle.src = originalUrl;
				core.toast.warn(\`杞崲鍥剧墖鏃跺嚭閿? \${imgEle.dataset.page}, \${error.message}\`);
				return "";
			}
		};
		await helper.wait(() => {
			const loadedNum = helper.querySelectorAll(".lazy-loaded").length;
			return loadedNum > 0 && helper.querySelectorAll("canvas").length - loadedNum <= 1;
		});
		setState("comicMap", "", { getImgList: ({ dynamicLazyLoad }) => dynamicLazyLoad({
			loadImg,
			length: imgEleList.length
		}) });
	} }
});
//#endregion
`,
	"site/kemono": `\nlet core = require("core");
let helper = require("helper");
let solid_js_web = require("solid-js/web");
let solid_js = require("solid-js");
let helper_languages = require("helper/languages");
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/swipe.svg
var _tmpl$$4 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m21.15 2.85-1.02 1.02C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2.85 2.85a.5.5 0 0 0-.85.36V6.5c0 .28.22.5.5.5h3.29c.45 0 .67-.54.35-.85L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43l-1.22 1.22a.5.5 0 0 0 .36.85h3.29c.28 0 .5-.22.5-.5V3.21a.5.5 0 0 0-.85-.36"></path><path d="M14.5 12.71c-.28-.14-.58-.21-.89-.21H13v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-3.44-.72a1.12 1.12 0 0 0-1.02 1.89l4.01 4.01c.37.37.88.58 1.41.58h6.41c1 0 1.84-.73 1.98-1.72l.63-4.46c.12-.85-.32-1.69-1.09-2.07z">\`);
var swipe_default = (props = {}) => (() => {
	var _el$ = _tmpl$$4();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/swipe_vertical.svg
var _tmpl$$3 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M0 12c0 3.22 1.13 6.18 3.02 8.5H1.75c-.41 0-.75.34-.75.75s.34.75.75.75H5c.55 0 1-.45 1-1v-3.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.16c-1.86-2.11-3-4.88-3-7.91s1.14-5.79 3-7.91v2.16c0 .41.34.75.75.75S6 6.66 6 6.25V3c0-.55-.45-1-1-1H1.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.27A13.4 13.4 0 0 0 0 12m8.83 7.1c-.26-.6.09-1.28.73-1.41l3.58-.71-4.35-9.81c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49.84-.37c.28-.13.59-.18.9-.17l4.56.21a2 2 0 0 1 1.83 1.45l1.23 4.33c.27.96-.2 1.97-1.11 2.37l-5.63 2.49c-.48.21-1.26.33-1.76.14l-5.45-2.27a.95.95 0 0 1-.54-.52">\`);
var swipe_vertical_default = (props = {}) => (() => {
	var _el$ = _tmpl$$3();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region locales/en.json
var en_default = {
	alert: {
		"comic_load_error": "Comic loading error",
		"download_failed": "Download failed",
		"fetch_comic_img_failed": "Failed to fetch comic images",
		"img_load_failed": "Image loading failed",
		"no_img_download": "No images available for download",
		"repeat_load": "Loading image, please wait",
		"retry_get_img_url": "Retrieve the URL of the image on page {{i}} again",
		"server_connect_failed": "Unable to connect to the server"
	},
	button: {
		"auto_scroll": "Auto scroll",
		"close_current_page_translation": "Close translation of the current page",
		"download_completed": "Download completed",
		"download_completed_error": "Download complete, but {{errorNum}} images failed to download",
		"downloading": "Downloading",
		"fullscreen": "Fullscreen",
		"fullscreen_exit": "Exit Fullscreen",
		"grid_mode": "Grid mode",
		"packaging": "Packaging",
		"page_fill": "Page fill",
		"page_mode_double": "Double page mode",
		"page_mode_single": "Single page mode",
		"scroll_mode": "Scroll mode",
		"translate_current_page": "Translate current page",
		"zoom_in": "Zoom in",
		"zoom_out": "Zoom out"
	},
	description: "Add enhanced features to the comic site for optimized experience, including dual-page reading and translation.",
	eh_tag_lint: {
		"combo": "[tag]: In most cases, Should coexist with [tag]",
		"conflict": "[tag]: Should not coexist with [tag]",
		"correct_tag": "Should be the correct tag",
		"miss_female": "Missing male tag, might need",
		"miss_parody": "Missing parody tag, might need",
		"possible_conflict": "[tag]: In most cases, Should not coexist with [tag]",
		"prerequisite": "[tag]: The prerequisite tag [tag] does not exist"
	},
	end_page: {
		"next_button": "Next chapter",
		"prev_button": "Prev chapter",
		"tip": {
			"end_jump": "Reached the last page, scrolling down will jump to the next chapter",
			"exit": "Reached the last page, scrolling down will exit",
			"start_jump": "Reached the first page, scrolling up will jump to the previous chapter"
		}
	},
	hotkeys: {
		"enter_read_mode": "Enter reading mode",
		"float_tag_list": "Floating tag list",
		"jump_next": "Jump to next chap",
		"jump_prev": "Jump to previous chap",
		"jump_to_end": "Jump to the last page",
		"jump_to_home": "Jump to the first page",
		"multi_select_load": "Multi-select load",
		"page_down": "Turn the page to the down",
		"page_up": "Turn the page to the up",
		"reload_current_error_img": "Reload current error image",
		"repeat_tip": "This hotkey has been bound to \\"{{hotkey}}\\"",
		"scroll_down": "Scroll down",
		"scroll_left": "Scroll left",
		"scroll_right": "Scroll right",
		"scroll_up": "Scroll up",
		"switch_auto_enlarge": "Switch auto image enlarge option",
		"switch_dir": "Switch reading direction",
		"switch_grid_mode": "Switch grid mode",
		"switch_page_fill": "Switch page fill",
		"switch_scroll_mode": "Switch scroll mode",
		"switch_single_double_page_mode": "Switch single/double page mode"
	},
	img_status: {
		"error": "Load Error",
		"loading": "Loading",
		"wait": "Waiting for load"
	},
	other: {
		"auto": "Auto",
		"custom": "Custom",
		"disable": "Disable",
		"distance": "distance",
		"download": "Download",
		"enabled": "Enabled",
		"enter_comic_read_mode": "Enter comic reading mode",
		"exit": "Exit",
		"fab_hidden": "Hide floating button",
		"fab_show": "Show floating button",
		"fill_page": "Fill Page",
		"hotkeys": "Hotkeys",
		"img_loading": "Image loading",
		"interval": "interval",
		"loading_img": "Loading image",
		"multi_select_mode": "Multi-select mode",
		"none": "None",
		"or": "or",
		"other": "Other",
		"page_range": "Please enter the page range.:\\n (e.g., 1, 3-5, 9-)",
		"read_mode": "Reading mode",
		"selected": "Selected",
		"setting": "Settings",
		"clear": "Clear"
	},
	pwa: {
		"alert": {
			"img_data_error": "Image data error",
			"img_not_found": "Image not found",
			"img_not_found_files": "Please select an image file or a compressed file containing image files",
			"img_not_found_folder": "No image files or compressed files containing image files in the folder",
			"not_valid_url": "Not a valid URL",
			"parse_error": "Parsing error",
			"password_error": "Incorrect password",
			"repeat_load": "Loading other files鈥?,
			"userscript_not_installed": "ComicRead userscript not installed"
		},
		"button": {
			"enter_url": "Enter URL",
			"install": "Install",
			"no_more_prompt": "Do not prompt again",
			"resume_read": "Restore reading",
			"select_files": "Select File",
			"select_folder": "Select folder"
		},
		"install_md": "### Tired of opening this webpage every time?\\nIf you wish to:\\n1. Have an independent window, as if using local software\\n1. Add to the local compressed file opening method for easy direct opening\\n1. Use offline\\n### Welcome to install this page as a PWA app on your computer馃槂馃憤",
		"message": {
			"enter_password": "Please enter your password",
			"parsing": "Parsing"
		},
		"tip_enter_url": "Please enter the URL of the compressed file",
		"tip_md": "# ComicRead PWA\\nRead **local** comics using [ComicRead](https://github.com/hymbz/ComicReadScript) reading mode.\\n---\\n### Drag and drop image files, folders, or compressed files directly to start reading\\n*You can also choose to **paste directly** or **enter** the URL of the compressed file for downloading and reading*"
	},
	setting: {
		"hotkeys": {
			"add": "Add new hotkeys",
			"restore": "Restore default hotkeys"
		},
		"language": "Language",
		"option": {
			"abreast_duplicate": "Column duplicates ratio",
			"abreast_mode": "Abreast scroll mode",
			"adjust_to_width": "Adaptive Width",
			"align_edge": "Align to edge when turning page",
			"always_load_all_img": "Always load all images",
			"autoFullscreen": "Auto fullscreen",
			"autoHiddenMouse": "Auto hide mouse",
			"auto_scale": "Auto Scale",
			"auto_scroll_trigger_end": "Continue scrolling on the end page",
			"auto_switch_page_mode": "Auto switch single/double page mode by aspect ratio",
			"background_color": "Background Color",
			"click_page_turn_area": "Touch area",
			"click_page_turn_enabled": "Click to turn page",
			"click_page_turn_swap_area": "Swap LR clickable areas",
			"dark_mode": "Dark mode",
			"dark_mode_auto": "Dark mode follow system",
			"dir_ltr": "LTR (American comics)",
			"dir_rtl": "RTL (Japanese manga)",
			"disable_auto_enlarge": "Disable automatic image enlarge",
			"first_page_fill": "Enable first page fill by default",
			"full_width": "Viewport Width",
			"img_recognition": "Image Recognition",
			"img_recognition_background": "Recognition background color",
			"img_recognition_pageFill": "Auto switch page fill",
			"img_recognition_warn": "鉂?The current browser does not support Web Workers. Enabling this feature may cause page lag. It's recommended to upgrade or switch browsers.",
			"img_recognition_warn_2": "鉂?The current website does not support Web Workers. Enabling this feature may cause page lag.",
			"paragraph_appearance": "Appearance",
			"paragraph_dir": "Reading direction",
			"paragraph_display": "Display",
			"paragraph_scrollbar": "Scrollbar",
			"paragraph_translation": "Translation",
			"preload_page_num": "Preload page number",
			"scroll_end": "After reaching the End",
			"scroll_end_auto": "First jump to previous/next chapter, else exit",
			"scroll_mode_img_scale": "Scroll mode image zoom ratio",
			"scroll_mode_img_spacing": "Scroll mode image spacing",
			"scrollbar_auto_hidden": "Auto hide",
			"scrollbar_easy_scroll": "Easy scroll",
			"scrollbar_position": "position",
			"scrollbar_position_bottom": "Bottom",
			"scrollbar_position_hidden": "Hidden",
			"scrollbar_position_right": "Right",
			"scrollbar_position_top": "Top",
			"scrollbar_show_img_status": "Show image loading status",
			"show_clickable_area": "Show clickable areas",
			"show_comments": "Show comments on the end page",
			"shrink_menu": "Enable menu area",
			"swap_page_turn_key": "Swap LR page-turning keys",
			"zoom": "Image zoom ratio"
		},
		"sync_options_other_site": "Sync read options to other sites",
		"translation": {
			"cotrans_tip": "<p>Using the interface provided by <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> to translate images, which is maintained by its maintainer at their own expense.</p>\\n<p>When multiple people use it at the same time, they need to queue and wait. If the waiting queue reaches its limit, uploading new images will result in an error. Please try again after a while.</p>\\n<p>So please <b>mind the frequency of use</b>.</p>\\n<p>It is highly recommended to locally deploy Manga Image Translator, as it does not consume server resources and does not require queuing.</p>",
			"options": {
				"box_threshold": "Box threshold",
				"detection_resolution": "Text detection resolution",
				"direction": "Render text orientation",
				"direction_auto": "Follow source",
				"direction_horizontal": "Horizontal only",
				"direction_vertical": "Vertical only",
				"force_retry": "Force retry (ignore cache)",
				"inpainter": "Inpainter",
				"inpainting_size": "Inpainting size",
				"local_url": "customize server URL",
				"mask_dilation_offset": "Mask dilation offset",
				"only_download_translated": "Download only the translated images",
				"target_language": "Target language",
				"text_detector": "Text detector",
				"translator": "Translator",
				"unclip_ratio": "Unclip ratio"
			},
			"range": "Scope of Translation",
			"provider": "Translator",
			"translate_all": "Translate all images",
			"translate_to_end": "Translate the current page to the end"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "Add hotkeys actions",
			"auto_adjust_option": "Auto adjust reading option",
			"auto_page_turn": "Infinite scroll",
			"auto_show": "Auto enter reading mode",
			"block_totally": "Totally block comics",
			"colorize_tag": "Colorize tags",
			"cross_site_link": "Cross-site Link",
			"detect_ad": "Detect advertise page",
			"expand_tag_list": "Expand tag list",
			"float_tag_list": "Floating tag list",
			"load_original_image": "Load original image",
			"lock_option": "Lock site option",
			"open_link_new_page": "Open links in a new page",
			"quick_favorite": "Quick favorite",
			"quick_rating": "Quick rating",
			"quick_tag_define": "Quick view tag define",
			"remember_current_site": "Remember the current site",
			"tag_lint": "Tag Lint"
		},
		"changed_load_failed": "The website has undergone changes, unable to load comics",
		"ehentai": {
			"change_favorite_failed": "Failed to change the favorite",
			"change_favorite_success": "Successfully changed the favorite",
			"change_rating_failed": "Failed to change the rating",
			"change_rating_success": "Successfully changed the rating",
			"fetch_favorite_failed": "Failed to get favorite info",
			"fetch_img_page_source_failed": "Failed to get the source code of the image page",
			"fetch_img_page_url_failed": "Failed to get the image page address from the detail page",
			"fetch_img_url_failed": "Failed to get the image address from the image page",
			"hitomi_error": "hitomi matching error",
			"html_changed_link_failed": "The page structure has changed, and the associated external site features are not functioning properly",
			"ip_banned": "IP address is banned",
			"nhentai_error": "nhentai matching error",
			"nhentai_failed": "Matching failed, please refresh after confirming login to {{nhentai}}"
		},
		"nhentai": {
			"fetch_next_page_failed": "Failed to get next page of comic data",
			"tag_blacklist_fetch_failed": "Failed to fetch tag blacklist"
		},
		"show_settings_menu": "Show settings menu",
		"simple": {
			"auto_read_mode_message": "\\"Auto enter reading mode\\" is enabled by default",
			"no_img": "No suitable comic images were found.\\nIf necessary, you can click here to close the simple reading mode.",
			"simple_read_mode": "Enter simple reading mode"
		}
	},
	touch_area: {
		"menu": "Menu",
		"type": {
			"edge": "Edge",
			"l": "L",
			"left_right": "Left Right",
			"up_down": "Up Down"
		}
	},
	translation: {
		"status": {
			"after-translating": "Post-translation processing",
			"cancelled": "Translation cancelled",
			"colorizing": "Colorizing",
			"default": "Unknown status",
			"detection": "Detecting text",
			"downloading": "Downloading",
			"downscaling": "Downscaling",
			"error": "Error during translation",
			"error-download": "Download error",
			"error-lang": "The target language is not supported by the chosen translator",
			"error-translating": "Did not get any text back from the text translation service",
			"error-too-large": "Image size too large (greater than 8000x8000 px)",
			"error-upload": "Upload error",
			"error-disconnect": "Lost connection to server",
			"error-with-id": "Error during translation",
			"finished": "Finishing",
			"inpainting": "Inpainting",
			"mask-generation": "Generating mask",
			"ocr": "Scanning text",
			"pending": "Pending",
			"pending-pos": "Pending",
			"preparing": "Waiting for idle window",
			"rendering": "Rendering",
			"running_pre_translation_hooks": "Running pre-translation hooks",
			"saved": "Saved",
			"saving": "Saving",
			"skip-no-regions": "No text regions detected in the image",
			"skip-no-text": "No text detected in the image",
			"textline_merge": "Merging text lines",
			"translating": "Translating",
			"upload": "Uploading",
			"upscaling": "Upscaling",
			"uploading": "Uploading"
		},
		"tip": {
			"check_img_status_failed": "Failed to check image status",
			"download_img_failed": "Failed to download image",
			"get_translator_list_error": "Error occurred while getting the list of available translation services",
			"id_not_returned": "No id returned",
			"img_downloading": "Downloading images",
			"img_not_fully_loaded": "Image has not finished loading",
			"pending": "Pending, {{pos}} in queue",
			"resize_img_failed": "Failed to resize image",
			"translating": "Translating image",
			"translation_completed": "Translation completed",
			"upload": "Uploading image",
			"upload_error": "Image upload error",
			"upload_return_error": "Error during server translation",
			"wait_translation": "Waiting for translation"
		},
		"translator": {
			"baidu": "baidu",
			"deepl": "DeepL",
			"google": "Google",
			"gpt3.5": "GPT-3.5",
			"none": "Remove texts",
			"offline": "offline translator",
			"original": "Original",
			"papago": "Papago",
			"youdao": "youdao"
		}
	},
	upscale: {
		"module_download_complete": "Image Upscaling Model Download Complete",
		"module_download_failed": "Image Upscaling Model Download Failed",
		"module_downloading": "Image Upscaling Model Downloading...",
		"title": "Upscale Image",
		"upscaled": "upscaled",
		"upscaling": "upscaling",
		"webgpu_tip": "Unable to upscale images using WebGPU, processing will be slower"
	}
};
//#endregion
//#region locales/ru.json
var ru_default = {
	alert: {
		"comic_load_error": "袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈 泻芯屑懈泻褋邪",
		"download_failed": "袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈",
		"fetch_comic_img_failed": "袧械 褍写邪谢芯褋褜 蟹邪谐褉褍蟹懈褌褜 懈蟹芯斜褉邪卸械薪懈褟",
		"img_load_failed": "袧械 褍写邪谢芯褋褜 蟹邪谐褉褍蟹懈褌褜 懈蟹芯斜褉邪卸械薪懈械",
		"no_img_download": "袧械褌 写芯褋褌褍锌薪褘褏 泻邪褉褌懈薪芯泻 写谢褟 蟹邪谐褉褍蟹泻懈",
		"repeat_load": "袟邪谐褉褍蟹泻邪 懈蟹芯斜褉邪卸械薪懈褟, 锌芯卸邪谢褍泄褋褌邪 锌芯写芯卸写懈褌械",
		"retry_get_img_url": "袩芯胁褌芯褉薪芯 锌芯谢褍褔懈褌褜 邪写褉械褋 懈蟹芯斜褉邪卸械薪懈褟 薪邪 褋褌褉邪薪懈褑械 {{i}}",
		"server_connect_failed": "袧械 褍写邪谢芯褋褜 锌芯写泻谢褞褔懈褌褜褋褟 泻 褋械褉胁械褉褍"
	},
	button: {
		"auto_scroll": "袗胁褌芯锌褉芯泻褉褍褌泻邪",
		"close_current_page_translation": "小泻褉褘褌褜 锌械褉械胁芯写 褌械泻褍褖械泄 褋褌褉邪薪懈褑褘",
		"download_completed": "袟邪谐褉褍蟹泻邪 蟹邪胁械褉褕械薪邪",
		"download_completed_error": "袟邪谐褉褍蟹泻邪 蟹邪胁械褉褕械薪邪, 薪芯 {{errorNum}} 懈蟹芯斜褉邪卸械薪懈泄 薪械 褍写邪谢芯褋褜 蟹邪谐褉褍蟹懈褌褜",
		"downloading": "小泻邪褔懈胁邪薪懈械",
		"fullscreen": "锌芯谢薪芯褝泻褉邪薪薪褘泄",
		"fullscreen_exit": "胁褘泄褌懈 懈蟹 锌芯谢薪芯褝泻褉邪薪薪芯谐芯 褉械卸懈屑邪",
		"grid_mode": "袪械卸懈屑 褋械褌泻懈",
		"packaging": "校锌邪泻芯胁泻邪",
		"page_fill": "袟邪锌芯谢薪懈褌褜 褋褌褉邪薪懈褑褍",
		"page_mode_double": "袛胁褍褏褔邪褋褌懈褔薪褘泄 褉械卸懈屑",
		"page_mode_single": "袨写薪芯褋褌褉邪薪懈褔薪褘泄 褉械卸懈屑",
		"scroll_mode": "袪械卸懈屑 锌褉芯泻褉褍褌泻懈",
		"translate_current_page": "袩械褉械胁械褋褌懈 褌械泻褍褖褍褞 褋褌褉邪薪懈褑褍",
		"zoom_in": "袩褉懈斜谢懈蟹懈褌褜",
		"zoom_out": "校屑械薪褜褕懈褌褜"
	},
	description: "袛芯斜邪胁谢褟械褌 褉邪褋褕懈褉械薪薪褘械 褎褍薪泻褑懈懈 写谢褟 褍写芯斜褋褌胁邪 薪邪 褋邪泄褌, 褌邪泻懈械 泻邪泻 写胁褍褏褋褌褉邪薪懈褔薪褘泄 褉械卸懈屑 懈 锌械褉械胁芯写.",
	eh_tag_lint: {
		"combo": "[褌械谐]: 袙 斜芯谢褜褕懈薪褋褌胁械 褋谢褍褔邪械胁 写芯谢卸械薪 褋芯褋褍褖械褋褌胁芯胁邪褌褜 褋 [褌械谐芯屑]",
		"conflict": "[tag]: 袧械 写芯谢卸械薪 褋芯褋褍褖械褋褌胁芯胁邪褌褜 褋 [tag]",
		"correct_tag": "袛芯谢卸械薪 斜褘褌褜 锌褉邪胁懈谢褜薪褘泄 褌械谐",
		"miss_female": "袨褌褋褍褌褋褌胁褍械褌 屑褍卸褋泻芯泄 褌械谐, 胁芯蟹屑芯卸薪芯, 锌芯薪邪写芯斜懈褌褋褟",
		"miss_parody": "袨褌褋褍褌褋褌胁褍械褌 褌械谐 锌邪褉芯写懈懈, 胁芯蟹屑芯卸薪芯, 锌芯薪邪写芯斜懈褌褋褟",
		"possible_conflict": "[tag]: 袙 斜芯谢褜褕懈薪褋褌胁械 褋谢褍褔邪械胁 薪械 写芯谢卸械薪 褋芯褋褍褖械褋褌胁芯胁邪褌褜 褋 [tag]",
		"prerequisite": "[tag]: 袩褉械写胁邪褉懈褌械谢褜薪褘泄 褌械谐 [tag] 薪械 褋褍褖械褋褌胁褍械褌"
	},
	end_page: {
		"next_button": "小谢械写褍褞褖邪褟 谐谢邪胁邪",
		"prev_button": "袩褉械写褘写褍褖邪褟 谐谢邪胁邪",
		"tip": {
			"end_jump": "袩芯褋谢械写薪褟褟 褋褌褉邪薪懈褑邪, 褋谢械写褍褞褖邪褟 谐谢邪胁邪 薪懈卸械",
			"exit": "袩芯褋谢械写薪褟褟 褋褌褉邪薪懈褑邪, 薪懈卸械 泻芯屑懈泻褋 斜褍写械褌 蟹邪泻褉褘褌",
			"start_jump": "袩械褉胁邪褟 褋褌褉邪薪懈褑邪, 胁褘褕械 斜褍写械褌 蟹邪谐褉褍卸械薪邪 锌褉械写褘写褍褖邪褟 谐谢邪胁邪"
		}
	},
	hotkeys: {
		"enter_read_mode": "袪械卸懈屑 褔褌械薪懈褟",
		"float_tag_list": "袩谢邪胁邪褞褖懈泄 褋锌懈褋芯泻 褌械谐芯胁",
		"jump_next": "袩械褉械泄褌懈 泻 褋谢械写褍褞褖械泄 谐谢邪胁械",
		"jump_prev": "袩械褉械泄褌懈 泻 锌褉械写褘写褍褖械泄 谐谢邪胁械",
		"jump_to_end": "袩械褉械泄褌懈 泻 锌芯褋谢械写薪械泄 褋褌褉邪薪懈褑械",
		"jump_to_home": "袩械褉械泄褌懈 泻 锌械褉胁芯泄 褋褌褉邪薪懈褑械",
		"multi_select_load": "袦薪芯卸械褋褌胁械薪薪邪褟 蟹邪谐褉褍蟹泻邪",
		"page_down": "袩械褉械谢懈褋褌薪褍褌褜 褋褌褉邪薪懈褑褍 胁薪懈蟹",
		"page_up": "袩械褉械谢懈褋褌薪褍褌褜 褋褌褉邪薪懈褑褍 胁胁械褉褏",
		"reload_current_error_img": "袩械褉械蟹邪谐褉褍蟹懈褌褜 褌械泻褍褖械械 芯褕懈斜芯褔薪芯械 懈蟹芯斜褉邪卸械薪懈械",
		"repeat_tip": "协褌邪 谐芯褉褟褔邪褟 泻谢邪胁懈褕邪 斜褘谢邪 薪邪蟹薪邪褔械薪邪 薪邪 \\"{{hotkey}}\\"",
		"scroll_down": "袩褉芯泻褉褍褌懈褌褜 胁薪懈蟹",
		"scroll_left": "袩褉芯泻褉褍褌懈褌褜 胁谢械胁芯",
		"scroll_right": "袩褉芯泻褉褍褌懈褌械 胁锌褉邪胁芯",
		"scroll_up": "袩褉芯泻褉褍褌懈褌械 胁胁械褉褏",
		"switch_auto_enlarge": "袗胁褌芯屑邪褌懈褔械褋泻芯械 锌褉懈斜谢懈卸械薪懈械",
		"switch_dir": "袧邪锌褉邪胁谢械薪懈械 褔褌械薪懈褟",
		"switch_grid_mode": "袪械卸懈屑 褋械褌泻懈",
		"switch_page_fill": "袟邪锌芯谢薪械薪懈械 褋褌褉邪薪懈褑褘",
		"switch_scroll_mode": "袪械卸懈屑 锌褉芯泻褉褍褌泻懈",
		"switch_single_double_page_mode": "袨写薪芯褋褌褉邪薪懈褔薪褘泄/袛胁褍褏褋褌褉邪薪懈褔薪褘泄 褉械卸懈屑"
	},
	img_status: {
		"error": "袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈",
		"loading": "袟邪谐褉褍蟹泻邪",
		"wait": "袨卸懈写邪薪懈械 蟹邪谐褉褍蟹泻懈"
	},
	other: {
		"auto": "袗胁褌芯",
		"custom": "Custom",
		"disable": "袨褌泻谢褞褔懈褌褜",
		"distance": "褉邪褋褋褌芯褟薪懈械",
		"download": "小泻邪褔邪褌褜",
		"enabled": "袙泻谢褞褔械薪芯",
		"enter_comic_read_mode": "袪械卸懈屑 褔褌械薪懈褟 泻芯屑懈泻褋芯胁",
		"exit": "袙褘褏芯写",
		"fab_hidden": "小泻褉褘褌褜 锌谢邪胁邪褞褖褍褞 泻薪芯锌泻褍",
		"fab_show": "袩芯泻邪蟹邪褌褜 锌谢邪胁邪褞褖褍褞 泻薪芯锌泻褍",
		"fill_page": "袟邪锌芯谢薪懈褌褜 褋褌褉邪薪懈褑褍",
		"hotkeys": "袚芯褉褟褔懈械 泻谢邪胁懈褕懈",
		"img_loading": "袠蟹芯斜褉邪卸械薪懈械 蟹邪谐褉褍卸邪械褌褋褟",
		"interval": "懈薪褌械褉胁邪谢",
		"loading_img": "袟邪谐褉褍蟹泻邪 懈蟹芯斜褉邪卸械薪懈褟",
		"multi_select_mode": "袪械卸懈屑 屑薪芯卸械褋褌胁械薪薪芯谐芯 胁褘斜芯褉邪",
		"none": "袨褌褋褍褌褋褌胁褍械褌",
		"or": "懈谢懈",
		"other": "袛褉褍谐芯械",
		"page_range": "袙胁械写懈褌械 写懈邪锌邪蟹芯薪 褋褌褉邪薪懈褑.:\\n (薪邪锌褉懈屑械褉, 1, 3-5, 9-)",
		"read_mode": "袪械卸懈屑 褔褌械薪懈褟",
		"selected": "袙褘斜褉邪薪芯",
		"setting": "袧邪褋褌褉芯泄泻懈",
		"clear": "袨褔懈褋褌懈褌褜"
	},
	pwa: {
		"alert": {
			"img_data_error": "袨褕懈斜泻邪 写邪薪薪褘褏 懈蟹芯斜褉邪卸械薪懈褟",
			"img_not_found": "袠蟹芯斜褉邪卸械薪懈械 薪械 薪邪泄写械薪芯",
			"img_not_found_files": "袩芯卸邪谢褍泄褋褌邪 胁褘斜械褉懈褌械 褎邪泄谢 懈谢懈 邪褉褏懈胁 褋 懈蟹芯斜褉邪卸械薪懈褟屑懈",
			"img_not_found_folder": "袙 锌邪锌泻械 薪械 薪邪泄写械薪褘 懈蟹芯斜褉邪卸械薪懈褟 懈谢懈 邪褉褏懈胁褘 褋 懈蟹芯斜褉邪卸械薪懈褟屑懈",
			"not_valid_url": "袧械胁邪谢懈写薪褘泄 URL",
			"parse_error": "袨褕懈斜泻邪 邪薪邪谢懈蟹邪",
			"password_error": "袧械胁械褉薪褘泄 锌邪褉芯谢褜",
			"repeat_load": "袟邪谐褉褍蟹泻邪 写褉褍谐懈褏 褎邪泄谢芯胁鈥?,
			"userscript_not_installed": "ComicRead 薪械 褍褋褌邪薪芯胁谢械薪"
		},
		"button": {
			"enter_url": "袙胁械褋褌懈 URL",
			"install": "校褋褌邪薪芯胁懈褌褜",
			"no_more_prompt": "袘芯谢褜褕械 薪械 锌芯泻邪蟹褘胁邪褌褜",
			"resume_read": "袩褉芯写芯谢卸懈褌褜 褔褌械薪懈械",
			"select_files": "袙褘斜褉邪褌褜 褎邪泄谢",
			"select_folder": "袙褘斜褉邪褌褜 锌邪锌泻褍"
		},
		"install_md": "### 校褋褌邪谢懈 芯褌泻褉褘胁邪褌褜 褝褌褍 褋褌褉邪薪懈褑褍 泻邪卸写褘泄 褉邪蟹?\\n袝褋谢懈 胁褘 褏芯褌懈褌械:\\n1. 袠屑械褌褜 芯褌写械谢褜薪芯械 芯泻薪芯, 泻邪泻 械褋谢懈 斜褘 胁褘 懈褋锌芯谢褜蟹芯胁邪谢懈 芯斜褘褔薪芯械 锌褉芯谐褉邪屑屑薪芯械 芯斜械褋锌械褔械薪懈械\\n1. 袨褌泻褉褘胁邪褌褜 邪褉褏懈胁褘 薪邪锌褉褟屑褍褞\\n1. 袩芯谢褜蟹芯胁邪褌褜褋褟 芯褎褎谢邪泄薪\\n### 校褋褌邪薪芯胁懈褌械 褝褌褍 褋褌褉邪薪懈褑褍 胁 泻邪褔械褋褌胁械 [PWA](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5) 薪邪 褋胁芯泄 泻芯屑锌褜褞褌械褉 馃惡鈽濓笍",
		"message": {
			"enter_password": "袩芯卸邪谢褍泄褋褌邪 胁胁械写懈褌械 锌邪褉芯谢褜",
			"parsing": "袪邪蟹斜芯褉"
		},
		"tip_enter_url": "袙胁械写懈褌械 URL 邪褉褏懈胁邪",
		"tip_md": "# ComicRead PWA\\n袠褋锌芯谢褜蟹褍泄褌械 [ComicRead](https://github.com/hymbz/ComicReadScript) 写谢褟 褔褌械薪懈褟 泻芯屑懈泻褋芯胁 **谢芯泻邪谢褜薪芯**.\\n---\\n### 袩械褉械褌邪褖懈褌械 懈蟹芯斜褉邪卸械薪懈褟, 锌邪锌泻懈 懈谢懈 邪褉褏懈胁褘 褔褌芯斜褘 薪邪褔邪褌褜 褔懈褌邪褌褜\\n*袙褘 褌邪泻 卸械 屑芯卸械褌械 **芯褌泻褉褘褌褜** 懈谢懈 **胁褋褌邪胁懈褌褜** URL 邪褉褏懈胁邪 薪邪 薪邪锌褉褟屑褍褞*"
	},
	setting: {
		"hotkeys": {
			"add": "袛芯斜邪胁懈褌褜 谐芯褉褟褔懈械 泻谢邪胁懈褕懈",
			"restore": "袙芯褋褋褌邪薪芯胁懈褌褜 谐芯褉褟褔懈械 泻谢邪胁懈褕懈 锌芯 褍屑芯谢褔邪薪懈褞"
		},
		"language": "携蟹褘泻",
		"option": {
			"abreast_duplicate": "袣芯褝褎褎懈褑懈械薪褌 写褍斜谢懈褉芯胁邪薪懈褟 褋褌芯谢斜褑芯胁",
			"abreast_mode": "袪械卸懈屑 锌褉芯泻褉褍褌泻懈 胁 褉褟写",
			"adjust_to_width": "袗写邪锌褌懈胁薪邪褟 褕懈褉懈薪邪",
			"align_edge": "袙褘褉邪胁薪懈胁邪薪懈械 锌芯 泻褉邪褞 锌褉懈 锌械褉械谢懈褋褌褘胁邪薪懈懈 褋褌褉邪薪懈褑褘",
			"always_load_all_img": "袙褋械谐写邪 蟹邪谐褉褍卸邪褌褜 胁褋械 懈蟹芯斜褉邪卸械薪懈褟",
			"autoFullscreen": "袗胁褌芯 锌芯谢薪褘泄 褝泻褉邪薪",
			"autoHiddenMouse": "袗胁褌芯屑邪褌懈褔械褋泻懈 褋泻褉褘胁邪褌褜 泻褍褉褋芯褉 屑褘褕懈",
			"auto_scale": "袗胁褌芯 屑邪褋褕褌邪斜",
			"auto_scroll_trigger_end": "袩褉芯写芯谢卸懈褌褜 锌褉芯泻褉褍褌泻褍 薪邪 泻芯薪械褔薪芯泄 褋褌褉邪薪懈褑械",
			"auto_switch_page_mode": "袗胁褌芯屑邪褌懈褔械褋泻芯械 锌械褉械泻谢褞褔械薪懈械 褉械卸懈屑邪 芯写薪芯泄/写胁芯泄薪芯泄 褋褌褉邪薪懈褑褘 胁 蟹邪胁懈褋懈屑芯褋褌懈 芯褌 褋芯芯褌薪芯褕械薪懈褟 褋褌芯褉芯薪",
			"background_color": "笑胁械褌 褎芯薪邪",
			"click_page_turn_area": "袨斜谢邪褋褌褜 薪邪卸邪褌懈褟",
			"click_page_turn_enabled": "袩械褉械谢懈褋褌褘胁邪褌褜 锌芯 泻谢懈泻褍",
			"click_page_turn_swap_area": "袩芯屑械薪褟褌褜 屑械褋褌邪屑懈 锌褉邪胁褍褞 懈 谢械胁褍褞 芯斜谢邪褋褌懈 锌械褉械泻谢褞褔械薪懈褟 褋褌褉邪薪懈褑",
			"dark_mode": "孝褢屑薪邪褟 褌械屑邪",
			"dark_mode_auto": "孝褢屑薪褘泄 褉械卸懈屑 褋谢械写褍械褌 蟹邪 褋懈褋褌械屑芯泄",
			"dir_ltr": "效褌械薪懈械 褋谢械胁邪 薪邪锌褉邪胁芯 (袗屑械褉懈泻邪薪褋泻懈械 泻芯屑懈泻褋褘)",
			"dir_rtl": "效褌械薪懈械 褋锌褉邪胁邪 薪邪谢械胁芯 (携锌芯薪褋泻邪褟 屑邪薪谐邪)",
			"disable_auto_enlarge": "袨褌泻谢褞褔懈褌褜 邪胁褌芯屑邪褌懈褔械褋泻芯械 屑邪褋褕褌邪斜懈褉芯胁邪薪懈械 懈蟹芯斜褉邪卸械薪懈泄",
			"first_page_fill": "袙泻谢褞褔懈褌褜 蟹邪锌芯谢薪械薪懈械 锌械褉胁芯泄 褋褌褉邪薪懈褑褘 锌芯 褍屑芯谢褔邪薪懈褞",
			"full_width": "楔懈褉懈薪邪 芯泻薪邪 锌褉芯褋屑芯褌褉邪",
			"img_recognition": "褉邪褋锌芯蟹薪邪胁邪薪懈械 懈蟹芯斜褉邪卸械薪懈泄",
			"img_recognition_background": "袨锌褉械写械谢懈褌褜 褑胁械褌 褎芯薪邪",
			"img_recognition_pageFill": "袗胁褌芯屑邪褌懈褔械褋泻芯械 锌械褉械泻谢褞褔械薪懈械 蟹邪锌芯谢薪械薪懈褟 褋褌褉邪薪懈褑褘",
			"img_recognition_warn": "鉂?孝械泻褍褖懈泄 斜褉邪褍蟹械褉 薪械 锌芯写写械褉卸懈胁邪械褌 Web Workers. 袙泻谢褞褔械薪懈械 褝褌芯泄 褎褍薪泻褑懈懈 屑芯卸械褌 胁褘蟹胁邪褌褜 蟹邪写械褉卸泻褍 褋褌褉邪薪懈褑褘. 袪械泻芯屑械薪写褍械褌褋褟 芯斜薪芯胁懈褌褜 懈谢懈 褋屑械薪懈褌褜 斜褉邪褍蟹械褉.",
			"img_recognition_warn_2": "鉂?孝械泻褍褖懈泄 胁械斜-褋邪泄褌 薪械 锌芯写写械褉卸懈胁邪械褌 Web Workers. 袙泻谢褞褔械薪懈械 褝褌芯泄 褎褍薪泻褑懈懈 屑芯卸械褌 锌褉懈胁械褋褌懈 泻 蟹邪写械褉卸泻械 褋褌褉邪薪懈褑褘.",
			"paragraph_appearance": "袙薪械褕薪芯褋褌褜",
			"paragraph_dir": "袧邪锌褉邪胁谢械薪懈械 褔褌械薪懈褟",
			"paragraph_display": "袨褌芯斜褉邪卸械薪懈械",
			"paragraph_scrollbar": "袩芯谢芯褋邪 锌褉芯泻褉褍褌泻懈",
			"paragraph_translation": "袩械褉械胁芯写",
			"preload_page_num": "袩褉械写蟹邪谐褉褍卸邪褌褜 褋褌褉邪薪懈褑",
			"scroll_end": "袩芯褋谢械 写芯褋褌懈卸械薪懈褟 泻芯薪褑邪",
			"scroll_end_auto": "小薪邪褔邪谢邪 锌械褉械褏芯写 泻 锌褉械写褘写褍褖械泄/褋谢械写褍褞褖械泄 谐谢邪胁械, 懈薪邪褔械 胁褘褏芯写",
			"scroll_mode_img_scale": "袣芯褝褎褎懈褑懈械薪褌 屑邪褋褕褌邪斜懈褉芯胁邪薪懈褟 懈蟹芯斜褉邪卸械薪懈褟 胁 褉械卸懈屑械 褋泻褉芯谢谢懈薪谐邪",
			"scroll_mode_img_spacing": "袪邪褋褋褌芯褟薪懈械 屑械卸写褍 褋褌褉邪薪懈褑邪屑懈 胁 褉械卸懈屑械 褋泻褉芯谢谢懈薪谐邪",
			"scrollbar_auto_hidden": "袗胁褌芯屑邪褌懈褔械褋泻懈 褋泻褉褘胁邪褌褜",
			"scrollbar_easy_scroll": "袥褢谐泻邪褟 锌褉芯泻褉褍褌泻邪",
			"scrollbar_position": "袩芯蟹懈褑懈褟",
			"scrollbar_position_bottom": "小薪懈蟹褍",
			"scrollbar_position_hidden": "小锌褉褟褌邪薪芯",
			"scrollbar_position_right": "小锌褉邪胁邪",
			"scrollbar_position_top": "小胁械褉褏褍",
			"scrollbar_show_img_status": "袩芯泻邪蟹褘胁邪褌褜 褋褌邪褌褍褋 蟹邪谐褉褍蟹泻懈 懈蟹芯斜褉邪卸械薪懈褟",
			"show_clickable_area": "袩芯泻邪蟹褘胁邪褌褜 泻谢懈泻邪斜械谢褜薪褘械 芯斜谢邪褋褌懈",
			"show_comments": "袩芯泻邪蟹褘胁邪褌褜 泻芯屑屑械薪褌邪褉懈懈 薪邪 锌芯褋谢械写薪械泄 褋褌褉邪薪懈褑械",
			"shrink_menu": "袙泻谢褞褔懈褌褜 芯斜谢邪褋褌褜 屑械薪褞",
			"swap_page_turn_key": "袩芯屑械薪褟褌褜 屑械褋褌邪屑懈 泻谢邪胁懈褕懈 锌械褉械泻谢褞褔械薪懈褟 褋褌褉邪薪懈褑",
			"zoom": "袣芯褝褎褎懈褑懈械薪褌 屑邪褋褕褌邪斜懈褉芯胁邪薪懈褟 懈蟹芯斜褉邪卸械薪懈褟"
		},
		"sync_options_other_site": "小懈薪褏褉芯薪懈蟹懈褉芯胁邪褌褜 薪邪褋褌褉芯泄泻懈 褔褌械薪懈褟 褋 写褉褍谐懈屑懈 褋邪泄褌邪屑懈",
		"translation": {
			"cotrans_tip": "<p>袠褋锌芯谢褜蟹褍械褌 写谢褟 锌械褉械胁芯写邪 <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans API</a>, 褉邪斜芯褌邪褞褖懈泄 懈褋泻谢褞褔懈褌械谢褜薪芯 蟹邪 褋褔褢褌 褋胁芯械谐芯 褋芯蟹写邪褌械谢褟.</p>\\n<p>袟邪锌褉芯褋褘 芯斜褉邪斜邪褌褘胁邪褞褌褋褟 锌芯 芯写薪芯屑褍 胁 锌芯褉褟写泻械 褋懈薪褏褉芯薪薪芯泄 芯褔械褉械写懈. 袣芯谐写邪 芯褔械褉械写褜 锌褉械胁褘褕邪械褌 谢懈屑懈褌 薪芯胁褘械 蟹邪锌褉芯褋褘 斜褍写褍褌 锌褉懈胁芯写懈褌褜 泻 芯褕懈斜泻械. 袝褋谢懈 褌邪泻芯械 褋谢褍褔懈谢芯褋褜 锌芯锌褉芯斜褍泄褌械 锌芯蟹卸械.</p>\\n<p>孝邪泻 褔褌芯 锌芯卸邪谢褍泄褋褌邪 <b>褍褔懈褌褘胁邪泄褌械 蟹邪谐褉褍卸械薪薪芯褋褌褜 锌褉懈 胁褘斜芯褉械</b></p>\\n<p>袧邪褋褌芯褟褌械谢褜薪芯 褉械泻芯屑械薪写芯胁邪薪芯 谢芯泻邪谢褜薪芯 褉邪蟹胁械褉薪褍褌褜 Manga Image Translator 褌.泻. 褝褌芯 薪械 锌芯褌褉械斜谢褟械褌 褋械褉胁械褉薪褘械 褉械褋褍褉褋褘 懈 胁褘 薪械 芯谐褉邪薪懈褔械薪褘 芯褔械褉械写褜褞.</p>",
			"options": {
				"box_threshold": "袩芯褉芯谐 泻芯褉芯斜泻懈",
				"detection_resolution": "袪邪蟹褉械褕械薪懈械 褉邪褋锌芯蟹薪邪胁邪薪懈褟 褌械泻褋褌邪",
				"direction": "袨褉懈械褌薪邪褑懈褟 褌械泻褋褌邪",
				"direction_auto": "小谢械写芯胁邪薪懈械 芯褉懈谐懈薪邪谢褍",
				"direction_horizontal": "孝芯谢褜泻芯 谐芯褉懈蟹芯薪褌邪谢褜薪芯",
				"direction_vertical": "孝芯谢褜泻芯 胁械褉褌懈泻邪谢褜薪芯",
				"force_retry": "袩褉懈薪褍写懈褌械谢褜薪褘泄 锌芯胁褌芯褉(袠谐薪芯褉懈褉芯胁邪褌褜 泻褝褕)",
				"inpainter": "袠薪锌械泄薪褌械褉",
				"inpainting_size": "袠薪锌械泄薪褌懈薪谐 褉邪蟹屑械褉 芯斜谢邪褋褌懈",
				"local_url": "袧邪褋褌褉芯懈褌褜 URL 褋械褉胁械褉邪",
				"mask_dilation_offset": "袦邪褋泻懈褉芯胁芯褔薪芯械 褋屑械褖械薪懈械 写懈谢邪褌邪褑懈懈",
				"only_download_translated": "小泻邪褔邪褌褜 褌芯谢褜泻芯 锌械褉械胁械写褢薪薪褘械 懈蟹芯斜褉邪卸械薪懈褟",
				"target_language": "笑械谢械胁芯泄 褟蟹褘泻",
				"text_detector": "袛械褌械泻褌芯褉 褌械泻褋褌邪",
				"translator": "袩械褉械胁芯写褔懈泻",
				"unclip_ratio": "袧械芯斜褉械蟹邪薪薪芯械 褋芯芯褌薪芯褕械薪懈械"
			},
			"range": "袨斜褗械屑 锌械褉械胁芯写邪",
			"provider": "袩械褉械胁芯写褔懈泻",
			"translate_all": "袩械褉械胁械褋褌懈 胁褋械 懈蟹芯斜褉邪卸械薪懈褟",
			"translate_to_end": "袩械褉械胁芯写懈褌褜 褋褌褉邪薪懈褑褍 写芯 泻芯薪褑邪"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "袛芯斜邪胁懈褌褜 芯锌械褉邪褑懈懈 褋 谐芯褉褟褔懈屑懈 泻谢邪胁懈褕邪屑懈",
			"auto_adjust_option": "袗胁褌芯屑邪褌懈褔械褋泻邪褟 薪邪褋褌褉芯泄泻邪 锌邪褉邪屑械褌褉邪 褔褌械薪懈褟",
			"auto_page_turn": "袘械褋泻芯薪械褔薪邪褟 锌褉芯泻褉褍褌泻邪",
			"auto_show": "袗胁褌芯屑邪褌懈褔械褋泻懈 胁泻谢褞褔邪褌褜 褉械卸懈屑 褔褌械薪懈褟",
			"block_totally": "袚谢芯斜邪谢褜薪芯 蟹邪斜谢芯泻懈褉芯胁邪褌褜 泻芯屑懈泻褋褘",
			"colorize_tag": "笑胁械褌薪褘械 薪邪蟹胁邪薪懈褟",
			"cross_site_link": "袣褉芯褋褋-褋邪泄褌芯胁邪褟 褋褋褘谢泻邪",
			"detect_ad": "Detect advertise page",
			"expand_tag_list": "袪邪蟹胁械褉薪褍褌褜 褋锌懈褋芯泻 褌械谐芯胁",
			"float_tag_list": "袩谢邪胁邪褞褖懈泄 褋锌懈褋芯泻 褌械谐芯胁",
			"load_original_image": "袟邪谐褉褍卸邪褌褜 芯褉懈谐懈薪邪谢褜薪芯械 懈蟹芯斜褉邪卸械薪懈械",
			"lock_option": "袘谢芯泻懈褉芯胁泻邪 芯锌褑懈懈 褋邪泄褌邪",
			"open_link_new_page": "袨褌泻褉褘胁邪褌褜 褋褋褘谢泻懈 胁 薪芯胁芯泄 胁泻谢邪写泻械",
			"quick_favorite": "袘褘褋褌褉褘泄 褎邪胁芯褉懈褌",
			"quick_rating": "袘褘褋褌褉褘泄 褉械泄褌懈薪谐",
			"quick_tag_define": "袨锌褉械写械谢械薪懈械 褌械谐邪 斜褘褋褌褉芯谐芯 锌褉芯褋屑芯褌褉邪",
			"remember_current_site": "袟邪锌芯屑薪懈褌褜 褌械泻褍褖懈泄 褋邪泄褌",
			"tag_lint": "孝褝谐 袥懈薪褌"
		},
		"changed_load_failed": "小褌褉邪薪懈褑邪 懈蟹屑械薪懈谢邪褋褜, 薪械胁芯蟹屑芯卸薪芯 蟹邪谐褉褍蟹懈褌褜 泻芯屑懈泻褋",
		"ehentai": {
			"change_favorite_failed": "袧械 褍写邪谢芯褋褜 懈蟹屑械薪懈褌褜 懈蟹斜褉邪薪薪芯械",
			"change_favorite_success": "袠蟹斜褉邪薪薪芯械 褍褋锌械褕薪芯 懈蟹屑械薪械薪芯",
			"change_rating_failed": "袧械 褍写邪谢芯褋褜 懈蟹屑械薪懈褌褜 芯褑械薪泻褍",
			"change_rating_success": "校褋锌械褕薪芯 懈蟹屑械薪械薪 褉械泄褌懈薪谐",
			"fetch_favorite_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 懈薪褎芯褉屑邪褑懈褞 芯 懈蟹斜褉邪薪薪芯屑",
			"fetch_img_page_source_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 懈褋褏芯写薪褘泄 泻芯写 褋褌褉邪薪懈褑褘 褋 懈蟹芯斜褉邪卸械薪懈褟屑懈",
			"fetch_img_page_url_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 邪写褉械褋 褋褌褉邪薪懈褑褘 懈蟹芯斜褉邪卸械薪懈泄 懈蟹 写械褌邪谢械泄",
			"fetch_img_url_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 邪写褉械褋 懈蟹芯斜褉邪卸械薪懈褟",
			"hitomi_error": "袨褕懈斜泻邪 褋芯锌芯褋褌邪胁谢械薪懈褟 hitomi",
			"html_changed_link_failed": "小褌褉褍泻褌褍褉邪 褋褌褉邪薪懈褑褘 懈蟹屑械薪懈谢邪褋褜, 懈 褋胁褟蟹邪薪薪褘械 褎褍薪泻褑懈懈 胁薪械褕薪械谐芯 褋邪泄褌邪 薪械 褉邪斜芯褌邪褞褌 写芯谢卸薪褘屑 芯斜褉邪蟹芯屑",
			"ip_banned": "IP 邪写褉械褋 蟹邪斜邪薪械薪",
			"nhentai_error": "袨褕懈斜泻邪 褋芯锌芯褋褌邪胁谢械薪懈褟 nhentai",
			"nhentai_failed": "袨褕懈斜泻邪 褋芯锌芯褋褌芯胁谢械薪懈褟. 袩芯卸邪谢褍泄褋褌邪 锌械褉械蟹邪谐褉褍蟹懈褌械 褋褌褉邪薪懈褑褍 锌芯褋谢械 胁褏芯写邪 薪邪 {{nhentai}}"
		},
		"nhentai": {
			"fetch_next_page_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 褋谢械写褍褞褖褍褞 褋褌褉邪薪懈褑褍",
			"tag_blacklist_fetch_failed": "袧械 褍写邪谢芯褋褜 锌芯谢褍褔懈褌褜 蟹邪斜谢芯泻懈褉芯胁邪薪薪褘械 褌械谐懈"
		},
		"show_settings_menu": "袩芯泻邪蟹邪褌褜 屑械薪褞 薪邪褋褌褉芯械泻",
		"simple": {
			"auto_read_mode_message": "\\"袗胁褌芯屑邪褌懈褔械褋泻懈 胁泻谢褞褔邪褌褜 褉械卸懈屑 褔褌械薪懈褟\\" 锌芯 褍屑芯谢褔邪薪懈褞",
			"no_img": "袧械 薪邪泄写械薪芯 锌芯写褏芯写褟褖懈褏 懈蟹芯斜褉邪卸械薪懈泄. 袧邪卸屑懈褌械 褌褍褌 褔褌芯 斜褘 胁褘泻谢褞褔懈褌褜 褉械卸懈屑 锌褉芯褋褌芯谐芯 褔褌械薪懈褟.",
			"simple_read_mode": "袙泻谢褞褔懈褌褜 锌褉芯褋褌芯泄 褉械卸懈屑 褔褌械薪懈褟"
		}
	},
	touch_area: {
		"menu": "袦械薪褞",
		"type": {
			"edge": "袚褉邪薪褜",
			"l": "L",
			"left_right": "袥械胁芯 袩褉邪胁芯",
			"up_down": "袙械褉褏 袧懈蟹"
		}
	},
	translation: {
		"status": {
			"after-translating": "袩芯褋褌芯斜褉邪斜芯褌泻邪 锌械褉械胁芯写邪",
			"cancelled": "袩械褉械胁芯写 芯褌屑械薪褢薪",
			"colorizing": "袪邪褋泻褉邪褕懈胁邪薪懈械",
			"default": "袧械懈蟹胁械褋褌薪褘泄 褋褌邪褌褍褋",
			"detection": "袪邪褋锌芯蟹薪邪胁邪薪懈械 褌械泻褋褌邪",
			"downloading": "袟邪谐褉褍蟹泻邪",
			"downscaling": "校屑械薪褜褕械薪懈械 屑邪褋褕褌邪斜邪",
			"error": "袨褕懈斜泻邪 锌械褉械胁芯写邪",
			"error-download": "袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈",
			"error-lang": "笑械谢械胁芯泄 褟蟹褘泻 薪械 锌芯写写械褉卸懈胁邪械褌褋褟 胁褘斜褉邪薪薪褘屑 锌械褉械胁芯写褔懈泻芯屑",
			"error-translating": "袨褕懈斜泻邪 锌械褉械胁芯写邪(锌褍褋褌芯泄 芯褌胁械褌)",
			"error-too-large": "袪邪蟹屑械褉 懈蟹芯斜褉邪卸械薪懈褟 褋谢懈褕泻芯屑 斜芯谢褜褕芯泄 (斜芯谢械械 8000x8000 锌懈泻褋械谢械泄)",
			"error-upload": "袨褕懈斜泻邪 芯褌锌褉邪胁泻懈",
			"error-disconnect": "袩芯褌械褉褟薪芯 褋芯械写懈薪械薪懈械 褋 褋械褉胁械褉芯屑",
			"error-with-id": "袨褕懈斜泻邪 胁芯 胁褉械屑褟 锌械褉械胁芯写邪",
			"finished": "袟邪胁械褉褕械薪懈械",
			"inpainting": "袧邪谢芯卸械薪懈械",
			"mask-generation": "袚械薪械褉邪褑懈褟 屑邪褋泻懈",
			"ocr": "袪邪褋锌芯蟹薪邪胁邪薪懈械 褌械泻褋褌邪",
			"pending": "袨卸懈写邪薪懈械",
			"pending-pos": "袨卸懈写邪薪懈械",
			"preparing": "袨卸懈写邪薪懈械 芯泻薪邪 斜械蟹写械泄褋褌胁懈褟",
			"rendering": "袨褌褉懈褋芯胁泻邪",
			"running_pre_translation_hooks": "袙褘锌芯谢薪械薪懈械 锌褉械写芯斜褉邪斜芯褌泻懈 锌械褉械胁芯写邪",
			"saved": "小芯褏褉邪薪械薪芯",
			"saving": "小芯褏褉邪薪械薪懈械",
			"skip-no-regions": "袧邪 懈蟹芯斜褉邪卸械薪懈懈 薪械 芯斜薪邪褉褍卸械薪芯 褌械泻褋褌芯胁褘褏 芯斜谢邪褋褌械泄.",
			"skip-no-text": "孝械泻褋褌 薪邪 懈蟹芯斜褉邪卸械薪懈懈 薪械 芯斜薪邪褉褍卸械薪",
			"textline_merge": "袨斜褜械写懈薪械薪懈械 褌械泻褋褌邪",
			"translating": "袩械褉械胁芯写懈褌褋褟",
			"upload": "袨褌锌褉邪胁泻邪",
			"upscaling": "校胁械谢懈褔械薪懈械 懈蟹芯斜褉邪卸械薪懈褟",
			"uploading": "袨褌锌褉邪胁泻邪"
		},
		"tip": {
			"check_img_status_failed": "袧械 褍写邪谢芯褋褜 锌褉芯胁械褉懈褌褜 褋褌邪褌褍褋 懈蟹芯斜褉邪卸械薪懈褟",
			"download_img_failed": "袧械 褍写邪谢芯褋褜 褋泻邪褔邪褌褜 懈蟹芯斜褉邪卸械薪懈械",
			"get_translator_list_error": "袩褉芯懈蟹芯褕谢邪 芯褕懈斜泻邪 胁芯 胁褉械屑褟 锌芯谢褍褔械薪懈褟 褋锌懈褋泻邪 写芯褋褌褍锌薪褘褏 锌械褉械胁芯写褔懈泻芯胁",
			"id_not_returned": "ID 薪械 胁械褉薪褍谢懈(",
			"img_downloading": "小泻邪褔邪褌褜",
			"img_not_fully_loaded": "袠蟹芯斜褉邪卸械薪懈械 胁褋褢 械褖褢 蟹邪谐褉褍卸邪械褌褋褟",
			"pending": "袨卸懈写械薪懈械, 锌芯蟹懈褑懈褟 胁 芯褔械褉械写懈 {{pos}}",
			"resize_img_failed": "袧械 褍写邪谢芯褋褜 懈蟹屑械薪懈褌褜 褉邪蟹屑械褉 懈蟹芯斜褉邪卸械薪懈褟",
			"translating": "袠蟹芯斜褉邪卸械薪懈械 锌械褉械胁芯写懈褌褋褟",
			"translation_completed": "袩械褉械胁芯写 蟹邪胁械褉褕褢薪",
			"upload": "袟邪谐褉褍蟹泻邪 懈蟹芯斜褉邪卸械薪懈褟",
			"upload_error": "袨褕懈斜泻邪 芯褌锌褉邪胁泻懈 懈蟹芯斜褉邪卸械薪懈褟",
			"upload_return_error": "袨褕懈斜泻邪 锌械褉械胁芯写邪 薪邪 褋械褉胁械褉械",
			"wait_translation": "袨卸懈写邪薪懈械 锌械褉械胁芯写邪"
		},
		"translator": {
			"baidu": "baidu",
			"deepl": "DeepL",
			"google": "Google",
			"gpt3.5": "GPT-3.5",
			"none": "校斜褉邪褌褜 褌械泻褋褌",
			"offline": "袨褎褎谢邪泄薪 锌械褉械胁芯写褔懈泻",
			"original": "袨褉懈谐懈薪邪谢",
			"papago": "Papago",
			"youdao": "youdao"
		}
	},
	upscale: {
		"module_download_complete": "袟邪谐褉褍蟹泻邪 屑芯写械谢懈 褍胁械谢懈褔械薪懈褟 懈蟹芯斜褉邪卸械薪懈泄 蟹邪胁械褉褕械薪邪",
		"module_download_failed": "小斜芯泄 蟹邪谐褉褍蟹泻懈 屑芯写械谢懈 褍胁械谢懈褔械薪懈褟 懈蟹芯斜褉邪卸械薪懈泄",
		"module_downloading": "袟邪谐褉褍蟹泻邪 屑芯写械谢懈 褍胁械谢懈褔械薪懈褟 懈蟹芯斜褉邪卸械薪懈泄...",
		"title": "校胁械谢懈褔械薪懈械 懈蟹芯斜褉邪卸械薪懈褟",
		"upscaled": "校胁械谢懈褔械薪薪褘泄",
		"upscaling": "校胁械谢懈褔懈胁邪械褌褋褟",
		"webgpu_tip": "袧械胁芯蟹屑芯卸薪芯 褍胁械谢懈褔懈褌褜 懈蟹芯斜褉邪卸械薪懈褟 褋 锌芯屑芯褖褜褞 WebGPU, 芯斜褉邪斜芯褌泻邪 斜褍写械褌 屑械写谢械薪薪械械"
	}
};
//#endregion
//#region locales/zh.json
var zh_default = {
	alert: {
		"comic_load_error": "婕敾鍔犺浇鍑洪敊",
		"download_failed": "涓嬭浇澶辫触",
		"fetch_comic_img_failed": "鑾峰彇婕敾鍥剧墖澶辫触",
		"img_load_failed": "鍥剧墖鍔犺浇澶辫触",
		"no_img_download": "娌℃湁鑳戒笅杞界殑鍥剧墖",
		"repeat_load": "鍔犺浇鍥剧墖涓紝璇风◢鍊?,
		"retry_get_img_url": "閲嶆柊鑾峰彇绗?{{i}} 椤靛浘鐗囩殑鍦板潃",
		"server_connect_failed": "鏃犳硶杩炴帴鍒版湇鍔″櫒"
	},
	button: {
		"auto_scroll": "鑷姩婊氬姩",
		"close_current_page_translation": "鍏抽棴褰撳墠椤电殑缈昏瘧",
		"download_completed": "涓嬭浇瀹屾垚",
		"download_completed_error": "涓嬭浇瀹屾垚锛屼絾鏈?{{errorNum}} 寮犲浘鐗囦笅杞藉け璐?,
		"downloading": "涓嬭浇涓?,
		"fullscreen": "鍏ㄥ睆",
		"fullscreen_exit": "閫€鍑哄叏灞?,
		"grid_mode": "缃戞牸妯″紡",
		"packaging": "鎵撳寘涓?,
		"page_fill": "椤甸潰濉厖",
		"page_mode_double": "鍙岄〉妯″紡",
		"page_mode_single": "鍗曢〉妯″紡",
		"scroll_mode": "鍗疯酱妯″紡",
		"translate_current_page": "缈昏瘧褰撳墠椤?,
		"zoom_in": "鏀惧ぇ",
		"zoom_out": "缂╁皬"
	},
	description: "涓烘极鐢荤珯澧炲姞鍙岄〉闃呰銆佺炕璇戠瓑浼樺寲浣撻獙鐨勫寮哄姛鑳姐€?,
	eh_tag_lint: {
		"combo": "瀛樺湪 [tag] 鏃讹紝涓€鑸篃瀛樺湪 [tag]",
		"conflict": "瀛樺湪 [tag] 鏃讹紝涓嶅簲璇ュ瓨鍦?[tag]",
		"correct_tag": "搴旇鏄纭殑鏍囩",
		"miss_female": "缂哄皯鐢锋€ф爣绛撅紝鍙兘闇€瑕?,
		"miss_parody": "缂哄皯鍘熶綔鏍囩锛屽彲鑳介渶瑕?,
		"possible_conflict": "瀛樺湪 [tag] 鏃讹紝涓€鑸笉搴旇瀛樺湪 [tag]",
		"prerequisite": "[tag] 鐨勫墠缃爣绛?[tag] 涓嶅瓨鍦?
	},
	end_page: {
		"next_button": "涓嬩竴璇?,
		"prev_button": "涓婁竴璇?,
		"tip": {
			"end_jump": "宸插埌缁撳熬锛岀户缁悜涓嬬炕椤靛皢璺宠嚦涓嬩竴璇?,
			"exit": "宸插埌缁撳熬锛岀户缁炕椤靛皢閫€鍑?,
			"start_jump": "宸插埌寮€澶达紝缁х画鍚戜笂缈婚〉灏嗚烦鑷充笂涓€璇?
		}
	},
	hotkeys: {
		"enter_read_mode": "杩涘叆闃呰妯″紡",
		"float_tag_list": "鎮诞鏍囩鍒楄〃",
		"jump_next": "璺宠嚦涓嬩竴璇?,
		"jump_prev": "璺宠嚦涓婁竴璇?,
		"jump_to_end": "璺宠嚦灏鹃〉",
		"jump_to_home": "璺宠嚦棣栭〉",
		"multi_select_load": "澶氶€夊姞杞?,
		"page_down": "鍚戜笅缈婚〉",
		"page_up": "鍚戜笂缈婚〉",
		"reload_current_error_img": "閲嶈浇褰撳墠閿欒鍥剧墖",
		"repeat_tip": "姝ゅ揩鎹烽敭宸茶缁戝畾鑷炽€寋{hotkey}}銆?,
		"scroll_down": "鍚戜笅婊氬姩",
		"scroll_left": "鍚戝乏婊氬姩",
		"scroll_right": "鍚戝彸婊氬姩",
		"scroll_up": "鍚戜笂婊氬姩",
		"switch_auto_enlarge": "鍒囨崲鍥剧墖鑷姩鏀惧ぇ閫夐」",
		"switch_dir": "鍒囨崲闃呰鏂瑰悜",
		"switch_grid_mode": "鍒囨崲缃戞牸妯″紡",
		"switch_page_fill": "鍒囨崲椤甸潰濉厖",
		"switch_scroll_mode": "鍒囨崲鍗疯酱妯″紡",
		"switch_single_double_page_mode": "鍒囨崲鍗曞弻椤垫ā寮?
	},
	img_status: {
		"error": "鍔犺浇鍑洪敊",
		"loading": "姝ｅ湪鍔犺浇",
		"wait": "绛夊緟鍔犺浇"
	},
	other: {
		"auto": "鑷姩",
		"custom": "鑷畾涔?,
		"disable": "绂佺敤",
		"distance": "璺濈",
		"download": "涓嬭浇",
		"enabled": "鍚敤",
		"enter_comic_read_mode": "杩涘叆婕敾闃呰妯″紡",
		"exit": "閫€鍑?,
		"fab_hidden": "闅愯棌鎮诞鎸夐挳",
		"fab_show": "鏄剧ず鎮诞鎸夐挳",
		"fill_page": "濉厖椤?,
		"hotkeys": "蹇嵎閿?,
		"img_loading": "鍥剧墖鍔犺浇涓?,
		"interval": "闂撮殧",
		"loading_img": "鍔犺浇鍥剧墖涓?,
		"multi_select_mode": "澶氶€夋ā寮?,
		"none": "鏃?,
		"or": "鎴?,
		"other": "鍏朵粬",
		"page_range": "璇疯緭鍏ラ〉鐮佽寖鍥达細\\n锛堜緥濡傦細1, 3-5, 9-)",
		"read_mode": "闃呰妯″紡",
		"selected": "宸查€変腑",
		"setting": "璁剧疆",
		"clear": "娓呯┖"
	},
	pwa: {
		"alert": {
			"img_data_error": "鍥剧墖鏁版嵁閿欒",
			"img_not_found": "鎵句笉鍒板浘鐗?,
			"img_not_found_files": "璇烽€夋嫨鍥剧墖鏂囦欢鎴栧惈鏈夊浘鐗囨枃浠剁殑鍘嬬缉鍖?,
			"img_not_found_folder": "鏂囦欢澶逛笅娌℃湁鍥剧墖鏂囦欢鎴栧惈鏈夊浘鐗囨枃浠剁殑鍘嬬缉鍖?,
			"not_valid_url": "涓嶆槸鏈夋晥鐨?URL",
			"parse_error": "瑙ｆ瀽鍑洪敊",
			"password_error": "瀵嗙爜閿欒",
			"repeat_load": "姝ｅ湪鍔犺浇鍏朵粬鏂囦欢涓€︹€?,
			"userscript_not_installed": "鏈畨瑁?ComicRead 鑴氭湰"
		},
		"button": {
			"enter_url": "杈撳叆 URL",
			"install": "瀹夎",
			"no_more_prompt": "涓嶅啀鎻愮ず",
			"resume_read": "鎭㈠闃呰",
			"select_files": "閫夋嫨鏂囦欢",
			"select_folder": "閫夋嫨鏂囦欢澶?
		},
		"install_md": "### 姣忔閮借鎵撳紑杩欎釜缃戦〉寰堥夯鐑︼紵\\n濡傛灉浣犲笇鏈沑\n1. 鑳芥湁鐙珛鐨勭獥鍙ｏ紝鍍忔槸鍦ㄤ娇鐢ㄦ湰鍦拌蒋浠朵竴鏍穃\n1. 鍔犲叆鏈湴鍘嬬缉鏂囦欢鐨勬墦寮€鏂瑰紡涔嬩腑锛屾柟渚跨洿鎺ユ墦寮€\\n1. 绂荤嚎浣跨敤~~锛堜富瑕佹槸鎷呭績鍥藉唴缃戠粶鎶介鏃犳硶璁块棶杩欎釜缃戦〉~~\\n### 娆㈣繋灏嗘湰椤甸潰浣滀负 PWA 搴旂敤瀹夎鍒扮數鑴戜笂馃槂馃憤",
		"message": {
			"enter_password": "璇疯緭鍏ュ瘑鐮?,
			"parsing": "瑙ｆ瀽涓?
		},
		"tip_enter_url": "璇疯緭鍏ュ帇缂╁寘 URL",
		"tip_md": "# ComicRead PWA\\n浣跨敤 [ComicRead](https://github.com/hymbz/ComicReadScript) 鐨勯槄璇绘ā寮忛槄璇?*鏈湴**婕敾\\n---\\n### 灏嗗浘鐗囨枃浠躲€佹枃浠跺す銆佸帇缂╁寘鐩存帴鎷栧叆鍗冲彲寮€濮嬮槄璇籠\n*涔熷彲浠ラ€夋嫨**鐩存帴绮樿创**鎴?*杈撳叆**鍘嬬缉鍖?URL 涓嬭浇闃呰*"
	},
	setting: {
		"hotkeys": {
			"add": "娣诲姞鏂板揩鎹烽敭",
			"restore": "鎭㈠榛樿蹇嵎閿?
		},
		"language": "璇█",
		"option": {
			"abreast_duplicate": "姣忓垪閲嶅姣斾緥",
			"abreast_mode": "骞舵帓鍗疯酱妯″紡",
			"adjust_to_width": "鑷€傚簲瀹藉害",
			"align_edge": "婊氬姩缈婚〉鏃跺榻愯竟缂?,
			"always_load_all_img": "濮嬬粓鍔犺浇鎵€鏈夊浘鐗?,
			"autoFullscreen": "鑷姩鍏ㄥ睆",
			"autoHiddenMouse": "鑷姩闅愯棌榧犳爣",
			"auto_scale": "鑷姩缂╂斁",
			"auto_scroll_trigger_end": "鍦ㄧ粨鏉熼〉涓婄户缁粴鍔?,
			"auto_switch_page_mode": "鎸夊睆骞曟瘮渚嬪垏鎹㈠崟鍙岄〉",
			"background_color": "鑳屾櫙棰滆壊",
			"click_page_turn_area": "鐐瑰嚮鍖哄煙",
			"click_page_turn_enabled": "鐐瑰嚮缈婚〉",
			"click_page_turn_swap_area": "宸﹀彸鐐瑰嚮鍖哄煙浜ゆ崲",
			"dark_mode": "榛戞殫妯″紡",
			"dark_mode_auto": "榛戞殫妯″紡璺熼殢绯荤粺",
			"dir_ltr": "浠庡乏鍒板彸锛堢編婕級",
			"dir_rtl": "浠庡彸鍒板乏锛堟棩婕級",
			"disable_auto_enlarge": "绂佹鍥剧墖鑷姩鏀惧ぇ",
			"first_page_fill": "榛樿鍚敤棣栭〉濉厖",
			"full_width": "瑙嗙獥瀹藉害",
			"img_recognition": "鍥惧儚璇嗗埆",
			"img_recognition_background": "璇嗗埆鑳屾櫙鑹?,
			"img_recognition_pageFill": "鑷姩璋冩暣椤甸潰濉厖",
			"img_recognition_warn": "鉂?褰撳墠娴忚鍣ㄤ笉鏀寔 Web Worker锛屽紑鍚鍔熻兘鍙兘瀵艰嚧椤甸潰鍗￠】锛屽缓璁崌绾ф垨鏇存崲娴忚鍣ㄣ€?,
			"img_recognition_warn_2": "鉂?褰撳墠缃戠珯涓嶆敮鎸?Web Worker锛屽紑鍚鍔熻兘鍙兘瀵艰嚧椤甸潰鍗￠】銆?,
			"paragraph_appearance": "澶栬",
			"paragraph_dir": "闃呰鏂瑰悜",
			"paragraph_display": "鏄剧ず",
			"paragraph_scrollbar": "婊氬姩鏉?,
			"paragraph_translation": "缈昏瘧",
			"preload_page_num": "棰勫姞杞介〉鏁?,
			"scroll_end": "缈婚〉鑷冲敖澶村悗",
			"scroll_end_auto": "浼樺厛璺宠嚦涓?涓嬩竴璇濓紝鍚﹀垯閫€鍑?,
			"scroll_mode_img_scale": "鍗疯酱鍥剧墖缂╂斁",
			"scroll_mode_img_spacing": "鍗疯酱鍥剧墖闂磋窛",
			"scrollbar_auto_hidden": "鑷姩闅愯棌",
			"scrollbar_easy_scroll": "蹇嵎婊氬姩",
			"scrollbar_position": "浣嶇疆",
			"scrollbar_position_bottom": "搴曢儴",
			"scrollbar_position_hidden": "闅愯棌",
			"scrollbar_position_right": "鍙充晶",
			"scrollbar_position_top": "椤堕儴",
			"scrollbar_show_img_status": "鏄剧ず鍥剧墖鍔犺浇鐘舵€?,
			"show_clickable_area": "鏄剧ず鐐瑰嚮鍖哄煙",
			"show_comments": "鍦ㄧ粨鏉熼〉鏄剧ず璇勮",
			"shrink_menu": "缂╁皬鑿滃崟鍖哄煙",
			"swap_page_turn_key": "宸﹀彸缈婚〉閿氦鎹?,
			"zoom": "鍥剧墖缂╂斁"
		},
		"sync_options_other_site": "鍚屾闃呰閰嶇疆鑷冲叾浠栫珯鐐?,
		"translation": {
			"cotrans_tip": "<p>灏嗕娇鐢?<a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> 鎻愪緵鐨勬帴鍙ｇ炕璇戝浘鐗囷紝璇ユ湇鍔″櫒鐢卞叾缁存姢鑰呯敤鐖卞彂鐢佃嚜璐圭淮鎶?/p>\\n<p>澶氫汉鍚屾椂浣跨敤鏃堕渶瑕佹帓闃熺瓑寰咃紝绛夊緟闃熷垪杈惧埌涓婇檺鍚庡啀涓婁紶鏂板浘鐗囦細鎶ラ敊锛岄渶瑕佽繃娈垫椂闂村啀璇?/p>\\n<p>鎵€浠ヨ繕璇?<b>娉ㄦ剰鐢ㄩ噺</b></p>\\n<p>鏇存帹鑽愯嚜宸辨湰鍦伴儴缃?Manga Image Translator锛屾棦涓嶅崰鐢ㄦ湇鍔″櫒璧勬簮涔熶笉闇€瑕佹帓闃?/p>",
			"options": {
				"box_threshold": "鏂囨湰妗嗛槇鍊?,
				"detection_resolution": "鏂囨湰鎵弿娓呮櫚搴?,
				"direction": "娓叉煋瀛椾綋鏂瑰悜",
				"direction_auto": "鍘熸枃涓€鑷?,
				"direction_horizontal": "浠呴檺姘村钩",
				"direction_vertical": "浠呴檺鍨傜洿",
				"force_retry": "蹇界暐缂撳瓨寮哄埗閲嶈瘯",
				"inpainter": "鍥惧儚淇鍣?,
				"inpainting_size": "鍥惧儚淇灏哄",
				"local_url": "鑷畾涔夋湇鍔″櫒 URL",
				"mask_dilation_offset": "鎺╃爜鑶ㄨ儉鍋忕Щ閲?,
				"only_download_translated": "鍙笅杞界炕璇戝畬鐨勫浘鐗?,
				"target_language": "鐩爣璇█",
				"text_detector": "鏂囨湰鎵弿鍣?,
				"translator": "缈昏瘧鏈嶅姟",
				"unclip_ratio": "鏂囨湰妗嗚啫鑳€姣旂巼"
			},
			"range": "缈昏瘧鑼冨洿",
			"provider": "缈昏瘧鍣?,
			"translate_all": "缈昏瘧鍏ㄩ儴鍥剧墖",
			"translate_to_end": "缈昏瘧褰撳墠椤佃嚦缁撳熬"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "澧炲姞蹇嵎閿搷浣?,
			"auto_adjust_option": "鑷姩璋冩暣闃呰閰嶇疆",
			"auto_page_turn": "鏃犻檺婊氬姩",
			"auto_show": "鑷姩杩涘叆闃呰妯″紡",
			"block_totally": "褰诲簳灞忚斀婕敾",
			"colorize_tag": "鏍囩鏌撹壊",
			"cross_site_link": "鍏宠仈澶栫珯",
			"detect_ad": "璇嗗埆骞垮憡椤?,
			"expand_tag_list": "灞曞紑鏍囩鍒楄〃",
			"float_tag_list": "鎮诞鏍囩鍒楄〃",
			"load_original_image": "鍔犺浇鍘熷浘",
			"lock_option": "閿佸畾绔欑偣閰嶇疆",
			"open_link_new_page": "鍦ㄦ柊椤甸潰涓墦寮€閾炬帴",
			"quick_favorite": "蹇嵎鏀惰棌",
			"quick_rating": "蹇嵎璇勫垎",
			"quick_tag_define": "蹇嵎鏌ョ湅鏍囩瀹氫箟",
			"remember_current_site": "璁颁綇褰撳墠绔欑偣",
			"tag_lint": "鏍囩妫€鏌?
		},
		"changed_load_failed": "缃戠珯鍙戠敓鍙樺寲锛屾棤娉曞姞杞芥极鐢?,
		"ehentai": {
			"change_favorite_failed": "鏀惰棌澶逛慨鏀瑰け璐?,
			"change_favorite_success": "鏀惰棌澶逛慨鏀规垚鍔?,
			"change_rating_failed": "璇勫垎淇敼澶辫触",
			"change_rating_success": "璇勫垎淇敼鎴愬姛",
			"fetch_favorite_failed": "鑾峰彇鏀惰棌澶逛俊鎭け璐?,
			"fetch_img_page_source_failed": "鑾峰彇鍥剧墖椤垫簮鐮佸け璐?,
			"fetch_img_page_url_failed": "浠庤鎯呴〉鑾峰彇鍥剧墖椤靛湴鍧€澶辫触",
			"fetch_img_url_failed": "浠庡浘鐗囬〉鑾峰彇鍥剧墖鍦板潃澶辫触",
			"hitomi_error": "hitomi 鍖归厤鍑洪敊",
			"html_changed_link_failed": "椤甸潰缁撴瀯鍙戠敓鏀瑰彉锛屽叧鑱斿绔欏姛鑳芥棤娉曟甯哥敓鏁?,
			"ip_banned": "IP鍦板潃琚",
			"nhentai_error": "nhentai 鍖归厤鍑洪敊",
			"nhentai_failed": "鍖归厤澶辫触锛岃鍦ㄧ‘璁ょ櫥褰?{{nhentai}} 鍚庡埛鏂?
		},
		"nhentai": {
			"fetch_next_page_failed": "鑾峰彇涓嬩竴椤垫极鐢绘暟鎹け璐?,
			"tag_blacklist_fetch_failed": "鏍囩榛戝悕鍗曡幏鍙栧け璐?
		},
		"show_settings_menu": "鏄剧ず璁剧疆鑿滃崟",
		"simple": {
			"auto_read_mode_message": "宸查粯璁ゅ紑鍚€岃嚜鍔ㄨ繘鍏ラ槄璇绘ā寮忋€?,
			"no_img": "鏈壘鍒板悎閫傜殑婕敾鍥剧墖锛孿\n濡傛湁闇€瑕佸彲鐐规鍏抽棴绠€鏄撻槄璇绘ā寮?,
			"simple_read_mode": "浣跨敤绠€鏄撻槄璇绘ā寮?
		}
	},
	touch_area: {
		"menu": "鑿滃崟",
		"type": {
			"edge": "杈圭紭",
			"l": "L",
			"left_right": "宸﹀彸",
			"up_down": "涓婁笅"
		}
	},
	translation: {
		"status": {
			"after-translating": "缈昏瘧鍚庡鐞嗕腑",
			"cancelled": "缈昏瘧宸插彇娑?,
			"colorizing": "姝ｅ湪涓婅壊",
			"default": "鏈煡鐘舵€?,
			"detection": "姝ｅ湪妫€娴嬫枃鏈?,
			"downloading": "姝ｅ湪涓嬭浇",
			"downscaling": "姝ｅ湪缂╁皬鍥剧墖",
			"error": "缈昏瘧鍑洪敊",
			"error-download": "涓嬭浇鍑洪敊",
			"error-lang": "浣犻€夋嫨鐨勭炕璇戞湇鍔′笉鏀寔浣犻€夋嫨鐨勮瑷€",
			"error-translating": "缈昏瘧鏈嶅姟娌℃湁杩斿洖浠讳綍鏂囨湰",
			"error-too-large": "鍥剧墖灏哄杩囧ぇ锛堣秴杩?8000x8000 鍍忕礌锛?,
			"error-upload": "涓婁紶鍑洪敊",
			"error-disconnect": "涓庢湇鍔″櫒鏂紑杩炴帴",
			"error-with-id": "缈昏瘧鍑洪敊",
			"finished": "姝ｅ湪鏁寸悊缁撴灉",
			"inpainting": "姝ｅ湪淇ˉ鍥剧墖",
			"mask-generation": "姝ｅ湪鐢熸垚鏂囨湰鎺╃爜",
			"ocr": "姝ｅ湪璇嗗埆鏂囨湰",
			"pending": "姝ｅ湪绛夊緟",
			"pending-pos": "姝ｅ湪绛夊緟",
			"preparing": "绛夊緟绌洪棽绐楀彛",
			"rendering": "姝ｅ湪娓叉煋",
			"running_pre_translation_hooks": "姝ｅ湪鎵ц缈昏瘧鍓嶅鐞?,
			"saved": "淇濆瓨缁撴灉",
			"saving": "姝ｅ湪淇濆瓨",
			"skip-no-regions": "鍥剧墖涓病鏈夋娴嬪埌鏂囨湰鍖哄煙",
			"skip-no-text": "鍥剧墖涓病鏈夋娴嬪埌鏂囨湰",
			"textline_merge": "姝ｅ湪鏁村悎鏂囨湰",
			"translating": "姝ｅ湪缈昏瘧鏂囨湰",
			"upload": "姝ｅ湪涓婁紶",
			"upscaling": "姝ｅ湪鏀惧ぇ鍥剧墖",
			"uploading": "姝ｅ湪涓婁紶"
		},
		"tip": {
			"check_img_status_failed": "妫€鏌ュ浘鐗囩姸鎬佸け璐?,
			"download_img_failed": "涓嬭浇鍥剧墖澶辫触",
			"get_translator_list_error": "鑾峰彇鍙敤缈昏瘧鏈嶅姟鍒楄〃鏃跺嚭閿?,
			"id_not_returned": "鏈繑鍥?id",
			"img_downloading": "涓嬭浇鍥剧墖涓?,
			"img_not_fully_loaded": "鍥剧墖鏈姞杞藉畬姣?,
			"pending": "姝ｅ湪绛夊緟锛屽垪闃熻繕鏈?{{pos}} 寮犲浘鐗?,
			"resize_img_failed": "缂╂斁鍥剧墖澶辫触",
			"translating": "缈昏瘧鍥剧墖涓?,
			"translation_completed": "缈昏瘧瀹屾垚",
			"upload": "涓婁紶鍥剧墖涓?,
			"upload_error": "涓婁紶鍥剧墖鍑洪敊",
			"upload_return_error": "鏈嶅姟鍣ㄧ炕璇戝嚭閿?,
			"wait_translation": "绛夊緟缈昏瘧"
		},
		"translator": {
			"baidu": "鐧惧害",
			"deepl": "DeepL",
			"google": "璋锋瓕",
			"gpt3.5": "GPT-3.5",
			"none": "鍒犻櫎鏂囨湰",
			"offline": "绂荤嚎妯″瀷",
			"original": "鍘熸枃",
			"papago": "Papago",
			"youdao": "鏈夐亾"
		}
	},
	upscale: {
		"module_download_complete": "鍥剧墖鏀惧ぇ妯″瀷涓嬭浇瀹屾垚",
		"module_download_failed": "鍥剧墖鏀惧ぇ妯″瀷涓嬭浇澶辫触",
		"module_downloading": "鍥剧墖鏀惧ぇ妯″瀷涓嬭浇涓?..",
		"title": "鏃犳崯鏀惧ぇ鍥剧墖",
		"upscaled": "宸叉斁澶?,
		"upscaling": "鏀惧ぇ涓?,
		"webgpu_tip": "鏃犳硶浣跨敤 WebGPU 鏀惧ぇ鍥剧墖锛屽鐞嗛€熷害灏嗗彉鎱?
	}
};
//#endregion
//#region node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
	for (key of iter.keys()) if (dequal(key, tar)) return key;
}
function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;
	if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();
		if (ctor === Array) {
			if ((len = foo.length) === bar.length) while (len-- && dequal(foo[len], bar[len]));
			return len === -1;
		}
		if (ctor === Set) {
			if (foo.size !== bar.size) return false;
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === "object") {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}
		if (ctor === Map) {
			if (foo.size !== bar.size) return false;
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === "object") {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) return false;
			}
			return true;
		}
		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len = foo.byteLength) === bar.byteLength) while (len-- && foo.getInt8(len) === bar.getInt8(len));
			return len === -1;
		}
		if (ArrayBuffer.isView(foo)) {
			if ((len = foo.byteLength) === bar.byteLength) while (len-- && foo[len] === bar[len]);
			return len === -1;
		}
		if (!ctor || typeof foo === "object") {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}
	return foo !== foo && bar !== bar;
}
//#endregion
//#region src/helper/other.ts
/** 鏍规嵁璺緞鑾峰彇瀵硅薄涓嬬殑鎸囧畾鍊?*/
const byPath = (obj, path, handleVal) => {
	const keys = typeof path === "string" ? path.split(".") : path;
	let target = obj;
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];
		while (!Reflect.has(target, key) && i < keys.length) {
			i += 1;
			if (keys[i] === void 0) break;
			key += \`.\${keys[i]}\`;
		}
		if (handleVal && i > keys.length - 2 && Reflect.has(target, key)) {
			const res = handleVal(target, key);
			while (i < keys.length - 1) {
				target = target[key];
				i += 1;
				key = keys[i];
			}
			if (res !== void 0) target[key] = res;
			break;
		}
		target = target[key];
	}
	if (target === obj) return null;
	return target;
};
const withEventStop = (handler) => (e) => {
	e.stopPropagation();
	e.preventDefault();
	if (handler) handler(e);
};
//#endregion
//#region src/helper/i18n.ts
const [lang, setLang] = solid_js.createSignal("zh");
solid_js.createRoot(() => {
	solid_js.createEffect(solid_js.on(lang, () => helper_languages.setSaveLang(lang()), { defer: true }));
	const locales = solid_js.createMemo(() => {
		switch (lang()) {
			case "en": return en_default;
			case "ru": return ru_default;
			default: return zh_default;
		}
	});
	return (keys, variables) => {
		let text = byPath(locales(), keys) ?? "";
		if (variables) for (const [k, v] of Object.entries(variables)) text = text.replaceAll(\`{{\${k}}}\`, String(v));
		return text;
	};
});
//#endregion
//#region src/helper/logger.ts
const prefix = ["%cComicRead", "background-color: #607d8b; color: white; padding: 2px 4px; border-radius: 4px;"];
const log = (...args) => console.log(...prefix, ...args);
log.warn = (...args) => console.warn(...prefix, ...args);
log.error = (...args) => console.error(...prefix, ...args);
//#endregion
//#region src/helper/solidJs.ts
let publicOwner;
solid_js.createRoot(() => {
	publicOwner = solid_js.getOwner();
});
/** 浼氳嚜鍔ㄨ缃?equals 鍜?createRoot 鐨?createMemo */
const createRootMemo$1 = ((fn, init, options) => {
	if (fn.name === "bound readSignal") return fn;
	const _init = init ?? fn(void 0);
	const _options = options?.equals === void 0 && typeof _init === "object" ? {
		...options,
		equals: dequal
	} : options;
	return solid_js.getOwner() ? solid_js.createMemo(fn, _init, _options) : solid_js.runWithOwner(publicOwner, () => solid_js.createMemo(fn, _init, _options));
});
const createRootEffect = ((fn, val, options) => solid_js.getOwner() ? solid_js.createEffect(fn, val, options) : solid_js.runWithOwner(publicOwner, () => solid_js.createEffect(fn, val, options)));
const createEffectOn$2 = ((deps, fn, options) => createRootEffect(solid_js.on(deps, fn, options)));
const onAutoMount = (fn) => {
	const owner = solid_js.getOwner();
	if (!owner) return fn(owner);
	solid_js.onMount(() => {
		const cleanFn = fn(owner);
		if (cleanFn) solid_js.onCleanup(cleanFn);
	});
};
//#endregion
//#region src/helper/useStyle.ts
const useStyleSheet = (e) => {
	const styleSheet = new CSSStyleSheet();
	onAutoMount(() => {
		const root = e?.getRootNode() ?? document;
		root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet];
		return () => {
			const index = root.adoptedStyleSheets.indexOf(styleSheet);
			if (index !== -1) root.adoptedStyleSheets.splice(index, 1);
		};
	});
	return styleSheet;
};
const useStyle = (css, e) => {
	const styleSheet = useStyleSheet(e);
	if (typeof css === "string") styleSheet.replaceSync(css);
	else createEffectOn$2(createRootMemo$1(css), (style) => styleSheet.replaceSync(style));
};
/** 鐢?CSSStyleSheet 瀹炵幇鍜屼慨鏀?style 涓€鏍风殑鏁堟灉 */
const useStyleMemo = (selector, styleMapArg, e) => {
	const styleSheet = useStyleSheet(e);
	styleSheet.insertRule(\`\${selector} { }\`);
	const { style } = styleSheet.cssRules[0];
	const setStyle = (key, val) => {
		if (val === void 0 || val === "") return style.removeProperty(key);
		style.setProperty(key, typeof val === "string" ? val : \`\${val}\`);
	};
	const styleMapList = Array.isArray(styleMapArg) ? styleMapArg : [styleMapArg];
	for (const styleMap of styleMapList) if (typeof styleMap === "object") for (const [key, val] of Object.entries(styleMap)) createEffectOn$2(createRootMemo$1(val), (newVal) => setStyle(key, newVal));
	else createEffectOn$2(createRootMemo$1(styleMap), (map) => {
		for (const [key, val] of Object.entries(map)) setStyle(key, val);
	});
};
//#endregion
//#region src/userscript/multiSelect/SelectionMask.tsx
var _tmpl$$2 = /* @__PURE__ */ solid_js_web.template(\`<div class=selection-mask><span class=selection-mask-content>\`);
const SelectionMask = (props) => {
	const id = () => props.registeredItems().get(props.dom);
	const isSelected = () => props.selection.isSelected(id());
	const selectedCount = () => props.selection.selectedIds().length;
	const shouldBlink = () => selectedCount() === 0 && props.index === 0;
	const [showVerticalIcon, setShowVerticalIcon] = solid_js.createSignal(false);
	useStyle(\`
      .selection-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2147483647;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 5em;
        user-select: none;
        touch-action: none;
        transition: opacity 0.15s ease, background-color 0.15s ease;

        &.blink {
          animation: check-blink 2s ease-in-out 2s backwards infinite;
        }
      }

      .selection-mask.selected,
      .selection-mask.blink {
        background: #0009;
      }

      .selection-mask-content {
        font-size: 1.5em;
        font-weight: bold;
        text-shadow: none;
        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
          width: 1em;
          font-size: 1em;
        }
      }

      @keyframes check-blink {
        0% { opacity: 0; }
        20% { opacity: 1; }   /* 0.4s 娣″叆 */
        35% { opacity: 1; }   /* 淇濇寔鏄剧ず 0.3s */
        55% { opacity: 0; }   /* 0.4s 娣″嚭 */
        100% { opacity: 0; }  /* 绛夊緟 0.9s */
      }
    \`, props.dom);
	useStyleMemo(".selection-mask-content", { color: () => isSelected() ? "#ffffffbf" : "#fffb" }, props.dom);
	return (() => {
		var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild;
		_el$.addEventListener("animationiteration", () => setShowVerticalIcon((prev) => !prev));
		solid_js_web.addEventListener(_el$, "contextmenu", withEventStop(), true);
		solid_js_web.addEventListener(_el$, "pointerenter", withEventStop((e) => props.drag.onPointerEnter(props.dom, e)));
		solid_js_web.addEventListener(_el$, "pointerdown", withEventStop((e) => props.drag.onPointerDown(props.dom, e)), true);
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Switch, { get children() {
			return [solid_js_web.createComponent(solid_js.Match, {
				get when() {
					return isSelected();
				},
				get children() {
					return props.selection.getOrder(id());
				}
			}), solid_js_web.createComponent(solid_js.Match, {
				get when() {
					return shouldBlink();
				},
				get children() {
					return solid_js_web.memo(() => !!showVerticalIcon())() ? solid_js_web.createComponent(swipe_vertical_default, {}) : solid_js_web.createComponent(swipe_default, {});
				}
			})];
		} }));
		solid_js_web.effect((_p$) => {
			var _v$ = !!isSelected(), _v$2 = !!(shouldBlink() && !isSelected());
			_v$ !== _p$.e && _el$.classList.toggle("selected", _p$.e = _v$);
			_v$2 !== _p$.t && _el$.classList.toggle("blink", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
};
solid_js_web.delegateEvents(["pointerdown", "contextmenu"]);
//#endregion
//#region src/userscript/multiSelect/usePointerSelect.ts
/**
* 鍒涘缓鍖洪棿鎷栨嫿閫夋嫨寮曟搸銆?* 閫氳繃鎿嶄綔 session 鐨?range 鍜?operationType 鏉ョ鐞嗛€変腑鐘舵€侊紝
* pointerup 鏃?commit 鎻愪氦淇敼锛宲ointercancel 鏃?cancel 涓㈠純淇敼銆?*/
const createDragSession = ({ isEnabled, registeredItems, isSelected, setSession, commit, cancel }) => {
	/** 褰撳墠娲昏穬鎵嬪娍鐨?pointerId锛宯ull 琛ㄧず鏃犳椿璺冩墜鍔?*/
	let pointerId = null;
	/** 閿氱偣鍦?items 涓殑绱㈠紩锛屽浐瀹氫笉鍙?*/
	let anchorIndex = -1;
	return {
		onPointerDown: (dom, e) => {
			if (!isEnabled() || !e.isPrimary) return;
			if (e.pointerType === "mouse" && e.button !== 0) return;
			const entries = [...registeredItems().entries()];
			anchorIndex = entries.findIndex(([d]) => d === dom);
			if (anchorIndex === -1) return;
			({pointerId} = e);
			setSession((state) => {
				state.operationType = isSelected(registeredItems().get(dom)) ? "unselect" : "select";
				state.items = entries.map(([, id]) => id);
				state.range = [anchorIndex, anchorIndex];
			});
		},
		onPointerEnter: (dom, e) => {
			if (!isEnabled() || pointerId === null || e.pointerId !== pointerId) return;
			if (e.pointerType === "mouse" && (e.buttons & 1) === 0) {
				pointerId = null;
				return cancel();
			}
			const currentIndex = [...registeredItems().keys()].indexOf(dom);
			if (currentIndex === -1) return;
			const newRange = anchorIndex <= currentIndex ? [anchorIndex, currentIndex] : [currentIndex, anchorIndex];
			setSession((state) => {
				if (state.range[0] === newRange[0] && state.range[1] === newRange[1]) return;
				state.range = newRange;
			});
		},
		onPointerUp: (e) => {
			if (e.pointerId !== pointerId) return;
			pointerId = null;
			commit();
		},
		onPointerCancel: (e) => {
			if (e.pointerId !== pointerId) return;
			pointerId = null;
			cancel();
		},
		/** 鍙栨秷娲昏穬鎵嬪娍骞堕噸缃姸鎬?*/
		clear: () => {
			if (pointerId !== null) cancel();
			pointerId = null;
		}
	};
};
//#endregion
//#region src/userscript/multiSelect/useSelection.ts
/** 鍒涘缓閫変腑鐘舵€佺鐞嗗櫒 */
const useSelectionManager = () => {
	/** 宸茬‘璁ょ殑閫変腑椤?*/
	const baselineIds = new helper.ReactiveSet();
	const { store: session, setState: setSession } = helper.useStore({
		items: [],
		range: [-1, -1],
		operationType: "select"
	});
	/** 鍒ゆ柇 session 鏄惁澶勪簬娲昏穬鐘舵€?*/
	const isSessionActive = () => session.range[0] >= 0 && session.range[1] >= 0;
	/** 褰撳墠 range 鍖洪棿鍐呯殑 id 闆嗗悎 */
	const rangeIds = helper.createRootMemo(() => {
		if (!isSessionActive()) return /* @__PURE__ */ new Set();
		return new Set(session.items.slice(session.range[0], session.range[1] + 1));
	});
	const selectedIds = helper.createRootMemo(() => {
		if (!isSessionActive()) return [...baselineIds];
		return session.operationType === "select" ? [...baselineIds.union(rangeIds())] : [...baselineIds.difference(rangeIds())];
	});
	/** 璁板綍姣忎釜 id 鐨勯€変腑椤哄簭 */
	const orderMap = helper.createRootMemo(() => Object.fromEntries(selectedIds().map((id, i) => [id, i + 1])));
	const cancel = () => setSession((state) => {
		state.items = [];
		state.range = [-1, -1];
		state.operationType = "select";
	});
	return {
		/** 褰撳墠浼氳瘽鐘舵€侊紙鍙锛?*/
		session,
		/** 褰撳墠閫変腑椤?id 鍒楄〃 */
		selectedIds,
		/** 璁板綍姣忎釜 id 鐨勯€変腑椤哄簭 */
		orderMap,
		/** 鍒ゆ柇鎸囧畾 id 鏄惁琚€変腑 */
		isSelected: (id) => id in orderMap(),
		/** 鑾峰彇鎸囧畾 id 鐨勯€変腑椤哄簭锛屾湭閫変腑杩斿洖 undefined */
		getOrder: (id) => orderMap()[id],
		/** 淇敼浼氳瘽鐘舵€?*/
		setSession,
		/** 灏?session 鐨勪慨鏀瑰簲鐢ㄥ埌鍩虹嚎锛岀劧鍚庨噸缃?session */
		commit: () => {
			if (!isSessionActive()) return;
			if (session.operationType === "select") for (const id of rangeIds()) baselineIds.add(id);
			else for (const id of rangeIds()) baselineIds.delete(id);
			cancel();
		},
		/** 閲嶇疆 session 涓哄垵濮嬬姸鎬?*/
		cancel,
		/** 鐩存帴璁剧疆鍩虹嚎閫変腑椤瑰垪琛?*/
		setBaseline: (ids) => {
			baselineIds.clear();
			for (const id of ids) baselineIds.add(id);
		},
		/** 娓呯┖鍩虹嚎閫変腑椤瑰垪琛?*/
		clearBaseline: () => baselineIds.clear()
	};
};
//#endregion
//#region src/userscript/multiSelect/useMultiSelect.tsx
const useMultiSelect = ({ onStart, registeredItems }) => solid_js.createRoot((dispose) => {
	const [isEnabled, setIsEnabled] = solid_js.createSignal(false);
	const selection = useSelectionManager();
	const drag = createDragSession({
		isEnabled,
		registeredItems,
		isSelected: selection.isSelected,
		setSession: selection.setSession,
		commit: selection.commit,
		cancel: selection.cancel
	});
	/** 鎵€鏈夐渶瑕佸湪 unmount 鏃舵墽琛岀殑娓呯悊鍑芥暟锛圖OM dispose銆佷簨浠剁洃鍚瓑锛?*/
	const cleanups = [];
	let isInitialized = false;
	let elementIndex = 0;
	/** 娉ㄥ唽涓€涓彲閫夊厓绱狅細鎸傝浇 SelectionMask */
	const register = (dom) => {
		if (!registeredItems().get(dom)) return;
		const index = elementIndex++;
		const container = document.createElement("div");
		dom.append(container);
		const disposeDom = solid_js_web.render(() => solid_js_web.createComponent(SelectionMask, {
			dom,
			index,
			isEnabled,
			registeredItems,
			selection,
			drag
		}), container);
		cleanups.push(() => {
			disposeDom();
			container.remove();
		});
	};
	/** 鍗歌浇鎵€鏈?DOM 娉ㄥ唽鍜屼簨浠剁洃鍚紝浣嗕繚鐣欓€変腑鐘舵€侊紙缈婚〉鍦烘櫙锛?*/
	const unmount = () => {
		drag.clear();
		setIsEnabled(false);
		isInitialized = false;
		for (let i = cleanups.length - 1; i >= 0; i--) cleanups[i]?.();
		cleanups.length = 0;
	};
	return {
		/** 褰撳墠鏄惁澶勪簬澶氶€夋ā寮?*/
		isEnabled,
		/** 寮€鍚閫夋ā寮忓苟娉ㄥ唽鍏冪礌 */
		start: () => {
			if (isEnabled()) return;
			setIsEnabled(true);
			if (isInitialized) return;
			document.addEventListener("pointerup", drag.onPointerUp);
			document.addEventListener("pointercancel", drag.onPointerCancel);
			cleanups.push(() => {
				document.removeEventListener("pointerup", drag.onPointerUp);
				document.removeEventListener("pointercancel", drag.onPointerCancel);
			});
			const cleanup = onStart?.();
			if (cleanup) cleanups.push(cleanup);
			for (const dom of registeredItems().keys()) register(dom);
			isInitialized = true;
		},
		/** 缁撴潫澶氶€夋ā寮忥紝骞跺彂澶勭悊鎵€鏈夐€変腑椤瑰苟杩斿洖缁撴灉鍒楄〃 */
		collect: async (process, limit) => {
			const ids = selection.selectedIds();
			if (ids.length === 0) return [];
			setIsEnabled(false);
			return await helper.plimit(ids.map((id) => async () => {
				try {
					return await process(id);
				} catch (error) {
					return error instanceof Error ? error : new Error(String(error));
				}
			}), void 0, limit);
		},
		/** 娓呯┖閫変腑鐘舵€佸苟鍗歌浇鎵€鏈?DOM 娉ㄥ唽 */
		clear: () => {
			selection.clearBaseline();
			selection.cancel();
			unmount();
		},
		unmount,
		/** 娓呯悊鎵€鏈?SolidJS 鍝嶅簲寮忚祫婧?*/
		dispose,
		/** 褰撳墠閫変腑椤?ID 鍒楄〃 */
		selectedIds: selection.selectedIds,
		/** 鏍规嵁 ID 鍒楄〃鎭㈠閫変腑鐘舵€侊紙缈婚〉鍚庨噸鏂版敞鍐?DOM 鏃朵娇鐢級 */
		setSelectedIds: selection.setBaseline
	};
});
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/checklist.svg
var _tmpl$$1 = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M22 8c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m-9 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1M10.47 4.63c.39.39.39 1.02 0 1.41l-4.23 4.25c-.39.39-1.02.39-1.42 0L2.7 8.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.4 0m.01 8.01c.39.39.39 1.02 0 1.41L6.25 18.3c-.39.39-1.02.39-1.42 0L2.7 16.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.41.01">\`);
var checklist_default = (props = {}) => (() => {
	var _el$ = _tmpl$$1();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/clear_all.svg
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M6 13h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m-2 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m3-9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1">\`);
var clear_all_default = (props = {}) => (() => {
	var _el$ = _tmpl$();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/userscript/multiSelect/useMultiSelectLoad.tsx
const useMultiSelectLoad = ({ setState, showComic }, { id: initListid, onStart, getImgList }) => solid_js.createRoot(async (dispose) => {
	const cache = await helper.useCache({
		pending: "id",
		confirmed: "id"
	});
	const [listId, setListId] = solid_js.createSignal(initListid);
	const [registeredItems, setregisteredItems] = solid_js.createSignal(/* @__PURE__ */ new Map());
	const sm = useMultiSelect({
		onStart,
		registeredItems
	});
	helper.createEffectOn([listId], ([currentId], prev) => {
		const prevId = prev?.[0];
		if (prevId !== void 0 && prevId !== currentId) sm.clear();
	});
	const multiSelectLoad = helper.singleThreaded(async () => {
		if (!sm.isEnabled()) {
			sm.start();
			const confirmed = await cache.get("confirmed", listId());
			if (confirmed) sm.setSelectedIds(confirmed.selecteds);
			return;
		}
		const imgList = (await sm.collect(getImgList)).flat().filter(helper.isString);
		if (imgList.length === 0) return sm.clear();
		await cache.del("pending", listId());
		await cache.set("confirmed", {
			id: listId(),
			selecteds: sm.selectedIds()
		});
		setState("comicMap", "selected", { imgList });
		await showComic("selected");
	});
	helper.createEffectOn([
		sm.isEnabled,
		() => sm.selectedIds().length,
		listId
	], ([enabled, count, id]) => {
		setState((state) => {
			if (enabled) {
				state.fab.multiSelectCount = count;
				state.fab.onClick = multiSelectLoad;
				state.fab.overrideSpeedDial = [{
					name: helper.t("other.clear"),
					onClick: sm.clear,
					icon: solid_js_web.createComponent(clear_all_default, {})
				}];
			} else {
				state.fab.multiSelectCount = void 0;
				state.fab.onClick = showComic;
				state.fab.overrideSpeedDial = void 0;
			}
		});
		if (!enabled) return;
		const selecteds = sm.selectedIds();
		(async () => {
			await cache.del("confirmed", id);
			await (selecteds.length === 0 ? cache.del("pending", id) : cache.set("pending", {
				id,
				selecteds
			}));
		})();
	});
	setState("fab", "extraSpeedDial", [{
		name: helper.t("hotkeys.multi_select_load"),
		onClick: multiSelectLoad,
		icon: solid_js_web.createComponent(checklist_default, {})
	}]);
	const unlistenHotkey = core.listenHotkey({
		enter_read_mode: multiSelectLoad,
		multi_select_load: multiSelectLoad
	}, true);
	let oldIdSet = [];
	/** 娓呯悊鍓綔鐢紝浣嗕繚鐣欓€変腑鐘舵€侊紙鐢ㄤ簬缈婚〉锛?*/
	const unmount = () => {
		oldIdSet = [...registeredItems().values()];
		sm.unmount();
		setregisteredItems(/* @__PURE__ */ new Map());
		unlistenHotkey();
	};
	return {
		/** 娉ㄥ唽鏂扮殑鍙€夐」锛屽苟绛夊緟鑷冲拰涓婃鐨勬敞鍐岄」涓嶅悓 */
		registerItems: async (newId, fillItems, maxWaitTime = 5e3) => {
			setListId(newId);
			const map = await helper.wait(async () => {
				const newMap = /* @__PURE__ */ new Map();
				await fillItems(newMap);
				if (newMap.size === 0) return;
				if (helper.isEqual(oldIdSet, [...newMap.values()])) return;
				return newMap;
			}, maxWaitTime);
			if (!map) throw new Error("绛夊緟鏂?DOM 瓒呮椂");
			setregisteredItems(map);
			const pending = await cache.get("pending", listId());
			if (pending?.selecteds.length) {
				sm.start();
				sm.setSelectedIds(pending.selecteds);
			}
		},
		unmount,
		/** 瀹屽叏娓呯悊鎵€鏈夌姸鎬佸拰鍓綔鐢?*/
		dispose: () => {
			oldIdSet = [];
			unmount();
			sm.dispose();
			dispose();
		}
	};
});
//#endregion
//#region src/site/kemono.tsx
const original = () => helper.querySelectorAll(".post__thumbnail a").map((e) => e.href);
const thumbnail = () => helper.querySelectorAll(".post__thumbnail img").map((e) => e.src);
const handlePwa = () => {
	const zipExtension = new Set([
		"zip",
		"rar",
		"7z",
		"cbz",
		"cbr",
		"cb7"
	]);
	for (const e of helper.querySelectorAll(".post__attachment a")) {
		if (!zipExtension.has(e.href.split(".").pop())) continue;
		const a = document.createElement("a");
		a.href = \`https://comic-read.pages.dev/?url=\${encodeURIComponent(e.href)}\`;
		a.textContent = e.textContent.replace("Download ", "ComicReadPWA - ");
		a.className = e.className;
		a.style.opacity = ".6";
		e.parentNode.insertBefore(a, e.nextElementSibling);
	}
};
/** 澶氶€夊姞杞藉疄渚嬶紝鐢ㄤ簬鍦ㄧ炕椤垫椂淇濇寔閫変腑鐘舵€?*/
let multiSelectLoader;
core.setupSiteAdapter({
	name: "kemono",
	options: {
		autoShow: false,
		defaultOption: { pageNum: 1 },
		/** 鍔犺浇鍘熷浘 */
		load_original_image: true
	},
	getPageContext: () => {
		const listId = /\\/fanbox\\/user\\/(\\w+)/.exec(location.pathname)?.[1];
		if (listId) return {
			type: "list",
			id: listId,
			offset: Number(new URLSearchParams(location.search).get("o")) || 0
		};
		const postId = /\\/post\\/(\\w+)/.exec(location.pathname)?.[1];
		if (!postId) return;
		return {
			type: "manga",
			id: postId
		};
	},
	handlers: {
		manga: async ({ store, setState, showComic }) => {
			await helper.waitDom(".post__thumbnail");
			handlePwa();
			helper.createEffectOn(() => store.options.load_original_image, (isOriginal, prev) => {
				setState("nowComic", isOriginal ? "original" : "thumbnail");
				if (prev) showComic();
			});
			setState((state) => {
				state.comicMap.original = { getImgList: original };
				state.comicMap.thumbnail = { getImgList: thumbnail };
				state.manga.onNext = helper.querySelectorClick(".post__nav-link.next");
				state.manga.onPrev = helper.querySelectorClick(".post__nav-link.prev");
			});
		},
		list: async (coreCtx, { id }) => {
			const { options } = coreCtx;
			if (!multiSelectLoader) multiSelectLoader = await useMultiSelectLoad(coreCtx, {
				id,
				onStart: () => {
					for (const item of helper.querySelectorAll(".post-card")) item.style.position = "relative";
				},
				getImgList: async (postId) => {
					const res = await core.request(\`/api/v1\${location.pathname}/post/\${postId}\`, {
						responseType: "json",
						headers: { Accept: "text/css" }
					});
					if (options.load_original_image) return res.response.previews.map(({ serer, path, name }) => \`\${serer}/data\${path}?f=\${name}\`);
					return res.response.previews.map(({ path }) => \`https://img.\${location.host}/thumbnail/data\${path}\`);
				}
			});
			await multiSelectLoader.registerItems(id, async (map) => {
				for (const dom of await helper.waitDom(".post-card", 20)) map.set(dom, dom.dataset.id);
			});
			return (nextPageCtx) => {
				multiSelectLoader?.unmount();
				if (nextPageCtx?.type !== "list" || nextPageCtx?.id !== id) {
					multiSelectLoader?.dispose();
					multiSelectLoader = void 0;
				}
			};
		}
	}
});
//#endregion
`,
	"site/nhentai": `\nlet solid_js_web = require("solid-js/web");
let core = require("core");
let helper = require("helper");
let userscript_detectAd = require("userscript/detectAd");
//#region src/userscript/nhentaiApi.ts
const nhApi = (url, details) => core.request(url, {
	responseType: "json",
	headers: { "User-Agent": navigator.userAgent },
	fetch: false,
	...details
});
const getNhentaiData = async (id) => {
	const { response } = await nhApi(\`https://nhentai.net/api/v2/galleries/\${id}\`, {
		errorText: helper.t("site.ehentai.nhentai_error"),
		noTip: true
	});
	return response;
};
const toImgList = (data) => data.pages.map((page) => ({
	src: \`https://i.nhentai.net/\${page.path}\`,
	width: page.width,
	height: page.height
}));
//#endregion
//#region src/site/nhentai.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<a href=javascript:; id=comicReadMode class="btn btn-secondary"><i class="fa fa-book"></i> Read\`);
/** 绛夊緟姘村悎瀹屾垚锛岀‘淇濅箣鍚庣殑 dom 鎿嶄綔涓嶄細琚按鍚堣鐩?*/
const waitHydrated = () => helper.waitDom("#svelte-announcer", 1, 1e3 * 5);
core.setupSiteAdapter({
	name: "nhentai",
	options: {
		/** 鏃犻檺婊氬姩 */
		auto_page_turn: true,
		/** 褰诲簳灞忚斀婕敾 */
		block_totally: true,
		/** 鍦ㄦ柊椤甸潰涓墦寮€閾炬帴 */
		open_link_new_page: true,
		/** 璇嗗埆骞垮憡椤?*/
		detect_ad: true
	},
	getPageContext: () => {
		const galleryId = /^\\/g\\/(\\d+)/.exec(location.pathname)?.[1];
		if (galleryId) return {
			type: "manga",
			galleryId
		};
		if (helper.querySelector(".container.index-container")) return { type: "list" };
	},
	handlers: { manga: async ({ setState, showComic }) => {
		setState("manga", { onExit(isEnd) {
			if (isEnd) helper.scrollIntoView("#comment-container");
			setState("manga", "show", false);
		} });
		setState("comicMap", "", { getImgList: async () => {
			const galleryId = /^\\/g\\/(\\d+)/.exec(location.pathname)?.[1];
			if (!galleryId) throw new Error(helper.t("site.changed_load_failed"));
			return toImgList(await getNhentaiData(galleryId));
		} });
		await waitHydrated();
		const comicReadModeDom = (() => {
			var _el$ = _tmpl$();
			_el$.$$click = () => showComic();
			return _el$;
		})();
		document.getElementById("download")?.after(comicReadModeDom);
	} },
	features: {
		/** 璇嗗埆骞垮憡椤?*/
		detect_ad: async ({ store, setState }, pageCtx) => {
			if (pageCtx.type !== "manga") return;
			if (!helper.querySelector("#tags .tag[href=\\"/tag/extraneous-ads/\\"]")) return;
			setState("comicMap", "", "adList", new helper.ReactiveSet());
			await userscript_detectAd.getAdPageByContent(helper.querySelectorAll(".thumb-container img").map((img) => img.src), store.comicMap[""].adList);
			helper.createEffectOn(() => store.comicMap[""].imgList, (imgList) => imgList?.length && userscript_detectAd.getAdPageByContent(imgList.map((img) => typeof img === "string" ? img : img.src), store.comicMap[""].adList));
			helper.useStyle(() => {
				if (!store.comicMap[""]?.adList?.size) return "";
				return [...store.comicMap[""].adList].map((i) => \`
              .thumb-container:nth-of-type(\${i + 1}):not(:hover) {
                filter: blur(8px);
                clip-path: border-box;
              }\`).join("\\n");
			});
		},
		/** 褰诲簳灞忚斀婕敾 */
		block_totally: (_, pageCtx) => {
			if (pageCtx.type !== "list") return;
			helper.useStyle(".blacklisted.gallery { display: none; }");
		},
		/** 鍦ㄦ柊椤甸潰涓墦寮€閾炬帴 */
		open_link_new_page: async (_, pageCtx) => {
			if (pageCtx.type !== "list") return;
			await waitHydrated();
			for (const e of helper.querySelectorAll("a:not([href^=\\"javascript:\\"])")) e.setAttribute("target", "_blank");
		},
		/** 鏃犻檺婊氬姩 */
		auto_page_turn: async (_, pageCtx) => {
			if (pageCtx.type !== "list") return;
			await waitHydrated();
			let nextUrl = helper.querySelector("a.next")?.href;
			let lastUrl = location.href;
			if (!nextUrl) return;
			helper.useStyle(\`
        hr { bottom: 1px; box-sizing: border-box; margin: -1em auto 2em; }
        hr:last-child { position: relative; animation: load .8s linear alternate infinite; }
        hr:not(:last-child) { display: none; }
        @keyframes load { 0% { width: 100%; } 100% { width: 0; } }
      \`);
			const contentDom = document.getElementById("content");
			const getObserveDom = () => contentDom.querySelector(":is(.index-container, #favcontainer):last-of-type");
			const loadNextPage = helper.singleThreaded(async () => {
				if (!nextUrl) return;
				const html = helper.domParse((await core.request(nextUrl, {
					fetch: true,
					errorText: helper.t("site.nhentai.fetch_next_page_failed")
				})).responseText);
				const pagination = html.querySelector(".pagination");
				history.pushState(null, "", lastUrl);
				lastUrl = nextUrl;
				nextUrl = pagination.querySelector("a.next")?.href;
				contentDom.append(html.querySelector(".index-container, #favcontainer"), pagination);
				const hr = document.createElement("hr");
				contentDom.append(hr);
				observer.disconnect();
				observer.observe(getObserveDom());
				if (!nextUrl) hr.style.animationPlayState = "paused";
			}, { abandon: true });
			const observer = new IntersectionObserver((entries) => entries[0].isIntersecting && loadNextPage(), { threshold: .5 });
			observer.observe(getObserveDom());
			if (helper.querySelector("section.pagination")) contentDom.append(document.createElement("hr"));
			return () => observer.disconnect();
		}
	}
});
solid_js_web.delegateEvents(["click"]);
//#endregion
`,
	"site/pixiv": `\nlet core = require("core");
let helper = require("helper");
//#region src/site/pixiv.tsx
let imgs = [];
core.setupSiteAdapter({
	name: "pixiv",
	options: {
		autoShow: false,
		defaultOption: { pageNum: 1 },
		/** 鍔犺浇鍘熷浘 */
		load_original_image: true
	},
	getPageContext: async () => {
		if (!location.pathname.startsWith("/artworks/")) return;
		const [, , id] = location.pathname.split("/");
		if (!id) {
			imgs.length = 0;
			return;
		}
		const res = await core.request(\`/ajax/illust/\${id}/pages\`, { responseType: "json" });
		if (res.response.body.length <= 1) return;
		imgs = res.response.body;
		return {
			type: "manga",
			id
		};
	},
	handlers: { manga: ({ store, setState, showComic }) => {
		helper.createEffectOn(() => store.options.load_original_image, (isOriginal, prev) => {
			setState("nowComic", isOriginal ? "original" : "regular");
			if (prev) showComic();
		});
		const getImgList = (isOriginal) => () => imgs.map((img) => {
			return {
				src: isOriginal ? img.urls.original : img.urls.regular,
				height: img.height,
				width: img.width
			};
		});
		setState((state) => {
			state.comicMap.original = { getImgList: getImgList(true) };
			state.comicMap.regular = { getImgList: getImgList(false) };
		});
	} }
});
//#endregion
`,
	"site/selfhosted": `\nlet components_Manga = require("components/Manga");
let helper = require("helper");
let request = require("request");
let userscript_core = require("userscript/core");
//#region src/site/selfhosted.tsx
if (document.querySelector(\`head > meta[content="A manga reader that runs tachiyomi's extensions"]\`)) {
	const jump = (mangaId, chapterId) => {
		location.pathname = \`/manga/\${mangaId}/chapter/\${chapterId}\`;
	};
	const getChapters = async (mangaId, chapterId) => {
		const res = await request.request("/api/graphql", {
			method: "POST",
			data: JSON.stringify({
				operationName: "GET_CHAPTERS",
				query: \`query GET_CHAPTERS($mangaId: Int!, $chapterId: Int!) {
                chapters(condition: {
                  mangaId: $mangaId, sourceOrder: $chapterId}
                ) { nodes { pageCount } }
                manga(id: $mangaId) { chapters { totalCount } }
              }\`,
				variables: {
					mangaId,
					chapterId
				}
			}),
			responseType: "json"
		});
		if (res.response.data.chapters.nodes[0].pageCount <= 0) {
			await helper.sleep(200);
			return getChapters(mangaId, chapterId);
		}
		return res.response.data;
	};
	userscript_core.setup({
		name: "Tachidesk",
		isMangaPage: () => {
			const match = /\\/manga\\/(\\d+)\\/chapter\\/(\\d+)/.exec(location.pathname);
			if (!match) return false;
			return {
				mangaId: Number(match[1]),
				chapterId: Number(match[2])
			};
		},
		async getImgList({ setState }, { mangaId, chapterId }) {
			const data = await getChapters(mangaId, chapterId);
			const [{ pageCount }] = data.chapters.nodes;
			const chapterCount = data.manga.chapters.totalCount;
			setState("manga", {
				onPrev: chapterId > 0 ? () => jump(mangaId, chapterId - 1) : void 0,
				onNext: chapterId < chapterCount ? () => jump(mangaId, chapterId + 1) : void 0
			});
			return helper.range(pageCount, (i) => \`/api/v1/manga/\${mangaId}/chapter/\${chapterId}/page/\${i}\`);
		},
		handler: ({ setState }) => setState("manga", { onShowImgsChange: helper.debounce((showImgs, imgList) => {
			const lastImgUrl = imgList[[...showImgs].at(-1)].src;
			helper.querySelector(\`img[src$="\${lastImgUrl}"]\`)?.scrollIntoView({
				behavior: "instant",
				block: "end"
			});
		}, 500) })
	});
}
if (location.pathname === "/reader" && document.querySelector(".ip > a[href=\\"https://github.com/Difegue/LANraragi\\"]")?.textContent.trim() === "LANraragi.") {
	let initFlag = true;
	userscript_core.setup({
		name: "LANraragi",
		getImgList: () => helper.wait(() => Reader?.pages),
		handler: ({ setState }) => {
			setState("manga", { onShowImgsChange: helper.debounce((showImgs, imgList) => {
				if (!Reader) return;
				if (imgList.length > 0 && initFlag) {
					initFlag = false;
					components_Manga.setState((state) => {
						state.activePageIndex = state.pageList.findIndex((page) => page.includes(Reader.currentPage));
					});
				}
				Reader.currentPage = helper.clamp(0, [...showImgs].at(-1), Reader.maxPage);
				Reader.updateProgress();
			}, 200) });
		}
	});
}
//#endregion
`,
	"site/yamibo": `\nlet solid_js_web = require("solid-js/web");
let core = require("core");
let helper = require("helper");
let solid_js = require("solid-js");
//#region src/site/yamibo.tsx
var _tmpl$ = /* @__PURE__ */ solid_js_web.template(\`<li><a style=color:unset>鍥炵<!>椤礬`), _tmpl$2 = /* @__PURE__ */ solid_js_web.template(\`<a class=historyTag>鍥炵<!>椤?\`), _tmpl$3 = /* @__PURE__ */ solid_js_web.template(\`<div class=historyTag>+\`);
/** 浠?URL 瀛楃涓蹭腑鎻愬彇 fid */
const extractFid = (url) => {
	if (!url) return void 0;
	const fid = new URLSearchParams(url).get("fid");
	return fid ? Number(fid) : void 0;
};
core.setupSiteAdapter({
	name: "yamibo",
	options: {
		璁板綍闃呰杩涘害: true,
		鍏抽棴蹇嵎瀵艰埅鐨勮烦杞? true,
		淇鐐瑰嚮椤垫暟鏃剁殑璺宠浆鍒ゅ畾: true,
		鍥哄畾瀵艰埅鏉? true,
		鑷姩绛惧埌: true,
		绉诲姩绔樉绀哄笘瀛愭潈闄? true
	},
	getPageContext: () => {
		if (/thread(?:-\\d+){3}|mod=viewthread/.test(document.URL)) {
			const tid = unsafeWindow.tid ?? new URLSearchParams(location.search).get("tid") ?? /\\/thread-(\\d+)-\\d+-\\d+.html/.exec(location.pathname)?.[1];
			if (!tid) return;
			const fid = unsafeWindow.fid || extractFid(location.search) || extractFid(helper.querySelector("h2 > a, .bm.cl a[href*=\\"fid=\\"]")?.href);
			return {
				type: "thread",
				tid,
				fid,
				isMangaForum: fid === 30 || fid === 37
			};
		}
		if (/forum(?:-\\d+){2}|mod=forumdisplay/.test(document.URL)) return {
			type: "forum",
			isMobile: !document.querySelector("#flk")
		};
	},
	handlers: {
		all: () => {
			helper.useStyle(() => \`
          #fab { --fab: #6E2B19; }

          .historyTag {
            white-space: nowrap;

            border: 2px solid #6e2b19;
          }

          a.historyTag {
            font-weight: bold;

            margin-left: 1em;
            padding: 1px 4px;

            color: #6e2b19;
            border-radius: 4px 0 0 4px;
          }
          a.historyTag:last-child {
            border-radius: 4px;
          }

          div.historyTag {
            display: initial;

            margin-left: -.4em;
            padding: 1px;

            color: RGB(255, 237, 187);
            border-radius: 0 4px 4px 0;
            background-color: #6e2b19;
          }

          #threadlisttableid tbody:nth-child(2n) div.historyTag {
            color: RGB(255, 246, 215);
          }

          /* 灏嗐€屽洖澶?鏌ョ湅銆嶅垪鍔犲涓€鐐?*/
          .tl .num {
            width: 80px !important;
          }
        \`);
		},
		thread: ({ setState, options, showComic, loadComic }, { isMangaForum }) => {
			for (const e of helper.querySelectorAll("img[file*=\\"sinaimg.cn\\"]")) e.setAttribute("referrerpolicy", "no-referrer");
			const readMode = () => {
				if (!!helper.querySelector(".pg > .prev")) setState("flag", "needAutoShow", false);
				let imgList = helper.querySelectorAll(":is(.t_fsz, .message) img");
				const getImgList = () => {
					let i = imgList.length;
					while (i--) {
						const img = imgList[i];
						const file = img.getAttribute("file");
						if (file && img.src !== file) {
							img.setAttribute("src", file);
							img.setAttribute("lazyloaded", "true");
						}
						if (img.src.includes("static/image") || img.complete && img.naturalHeight && img.naturalWidth && img.naturalHeight < 500 && img.naturalWidth < 500) imgList.splice(i, 1);
					}
					return imgList.map((img) => img.src);
				};
				setState("comicMap", "", { getImgList });
				setState("manga", {
					onLoading(_imgList, img) {
						if (img && img.width < 500 && img.height < 500) return loadComic();
					},
					onExit(isEnd) {
						if (isEnd) helper.scrollIntoView(".psth, .rate, #postlist > div:nth-of-type(2)");
						setState("manga", "show", false);
					}
				});
				if (helper.querySelector("div.pti > div.authi")) {
					helper.querySelector("div.pti > div.authi").insertAdjacentHTML("beforeend", "<span class=\\"pipe show\\">|</span><a id=\\"comicReadMode\\" class=\\"show\\" href=\\"javascript:;\\">婕敾闃呰</a>");
					document.getElementById("comicReadMode")?.addEventListener("click", () => showComic());
				}
				if (helper.querySelector("#threadindex")) helper.hijackFn("ajaxinnerhtml", () => {
					imgList = helper.querySelectorAll(".t_fsz img");
					if (imgList.length === 0 || getImgList().length === 0) return;
					if (options.autoShow) showComic();
				});
				const tagDom = helper.querySelector(".ptg.mbm.mtn > a");
				if (tagDom) {
					const [, tagId] = tagDom.href.split("id=");
					const reg = /(?<=<th>\\s<a href="thread-)\\d+(?=-)/g;
					let threadList = [];
					const setPrevNext = async (pageNum = 1) => {
						const res = await core.request(\`/misc.php?mod=tag&id=\${tagId}&type=thread&page=\${pageNum}\`);
						const newList = Array.from(res.responseText.matchAll(reg), ([tid]) => Number(tid));
						threadList = [...threadList, ...newList];
						const index = threadList.indexOf(unsafeWindow.tid);
						if (newList.length > 0 && (index === -1 || !threadList[index + 1])) return setPrevNext(pageNum + 1);
						return setState("manga", {
							onPrev: threadList[index - 1] ? () => location.assign(\`thread-\${threadList[index - 1]}-1-1.html\`) : void 0,
							onNext: threadList[index + 1] ? () => location.assign(\`thread-\${threadList[index + 1]}-1-1.html\`) : void 0
						});
					};
					setTimeout(setPrevNext);
				}
			};
			if (isMangaForum) readMode();
			else {
				helper.querySelector("div.pti > div.authi").insertAdjacentHTML("beforeend", "<span class=\\"pipe show\\">|</span><a id=\\"comicReadMode\\" class=\\"show\\" href=\\"javascript:;\\">婕敾闃呰</a>");
				const button = document.getElementById("comicReadMode");
				button?.addEventListener("click", () => {
					button.previousElementSibling?.remove();
					button.remove();
					readMode();
					showComic();
				});
			}
		}
	},
	features: {
		鍥哄畾瀵艰埅鏉? () => helper.useStyle(".header-stackup { position: fixed !important }"),
		鍏抽棴蹇嵎瀵艰埅鐨勮烦杞? () => helper.querySelector("#qmenu a")?.setAttribute("href", "javascript:;"),
		淇鐐瑰嚮椤垫暟鏃剁殑璺宠浆鍒ゅ畾: (_, pageCtx) => {
			if (pageCtx.type !== "forum") return;
			const list = helper.querySelectorAll(".tps>a");
			let i = list.length;
			while (i--) list[i].setAttribute("onClick", "atarget(this)");
		},
		鑷姩绛惧埌: async () => {
			if (!unsafeWindow.discuz_uid || unsafeWindow.discuz_uid === "0") return;
			const todayString = (/* @__PURE__ */ new Date()).toLocaleDateString("zh-CN");
			if (todayString === localStorage.getItem("signDate")) return;
			const sign = helper.querySelector("#scbar_form > input[name=\\"formhash\\"]")?.value;
			if (!sign) return;
			try {
				const body = await (await fetch(\`plugin.php?id=zqlj_sign&sign=\${sign}\`)).text();
				if (!/鎴愬姛锛亅鎵撹繃鍗?.test(body)) throw new Error("鑷姩绛惧埌澶辫触");
				core.toast.success("鑷姩绛惧埌鎴愬姛");
				localStorage.setItem("signDate", todayString);
			} catch {
				core.toast.error("鑷姩绛惧埌澶辫触");
			}
		},
		璁板綍闃呰杩涘害: async (_, pageCtx) => {
			if (pageCtx.type === "thread") {
				const { tid } = pageCtx;
				/** 鍥炲鏁?*/
				let allReplies;
				try {
					const res = await core.request(\`/api/mobile/index.php?module=viewthread&tid=\${tid}\`, {
						responseType: "json",
						errorText: "鑾峰彇甯栧瓙鍥炲鏁版椂鍑洪敊",
						noTip: true
					});
					allReplies = Number.parseInt(res.response?.Variables?.thread?.allreplies, 10);
				} catch {}
				/** 褰撳墠鎵€鍦ㄩ〉鏁?*/
				const currentPageNum = Number.parseInt(helper.querySelector("#pgt strong")?.textContent ?? helper.querySelector("#dumppage")?.value ?? "1", 10);
				const cache = await helper.useCache({ history: "tid" });
				const data = await cache.get("history", \`\${tid}\`);
				if (data && currentPageNum < data.lastPageNum) return;
				/** 鐩戣妤煎眰鍒楄〃 */
				const watchFloorList = helper.querySelectorAll(data?.lastAnchor && currentPageNum === data.lastPageNum ? \`#\${data.lastAnchor} ~ div\` : "#postlist > div, .plc.cl");
				if (watchFloorList.length === 0) return;
				let id = 0;
				/** 鍌ㄥ瓨鏁版嵁锛屼絾鏄槻鎶?*/
				const debounceSave = (saveData) => {
					if (id) window.clearTimeout(id);
					id = window.setTimeout(async () => {
						id = 0;
						await cache.set("history", saveData);
					}, 200);
				};
				const observer = new IntersectionObserver((entries) => {
					const trigger = entries.find((e) => e.isIntersecting);
					if (!trigger) return;
					const triggerIndex = watchFloorList.indexOf(trigger.target);
					if (triggerIndex === -1) return;
					for (const e of watchFloorList.splice(0, triggerIndex + 1)) observer.unobserve(e);
					debounceSave({
						tid: \`\${tid}\`,
						lastPageNum: currentPageNum,
						lastReplies: allReplies || data?.lastReplies || 0,
						lastAnchor: trigger.target.id
					});
				}, { rootMargin: "-160px" });
				for (const e of watchFloorList) observer.observe(e);
				return () => observer.disconnect();
			}
			if (pageCtx.type === "forum") {
				const { isMobile } = pageCtx;
				const cache = await helper.useCache({ history: "tid" });
				const [updateFlag, setUpdateFlag] = solid_js.createSignal(false);
				const updateHistoryTag = () => setUpdateFlag((val) => !val);
				const { listSelector, getTid, getUrl } = isMobile ? {
					listSelector: ".threadlist li.list",
					getTid: (e) => new URLSearchParams(e.children[1].getAttribute("href")).get("tid"),
					getUrl: (data, tid) => \`forum.php?mod=viewthread&tid=\${tid}&extra=page%3D1&mobile=2&page=\${data.lastPageNum}#\${data.lastAnchor}\`
				} : {
					listSelector: "tbody[id^=normalthread]",
					getTid: (e) => e.id.split("_")[1],
					getUrl: (data, tid) => \`thread-\${tid}-\${data.lastPageNum}-1.html#\${data.lastAnchor}\`
				};
				for (const e of helper.querySelectorAll(listSelector)) {
					const tid = getTid(e);
					solid_js_web.render(() => {
						const [data, setData] = solid_js.createSignal();
						helper.createEffectOn(updateFlag, () => cache.get("history", tid).then(setData));
						const url = solid_js.createMemo(() => data() ? getUrl(data(), tid) : "");
						const lastReplies = solid_js.createMemo(() => !isMobile && data() ? Number(e.querySelector(".num a").innerHTML) - data().lastReplies : 0);
						return solid_js_web.createComponent(solid_js.Show, {
							get when() {
								return Boolean(data());
							},
							get children() {
								return isMobile ? (() => {
									var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$5 = _el$2.firstChild.nextSibling;
									_el$5.nextSibling;
									solid_js_web.addEventListener(_el$2, "click", unsafeWindow.atarget, true);
									solid_js_web.insert(_el$2, () => data()?.lastPageNum, _el$5);
									solid_js_web.effect(() => solid_js_web.setAttribute(_el$2, "href", url()));
									return _el$;
								})() : [(() => {
									var _el$6 = _tmpl$2(), _el$9 = _el$6.firstChild.nextSibling;
									_el$9.nextSibling;
									solid_js_web.addEventListener(_el$6, "click", unsafeWindow.atarget, true);
									solid_js_web.insert(_el$6, () => data()?.lastPageNum, _el$9);
									solid_js_web.effect(() => solid_js_web.setAttribute(_el$6, "href", url()));
									return _el$6;
								})(), solid_js_web.createComponent(solid_js.Show, {
									get when() {
										return lastReplies() > 0;
									},
									get children() {
										var _el$0 = _tmpl$3();
										_el$0.firstChild;
										solid_js_web.insert(_el$0, lastReplies, null);
										return _el$0;
									}
								})];
							}
						});
					}, isMobile ? e.children[3] : e.getElementsByTagName("th")[0]);
				}
				document.addEventListener("visibilitychange", updateHistoryTag);
				helper.querySelector("#autopbn")?.addEventListener("click", updateHistoryTag);
				return () => document.removeEventListener("visibilitychange", updateHistoryTag);
			}
		},
		绉诲姩绔樉绀哄笘瀛愭潈闄? async (_, pageCtx) => {
			if (pageCtx.type !== "forum" || !pageCtx.isMobile) return;
			const apiUrl = new URL(location.href);
			apiUrl.pathname = "/api/mobile/index.php";
			apiUrl.searchParams.set("module", apiUrl.searchParams.get("mod"));
			apiUrl.searchParams.delete("mod");
			const res = await core.request(\`\${apiUrl}\`, {
				responseType: "json",
				errorText: "鑾峰彇甯栧瓙鏉冮檺鏃跺嚭閿?
			});
			const readpermMap = /* @__PURE__ */ new Map();
			for (const { tid, readperm } of res.response.Variables.forum_threadlist) if (readperm !== "0") readpermMap.set(Number(tid), Number(readperm));
			for (const item of helper.querySelectorAll(".threadlist li.list")) {
				const a = item.querySelector("a[href*=\\"&tid=\\"]");
				const tid = Number(new URLSearchParams(a.href).get("tid"));
				if (!readpermMap.has(tid)) continue;
				item.querySelector(".threadlist_foot li.mr").insertAdjacentHTML("beforeend", \`<span style="margin-right: .5em; color: #EE1B2E">#鏉冮檺\${readpermMap.get(tid)}</span>\`);
			}
		}
	}
});
solid_js_web.delegateEvents(["click"]);
//#endregion
`,
	"site/yurifans": `\nlet core = require("core");
let helper = require("helper");
//#region src/site/yurifans.tsx
core.setupSiteAdapter({
	name: "yurifans",
	options: { 鑷姩绛惧埌: true },
	getPageContext: async () => {
		if (!await helper.waitDom("a.post-list-cat-item[title=\\"鍦ㄧ嚎鍖?婕敾\\"]")) return;
		if (helper.querySelector(".content-hidden")) return {
			type: "manga",
			mangaType: "purchased"
		};
		if (helper.querySelector(".xControl")) return {
			type: "manga",
			mangaType: "folded"
		};
		return {
			type: "manga",
			mangaType: "simple"
		};
	},
	handlers: { manga: async ({ store, setState, showComic, init }, { mangaType }) => {
		switch (mangaType) {
			case "purchased": {
				const imgList = helper.querySelector(".content-hidden").getElementsByTagName("img");
				if (await helper.wait(() => imgList.length, 1e3)) {
					const getImgList = () => Array.from(imgList, (e) => e.src);
					setState("comicMap", "", { getImgList });
				}
				break;
			}
			case "folded": {
				setState((state) => {
					state.flag.needAutoShow = false;
					state.options.autoShow = false;
				});
				const switchChapter = (i) => {
					showComic(i);
					setState("manga", {
						onPrev: Reflect.has(store.comicMap, i - 1) ? () => switchChapter(i - 1) : void 0,
						onNext: Reflect.has(store.comicMap, i + 1) ? () => switchChapter(i + 1) : void 0
					});
				};
				for (const [i, a] of helper.querySelectorAll(".xControl > a").entries()) {
					const item = a.parentElement.nextElementSibling;
					setState("comicMap", i, { getImgList: () => Array.from(item.querySelectorAll("img"), (e) => e.dataset.src ?? e.src) });
					a.addEventListener("click", () => setTimeout(() => item.style.display !== "none" && switchChapter(i)));
				}
				init();
				break;
			}
			case "simple": {
				await helper.wait(() => helper.querySelectorAll(".entry-content img").length);
				const getImgList = () => helper.querySelectorAll(".entry-content img").map((e) => e.dataset.src || e.src);
				setState("comicMap", "", { getImgList });
				break;
			}
		}
	} },
	features: { 鑷姩绛惧埌: async () => {
		if (!globalThis.b2token) return;
		const todayString = (/* @__PURE__ */ new Date()).toLocaleDateString("zh-CN");
		if (todayString === localStorage.getItem("signDate")) return;
		try {
			const res = await core.request("/wp-json/b2/v1/userMission", {
				method: "POST",
				noTip: true,
				headers: { Authorization: \`Bearer \${b2token}\` }
			});
			const data = JSON.parse(res.responseText);
			if (!(data?.mission?.date || !Number.isNaN(Number(data)))) throw new Error("绛惧埌澶辫触");
			core.toast("鑷姩绛惧埌鎴愬姛");
			localStorage.setItem("signDate", todayString);
		} catch {
			core.toast.error("鑷姩绛惧埌澶辫触");
		}
	} }
});
//#endregion
`
};
//#endregion
//#region src/userscript/import.ts
let supportWorker = typeof Worker !== "undefined";
const gmApi = {
	GM: typeof GM === "undefined" ? void 0 : GM,
	GM_addElement: typeof GM_addElement === "undefined" ? void 0 : GM_addElement,
	GM_getResourceText: typeof GM_getResourceText === "undefined" ? void 0 : GM_getResourceText,
	GM_xmlhttpRequest: typeof GM_xmlhttpRequest === "undefined" ? void 0 : GM_xmlhttpRequest,
	unsafeWindow: typeof unsafeWindow === "undefined" ? window : unsafeWindow
};
const gmApiList = Object.keys(gmApi);
const crsLib = {
	process: { env: { NODE_ENV: "production" } },
	...gmApi
};
const tempName = Math.random().toString(36).slice(2);
const getResource = (name) => {
	const text = gmApi.GM_getResourceText?.(name.replaceAll("/", "|").replaceAll("@", "_"));
	if (!text) throw new Error(`澶栭儴妯″潡 ${name} 鏈湪 @Resource 涓０鏄巂);
	if (name === "@tensorflow/tfjs-backend-webgpu") return text.replace("@tensorflow/tfjs-core", "@tensorflow/tfjs");
	return text;
};
const evalCode = (code) => {
	if (!code) return;
	if (gmApi.GM_addElement) return GM_addElement("script", { textContent: code })?.remove();
	eval.call(gmApi.unsafeWindow, code);
};
const selfImport = (name) => {
	const libCode = libCodeMap[name] ?? getResource(name);
	if (name.startsWith("worker/") && supportWorker) try {
		const importModule = new Map([["Comlink", getResource("comlink")]]);
		const handleCode = (code) => code.replaceAll(/require\(['"](.+?)['"]\)/g, (_, moduleName) => {
			if (!importModule.has(moduleName)) importModule.set(moduleName, handleCode(getResource(moduleName)));
			return `moduleMap['${moduleName}']`;
		});
		const moduleCode = handleCode(libCode);
		let workerCode = `const moduleMap = {};\n`;
		for (const [moduleName, code] of importModule) workerCode += `
moduleMap['${moduleName}'] = {};
(function (exports, module) { ${code} }) (
  moduleMap['${moduleName}'],
  {
    set exports(value) { moduleMap['${moduleName}'] = value; },
    get exports() { return moduleMap['${moduleName}']; }
  },
);\n`;
		workerCode += `
const exports = {};
${moduleCode}
moduleMap['Comlink'].expose(exports);`;
		const codeUrl = URL.createObjectURL(new Blob([workerCode], { type: "text/javascript" }));
		setTimeout(() => URL.revokeObjectURL(codeUrl));
		const worker = new Worker(codeUrl);
		crsLib[name] = require("comlink").wrap(worker);
		return;
	} catch {
		supportWorker = false;
	}
	let runCode = `
    (function (process, require, exports, module, ${gmApiList.join(", ")}) {
      ${libCode}
    })(
      window['${tempName}'].process,
      window['${tempName}'].require,
      window['${tempName}']['${name}'],
      ((module) => ({
        set exports(value) { module['${name}'] = value; },
        get exports() { return module['${name}']; },
      }))(window['${tempName}']),
      ${gmApiList.map((apiName) => `window['${tempName}'].${apiName}`).join(", ")}
    );
  `;
	gmApi.unsafeWindow[tempName] = crsLib;
	gmApi.unsafeWindow[tempName][name] = {};
	evalCode(runCode);
	Reflect.deleteProperty(gmApi.unsafeWindow, tempName);
};
/**
* 鍒涘缓涓€涓閮ㄦā鍧楃殑 Proxy锛岀瓑鍒拌鍙栧璞″睘鎬ф椂鎵嶅姞杞芥ā鍧?* @param name 澶栭儴妯″潡鍚?*/
const require = (name) => {
	const __esModule = { value: true };
	const selfLibProxy = () => {};
	selfLibProxy.default = {};
	const selfDefault = new Proxy(selfLibProxy, {
		get(_, prop) {
			if (prop === "__esModule") return __esModule;
			if (prop === "default") return selfDefault;
			if (!crsLib[name]) selfImport(name);
			if (Reflect.has(crsLib[name], "default") && Reflect.has(crsLib[name].default, prop)) return crsLib[name].default[prop];
			return crsLib[name][prop];
		},
		apply(_, __, args) {
			if (!crsLib[name]) selfImport(name);
			const module = crsLib[name];
			return (typeof module.default === "function" ? module.default : module)(...args);
		},
		construct(_, args) {
			if (!crsLib[name]) selfImport(name);
			const module = crsLib[name];
			return new (typeof module.default === "function" ? module.default : module)(...args);
		},
		ownKeys() {
			if (!crsLib[name]) selfImport(name);
			return Reflect.ownKeys(crsLib[name]);
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: true,
				configurable: true
			};
		}
	});
	return selfDefault;
};
crsLib.require = require;
//#endregion
let components_Manga = require("components/Manga");
let core = require("core");
let helper = require("helper");
let helper_languages = require("helper/languages");
let request = require("request");
let userscript_copyApi = require("userscript/copyApi");
let userscript_otherSite = require("userscript/otherSite");
//#region src/userscript/nhentaiApi.ts
const nhApi = (url, details) => core.request(url, {
	responseType: "json",
	headers: { "User-Agent": navigator.userAgent },
	fetch: false,
	...details
});
const getNhentaiData = async (id) => {
	const { response } = await nhApi(`https://nhentai.net/api/v2/galleries/${id}`, {
		errorText: helper.t("site.ehentai.nhentai_error"),
		noTip: true
	});
	return response;
};
const toImgList = (data) => data.pages.map((page) => ({
	src: `https://i.nhentai.net/${page.path}`,
	width: page.width,
	height: page.height
}));
//#endregion
//#region src/index.ts
try {
	switch (location.hostname) {
		case "bbs.yamibo.com":
			selfImport("site/yamibo");
			break;
		case "www.yamibo.com": {
			if (location.pathname !== "/manga/view-chapter") break;
			const id = new URLSearchParams(location.search).get("id");
			if (!id) break;
			/** 鎬婚〉鏁?*/
			const totalPageNum = Number(helper.querySelector("section div:first-of-type div:last-of-type").innerHTML.split("锛?)[1]);
			if (Number.isNaN(totalPageNum)) throw new Error(helper.t("site.changed_load_failed"));
			/** 鑾峰彇鎸囧畾椤垫暟鐨勫浘鐗?url */
			const loadImg = async (i) => {
				const res = await core.request(`https://www.yamibo.com/manga/view-chapter?id=${id}&page=${i}`);
				return /(?<=<img id=['"]imgPic['"].+?src=['"]).+?(?=['"])/.exec(res.responseText)[0].replaceAll("&amp;", "&").replaceAll("http://", "https://");
			};
			core.setup({
				name: "newYamibo",
				getImgList: ({ dynamicLazyLoad }) => dynamicLazyLoad({
					loadImg,
					length: totalPageNum
				}),
				onNext: () => helper.querySelectorClick("#btnNext"),
				onPrev: () => helper.querySelectorClick("#btnPrev"),
				onExit: (isEnd) => isEnd && helper.scrollIntoView("#w1")
			});
			break;
		}
		case "exhentai.org":
		case "e-hentai.org":
			selfImport("site/ehentai");
			break;
		case "nhentai.net":
			selfImport("site/nhentai");
			break;
		case "yuri.website":
			selfImport("site/yurifans");
			break;
		case "2025copy.com":
		case "www.2025copy.com":
		case "copy20.com":
		case "www.copy20.com":
		case "mangacopy.com":
		case "www.mangacopy.com":
			selfImport("site/copymanga");
			break;
		case "www.zaimanhua.com":
		case "manhua.zaimanhua.com":
			core.setup({
				name: "zaiManHua",
				isMangaPage: async () => {
					if (!location.pathname.startsWith("/view/")) return false;
					await helper.wait(() => Boolean(helper.querySelector(".scrollbar-demo-item")));
					return true;
				},
				getImgList: () => unsafeWindow.__NUXT__.data.getChapters?.data?.chapterInfo?.page_url,
				onNext: () => helper.querySelectorClick("#next_chapter"),
				onPrev: () => helper.querySelectorClick("#prev_chapter")
			});
			break;
		case "m.zaimanhua.com": {
			const api = async (apiPath) => {
				const res = await core.request(`https://v4api.zaimanhua.com/app/v1/comic${apiPath}?_v=15`, { responseType: "json" });
				if (res.response.errno) core.toast.error(`${helper.t("alert.comic_load_error")}: ${res.response.errmsg}`, { throw: true });
				return res.response.data.data;
			};
			const getPageData = (comicId, chapterId) => api(`/chapter/${comicId}/${chapterId}`);
			const getComicData = (comicId) => api(`/detail/${comicId}`);
			core.setup({
				name: "zaiManHua",
				isMangaPage: () => {
					if (location.pathname !== "/pages/comic/page") return false;
					const urlParams = new URLSearchParams(location.search);
					const comicId = Number(urlParams.get("comic_id"));
					const chapterId = Number(urlParams.get("chapter_id"));
					if (!comicId || !chapterId) throw new Error(helper.t("site.changed_load_failed"));
					return {
						comicId,
						chapterId
					};
				},
				async getImgList({ setState }, { comicId, chapterId }) {
					const comicData = await getComicData(comicId);
					const chapter = (comicData.chapters.length === 1 ? comicData.chapters[0] : comicData.chapters.find((chapter) => chapter.data.find((data) => data.chapter_id === chapterId))).data.toSorted((a, b) => a.chapter_order - b.chapter_order);
					const chapterIndex = chapter.findIndex(({ chapter_id }) => chapter_id === chapterId);
					const createChapterNav = (targetIndex) => targetIndex in chapter ? () => location.assign(`/pages/comic/page?comic_id=${comicId}&chapter_id=${chapter[targetIndex].chapter_id}`) : void 0;
					setState("manga", {
						onPrev: createChapterNav(chapterIndex - 1),
						onNext: createChapterNav(chapterIndex + 1)
					});
					return (await getPageData(comicId, chapterId)).page_url_hd;
				}
			});
			break;
		}
		case "tw.manhuagui.com":
		case "m.manhuagui.com":
		case "www.mhgui.com":
		case "www.manhuagui.com": {
			if (!/\/comic\/\d+\/\d+\.html/.test(location.pathname)) break;
			let comicInfo;
			try {
				const dataScript = helper.querySelectorAll("body > script:not([src])").find((script) => script.innerHTML.startsWith("window["));
				if (!dataScript) throw new Error(helper.t("site.changed_load_failed"));
				comicInfo = JSON.parse(eval(dataScript.innerHTML.slice(26)).match(/(?<=\()\{.+\}/)[0]);
			} catch {
				core.toast.error(helper.t("site.changed_load_failed"));
				break;
			}
			helper.useStyle(`#smh-msg-box { z-index: 2147483647 !important }`);
			const createChapterNav = (cid) => {
				if (cid === 0) return;
				const newUrl = location.pathname.replace(/(?<=\/)\d+(?=\.html)/, `${cid}`);
				return () => location.assign(newUrl);
			};
			core.setup({
				name: "manhuagui",
				getImgList() {
					const sl = Object.entries(comicInfo.sl).map((attr) => `${attr[0]}=${attr[1]}`).join("&");
					if (comicInfo.files) return comicInfo.files.map((file) => `${unsafeWindow.pVars.manga.filePath}${file}?${sl}`);
					if (comicInfo.images) {
						const { origin } = new URL(helper.querySelector("#manga img").src);
						return comicInfo.images.map((url) => `${origin}${url}?${sl}`);
					}
					core.toast.error(helper.t("site.changed_load_failed"), { throw: true });
					return [];
				},
				onNext: () => createChapterNav(comicInfo.nextId),
				onPrev: () => createChapterNav(comicInfo.prevId)
			});
			break;
		}
		case "www.manhuaren.com":
		case "m.1kkk.com":
		case "www.1kkk.com":
		case "tel.dm5.com":
		case "en.dm5.com":
		case "cnc.dm5.com":
		case "www.dm5.cn":
		case "www.dm5.com": {
			if (!Reflect.has(unsafeWindow, "DM5_CID")) break;
			const imgNum = unsafeWindow.DM5_IMAGE_COUNT ?? unsafeWindow.imgsLen;
			if (!(Number.isSafeInteger(imgNum) && imgNum > 0)) {
				core.toast.error(helper.t("site.changed_load_failed"));
				break;
			}
			const getPageImg = async (i) => {
				const res = await unsafeWindow.$.ajax({
					type: "GET",
					url: "chapterfun.ashx",
					data: {
						cid: unsafeWindow.DM5_CID,
						page: i,
						key: unsafeWindow.$("#dm5_key").length > 0 ? unsafeWindow.$("#dm5_key").val() : "",
						language: 1,
						gtk: 6,
						_cid: unsafeWindow.DM5_CID,
						_mid: unsafeWindow.DM5_MID,
						_dt: unsafeWindow.DM5_VIEWSIGN_DT,
						_sign: unsafeWindow.DM5_VIEWSIGN
					}
				});
				return eval(res);
			};
			const getChapterNav = (pcSelector, mobileText) => helper.querySelectorClick(() => helper.querySelector(pcSelector) ?? helper.querySelectorAll(".view-bottom-bar a").find((e) => e.textContent?.includes(mobileText)));
			core.setup({
				name: "dm5",
				getImgList({ dynamicLoad }) {
					if (Array.isArray(unsafeWindow.newImgs) && unsafeWindow.newImgs.every(helper.isUrl)) return unsafeWindow.newImgs;
					return dynamicLoad(async (setImg) => {
						const imgList = /* @__PURE__ */ new Set();
						while (imgList.size < imgNum) for (const url of await getPageImg(imgList.size + 1)) {
							if (imgList.has(url)) continue;
							imgList.add(url);
							setImg(imgList.size - 1, url);
						}
					}, imgNum);
				},
				onPrev: () => getChapterNav(".logo_1", "涓婁竴绔?),
				onNext: () => getChapterNav(".logo_2", "涓嬩竴绔?),
				onExit: (isEnd) => isEnd && helper.scrollIntoView(".postlist")
			});
			break;
		}
		case "www.mangabz.com":
		case "mangabz.com": {
			if (!Reflect.has(unsafeWindow, "MANGABZ_CID")) break;
			const imgNum = unsafeWindow.MANGABZ_IMAGE_COUNT ?? unsafeWindow.imgsLen;
			if (!(Number.isSafeInteger(imgNum) && imgNum > 0)) {
				core.toast.error(helper.t("site.changed_load_failed"));
				break;
			}
			const getPageImg = async (i) => {
				const res = await unsafeWindow.$.ajax({
					type: "GET",
					url: "chapterimage.ashx",
					data: {
						cid: unsafeWindow.MANGABZ_CID,
						page: i,
						key: "",
						_cid: unsafeWindow.MANGABZ_CID,
						_mid: unsafeWindow.MANGABZ_MID,
						_dt: unsafeWindow.MANGABZ_VIEWSIGN_DT,
						_sign: unsafeWindow.MANGABZ_VIEWSIGN
					}
				});
				return eval(res);
			};
			const getChapterNav = (pcSelector, mobileText) => helper.querySelectorClick(() => helper.querySelector(pcSelector) ?? helper.querySelectorAll(".bottom-bar-tool a").find((e) => e.textContent?.includes(mobileText)));
			core.setup({
				name: "mangabz",
				getImgList: ({ dynamicLoad }) => dynamicLoad(async (setImg) => {
					const imgList = /* @__PURE__ */ new Set();
					while (imgList.size < imgNum) for (const url of await getPageImg(imgList.size + 1)) {
						if (imgList.has(url)) continue;
						imgList.add(url);
						setImg(imgList.size - 1, url);
					}
				}, imgNum),
				onNext: () => getChapterNav("body > .container a[href^=\"/\"]:last-child", "涓嬩竴"),
				onPrev: () => getChapterNav("body > .container a[href^=\"/\"]:first-child", "涓婁竴")
			});
			break;
		}
		case "komiic.com": {
			const query = `
        query imagesByChapterId($chapterId: ID!) {
          imagesByChapterId(chapterId: $chapterId) {
            id
            kid
            height
            width
            __typename
          }
        }`;
			const getChapterNav = (text) => helper.querySelectorClick(".v-bottom-navigation__content button:not([disabled])", text);
			core.setup({
				name: "komiic",
				isMangaPage: () => {
					const match = /comic\/(\d+)\/chapter\/(\d+)\/images\//.exec(location.href);
					if (match) return {
						comicId: match[1],
						chapterId: match[2]
					};
				},
				getImgList: async (_, { chapterId }) => {
					return (await core.request("/api/query", {
						method: "POST",
						responseType: "json",
						headers: { "content-type": "application/json" },
						data: JSON.stringify({
							operationName: "imagesByChapterId",
							variables: { chapterId: `${chapterId}` },
							query
						})
					})).response.data.imagesByChapterId.map(({ kid }) => `https://komiic.com/api/image/${kid}`);
				},
				onPrev: () => getChapterNav("涓婁竴"),
				onNext: () => getChapterNav("涓嬩竴")
			});
			break;
		}
		case "8.twobili.com":
		case "a.twobili.com":
		case "articles.onemoreplace.tw":
		case "www.8comic.com": {
			if (!/^\/(?:online|ReadComic|comic)\//.test(location.pathname)) break;
			request.downloadImgHeaders.Referer = "https://www.8comic.com/";
			const getImgList = () => Array.from(unsafeWindow.xx.matchAll(/(?<= s=").+?(?=")/g), ([text]) => decodeURIComponent(text));
			core.setup({
				name: "8comic",
				getImgList,
				onNext: () => helper.querySelectorClick("#nextvol"),
				onPrev: () => helper.querySelectorClick("#prevvol")
			});
			break;
		}
		case "www.wn05.cfd":
		case "www.wn05.shop":
		case "www.wn08.ru":
		case "www.wn04.cfd":
		case "www.wn04.shop":
		case "www.wnacg.com":
		case "wnacg.com": {
			const buttonDom = helper.querySelector("#bodywrap a.btn");
			if (buttonDom) {
				buttonDom.style.setProperty("background-color", "#607d8b");
				buttonDom.style.setProperty("background-image", "none");
			}
			let getImgList;
			if (location.pathname.startsWith("/photos-slide-aid-")) getImgList = async () => {
				const id = /-(\d+).html/.exec(location.pathname)?.[1];
				if (!id) throw new Error(helper.t("site.changed_load_failed"));
				const res = await core.request(`/photos-item-aid-${id}.html`);
				const reRes = /"page_url":(\[.+\]),/.exec(res.responseText);
				if (!reRes) throw new Error(helper.t("site.changed_load_failed"));
				return eval(reRes[1]);
			};
			else if (location.pathname.startsWith("/photos-slist-aid-")) getImgList = () => unsafeWindow.imglist.filter(({ caption }) => caption !== "鍠滄绱冲＋婕暙鐨勫悓瀛歌珛鍔犲叆鏀惰棌鍝︼紒").map(({ url }) => url);
			else break;
			core.setup({
				name: "wnacg",
				getImgList
			});
			break;
		}
		case "18comic.ink":
		case "jmcomic-zzz.one":
		case "jmcomic-zzz.org":
		case "18comic.org":
		case "18comic.vip":
			selfImport("site/jm");
			break;
		case "noy1.top":
			core.setup({
				name: "NoyAcg",
				isMangaPage: () => location.hash.startsWith("#/read/") && { id: location.hash },
				async getImgList() {
					const [, , id] = location.hash.split("/");
					const [cdn] = (await helper.wait(() => helper.querySelector(".lazy-load-image-background img"))).src.split(id);
					return helper.range(await helper.wait(() => helper.querySelectorAll(".lazy-load-image-background").length), (i) => `${cdn}${id}/${i + 1}.webp`);
				}
			});
			break;
		case "www.relamanhua.org":
		case "www.manga2024.com":
		case "www.2024manga.com":
			if (!location.pathname.includes("/chapter/")) break;
			if (!document.querySelector(".disData[contentkey]")) {
				core.toast.error(helper.t("site.changed_load_failed"));
				break;
			}
			core.setup({
				name: "relamanhua",
				getImgList: () => userscript_copyApi.getImglistByHtml(),
				onNext: () => helper.querySelectorClick(".comicContent-next a:not(.prev-null)"),
				onPrev: () => helper.querySelectorClick(".comicContent-prev:not(.index,.list) a:not(.prev-null)")
			});
			break;
		case "hanime1.me":
			if (!location.pathname.startsWith("/comic/")) break;
			core.setup({
				name: "hanime1",
				getImgList: async () => {
					const downloadDom = await helper.wait(() => helper.querySelector(".comics-metadata-margin-top a:has(span.material-icons)"));
					const id = /\/g\/(\d+)\//.exec(downloadDom.href)?.[1];
					if (!id) throw new Error(helper.t("site.changed_load_failed"));
					return toImgList(await getNhentaiData(id));
				}
			});
			break;
		case "hitomi.la":
			core.setup({
				name: "hitomi",
				isMangaPage: () => helper.wait(() => unsafeWindow.galleryinfo && Reflect.has(unsafeWindow.galleryinfo, "files") && unsafeWindow.galleryinfo.type !== "anime", 1e3 * 5),
				getImgList: () => unsafeWindow.galleryinfo.files.map((img) => unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo.id, img, "webp"))
			});
			break;
		case "hdoujin.org": {
			const clearance = localStorage.getItem("clearance");
			if (!clearance) throw new Error(helper.t("site.changed_load_failed"));
			const api = async (url, details) => {
				return (await core.request(`https://api.hdoujin.org/books${url}?crt=${clearance}`, {
					fetch: true,
					responseType: "json",
					...details
				})).response;
			};
			core.setup({
				name: "hdoujin",
				isMangaPage: () => {
					const reRes = /\/g\/(\d+)\/(.+?)(?:\/read\/\d+)?$/.exec(location.pathname);
					if (!reRes) return false;
					const [, galleryId, galleryKey] = reRes;
					return {
						type: "manga",
						galleryId,
						galleryKey
					};
				},
				getImgList: async ({ dynamicLazyLoad }, { galleryId, galleryKey }) => {
					const { data } = await api(`/detail/${galleryId}/${galleryKey}`, { method: "POST" });
					const [[size]] = Object.entries(data).filter(([, { id, key }]) => id && key).toSorted(([a], [b]) => {
						if (a === "0") return -1;
						if (b === "0") return 1;
						return Number(b) - Number(a);
					});
					const { id: dataId, key: dataKey } = data[size];
					const { base, entries } = await api(`/data/${galleryId}/${galleryKey}/${dataId}/${dataKey}/${size}`);
					return dynamicLazyLoad({
						length: entries.length,
						loadImg: async (i) => {
							const res = await core.request(`${base}${entries[i].path}`, {
								cookie: document.cookie,
								headers: {
									Referer: "https://hdoujin.org/",
									Origin: "https://hdoujin.org",
									"sec-fetch-dest": "empty",
									"sec-fetch-mode": "cors",
									"sec-fetch-site": "cross-site"
								},
								responseType: "blob",
								fetch: false
							});
							return URL.createObjectURL(res.response);
						}
					});
				}
			});
			break;
		}
		case "shupogaki.moe":
		case "hoshino.one":
		case "niyaniya.moe": {
			const downloadImg = (url) => new Promise((resolve) => {
				const xhr = new XMLHttpRequest();
				xhr.responseType = "blob";
				xhr.open("GET", url);
				xhr.onload = () => {
					resolve(URL.createObjectURL(xhr.response));
				};
				xhr.send();
			});
			const crt = localStorage.getItem("clearance");
			core.setup({
				name: "schale",
				isMangaPage: () => {
					const reRes = /\/g\/(\d+)\/(.+?)(?:\/read\/\d+)?$/.exec(location.pathname);
					if (!reRes) return false;
					const [, galleryId, galleryKey] = reRes;
					return {
						galleryId,
						galleryKey
					};
				},
				async getImgList({ dynamicLazyLoad }, { galleryId, galleryKey }) {
					const detailRes = await core.request(`https://api.schale.network/books/detail/${galleryId}/${galleryKey}?crt=${crt}`, {
						fetch: true,
						responseType: "json",
						method: "POST"
					});
					const [[w, { id, key }]] = Object.entries(detailRes.response.data).filter(([, data]) => data.id && data.key).toSorted(([, a], [, b]) => b.size - a.size);
					const { base, entries } = (await core.request(`https://api.schale.network/books/data/${galleryId}/${galleryKey}/${id}/${key}/${w}?crt=${crt}`, {
						fetch: true,
						responseType: "json"
					})).response;
					const { length } = entries;
					const loadImg = async (i) => {
						const { path, dimensions } = entries[i];
						const startTime = performance.now();
						const url = await downloadImg(`${base}${path}?w=${dimensions[0]}`);
						await helper.sleep(500 - (performance.now() - startTime));
						return url;
					};
					return dynamicLazyLoad({
						loadImg,
						length,
						concurrency: 1
					});
				}
			});
			break;
		}
		case "nude-moon.org":
			if (/^\/\d+-/.exec(location.pathname) === null) break;
			components_Manga.listenHotkey({
				scroll_right: () => unsafeWindow.nextImg(),
				scroll_left: () => unsafeWindow.backImg()
			});
			core.setup({
				name: "nude-moon",
				initOptions: {
					autoShow: false,
					defaultOption: { pageNum: 1 }
				},
				async getImgList() {
					if (unsafeWindow.images) return unsafeWindow.images.map((e) => e.src);
					const html = await core.request(location.href.replace(/(\/[^/-]+)(-)/, "$1-online-"));
					const imgList = Array.from(html.responseText.matchAll(/images\[\d+\]\.src = '(.+?)';/g), (m) => `https://nude-moon.org${m[1]}`);
					if (imgList.length === 0) throw new Error(helper.t("site.changed_load_failed"));
					return imgList;
				}
			});
			break;
		case "hentaizap.com":
		case "imhentai.xxx":
		case "hentaiera.com":
		case "hentaienvy.com": {
			const imgDom = helper.querySelector(":is(#thumbs_box, #thumbs_gallery_div, #append_thumbs, #ap_thumbs) img[data-src]");
			if (!imgDom) break;
			const imgUrl = imgDom.dataset.src;
			if (!imgUrl || !unsafeWindow.g_th) throw new Error(helper.t("site.changed_load_failed"));
			const baseUrl = imgUrl.replace(/\/\dt.[a-z]+$/, "");
			core.setup({
				name: "HentaiEnvy",
				getImgList() {
					const imgList = [];
					for (const [i, th] of Object.entries(unsafeWindow.g_th)) {
						const [type, w, h] = th.split(",");
						imgList[Number(i) - 1] = {
							src: `${baseUrl}/${i}.${helper.fileType[type]}`,
							width: Number(w),
							height: Number(h)
						};
					}
					return imgList;
				}
			});
			break;
		}
		case "mangadex.org":
			core.setup({
				name: "mangadex",
				isMangaPage: () => {
					const match = /^\/chapter\/([^/]+)/.exec(location.pathname);
					if (match) return { id: match[1] };
				},
				async getImgList() {
					const { response: { baseUrl, chapter: { data, hash } } } = await core.request(`https://api.mangadex.org/at-home/server/${location.pathname.split("/").at(2)}?forcePort443=false`, { responseType: "json" });
					return data.map((e) => `${baseUrl}/data/${hash}/${e}`);
				},
				onPrev: () => helper.querySelectorClick(`#chapter-selector > a[href^="/chapter/"]:nth-of-type(1)`),
				onNext: () => helper.querySelectorClick(`#chapter-selector > a[href^="/chapter/"]:nth-of-type(2)`)
			});
			break;
		case "nicomanga.com": {
			const getImgList = () => unsafeWindow.chapterImages;
			core.setup({
				name: "welovemanga",
				isMangaPage: () => helper.wait(() => getImgList()?.length > 0),
				getImgList,
				onNext: () => helper.querySelectorClick(".next-chapter"),
				onPrev: () => helper.querySelectorClick(".prev-chapter")
			});
			break;
		}
		case "weloma.art":
		case "love4u.net": {
			if (!helper.querySelector("#chapter-images img")) break;
			const getImgUrl = (e) => {
				const src = e.dataset.srcset || e.dataset.original || e.dataset.src || e.src;
				if (src && !src.endsWith(".gif")) return src.trim();
				if (e.dataset.img) return atob(e.dataset.img);
			};
			const getImgList = () => helper.querySelectorAll("#chapter-images img").map(getImgUrl).filter(Boolean);
			core.setup({
				name: "welovemanga",
				getImgList,
				onNext: () => helper.querySelectorClick(".rd_top-right.next:not(.disabled)"),
				onPrev: () => helper.querySelectorClick(".rd_top-left.prev:not(.disabled)")
			});
			break;
		}
		case "klz9.com": {
			if (!location.pathname.includes("-chapter-")) break;
			const getNavBtn = (index) => helper.querySelectorAll("main button.flex-1")[index];
			const handlePrevNext = (index) => {
				const btn = getNavBtn(index);
				return btn && !btn.disabled ? () => btn.click() : void 0;
			};
			core.setup({
				name: "klz9",
				isMangaPage: async () => {
					if (!location.pathname.includes("-chapter-")) return false;
					await helper.wait(() => helper.querySelector("main img:not(a img)"));
					return { id: location.pathname };
				},
				getImgList: () => helper.querySelectorAll("main img:not(a img)").map((img) => img.src),
				onPrev: () => handlePrevNext(0),
				onNext: () => handlePrevNext(1)
			});
			break;
		}
		case "kemono.cr":
		case "kemono.su":
		case "kemono.party":
			selfImport("site/kemono");
			break;
		case "nekohouse.su":
			if (!location.pathname.includes("/post/")) break;
			core.setup({
				name: "nekohouse",
				getImgList: () => helper.querySelectorAll(".fileThumb").map((e) => e.getAttribute("href")),
				initOptions: {
					autoShow: false,
					defaultOption: { pageNum: 1 }
				}
			});
			break;
		case "www.pixiv.net":
			selfImport("site/pixiv");
			break;
		case "comic.hypergryph.com": {
			const apiUrl = () => {
				return `https://comic.hypergryph.com/api${/\/comic\/.+/.exec(location.pathname)?.[0] ?? ""}`;
			};
			const loadImg = async (i) => {
				const res = await core.request(`${apiUrl()}/page?pageNum=${i + 1}`);
				return JSON.parse(res.responseText).data.url;
			};
			const handlePrevNext = (text) => helper.querySelectorClick("footer button:not([disabled]) a", text);
			core.setup({
				name: "terraHistoricus",
				isMangaPage: () => location.href.includes("episode") && { id: location.href },
				async getImgList({ dynamicLazyLoad }) {
					const pageList = (await core.request(apiUrl(), { responseType: "json" })).response.data.pageInfos;
					if (pageList.length === 0 && location.pathname.includes("episode")) throw new Error("鑾峰彇鍥剧墖鍒楄〃鏃跺嚭閿?);
					return dynamicLazyLoad({
						loadImg,
						length: pageList.length
					});
				},
				onPrev: () => handlePrevNext("涓婁竴"),
				onNext: () => handlePrevNext("涓嬩竴")
			});
			break;
		}
		case "sai-zen-sen.jp":
			switch (/\/[^/]+\/[^/]+\//.exec(location.pathname)?.[0]) {
				case "/special/4pages-comics/":
				case "/works/comics/":
					core.setup({
						name: "sai-zen-sen",
						getImgList: () => Object.values(unsafeWindow.B.Package.Manifest.items).map(({ href }) => href).filter(Boolean).map((path) => `${unsafeWindow.B.Path}/${path}`),
						onPrev: () => helper.querySelectorClick("ul.volumes > li:nth-child(2) > a[href]"),
						onNext: () => helper.querySelectorClick("ul.volumes > li:nth-child(3) > a[href]")
					});
					break;
				case "/comics/twi4/":
					core.setup({
						name: "sai-zen-sen",
						getImgList: () => unsafeWindow.t4.Meta.Items.map(({ ImageFileName }) => `${unsafeWindow.t4.GA.Gate.x_directory}works/${ImageFileName}`)
					});
					break;
			}
			break;
		case "geinou-nude.com": {
			const imgList = helper.querySelectorAll("main img.size-medium").map((e) => {
				const src = e.dataset.src ?? "";
				const res = /-(\d+)x(\d+)\.[a-z]+$/i.exec(src);
				if (!res) return src;
				return {
					src,
					width: Number(res[1]),
					height: Number(res[2])
				};
			});
			if (imgList.length === 0) break;
			core.setup({
				name: "geinou-nude",
				getImgList: () => imgList
			});
			break;
		}
		case "comic-read.pages.dev":
			unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
			unsafeWindow.toast = core.toast;
			break;
		default:
			selfImport("site/selfhosted");
			(async () => {
				if (await GM.getValue(location.hostname) !== void 0) return helper.requestIdleCallback(userscript_otherSite.otherSite);
				await GM.registerMenuCommand(((lang) => {
					switch (lang) {
						case "en": return "Enter simple reading mode";
						case "ru": return "袙泻谢褞褔懈褌褜 锌褉芯褋褌芯泄 褉械卸懈屑 褔褌械薪懈褟";
						default: return "浣跨敤绠€鏄撻槄璇绘ā寮?;
					}
				})(await helper_languages.getInitLang()), () => userscript_otherSite.otherSite());
			})();
	}
} catch (error) {
	helper.log.error(error);
}
//#endregion
