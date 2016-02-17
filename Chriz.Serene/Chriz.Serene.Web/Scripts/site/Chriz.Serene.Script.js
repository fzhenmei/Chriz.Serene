﻿(function() {
	'use strict';
	var $asm = {};
	global.Chriz = global.Chriz || {};
	global.Chriz.Serene = global.Chriz.Serene || {};
	global.Chriz.Serene.Administration = global.Chriz.Serene.Administration || {};
	global.Chriz.Serene.Common = global.Chriz.Serene.Common || {};
	global.Chriz.Serene.Membership = global.Chriz.Serene.Membership || {};
	global.Chriz.Serene.Modules = global.Chriz.Serene.Modules || {};
	global.Chriz.Serene.Modules.MovieDB = global.Chriz.Serene.Modules.MovieDB || {};
	global.Chriz.Serene.Modules.MovieDB.Movie = global.Chriz.Serene.Modules.MovieDB.Movie || {};
	global.Chriz.Serene.MovieDB = global.Chriz.Serene.MovieDB || {};
	global.Chriz.Serene.Northwind = global.Chriz.Serene.Northwind || {};
	global.Serenity = global.Serenity || {};
	ss.initAssembly($asm, 'Chriz.Serene.Script');
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Authorization
	var $Chriz_Serene_Authorization = function() {
	};
	$Chriz_Serene_Authorization.__typeName = 'Chriz.Serene.Authorization';
	$Chriz_Serene_Authorization.get_userDefinition = function() {
		return Q.getRemoteData('UserData');
	};
	$Chriz_Serene_Authorization.hasPermission = function(permissionKey) {
		return $Chriz_Serene_Authorization.get_userDefinition().Permissions[permissionKey];
	};
	global.Chriz.Serene.Authorization = $Chriz_Serene_Authorization;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.ScriptInitialization
	var $Chriz_Serene_ScriptInitialization = function() {
	};
	$Chriz_Serene_ScriptInitialization.__typeName = 'Chriz.Serene.ScriptInitialization';
	global.Chriz.Serene.ScriptInitialization = $Chriz_Serene_ScriptInitialization;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.LanguageDialog
	var $Chriz_Serene_Administration_LanguageDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Administration_LanguageDialog.__typeName = 'Chriz.Serene.Administration.LanguageDialog';
	global.Chriz.Serene.Administration.LanguageDialog = $Chriz_Serene_Administration_LanguageDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.LanguageForm
	var $Chriz_Serene_Administration_LanguageForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Administration_LanguageForm.__typeName = 'Chriz.Serene.Administration.LanguageForm';
	global.Chriz.Serene.Administration.LanguageForm = $Chriz_Serene_Administration_LanguageForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.LanguageGrid
	var $Chriz_Serene_Administration_LanguageGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Administration_LanguageGrid.__typeName = 'Chriz.Serene.Administration.LanguageGrid';
	global.Chriz.Serene.Administration.LanguageGrid = $Chriz_Serene_Administration_LanguageGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.PermissionCheckEditor
	var $Chriz_Serene_Administration_PermissionCheckEditor = function(div, opt) {
		this.$containsText = null;
		this.$byParentKey = null;
		this.$rolePermissions = null;
		ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).call(this, div, opt);
		this.$rolePermissions = {};
		var titleByKey = {};
		var permissionKeys = this.$getSortedGroupAndPermissionKeys(titleByKey);
		var items = [];
		for (var $t1 = 0; $t1 < permissionKeys.length; $t1++) {
			var key = permissionKeys[$t1];
			items.push({ Key: key, ParentKey: this.$getParentKey(key), Title: titleByKey.$[key], GrantRevoke: null, IsGroup: ss.endsWithString(key, ':') });
		}
		this.$byParentKey = Enumerable.from(items).toLookup(function(x) {
			return x.ParentKey;
		});
		this.$setItems(items);
	};
	$Chriz_Serene_Administration_PermissionCheckEditor.__typeName = 'Chriz.Serene.Administration.PermissionCheckEditor';
	global.Chriz.Serene.Administration.PermissionCheckEditor = $Chriz_Serene_Administration_PermissionCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.PermissionModuleEditor
	var $Chriz_Serene_Administration_PermissionModuleEditor = function(hidden) {
		ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]).call(this, hidden, null);
		var modules = {};
		var permissions = Q.getRemoteData('Administration.PermissionKeys').Entities;
		for (var i = 0; i < permissions.length; i++) {
			var k = permissions[i];
			var idx1 = k.indexOf(String.fromCharCode(58));
			if (idx1 <= 0) {
				continue;
			}
			var idx2 = k.indexOf(String.fromCharCode(58), idx1 + 1);
			if (idx2 <= 0) {
				continue;
			}
			var module = k.substr(0, idx1);
			modules[module] = true;
		}
		var othersModule = false;
		for (var $t1 = 0; $t1 < permissions.length; $t1++) {
			var k1 = permissions[$t1];
			var idx11 = k1.indexOf(String.fromCharCode(58));
			if (idx11 < 0 && !ss.isValue(modules[k1])) {
				othersModule = true;
				break;
			}
		}
		var moduleList = [];
		ss.arrayAddRange(moduleList, Object.keys(modules));
		if (othersModule) {
			moduleList.push('Common');
		}
		for (var $t2 = 0; $t2 < moduleList.length; $t2++) {
			var k2 = moduleList[$t2];
			this.addItem$1(k2, k2, k2, false);
		}
	};
	$Chriz_Serene_Administration_PermissionModuleEditor.__typeName = 'Chriz.Serene.Administration.PermissionModuleEditor';
	global.Chriz.Serene.Administration.PermissionModuleEditor = $Chriz_Serene_Administration_PermissionModuleEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.RoleCheckEditor
	var $Chriz_Serene_Administration_RoleCheckEditor = function(div) {
		this.$containsText = null;
		ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]).call(this, div, null);
	};
	$Chriz_Serene_Administration_RoleCheckEditor.__typeName = 'Chriz.Serene.Administration.RoleCheckEditor';
	global.Chriz.Serene.Administration.RoleCheckEditor = $Chriz_Serene_Administration_RoleCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.RoleDialog
	var $Chriz_Serene_Administration_RoleDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Administration_RoleDialog.__typeName = 'Chriz.Serene.Administration.RoleDialog';
	global.Chriz.Serene.Administration.RoleDialog = $Chriz_Serene_Administration_RoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.RoleForm
	var $Chriz_Serene_Administration_RoleForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Administration_RoleForm.__typeName = 'Chriz.Serene.Administration.RoleForm';
	global.Chriz.Serene.Administration.RoleForm = $Chriz_Serene_Administration_RoleForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.RoleGrid
	var $Chriz_Serene_Administration_RoleGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Administration_RoleGrid.__typeName = 'Chriz.Serene.Administration.RoleGrid';
	global.Chriz.Serene.Administration.RoleGrid = $Chriz_Serene_Administration_RoleGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.RolePermissionDialog
	var $Chriz_Serene_Administration_RolePermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Chriz_Serene_Administration_PermissionCheckEditor(this.byId$1('Permissions'), { showRevoke: false });
		Q.serviceRequest('Administration/RolePermission/List', { RoleID: this.options.roleID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(Enumerable.from(response.Entities).select(function(x) {
				return { PermissionKey: x };
			}).toArray());
		}), null);
	};
	$Chriz_Serene_Administration_RolePermissionDialog.__typeName = 'Chriz.Serene.Administration.RolePermissionDialog';
	global.Chriz.Serene.Administration.RolePermissionDialog = $Chriz_Serene_Administration_RolePermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.TranslationGrid
	var $Chriz_Serene_Administration_TranslationGrid = function(container) {
		this.$searchText = null;
		this.$sourceLanguage = null;
		this.$targetLanguage = null;
		this.$targetLanguageKey = null;
		this.$hasChanges = false;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
		this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', ss.mkdel(this, function(e) {
			var value = Q.trimToNull($(e.target).val());
			if (value === '') {
				value = null;
			}
			this.view.getItemById($(e.target).data('key')).CustomText = value;
			this.$hasChanges = true;
		}));
	};
	$Chriz_Serene_Administration_TranslationGrid.__typeName = 'Chriz.Serene.Administration.TranslationGrid';
	global.Chriz.Serene.Administration.TranslationGrid = $Chriz_Serene_Administration_TranslationGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.UserDialog
	var $Chriz_Serene_Administration_UserDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Chriz_Serene_Administration_UserForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_password(), this.uniqueName, ss.mkdel(this, function(e) {
			if (this.$form.get_password().get_value().length < 7) {
				return 'Password must be at least 7 characters!';
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_passwordConfirm(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_password().get_value(), this.$form.get_passwordConfirm().get_value())) {
				return "The passwords entered doesn't match!";
			}
			return null;
		}));
	};
	$Chriz_Serene_Administration_UserDialog.__typeName = 'Chriz.Serene.Administration.UserDialog';
	global.Chriz.Serene.Administration.UserDialog = $Chriz_Serene_Administration_UserDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.UserForm
	var $Chriz_Serene_Administration_UserForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Administration_UserForm.__typeName = 'Chriz.Serene.Administration.UserForm';
	global.Chriz.Serene.Administration.UserForm = $Chriz_Serene_Administration_UserForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.UserGrid
	var $Chriz_Serene_Administration_UserGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Administration_UserGrid.__typeName = 'Chriz.Serene.Administration.UserGrid';
	global.Chriz.Serene.Administration.UserGrid = $Chriz_Serene_Administration_UserGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.UserPermissionDialog
	var $Chriz_Serene_Administration_UserPermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Chriz_Serene_Administration_PermissionCheckEditor(this.byId$1('Permissions'), { showRevoke: true });
		Q.serviceRequest('Administration/UserPermission/List', { UserID: this.options.userID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(response.Entities);
		}), null);
		Q.serviceRequest('Administration/UserPermission/ListRolePermissions', { UserID: this.options.userID, Module: null, Submodule: null }, ss.mkdel(this, function(response1) {
			this.$permissions.set_rolePermissions(response1.Entities);
		}), null);
	};
	$Chriz_Serene_Administration_UserPermissionDialog.__typeName = 'Chriz.Serene.Administration.UserPermissionDialog';
	global.Chriz.Serene.Administration.UserPermissionDialog = $Chriz_Serene_Administration_UserPermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Administration.UserRoleDialog
	var $Chriz_Serene_Administration_UserRoleDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Chriz_Serene_Administration_RoleCheckEditor(this.byId$1('Roles'));
		Q.serviceRequest('Administration/UserRole/List', { UserID: this.options.userID }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(Enumerable.from(response.Entities).select(function(x) {
				return x.toString();
			}).toArray());
		}), null);
	};
	$Chriz_Serene_Administration_UserRoleDialog.__typeName = 'Chriz.Serene.Administration.UserRoleDialog';
	global.Chriz.Serene.Administration.UserRoleDialog = $Chriz_Serene_Administration_UserRoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Common.ExcelExportHelper
	var $Chriz_Serene_Common_ExcelExportHelper = function() {
	};
	$Chriz_Serene_Common_ExcelExportHelper.__typeName = 'Chriz.Serene.Common.ExcelExportHelper';
	$Chriz_Serene_Common_ExcelExportHelper.createToolButton = function(grid, service, onViewSubmit, title) {
		return {
			title: title,
			cssClass: 'export-xlsx-button',
			onClick: function() {
				if (!onViewSubmit()) {
					return;
				}
				var request = Q.deepClone(grid.getView().params);
				request.Take = 0;
				request.Skip = 0;
				var sortBy = grid.getView().sortBy;
				if (ss.isValue(sortBy)) {
					request.Sort = sortBy;
				}
				request.IncludeColumns = [];
				var $t1 = grid.getGrid().getColumns();
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var column = $t1[$t2];
					var $t4 = request.IncludeColumns;
					var $t3 = column.id;
					if (ss.isNullOrUndefined($t3)) {
						$t3 = column.field;
					}
					$t4.push($t3);
				}
				Q.postToService({ service: service, request: request, target: '_blank' });
			}
		};
	};
	global.Chriz.Serene.Common.ExcelExportHelper = $Chriz_Serene_Common_ExcelExportHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Common.GridEditorBase
	var $Chriz_Serene_Common_GridEditorBase$1 = function(TEntity) {
		var $type = function(container) {
			this.$nextId = 1;
			ss.makeGenericType(Serenity.EntityGrid$1, [TEntity]).call(this, container);
		};
		ss.registerGenericClassInstance($type, $Chriz_Serene_Common_GridEditorBase$1, [TEntity], {
			id: function(entity) {
				return ss.cast(entity.__id, ss.Int32);
			},
			save: function(opt, callback) {
				var request = opt.request;
				var row = Q.deepClone(request.Entity);
				var id = ss.cast(row.__id, ss.Int32);
				if (ss.isNullOrUndefined(id)) {
					row.__id = this.$nextId++;
				}
				if (!this.validateEntity(row, id)) {
					return;
				}
				var items = ss.arrayClone(this.view.getItems());
				if (ss.isNullOrUndefined(id)) {
					items.push(row);
				}
				else {
					var index = Enumerable.from(items).indexOf(ss.mkdel(this, function(x) {
						return this.id(x) === ss.unbox(id);
					}));
					items[index] = Q.deepClone(ss.createInstance(TEntity), items[index], row);
				}
				this.setEntities(items);
				callback({});
			},
			deleteEntity: function(id) {
				this.view.deleteItem(id);
				return true;
			},
			validateEntity: function(row, id) {
				return true;
			},
			setEntities: function(items) {
				this.view.setItems(items, true);
			},
			getNewEntity: function() {
				return ss.createInstance(TEntity);
			},
			getButtons: function() {
				var $t1 = [];
				$t1.push({ title: this.getAddButtonCaption(), cssClass: 'add-button', onClick: ss.mkdel(this, function() {
					this.createEntityDialog(this.getItemType(), ss.mkdel(this, function(dlg) {
						var dialog = ss.cast(dlg, ss.makeGenericType($Chriz_Serene_Common_GridEditorDialog$1, [TEntity]));
						dialog.set_onSave(ss.mkdel(this, this.save));
						dialog.loadEntityAndOpenDialog(this.getNewEntity());
					}));
				}) });
				return $t1;
			},
			editItem: function(entityOrId) {
				var id = ss.unbox(Serenity.IdExtensions.toInt32(entityOrId));
				var item = this.view.getItemById(id);
				this.createEntityDialog(this.getItemType(), ss.mkdel(this, function(dlg) {
					var dialog = ss.cast(dlg, ss.makeGenericType($Chriz_Serene_Common_GridEditorDialog$1, [TEntity]));
					dialog.set_onDelete(ss.mkdel(this, function(opt, callback) {
						if (!this.deleteEntity(id)) {
							return;
						}
						callback({});
					}));
					dialog.set_onSave(ss.mkdel(this, this.save));
					dialog.loadEntityAndOpenDialog(item);
				}));
			},
			getEditValue: function(property, target) {
				target[property.name] = this.get_value();
			},
			setEditValue: function(source, property) {
				this.set_value(ss.cast(source[property.name], Array));
			},
			get_value: function() {
				return Enumerable.from(this.view.getItems()).select(function(x) {
					var y = Q.deepClone(x);
					delete y['__id'];
					return y;
				}).toArray();
			},
			set_value: function(value) {
				this.view.setItems(Enumerable.from(value || []).select(ss.mkdel(this, function(x) {
					var y = Q.deepClone(x);
					y.__id = this.$nextId++;
					return y;
				})).toArray(), true);
			},
			getGridCanLoad: function() {
				return false;
			},
			usePager: function() {
				return false;
			},
			getInitialTitle: function() {
				return null;
			},
			createQuickSearchInput: function() {
			}
		}, function() {
			return ss.makeGenericType(Serenity.EntityGrid$1, [TEntity]);
		}, function() {
			return [Serenity.IDataGrid, Serenity.ISetEditValue, Serenity.IGetEditValue];
		});
		ss.setMetadata($type, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('__id')] });
		return $type;
	};
	$Chriz_Serene_Common_GridEditorBase$1.__typeName = 'Chriz.Serene.Common.GridEditorBase$1';
	ss.initGenericClass($Chriz_Serene_Common_GridEditorBase$1, $asm, 1);
	global.Chriz.Serene.Common.GridEditorBase$1 = $Chriz_Serene_Common_GridEditorBase$1;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Common.GridEditorDialog
	var $Chriz_Serene_Common_GridEditorDialog$1 = function(TEntity) {
		var $type = function() {
			this.$8$OnSaveField = null;
			this.$8$OnDeleteField = null;
			ss.makeGenericType(Serenity.EntityDialog$1, [TEntity]).call(this);
		};
		ss.registerGenericClassInstance($type, $Chriz_Serene_Common_GridEditorDialog$1, [TEntity], {
			destroy: function() {
				this.set_onSave(null);
				this.set_onDelete(null);
				ss.makeGenericType(Serenity.EntityDialog$2, [TEntity, Object]).prototype.destroy.call(this);
			},
			updateInterface: function() {
				ss.makeGenericType(Serenity.EntityDialog$2, [TEntity, Object]).prototype.updateInterface.call(this);
				// apply changes button doesn't work properly with in-memory grids yet
				if (ss.isValue(this.applyChangesButton)) {
					this.applyChangesButton.hide();
				}
			},
			saveHandler: function(options, callback) {
				if (!ss.staticEquals(this.get_onSave(), null)) {
					this.get_onSave()(options, callback);
				}
			},
			deleteHandler: function(options, callback) {
				if (!ss.staticEquals(this.get_onDelete(), null)) {
					this.get_onDelete()(options, callback);
				}
			},
			get_onSave: function() {
				return this.$8$OnSaveField;
			},
			set_onSave: function(value) {
				this.$8$OnSaveField = value;
			},
			get_onDelete: function() {
				return this.$8$OnDeleteField;
			},
			set_onDelete: function(value) {
				this.$8$OnDeleteField = value;
			}
		}, function() {
			return ss.makeGenericType(Serenity.EntityDialog$1, [TEntity]);
		}, function() {
			return [Serenity.IDialog, Serenity.IEditDialog];
		});
		ss.setMetadata($type, { attr: [new Serenity.IdPropertyAttribute('__id')] });
		return $type;
	};
	$Chriz_Serene_Common_GridEditorDialog$1.__typeName = 'Chriz.Serene.Common.GridEditorDialog$1';
	ss.initGenericClass($Chriz_Serene_Common_GridEditorDialog$1, $asm, 1);
	global.Chriz.Serene.Common.GridEditorDialog$1 = $Chriz_Serene_Common_GridEditorDialog$1;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Common.LanguageSelection
	var $Chriz_Serene_Common_LanguageSelection = function(select, currentLanguage) {
		Serenity.Widget.call(this, select);
		currentLanguage = ss.coalesce(currentLanguage, 'en');
		var self = this;
		Serenity.WX.change(this, function(e) {
			$.cookie('LanguagePreference', select.val(), { path: Q$Config.applicationPath });
			window.location.reload(true);
		});
		Q.getLookupAsync('Administration.Language').then(function(x) {
			if (!Enumerable.from(x.get_items()).any(function(z) {
				return ss.referenceEquals(z.LanguageId, currentLanguage);
			})) {
				var idx = currentLanguage.lastIndexOf('-');
				if (idx >= 0) {
					currentLanguage = currentLanguage.substr(0, idx);
					if (!Enumerable.from(x.get_items()).any(function(z1) {
						return ss.referenceEquals(z1.LanguageId, currentLanguage);
					})) {
						currentLanguage = 'en';
					}
				}
				else {
					currentLanguage = 'en';
				}
			}
			var $t1 = x.get_items();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var l = $t1[$t2];
				Q.addOption(select, l.LanguageId, l.LanguageName);
			}
			select.val(currentLanguage);
		}, null);
	};
	$Chriz_Serene_Common_LanguageSelection.__typeName = 'Chriz.Serene.Common.LanguageSelection';
	global.Chriz.Serene.Common.LanguageSelection = $Chriz_Serene_Common_LanguageSelection;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Common.SidebarSearch
	var $Chriz_Serene_Common_SidebarSearch = function(input, menuUL) {
		this.$menuUL = null;
		Serenity.Widget.call(this, input);
		var self = this;
		var $t1 = Serenity.QuickSearchInputOptions.$ctor();
		$t1.onSearch = function(field, text, success) {
			self.$updateMatchFlags(text);
			success(true);
		};
		new Serenity.QuickSearchInput(input, $t1);
		this.$menuUL = menuUL;
	};
	$Chriz_Serene_Common_SidebarSearch.__typeName = 'Chriz.Serene.Common.SidebarSearch';
	global.Chriz.Serene.Common.SidebarSearch = $Chriz_Serene_Common_SidebarSearch;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Common.ThemeSelection
	var $Chriz_Serene_Common_ThemeSelection = function(select) {
		Serenity.Widget.call(this, select);
		var self = this;
		Serenity.WX.change(this, ss.mkdel(this, function(e) {
			$.cookie('ThemePreference', select.val(), { path: Q$Config.applicationPath });
			$('body').removeClass('skin-' + this.$getCurrentTheme());
			$('body').addClass('skin-' + select.val());
		}));
		Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
		Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
		Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
		Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
		Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
		Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
		Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
		Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
		Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
		Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
		Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
		Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
		select.val(this.$getCurrentTheme());
	};
	$Chriz_Serene_Common_ThemeSelection.__typeName = 'Chriz.Serene.Common.ThemeSelection';
	global.Chriz.Serene.Common.ThemeSelection = $Chriz_Serene_Common_ThemeSelection;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.ChangePasswordForm
	var $Chriz_Serene_Membership_ChangePasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Membership_ChangePasswordForm.__typeName = 'Chriz.Serene.Membership.ChangePasswordForm';
	global.Chriz.Serene.Membership.ChangePasswordForm = $Chriz_Serene_Membership_ChangePasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.ChangePasswordPanel
	var $Chriz_Serene_Membership_ChangePasswordPanel = function(container) {
		this.$form = null;
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.$form = new $Chriz_Serene_Membership_ChangePasswordForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_newPassword(), this.get_uniqueName(), ss.mkdel(this, function(e) {
			if (this.$form.get_confirmPassword().get_value().length < 7) {
				return ss.formatString(Q.text('Validation.MinRequiredPasswordLength'), 7);
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_confirmPassword(), this.get_uniqueName(), ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_confirmPassword().get_value(), this.$form.get_newPassword().get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ChangePassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$Chriz_Serene_Membership_ChangePasswordPanel.__typeName = 'Chriz.Serene.Membership.ChangePasswordPanel';
	global.Chriz.Serene.Membership.ChangePasswordPanel = $Chriz_Serene_Membership_ChangePasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.ForgotPasswordForm
	var $Chriz_Serene_Membership_ForgotPasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Membership_ForgotPasswordForm.__typeName = 'Chriz.Serene.Membership.ForgotPasswordForm';
	global.Chriz.Serene.Membership.ForgotPasswordForm = $Chriz_Serene_Membership_ForgotPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.ForgotPasswordPanel
	var $Chriz_Serene_Membership_ForgotPasswordPanel = function(container) {
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ForgotPassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$Chriz_Serene_Membership_ForgotPasswordPanel.__typeName = 'Chriz.Serene.Membership.ForgotPasswordPanel';
	global.Chriz.Serene.Membership.ForgotPasswordPanel = $Chriz_Serene_Membership_ForgotPasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.LoginForm
	var $Chriz_Serene_Membership_LoginForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Membership_LoginForm.__typeName = 'Chriz.Serene.Membership.LoginForm';
	global.Chriz.Serene.Membership.LoginForm = $Chriz_Serene_Membership_LoginForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.LoginPanel
	var $Chriz_Serene_Membership_LoginPanel = function(container) {
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.byId$1('LoginButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/Login'),
				request: request,
				onSuccess: function(response) {
					var q = Q.parseQueryString();
					var $t1 = q['returnUrl'];
					if (ss.isNullOrUndefined($t1)) {
						$t1 = q['ReturnUrl'];
					}
					var r = $t1;
					if (!ss.isNullOrEmptyString(r)) {
						window.location.href = r;
					}
					else {
						window.location.href = Q.resolveUrl('~/');
					}
				}
			});
		})));
	};
	$Chriz_Serene_Membership_LoginPanel.__typeName = 'Chriz.Serene.Membership.LoginPanel';
	global.Chriz.Serene.Membership.LoginPanel = $Chriz_Serene_Membership_LoginPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.ResetPasswordForm
	var $Chriz_Serene_Membership_ResetPasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Membership_ResetPasswordForm.__typeName = 'Chriz.Serene.Membership.ResetPasswordForm';
	global.Chriz.Serene.Membership.ResetPasswordForm = $Chriz_Serene_Membership_ResetPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.ResetPasswordPanel
	var $Chriz_Serene_Membership_ResetPasswordPanel = function(container) {
		this.$form = null;
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.$form = new $Chriz_Serene_Membership_ResetPasswordForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_newPassword(), this.get_uniqueName(), ss.mkdel(this, function(e) {
			if (this.$form.get_confirmPassword().get_value().length < 7) {
				return ss.formatString(Q.text('Validation.MinRequiredPasswordLength'), 7);
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_confirmPassword(), this.get_uniqueName(), ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_confirmPassword().get_value(), this.$form.get_newPassword().get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			request.Token = this.byId$1('Token').val();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ResetPassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/Account/Login');
					}, {});
				}
			});
		})));
	};
	$Chriz_Serene_Membership_ResetPasswordPanel.__typeName = 'Chriz.Serene.Membership.ResetPasswordPanel';
	global.Chriz.Serene.Membership.ResetPasswordPanel = $Chriz_Serene_Membership_ResetPasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.SignUpForm
	var $Chriz_Serene_Membership_SignUpForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Membership_SignUpForm.__typeName = 'Chriz.Serene.Membership.SignUpForm';
	global.Chriz.Serene.Membership.SignUpForm = $Chriz_Serene_Membership_SignUpForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Membership.SignUpPanel
	var $Chriz_Serene_Membership_SignUpPanel = function(container) {
		this.$form = null;
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.$form = new $Chriz_Serene_Membership_SignUpForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_confirmPassword(), this.uniqueName, ss.mkdel(this, function(e) {
			if (!ss.referenceEquals(this.$form.get_confirmPassword().get_value(), this.$form.get_password().get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_confirmEmail(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_confirmEmail().get_value(), this.$form.get_email().get_value())) {
				return Q.text('Validation.EmailConfirm');
			}
			return null;
		}));
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/SignUp'),
				request: { DisplayName: this.$form.get_displayName().get_value(), Email: this.$form.get_email().get_value(), Password: this.$form.get_password().get_value() },
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.SignUp.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$Chriz_Serene_Membership_SignUpPanel.__typeName = 'Chriz.Serene.Membership.SignUpPanel';
	global.Chriz.Serene.Membership.SignUpPanel = $Chriz_Serene_Membership_SignUpPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Modules.MovieDB.Movie.MovieKind
	var $Chriz_Serene_Modules_MovieDB_Movie_MovieKind = function() {
	};
	$Chriz_Serene_Modules_MovieDB_Movie_MovieKind.__typeName = 'Chriz.Serene.Modules.MovieDB.Movie.MovieKind';
	global.Chriz.Serene.Modules.MovieDB.Movie.MovieKind = $Chriz_Serene_Modules_MovieDB_Movie_MovieKind;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.MovieDB.GenreDialog
	var $Chriz_Serene_MovieDB_GenreDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $Chriz_Serene_MovieDB_GenreForm(this.get_idPrefix());
	};
	$Chriz_Serene_MovieDB_GenreDialog.__typeName = 'Chriz.Serene.MovieDB.GenreDialog';
	global.Chriz.Serene.MovieDB.GenreDialog = $Chriz_Serene_MovieDB_GenreDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.MovieDB.GenreForm
	var $Chriz_Serene_MovieDB_GenreForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_MovieDB_GenreForm.__typeName = 'Chriz.Serene.MovieDB.GenreForm';
	global.Chriz.Serene.MovieDB.GenreForm = $Chriz_Serene_MovieDB_GenreForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.MovieDB.GenreGrid
	var $Chriz_Serene_MovieDB_GenreGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_MovieDB_GenreGrid.__typeName = 'Chriz.Serene.MovieDB.GenreGrid';
	global.Chriz.Serene.MovieDB.GenreGrid = $Chriz_Serene_MovieDB_GenreGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.MovieDB.MovieDialog
	var $Chriz_Serene_MovieDB_MovieDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $Chriz_Serene_MovieDB_MovieForm(this.get_idPrefix());
	};
	$Chriz_Serene_MovieDB_MovieDialog.__typeName = 'Chriz.Serene.MovieDB.MovieDialog';
	global.Chriz.Serene.MovieDB.MovieDialog = $Chriz_Serene_MovieDB_MovieDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.MovieDB.MovieForm
	var $Chriz_Serene_MovieDB_MovieForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_MovieDB_MovieForm.__typeName = 'Chriz.Serene.MovieDB.MovieForm';
	global.Chriz.Serene.MovieDB.MovieForm = $Chriz_Serene_MovieDB_MovieForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.MovieDB.MovieGrid
	var $Chriz_Serene_MovieDB_MovieGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_MovieDB_MovieGrid.__typeName = 'Chriz.Serene.MovieDB.MovieGrid';
	global.Chriz.Serene.MovieDB.MovieGrid = $Chriz_Serene_MovieDB_MovieGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CategoryDialog
	var $Chriz_Serene_Northwind_CategoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_CategoryDialog.__typeName = 'Chriz.Serene.Northwind.CategoryDialog';
	global.Chriz.Serene.Northwind.CategoryDialog = $Chriz_Serene_Northwind_CategoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CategoryForm
	var $Chriz_Serene_Northwind_CategoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_CategoryForm.__typeName = 'Chriz.Serene.Northwind.CategoryForm';
	global.Chriz.Serene.Northwind.CategoryForm = $Chriz_Serene_Northwind_CategoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CategoryGrid
	var $Chriz_Serene_Northwind_CategoryGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_CategoryGrid.__typeName = 'Chriz.Serene.Northwind.CategoryGrid';
	global.Chriz.Serene.Northwind.CategoryGrid = $Chriz_Serene_Northwind_CategoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerCustomerDemoDialog
	var $Chriz_Serene_Northwind_CustomerCustomerDemoDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_CustomerCustomerDemoDialog.__typeName = 'Chriz.Serene.Northwind.CustomerCustomerDemoDialog';
	global.Chriz.Serene.Northwind.CustomerCustomerDemoDialog = $Chriz_Serene_Northwind_CustomerCustomerDemoDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerCustomerDemoForm
	var $Chriz_Serene_Northwind_CustomerCustomerDemoForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_CustomerCustomerDemoForm.__typeName = 'Chriz.Serene.Northwind.CustomerCustomerDemoForm';
	global.Chriz.Serene.Northwind.CustomerCustomerDemoForm = $Chriz_Serene_Northwind_CustomerCustomerDemoForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerCustomerDemoGrid
	var $Chriz_Serene_Northwind_CustomerCustomerDemoGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_CustomerCustomerDemoGrid.__typeName = 'Chriz.Serene.Northwind.CustomerCustomerDemoGrid';
	global.Chriz.Serene.Northwind.CustomerCustomerDemoGrid = $Chriz_Serene_Northwind_CustomerCustomerDemoGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerDemographicDialog
	var $Chriz_Serene_Northwind_CustomerDemographicDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_CustomerDemographicDialog.__typeName = 'Chriz.Serene.Northwind.CustomerDemographicDialog';
	global.Chriz.Serene.Northwind.CustomerDemographicDialog = $Chriz_Serene_Northwind_CustomerDemographicDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerDemographicForm
	var $Chriz_Serene_Northwind_CustomerDemographicForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_CustomerDemographicForm.__typeName = 'Chriz.Serene.Northwind.CustomerDemographicForm';
	global.Chriz.Serene.Northwind.CustomerDemographicForm = $Chriz_Serene_Northwind_CustomerDemographicForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerDemographicGrid
	var $Chriz_Serene_Northwind_CustomerDemographicGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_CustomerDemographicGrid.__typeName = 'Chriz.Serene.Northwind.CustomerDemographicGrid';
	global.Chriz.Serene.Northwind.CustomerDemographicGrid = $Chriz_Serene_Northwind_CustomerDemographicGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerDialog
	var $Chriz_Serene_Northwind_CustomerDialog = function() {
		this.$ordersGrid = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$ordersGrid = new $Chriz_Serene_Northwind_CustomerOrdersGrid(this.byId$1('OrdersGrid'));
		Serenity.FLX.flexHeightOnly(this.$ordersGrid.get_element(), 1);
		this.byId$1('NoteList').closest('.field').hide().end().appendTo(this.byId$1('TabNotes'));
		this.tabs.bind('tabsactivate', ss.mkdel(this, function(e, i) {
			this.arrange();
		}));
	};
	$Chriz_Serene_Northwind_CustomerDialog.__typeName = 'Chriz.Serene.Northwind.CustomerDialog';
	global.Chriz.Serene.Northwind.CustomerDialog = $Chriz_Serene_Northwind_CustomerDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerEditor
	var $Chriz_Serene_Northwind_CustomerEditor = function(container, options) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).$ctor1.call(this, container, options);
	};
	$Chriz_Serene_Northwind_CustomerEditor.__typeName = 'Chriz.Serene.Northwind.CustomerEditor';
	global.Chriz.Serene.Northwind.CustomerEditor = $Chriz_Serene_Northwind_CustomerEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerForm
	var $Chriz_Serene_Northwind_CustomerForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_CustomerForm.__typeName = 'Chriz.Serene.Northwind.CustomerForm';
	global.Chriz.Serene.Northwind.CustomerForm = $Chriz_Serene_Northwind_CustomerForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerGrid
	var $Chriz_Serene_Northwind_CustomerGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_CustomerGrid.__typeName = 'Chriz.Serene.Northwind.CustomerGrid';
	global.Chriz.Serene.Northwind.CustomerGrid = $Chriz_Serene_Northwind_CustomerGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerOrderDialog
	var $Chriz_Serene_Northwind_CustomerOrderDialog = function() {
		$Chriz_Serene_Northwind_OrderDialog.call(this);
	};
	$Chriz_Serene_Northwind_CustomerOrderDialog.__typeName = 'Chriz.Serene.Northwind.CustomerOrderDialog';
	global.Chriz.Serene.Northwind.CustomerOrderDialog = $Chriz_Serene_Northwind_CustomerOrderDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.CustomerOrdersGrid
	var $Chriz_Serene_Northwind_CustomerOrdersGrid = function(container) {
		this.$customerID = null;
		$Chriz_Serene_Northwind_OrderGrid.call(this, container);
	};
	$Chriz_Serene_Northwind_CustomerOrdersGrid.__typeName = 'Chriz.Serene.Northwind.CustomerOrdersGrid';
	global.Chriz.Serene.Northwind.CustomerOrdersGrid = $Chriz_Serene_Northwind_CustomerOrdersGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.EmployeeDialog
	var $Chriz_Serene_Northwind_EmployeeDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_EmployeeDialog.__typeName = 'Chriz.Serene.Northwind.EmployeeDialog';
	global.Chriz.Serene.Northwind.EmployeeDialog = $Chriz_Serene_Northwind_EmployeeDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.EmployeeForm
	var $Chriz_Serene_Northwind_EmployeeForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_EmployeeForm.__typeName = 'Chriz.Serene.Northwind.EmployeeForm';
	global.Chriz.Serene.Northwind.EmployeeForm = $Chriz_Serene_Northwind_EmployeeForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.EmployeeFormatter
	var $Chriz_Serene_Northwind_EmployeeFormatter = function() {
		this.$1$GenderPropertyField = null;
	};
	$Chriz_Serene_Northwind_EmployeeFormatter.__typeName = 'Chriz.Serene.Northwind.EmployeeFormatter';
	global.Chriz.Serene.Northwind.EmployeeFormatter = $Chriz_Serene_Northwind_EmployeeFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.EmployeeGrid
	var $Chriz_Serene_Northwind_EmployeeGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_EmployeeGrid.__typeName = 'Chriz.Serene.Northwind.EmployeeGrid';
	global.Chriz.Serene.Northwind.EmployeeGrid = $Chriz_Serene_Northwind_EmployeeGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.EmployeeTerritoryDialog
	var $Chriz_Serene_Northwind_EmployeeTerritoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_EmployeeTerritoryDialog.__typeName = 'Chriz.Serene.Northwind.EmployeeTerritoryDialog';
	global.Chriz.Serene.Northwind.EmployeeTerritoryDialog = $Chriz_Serene_Northwind_EmployeeTerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.EmployeeTerritoryForm
	var $Chriz_Serene_Northwind_EmployeeTerritoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_EmployeeTerritoryForm.__typeName = 'Chriz.Serene.Northwind.EmployeeTerritoryForm';
	global.Chriz.Serene.Northwind.EmployeeTerritoryForm = $Chriz_Serene_Northwind_EmployeeTerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.EmployeeTerritoryGrid
	var $Chriz_Serene_Northwind_EmployeeTerritoryGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_EmployeeTerritoryGrid.__typeName = 'Chriz.Serene.Northwind.EmployeeTerritoryGrid';
	global.Chriz.Serene.Northwind.EmployeeTerritoryGrid = $Chriz_Serene_Northwind_EmployeeTerritoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.FreightFormatter
	var $Chriz_Serene_Northwind_FreightFormatter = function() {
	};
	$Chriz_Serene_Northwind_FreightFormatter.__typeName = 'Chriz.Serene.Northwind.FreightFormatter';
	global.Chriz.Serene.Northwind.FreightFormatter = $Chriz_Serene_Northwind_FreightFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.Gender
	var $Chriz_Serene_Northwind_Gender = function() {
	};
	$Chriz_Serene_Northwind_Gender.__typeName = 'Chriz.Serene.Northwind.Gender';
	global.Chriz.Serene.Northwind.Gender = $Chriz_Serene_Northwind_Gender;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.NoteDialog
	var $Chriz_Serene_Northwind_NoteDialog = function() {
		this.okClick = null;
		Serenity.TemplatedDialog.call(this);
		var $t2 = this.byId$1('Text');
		var $t1 = Serenity.HtmlContentEditorOptions.$ctor();
		$t1.rows = 12;
		new $Serenity_HtmlBasicContentEditor($t2, $t1);
	};
	$Chriz_Serene_Northwind_NoteDialog.__typeName = 'Chriz.Serene.Northwind.NoteDialog';
	global.Chriz.Serene.Northwind.NoteDialog = $Chriz_Serene_Northwind_NoteDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.NotesEditor
	var $Chriz_Serene_Northwind_NotesEditor = function(container) {
		this.$items = null;
		this.$6$IsDirtyField = false;
		this.$6$OnChangeField = null;
		Serenity.TemplatedWidget.call(this, container);
		var $t2 = this.byId$1('Toolbar');
		var $t1 = [];
		$t1.push({ title: 'Add Note', cssClass: 'add-button', onClick: ss.mkdel(this, function(e) {
			e.preventDefault();
			this.$addClick();
		}) });
		new Serenity.Toolbar($t2, { buttons: $t1 });
	};
	$Chriz_Serene_Northwind_NotesEditor.__typeName = 'Chriz.Serene.Northwind.NotesEditor';
	global.Chriz.Serene.Northwind.NotesEditor = $Chriz_Serene_Northwind_NotesEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.OrderDetailDialog
	var $Chriz_Serene_Northwind_OrderDetailDialog = function() {
		this.$form = null;
		ss.makeGenericType($Chriz_Serene_Common_GridEditorDialog$1, [Object]).call(this);
		this.$form = new $Chriz_Serene_Northwind_OrderDetailForm(this.get_idPrefix());
		Serenity.WX.changeSelect2(this.$form.get_productID(), ss.mkdel(this, function(e) {
			var productID = Serenity.IdExtensions.toInt32(this.$form.get_productID().get_value());
			if (ss.isValue(productID)) {
				this.$form.get_unitPrice().set_value(Q.getLookup('Northwind.Product').get_itemById()[ss.unbox(productID)].UnitPrice);
			}
		}));
		Serenity.VX.addValidationRule(this.$form.get_discount(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (ss.isValue(this.$form.get_unitPrice().get_value()) && ss.isValue(this.$form.get_quantity().get_value$1()) && ss.isValue(this.$form.get_discount().get_value()) && ss.unbox(this.$form.get_discount().get_value()) > 0 && ss.unbox(this.$form.get_discount().get_value()) > ss.unbox(this.$form.get_unitPrice().get_value()) * ss.unbox(this.$form.get_quantity().get_value$1())) {
				return "Discount can't be higher than total price!";
			}
			return null;
		}));
	};
	$Chriz_Serene_Northwind_OrderDetailDialog.__typeName = 'Chriz.Serene.Northwind.OrderDetailDialog';
	global.Chriz.Serene.Northwind.OrderDetailDialog = $Chriz_Serene_Northwind_OrderDetailDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.OrderDetailForm
	var $Chriz_Serene_Northwind_OrderDetailForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_OrderDetailForm.__typeName = 'Chriz.Serene.Northwind.OrderDetailForm';
	global.Chriz.Serene.Northwind.OrderDetailForm = $Chriz_Serene_Northwind_OrderDetailForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.OrderDetailsEditor
	var $Chriz_Serene_Northwind_OrderDetailsEditor = function(container) {
		ss.makeGenericType($Chriz_Serene_Common_GridEditorBase$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_OrderDetailsEditor.__typeName = 'Chriz.Serene.Northwind.OrderDetailsEditor';
	global.Chriz.Serene.Northwind.OrderDetailsEditor = $Chriz_Serene_Northwind_OrderDetailsEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.OrderDialog
	var $Chriz_Serene_Northwind_OrderDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $Chriz_Serene_Northwind_OrderForm(this.get_idPrefix());
	};
	$Chriz_Serene_Northwind_OrderDialog.__typeName = 'Chriz.Serene.Northwind.OrderDialog';
	global.Chriz.Serene.Northwind.OrderDialog = $Chriz_Serene_Northwind_OrderDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.OrderForm
	var $Chriz_Serene_Northwind_OrderForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_OrderForm.__typeName = 'Chriz.Serene.Northwind.OrderForm';
	global.Chriz.Serene.Northwind.OrderForm = $Chriz_Serene_Northwind_OrderForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.OrderGrid
	var $Chriz_Serene_Northwind_OrderGrid = function(container) {
		this.$shippingState = null;
		this.$7$CustomerFilterField = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_OrderGrid.__typeName = 'Chriz.Serene.Northwind.OrderGrid';
	global.Chriz.Serene.Northwind.OrderGrid = $Chriz_Serene_Northwind_OrderGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.OrderShippingState
	var $Chriz_Serene_Northwind_OrderShippingState = function() {
	};
	$Chriz_Serene_Northwind_OrderShippingState.__typeName = 'Chriz.Serene.Northwind.OrderShippingState';
	global.Chriz.Serene.Northwind.OrderShippingState = $Chriz_Serene_Northwind_OrderShippingState;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.PhoneEditor
	var $Chriz_Serene_Northwind_PhoneEditor = function(input) {
		this.$5$MultipleField = false;
		Serenity.StringEditor.call(this, input);
		Serenity.VX.addValidationRule(this, this.uniqueName, ss.mkdel(this, function(e) {
			var value = Q.trimToNull(this.get_value());
			if (ss.isNullOrUndefined(value)) {
				return null;
			}
			return $Chriz_Serene_Northwind_PhoneEditor.$validate(value, this.get_multiple());
		}));
		input.bind('change', ss.mkdel(this, function(e1) {
			if (!Serenity.WX.hasOriginalEvent(e1)) {
				return;
			}
			this.formatValue();
		}));
		input.bind('blur', ss.mkdel(this, function(e2) {
			if (this.element.hasClass('valid')) {
				this.formatValue();
			}
		}));
	};
	$Chriz_Serene_Northwind_PhoneEditor.__typeName = 'Chriz.Serene.Northwind.PhoneEditor';
	$Chriz_Serene_Northwind_PhoneEditor.$validate = function(phone, isMultiple) {
		var valid = (isMultiple ? $Chriz_Serene_Northwind_PhoneEditor.$isValidMulti(phone, $Chriz_Serene_Northwind_PhoneEditor.$isValidPhone) : $Chriz_Serene_Northwind_PhoneEditor.$isValidPhone(phone));
		if (valid) {
			return null;
		}
		return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
	};
	$Chriz_Serene_Northwind_PhoneEditor.$isValidPhone = function(phone) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		phone = ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '-', '');
		if (phone.length < 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		if (ss.startsWithString(phone, '(') && phone.charCodeAt(4) === 41) {
			phone = phone.substr(1, 3) + phone.substring(5);
		}
		if (phone.length !== 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			return false;
		}
		for (var i = 0; i < phone.length; i++) {
			var c = phone.charCodeAt(i);
			if (c < 48 || c > 57) {
				return false;
			}
		}
		return true;
	};
	$Chriz_Serene_Northwind_PhoneEditor.$formatPhone = function(phone) {
		if (!$Chriz_Serene_Northwind_PhoneEditor.$isValidPhone(phone)) {
			return phone;
		}
		phone = ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '-', ''), '(', ''), ')', '');
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
		return phone;
	};
	$Chriz_Serene_Northwind_PhoneEditor.$formatMulti = function(phone, format) {
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var result = '';
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (result.length > 0) {
				result += ', ';
			}
			result += format(s);
		}
		return result;
	};
	$Chriz_Serene_Northwind_PhoneEditor.$isValidMulti = function(phone, check) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var anyValid = false;
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (!check(s)) {
				return false;
			}
			anyValid = true;
		}
		if (!anyValid) {
			return false;
		}
		return true;
	};
	global.Chriz.Serene.Northwind.PhoneEditor = $Chriz_Serene_Northwind_PhoneEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.ProductDialog
	var $Chriz_Serene_Northwind_ProductDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_ProductDialog.__typeName = 'Chriz.Serene.Northwind.ProductDialog';
	global.Chriz.Serene.Northwind.ProductDialog = $Chriz_Serene_Northwind_ProductDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.ProductForm
	var $Chriz_Serene_Northwind_ProductForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_ProductForm.__typeName = 'Chriz.Serene.Northwind.ProductForm';
	global.Chriz.Serene.Northwind.ProductForm = $Chriz_Serene_Northwind_ProductForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.ProductGrid
	var $Chriz_Serene_Northwind_ProductGrid = function(container) {
		this.$pendingChanges = {};
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
		this.slickContainer.on('change', 'input.edit', ss.mkdel(this, this.$inputsChange));
	};
	$Chriz_Serene_Northwind_ProductGrid.__typeName = 'Chriz.Serene.Northwind.ProductGrid';
	global.Chriz.Serene.Northwind.ProductGrid = $Chriz_Serene_Northwind_ProductGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.RegionDialog
	var $Chriz_Serene_Northwind_RegionDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_RegionDialog.__typeName = 'Chriz.Serene.Northwind.RegionDialog';
	global.Chriz.Serene.Northwind.RegionDialog = $Chriz_Serene_Northwind_RegionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.RegionForm
	var $Chriz_Serene_Northwind_RegionForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_RegionForm.__typeName = 'Chriz.Serene.Northwind.RegionForm';
	global.Chriz.Serene.Northwind.RegionForm = $Chriz_Serene_Northwind_RegionForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.RegionGrid
	var $Chriz_Serene_Northwind_RegionGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_RegionGrid.__typeName = 'Chriz.Serene.Northwind.RegionGrid';
	global.Chriz.Serene.Northwind.RegionGrid = $Chriz_Serene_Northwind_RegionGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.ShipperDialog
	var $Chriz_Serene_Northwind_ShipperDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_ShipperDialog.__typeName = 'Chriz.Serene.Northwind.ShipperDialog';
	global.Chriz.Serene.Northwind.ShipperDialog = $Chriz_Serene_Northwind_ShipperDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.ShipperForm
	var $Chriz_Serene_Northwind_ShipperForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_ShipperForm.__typeName = 'Chriz.Serene.Northwind.ShipperForm';
	global.Chriz.Serene.Northwind.ShipperForm = $Chriz_Serene_Northwind_ShipperForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.ShipperFormatter
	var $Chriz_Serene_Northwind_ShipperFormatter = function() {
	};
	$Chriz_Serene_Northwind_ShipperFormatter.__typeName = 'Chriz.Serene.Northwind.ShipperFormatter';
	global.Chriz.Serene.Northwind.ShipperFormatter = $Chriz_Serene_Northwind_ShipperFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.ShipperGrid
	var $Chriz_Serene_Northwind_ShipperGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_ShipperGrid.__typeName = 'Chriz.Serene.Northwind.ShipperGrid';
	global.Chriz.Serene.Northwind.ShipperGrid = $Chriz_Serene_Northwind_ShipperGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.SupplierDialog
	var $Chriz_Serene_Northwind_SupplierDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_SupplierDialog.__typeName = 'Chriz.Serene.Northwind.SupplierDialog';
	global.Chriz.Serene.Northwind.SupplierDialog = $Chriz_Serene_Northwind_SupplierDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.SupplierForm
	var $Chriz_Serene_Northwind_SupplierForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_SupplierForm.__typeName = 'Chriz.Serene.Northwind.SupplierForm';
	global.Chriz.Serene.Northwind.SupplierForm = $Chriz_Serene_Northwind_SupplierForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.SupplierGrid
	var $Chriz_Serene_Northwind_SupplierGrid = function(container) {
		this.$country = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_SupplierGrid.__typeName = 'Chriz.Serene.Northwind.SupplierGrid';
	global.Chriz.Serene.Northwind.SupplierGrid = $Chriz_Serene_Northwind_SupplierGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.TerritoryDialog
	var $Chriz_Serene_Northwind_TerritoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Chriz_Serene_Northwind_TerritoryDialog.__typeName = 'Chriz.Serene.Northwind.TerritoryDialog';
	global.Chriz.Serene.Northwind.TerritoryDialog = $Chriz_Serene_Northwind_TerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.TerritoryForm
	var $Chriz_Serene_Northwind_TerritoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Chriz_Serene_Northwind_TerritoryForm.__typeName = 'Chriz.Serene.Northwind.TerritoryForm';
	global.Chriz.Serene.Northwind.TerritoryForm = $Chriz_Serene_Northwind_TerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Chriz.Serene.Northwind.TerritoryGrid
	var $Chriz_Serene_Northwind_TerritoryGrid = function(container) {
		this.$region = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Chriz_Serene_Northwind_TerritoryGrid.__typeName = 'Chriz.Serene.Northwind.TerritoryGrid';
	global.Chriz.Serene.Northwind.TerritoryGrid = $Chriz_Serene_Northwind_TerritoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.HtmlBasicContentEditor
	var $Serenity_HtmlBasicContentEditor = function(textArea, opt) {
		Serenity.HtmlContentEditor.call(this, textArea, opt);
	};
	$Serenity_HtmlBasicContentEditor.__typeName = 'Serenity.HtmlBasicContentEditor';
	global.Serenity.HtmlBasicContentEditor = $Serenity_HtmlBasicContentEditor;
	ss.initClass($Chriz_Serene_Authorization, $asm, {});
	ss.initClass($Chriz_Serene_ScriptInitialization, $asm, {});
	ss.initClass($Chriz_Serene_Administration_LanguageDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Administration_LanguageForm, $asm, {
		get_languageId: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageId');
		},
		get_languageName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Administration_LanguageGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Administration_PermissionCheckEditor, $asm, {
		$getItemGrantRevokeClass: function(item, grant) {
			if (!item.IsGroup) {
				return ((item.GrantRevoke === grant) ? ' checked' : '');
			}
			var desc = this.$getDescendants(item, true);
			var granted = Enumerable.from(desc).where(function(x) {
				return x.GrantRevoke === grant;
			});
			if (!granted.any()) {
				return '';
			}
			else if (Enumerable.from(desc).count() === granted.count()) {
				return 'checked';
			}
			else {
				return 'checked partial';
			}
		},
		$getItemEffectiveClass: function(item) {
			if (item.IsGroup) {
				var desc = this.$getDescendants(item, true);
				var grantCount = Enumerable.from(desc).count(ss.mkdel(this, function(x) {
					return x.GrantRevoke === true || ss.isNullOrUndefined(x.GrantRevoke) && this.$rolePermissions[x.Key];
				}));
				if (grantCount === desc.length || desc.length === 0) {
					return 'allow';
				}
				else if (grantCount === 0) {
					return 'deny';
				}
				else {
					return 'partial';
				}
			}
			else {
				var granted = item.GrantRevoke === true || ss.isNullOrUndefined(item.GrantRevoke) && this.$rolePermissions[item.Key];
				return (granted ? ' allow' : ' deny');
			}
		},
		getColumns: function() {
			var $t1 = [];
			$t1.push({ name: Q.text('Site.UserPermissionDialog.Permission'), field: 'Title', format: Serenity.SlickFormatting.treeToggle(Object).call(null, ss.mkdel(this, function() {
				return this.get_view();
			}), function(x) {
				return x.Key;
			}, ss.mkdel(this, function(ctx) {
				var item = ctx.item;
				var klass = this.$getItemEffectiveClass(item);
				return "<span class='effective-permission " + klass + "'>" + Q.htmlEncode(ctx.value) + '</span>';
			})), width: 495, sortable: false });
			$t1.push({ name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant', format: ss.mkdel(this, function(ctx1) {
				var item1 = ctx1.item;
				var klass1 = this.$getItemGrantRevokeClass(item1, true);
				return "<span class='check-box grant no-float " + klass1 + "'></span>";
			}), width: 65, sortable: false, headerCssClass: 'align-center', cssClass: 'align-center' });
			var columns = $t1;
			if (this.options.showRevoke) {
				columns.push({ name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke', format: ss.mkdel(this, function(ctx2) {
					var item2 = ctx2.item;
					var klass2 = this.$getItemGrantRevokeClass(item2, false);
					return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
				}), width: 65, sortable: false, headerCssClass: 'align-center', cssClass: 'align-center' });
			}
			return columns;
		},
		$setItems: function(items) {
			Serenity.SlickTreeHelper.setIndents(items, function(x) {
				return x.Key;
			}, function(x1) {
				return x1.ParentKey;
			}, false);
			this.get_view().setItems(items, true);
		},
		onViewSubmit: function() {
			return false;
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			if (!Serenity.SlickTreeHelper.filterById(item, this.view, function(x) {
				return x.ParentKey;
			})) {
				return false;
			}
			if (!ss.isNullOrEmptyString(this.$containsText)) {
				return this.$matchContains(item) || item.IsGroup && Enumerable.from(this.$getDescendants(item, false)).any(ss.mkdel(this, this.$matchContains));
			}
			return true;
		},
		$matchContains: function(item) {
			return Select2.util.stripDiacritics(ss.coalesce(item.Title, '')).toLowerCase().indexOf(this.$containsText) >= 0;
		},
		$getDescendants: function(item, excludeGroups) {
			var result = [];
			var stack = new Array();
			stack.push(item);
			while (stack.length > 0) {
				var i = stack.pop();
				var $t1 = this.$byParentKey.get(i.Key).getEnumerator();
				try {
					while ($t1.moveNext()) {
						var child = $t1.current();
						if (!excludeGroups || !child.IsGroup) {
							result.push(child);
						}
						stack.push(child);
					}
				}
				finally {
					$t1.dispose();
				}
			}
			return result;
		},
		onClick: function(e, row, cell) {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onClick.call(this, e, row, cell);
			if (!e.isDefaultPrevented()) {
				Serenity.SlickTreeHelper.toggleClick(Object).call(null, e, row, cell, this.view, function(x) {
					return x.Key;
				});
			}
			if (e.isDefaultPrevented()) {
				return;
			}
			var target = $(e.target);
			var grant = target.hasClass('grant');
			if (ss.unbox(grant) || target.hasClass('revoke')) {
				e.preventDefault();
				var item = this.view.rows[row];
				var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
				if (checkedOrPartial) {
					grant = null;
				}
				else {
					grant = !!(ss.unbox(grant) ^ checkedOrPartial);
				}
				this.view.beginUpdate();
				try {
					if (item.IsGroup) {
						var $t1 = this.$getDescendants(item, true);
						for (var $t2 = 0; $t2 < $t1.length; $t2++) {
							var d = $t1[$t2];
							if (!ss.referenceEquals(d.GrantRevoke, grant)) {
								d.GrantRevoke = grant;
								this.view.updateItem(d.Key, d);
							}
						}
					}
					else if (!ss.referenceEquals(item.GrantRevoke, grant)) {
						item.GrantRevoke = grant;
						this.view.updateItem(item.Key, item);
					}
				}
				finally {
					this.view.endUpdate();
				}
			}
		},
		$getParentKey: function(key) {
			if (ss.endsWithString(key, ':')) {
				key = key.substr(0, key.length - 1);
			}
			var idx = key.lastIndexOf(String.fromCharCode(58));
			if (idx >= 0) {
				return key.substr(0, idx + 1);
			}
			return null;
		},
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Select2.util.stripDiacritics(ss.coalesce(Q.trimToNull(text), '')).toLowerCase();
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		$getSortedGroupAndPermissionKeys: function(titleByKey) {
			var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
			titleByKey.$ = {};
			var titleWithGroup = {};
			for (var $t1 = 0; $t1 < keys.length; $t1++) {
				var k = keys[$t1];
				var s = k;
				if (ss.isNullOrEmptyString(s)) {
					continue;
				}
				if (ss.endsWithString(s, ':')) {
					s = s.substr(0, s.length - 1);
					if (s.length === 0) {
						continue;
					}
				}
				if (ss.keyExists(titleByKey.$, s)) {
					continue;
				}
				titleByKey.$[s] = ss.coalesce(Q.tryGetText('Permission.' + s), s);
				var parts = s.split(String.fromCharCode(58));
				var group = '';
				var groupTitle = '';
				for (var i = 0; i < parts.length - 1; i++) {
					group = group + parts[i] + ':';
					var $t3 = titleByKey.$;
					var $t2 = Q.tryGetText('Permission.' + group);
					if (ss.isNullOrUndefined($t2)) {
						$t2 = parts[i];
					}
					$t3[group] = $t2;
					groupTitle = groupTitle + titleByKey.$[group] + ':';
					titleWithGroup[group] = groupTitle;
				}
				titleWithGroup[s] = groupTitle + titleByKey.$[s];
			}
			keys = Enumerable.from(Object.keys(titleByKey.$)).toArray();
			keys.sort(function(x, y) {
				return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]);
			});
			return keys;
		},
		get_value: function() {
			var result = [];
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				if (ss.isValue(item.GrantRevoke) && !ss.endsWithString(item.Key, ':')) {
					result.push({ PermissionKey: item.Key, Grant: ss.unbox(item.GrantRevoke) });
				}
			}
			return result;
		},
		set_value: function(value) {
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				item.GrantRevoke = null;
			}
			if (ss.isValue(value)) {
				for (var $t3 = 0; $t3 < value.length; $t3++) {
					var row = value[$t3];
					var r = this.view.getItemById(row.PermissionKey);
					if (ss.isValue(r)) {
						r.GrantRevoke = ss.coalesce(row.Grant, true);
					}
				}
			}
			this.$setItems(this.get_items());
		},
		get_rolePermissions: function() {
			return Enumerable.from(Object.keys(this.$rolePermissions)).toArray();
		},
		set_rolePermissions: function(value) {
			ss.clearKeys(this.$rolePermissions);
			if (ss.isValue(value)) {
				for (var $t1 = 0; $t1 < value.length; $t1++) {
					var k = value[$t1];
					this.$rolePermissions[k] = true;
				}
			}
			this.$setItems(this.get_items());
		}
	}, ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Administration_PermissionModuleEditor, $asm, {}, ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($Chriz_Serene_Administration_RoleCheckEditor, $asm, {
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Q.trimToNull(text);
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.CheckTreeEditor$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			var contains = Select2.util.stripDiacritics(ss.coalesce(this.$containsText, '')).toUpperCase();
			if (Q.isEmptyOrNull(contains)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.text, '')).toUpperCase().indexOf(contains) !== -1) {
				return true;
			}
			return false;
		},
		getItems: function() {
			var list = [];
			var roles = Q.getLookup('Administration.Role').get_items();
			for (var $t1 = 0; $t1 < roles.length; $t1++) {
				var role = roles[$t1];
				list.push({ id: role.RoleId.toString(), text: role.RoleName });
			}
			return list;
		}
	}, ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]), [Serenity.IDataGrid, Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($Chriz_Serene_Administration_RoleDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.RolePermissionDialog.EditButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $Chriz_Serene_Administration_RolePermissionDialog({ roleID: ss.unbox(this.get_entity().RoleId), title: this.get_entity().RoleName })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Administration_RoleForm, $asm, {
		get_roleName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'RoleName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Administration_RoleGrid, $asm, {
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('RoleName');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Administration_RolePermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/RolePermission/Update', { RoleID: this.options.roleID, Permissions: Enumerable.from(this.$permissions.get_value()).select(function(x) {
					return x.PermissionKey;
				}).toArray(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Chriz_Serene_Administration_TranslationGrid, $asm, {
		onClick: function(e, row, cell) {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onClick.call(this, e, row, cell);
			if (e.isDefaultPrevented()) {
				return;
			}
			if ($(e.target).hasClass('source-text')) {
				e.preventDefault();
				var item = this.view.rows[row];
				var done = ss.mkdel(this, function() {
					item.CustomText = item.SourceText;
					this.view.updateItem(item.Key, item);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item.CustomText) || ss.referenceEquals(Q.trimToEmpty(item.CustomText), Q.trimToEmpty(item.SourceText))) {
					done();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
			}
			if ($(e.target).hasClass('target-text')) {
				e.preventDefault();
				var item1 = this.view.rows[row];
				var done1 = ss.mkdel(this, function() {
					item1.CustomText = item1.TargetText;
					this.view.updateItem(item1.Key, item1);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item1.CustomText) || ss.referenceEquals(Q.trimToEmpty(item1.CustomText), Q.trimToEmpty(item1.TargetText))) {
					done1();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done1);
			}
		},
		getColumnsAsync: function() {
			var columns = [];
			columns.push({ field: 'Key', width: 300, sortable: false });
			columns.push({
				field: 'SourceText',
				width: 300,
				sortable: false,
				format: function(ctx) {
					return Q.outerHtml($('<a/>').addClass('source-text').text(ss.coalesce(ss.cast(ctx.value, String), '')));
				}
			});
			columns.push({
				field: 'CustomText',
				width: 300,
				sortable: false,
				format: function(ctx1) {
					return Q.outerHtml($('<input/>').addClass('custom-text').attr('value', ss.cast(ctx1.value, String)).attr('type', 'text').attr('data-key', ss.cast(ctx1.item.Key, String)));
				}
			});
			columns.push({
				field: 'TargetText',
				width: 300,
				sortable: false,
				format: function(ctx2) {
					return Q.outerHtml($('<a/>').addClass('target-text').text(ss.coalesce(ss.cast(ctx2.value, String), '')));
				}
			});
			return RSVP.resolve(columns);
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.SourceLanguage') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Administration.Language';
			this.$sourceLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.changeSelect2(this.$sourceLanguage, ss.mkdel(this, function(e1) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
			var $t4 = ss.mkdel(this, function(e2) {
				e2.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.TargetLanguage') + ' ---');
			});
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Administration.Language';
			this.$targetLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t4, $t3, null);
			Serenity.WX.changeSelect2(this.$targetLanguage, ss.mkdel(this, function(e3) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
		},
		saveChanges: function(language) {
			var translations = {};
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				translations[item.Key] = item.CustomText;
			}
			return RSVP.resolve(Q.serviceRequest('Administration/Translation/Update', { TargetLanguageID: language, Translations: translations }, null, null)).then(ss.mkdel(this, function() {
				this.$hasChanges = false;
				language = ss.coalesce(Q.trimToNull(language), 'invariant');
				Q.notifySuccess('User translations in "' + language + '" language are saved to "user.texts.' + language + '.json" ' + 'file under "~/App_Data/texts/"');
			}), null);
		},
		onViewSubmit: function() {
			var request = this.view.params;
			request.SourceLanguageID = this.$sourceLanguage.get_value();
			this.$targetLanguageKey = ss.coalesce(this.$targetLanguage.get_value(), '');
			request.TargetLanguageID = this.$targetLanguageKey;
			this.$hasChanges = false;
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this);
		},
		getButtons: function() {
			var $t1 = [];
			$t1.push({ title: 'Save Changes', onClick: ss.mkdel(this, function(e) {
				this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
			}), cssClass: 'apply-changes-button' });
			return $t1;
		},
		createQuickSearchInput: function() {
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, searchText) {
				this.$searchText = searchText;
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			if (Q.isEmptyOrNull(this.$searchText)) {
				return true;
			}
			var searching = Select2.util.stripDiacritics(this.$searchText).toLowerCase();
			if (Q.isEmptyOrNull(searching)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.Key, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.SourceText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.TargetText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.CustomText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			return false;
		},
		usePager: function() {
			return false;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Administration_UserDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.UserDialog.EditRolesButton'), cssClass: 'users-button', onClick: ss.mkdel(this, function() {
				(new $Chriz_Serene_Administration_UserRoleDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			buttons.push({ title: Q.text('Site.UserDialog.EditPermissionsButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $Chriz_Serene_Administration_UserPermissionDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('users-button').toggleClass('disabled', this.get_isNewOrDeleted());
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Chriz_Serene_Administration_UserForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_displayName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DisplayName');
		},
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		},
		get_passwordConfirm: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'PasswordConfirm');
		},
		get_source: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Source');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Administration_UserGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'UserId', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'Username', width: 150, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'DisplayName', width: 150 });
			columns.push({ field: 'Email', width: 250 });
			columns.push({ field: 'Source', width: 100 });
			return columns;
		},
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('Username');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Administration_UserPermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/UserPermission/Update', { UserID: this.options.userID, Permissions: this.$permissions.get_value(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Chriz_Serene_Administration_UserRoleDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/UserRole/Update', { UserID: this.options.userID, Roles: Enumerable.from(this.$permissions.get_value()).select(function(x) {
					return parseInt(x, 10);
				}).toArray() }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Roles'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Chriz_Serene_Common_ExcelExportHelper, $asm, {});
	ss.initClass($Chriz_Serene_Common_LanguageSelection, $asm, {}, Serenity.Widget);
	ss.initClass($Chriz_Serene_Common_SidebarSearch, $asm, {
		$updateMatchFlags: function(text) {
			var liList = this.$menuUL.find('li').removeClass('non-match');
			text = Q.trimToNull(text);
			if (ss.isNullOrUndefined(text)) {
				liList.show();
				liList.removeClass('expanded');
				return;
			}
			var parts = ss.netSplit(text, [44, 32].map(function(i) {
				return String.fromCharCode(i);
			}), null, 1);
			for (var i = 0; i < parts.length; i++) {
				parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
			}
			var items = liList;
			items.each(function(i1, e) {
				var x = $(e);
				var title = Select2.util.stripDiacritics(ss.coalesce(x.text(), '').toUpperCase());
				for (var $t1 = 0; $t1 < parts.length; $t1++) {
					var p = parts[$t1];
					if (ss.isValue(p) && !(title.indexOf(p) !== -1)) {
						x.addClass('non-match');
						break;
					}
				}
			});
			var matchingItems = items.not('.non-match');
			var visibles = matchingItems.parents('li').add(matchingItems);
			var nonVisibles = liList.not(visibles);
			nonVisibles.hide().addClass('non-match');
			visibles.show();
			liList.addClass('expanded');
		}
	}, Serenity.Widget);
	ss.initClass($Chriz_Serene_Common_ThemeSelection, $asm, {
		$getCurrentTheme: function() {
			var skinClass = Enumerable.from(ss.coalesce($('body').attr('class'), '').split(String.fromCharCode(32))).firstOrDefault(function(x) {
				return ss.startsWithString(x, 'skin-');
			}, ss.getDefaultValue(String));
			if (ss.isValue(skinClass)) {
				return skinClass.substr(5);
			}
			return 'blue';
		}
	}, Serenity.Widget);
	ss.initClass($Chriz_Serene_Membership_ChangePasswordForm, $asm, {
		get_oldPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'OldPassword');
		},
		get_newPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'NewPassword');
		},
		get_confirmPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'ConfirmPassword');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Membership_ChangePasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($Chriz_Serene_Membership_ForgotPasswordForm, $asm, {
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Membership_ForgotPasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($Chriz_Serene_Membership_LoginForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Membership_LoginPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($Chriz_Serene_Membership_ResetPasswordForm, $asm, {
		get_newPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'NewPassword');
		},
		get_confirmPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'ConfirmPassword');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Membership_ResetPasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($Chriz_Serene_Membership_SignUpForm, $asm, {
		get_displayName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DisplayName');
		},
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		},
		get_confirmEmail: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'ConfirmEmail');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		},
		get_confirmPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'ConfirmPassword');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Membership_SignUpPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initEnum($Chriz_Serene_Modules_MovieDB_Movie_MovieKind, $asm, { Film: 1, TvSeries: 2, MiniSeries: 3 });
	ss.initClass($Chriz_Serene_MovieDB_GenreDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Chriz_Serene_MovieDB_GenreForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_MovieDB_GenreGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_MovieDB_MovieDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Chriz_Serene_MovieDB_MovieForm, $asm, {
		get_title: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Title');
		},
		get_description: function() {
			return this.byId(Serenity.TextAreaEditor).call(this, 'Description');
		},
		get_storyline: function() {
			return this.byId(Serenity.TextAreaEditor).call(this, 'Storyline');
		},
		get_year: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Year');
		},
		get_releaseDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'ReleaseDate');
		},
		get_runtime: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Runtime');
		},
		get_kind: function() {
			return this.byId(Serenity.EnumEditor).call(this, 'Kind');
		},
		get_genreId: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'GenreId');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_MovieDB_MovieGrid, $asm, {
		getQuickSearchFields: function() {
			var $t1 = [];
			$t1.push({ name: '', title: 'all' });
			$t1.push({ name: 'Description', title: 'description' });
			$t1.push({ name: 'Storyline', title: 'storyline' });
			$t1.push({ name: 'Year', title: 'year' });
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Northwind_CategoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_CategoryForm, $asm, {
		get_categoryName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CategoryName');
		},
		get_description: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Description');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_CategoryGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_CustomerCustomerDemoDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_CustomerCustomerDemoForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_customerTypeID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerTypeID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_CustomerCustomerDemoGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerTypeID', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Northwind_CustomerDemographicDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_CustomerDemographicForm, $asm, {
		get_customerTypeID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerTypeID');
		},
		get_customerDesc: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerDesc');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_CustomerDemographicGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerTypeID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerDesc', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Northwind_CustomerDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.get_isNewOrDeleted());
			this.$ordersGrid.set_customerID(entity.CustomerID);
		},
		onSaveSuccess: function(response) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.onSaveSuccess.call(this, response);
			Q.reloadLookup('Northwind.Customer');
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Chriz_Serene_Northwind_CustomerEditor, $asm, {
		getLookupKey: function() {
			return 'Northwind.Customer';
		},
		getItemText: function(item, lookup) {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Serenity.LookupEditorOptions, Object]).prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($Chriz_Serene_Northwind_CustomerForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_contactName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactName');
		},
		get_contactTitle: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactTitle');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_fax: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Fax');
		},
		get_noteList: function() {
			return this.byId($Chriz_Serene_Northwind_NotesEditor).call(this, 'NoteList');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_CustomerGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.CustomerCountry';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'Country', null, $t1, null, null, null);
			var $t2 = Serenity.LookupEditorOptions.$ctor();
			$t2.lookupKey = 'Northwind.CustomerCity';
			$t2.cascadeFrom = 'Country';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'City', null, $t2, null, null, null);
		},
		getButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.getButtons.call(this);
			buttons.push($Chriz_Serene_Common_ExcelExportHelper.createToolButton(this, 'Northwind/Customer/ListExcel', ss.mkdel(this, this.onViewSubmit), 'Excel'));
			return buttons;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_OrderDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			if (this.get_isNew() && ss.isNullOrUndefined(entity.OrderDate)) {
				this.form.get_orderDate().set_valueAsDate(ss.today());
			}
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Chriz_Serene_Northwind_CustomerOrderDialog, $asm, {
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			Serenity.EditorUtils.setReadOnly(this.form.get_customerID(), true);
		}
	}, $Chriz_Serene_Northwind_OrderDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Chriz_Serene_Northwind_OrderGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			this.set_customerFilter(this.addEqualityFilter($Chriz_Serene_Northwind_CustomerEditor).call(this, 'CustomerID', null, null, null, null, null));
			this.addDateRangeFilter('OrderDate', null);
			var $t1 = Serenity.EnumEditorOptions.$ctor();
			$t1.enumKey = 'Northwind.OrderShippingState';
			this.$shippingState = this.addEqualityFilter(Serenity.EnumEditor).call(this, 'ShippingState', null, $t1, null, null, null);
			var $t2 = Serenity.LookupEditorOptions.$ctor();
			$t2.lookupKey = 'Northwind.Shipper';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'ShipVia', null, $t2, null, null, null);
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Northwind.OrderShipCountry';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'ShipCountry', null, $t3, null, null, null);
			var $t4 = Serenity.LookupEditorOptions.$ctor();
			$t4.lookupKey = 'Northwind.OrderShipCity';
			$t4.cascadeFrom = 'ShipCountry';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'ShipCity', null, $t4, null, null, null);
			var $t5 = Serenity.LookupEditorOptions.$ctor();
			$t5.lookupKey = 'Northwind.Employee';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'EmployeeID', null, $t5, null, null, null);
		},
		get_shippingState: function() {
			return Serenity.IdExtensions.toInt32(this.$shippingState.get_value());
		},
		set_shippingState: function(value) {
			this.$shippingState.set_value((ss.isNullOrUndefined(value) ? '' : ss.unbox(value).toString()));
		},
		getButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.getButtons.call(this);
			buttons.push($Chriz_Serene_Common_ExcelExportHelper.createToolButton(this, 'Northwind/Order/ListExcel', ss.mkdel(this, this.onViewSubmit), 'Excel'));
			return buttons;
		},
		get_customerFilter: function() {
			return this.$7$CustomerFilterField;
		},
		set_customerFilter: function(value) {
			this.$7$CustomerFilterField = value;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Northwind_CustomerOrdersGrid, $asm, {
		getColumns: function() {
			return Enumerable.from(ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this)).where(function(x) {
				return x.field !== 'CustomerCompanyName';
			}).toArray();
		},
		initEntityDialog$1: function(itemType, dialog) {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.initEntityDialog$1.call(this, itemType, dialog);
			Serenity.SubDialogHelper.cascade(ss.cast(dialog, $Chriz_Serene_Northwind_OrderDialog), this.get_element().closest('.ui-dialog'));
		},
		addButtonClick: function() {
			this.editItem({ CustomerID: this.get_customerID() });
		},
		getInitialTitle: function() {
			return null;
		},
		createToolbarExtensions: function() {
			$Chriz_Serene_Northwind_OrderGrid.prototype.createToolbarExtensions.call(this);
			this.get_customerFilter().get_element().closest('.quick-filter-item').remove();
		},
		getGridCanLoad: function() {
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getGridCanLoad.call(this) && !ss.isNullOrEmptyString(this.$customerID);
		},
		get_customerID: function() {
			return this.$customerID;
		},
		set_customerID: function(value) {
			if (!ss.referenceEquals(this.$customerID, value)) {
				this.$customerID = value;
				this.setEquality('CustomerID', this.get_customerID());
				this.refresh();
			}
		}
	}, $Chriz_Serene_Northwind_OrderGrid, [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Northwind_EmployeeDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_EmployeeForm, $asm, {
		get_lastName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LastName');
		},
		get_firstName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'FirstName');
		},
		get_title: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Title');
		},
		get_titleOfCourtesy: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TitleOfCourtesy');
		},
		get_birthDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'BirthDate');
		},
		get_hireDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'HireDate');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_homePhone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'HomePhone');
		},
		get_extension: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Extension');
		},
		get_photo: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Photo');
		},
		get_notes: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Notes');
		},
		get_reportsTo: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ReportsTo');
		},
		get_photoPath: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PhotoPath');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_EmployeeFormatter, $asm, {
		format: function(ctx) {
			var text = Q.htmlEncode(ctx.value);
			if (ss.isNullOrEmptyString(this.get_genderProperty())) {
				return text;
			}
			var gender = ss.safeCast(ctx.item[this.get_genderProperty()], ss.Int32);
			return "<span class='" + ((gender === 2) ? 'employee-symbol female' : 'employee-symbol male') + "'>" + text + '</span>';
		},
		get_genderProperty: function() {
			return this.$1$GenderPropertyField;
		},
		set_genderProperty: function(value) {
			this.$1$GenderPropertyField = value;
		},
		initializeColumn: function(column) {
			column.referencedFields = column.referencedFields || [];
			if (!ss.isNullOrEmptyString(this.get_genderProperty())) {
				column.referencedFields.push(this.get_genderProperty());
				return;
			}
		}
	}, null, [Serenity.ISlickFormatter, Serenity.IInitializeColumn]);
	ss.initClass($Chriz_Serene_Northwind_EmployeeGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'LastName', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'FirstName', width: 80 });
			columns.push({ field: 'Title', width: 80 });
			columns.push({ field: 'TitleOfCourtesy', width: 80 });
			columns.push({ field: 'BirthDate', width: 80 });
			columns.push({ field: 'HireDate', width: 80 });
			columns.push({ field: 'Address', width: 80 });
			columns.push({ field: 'City', width: 80 });
			columns.push({ field: 'Region', width: 80 });
			columns.push({ field: 'PostalCode', width: 80 });
			columns.push({ field: 'Country', width: 80 });
			columns.push({ field: 'HomePhone', width: 80 });
			columns.push({ field: 'Extension', width: 80 });
			columns.push({ field: 'Photo', width: 80 });
			columns.push({ field: 'Notes', width: 80 });
			columns.push({ field: 'ReportsTo', width: 80 });
			columns.push({ field: 'PhotoPath', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Northwind_EmployeeTerritoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_EmployeeTerritoryForm, $asm, {
		get_territoryID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_EmployeeTerritoryGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'TerritoryID', width: 200, format: this.itemLink(null, null, null, null, true) });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Northwind_FreightFormatter, $asm, {
		format: function(ctx) {
			return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initEnum($Chriz_Serene_Northwind_Gender, $asm, { Male: 1, Female: 2 });
	ss.initClass($Chriz_Serene_Northwind_NoteDialog, $asm, {
		getTemplate: function() {
			return "<form id='~_Form' class='s-Form'><textarea id='~_Text' class='required'></textarea></form>";
		},
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				if (!this.validateForm()) {
					return;
				}
				if (!ss.staticEquals(this.okClick, null)) {
					this.okClick();
				}
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			return opt;
		},
		get_text: function() {
			return this.byId$1('Text').val();
		},
		set_text: function(value) {
			this.byId$1('Text').val(value);
		}
	}, Serenity.TemplatedDialog, [Serenity.IDialog]);
	ss.initClass($Chriz_Serene_Northwind_NotesEditor, $asm, {
		getTemplate: function() {
			return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
		},
		$updateContent: function() {
			var noteList = this.byId$1('NoteList');
			noteList.children().remove();
			if (ss.isValue(this.$items)) {
				var index = 0;
				for (var $t1 = 0; $t1 < this.$items.length; $t1++) {
					var item = this.$items[$t1];
					var li = $('<li/>');
					$('<div/>').addClass('note-text').html(ss.coalesce(item.Text, '')).appendTo(li);
					$('<a/>').attr('href', '#').addClass('note-date').text(item.InsertUserDisplayName + ' - ' + Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm')).data('index', index).appendTo(li).click(ss.mkdel(this, this.$editClick));
					$('<a/>').attr('href', '#').addClass('note-delete').attr('title', 'delete note').data('index', index).appendTo(li).click(ss.mkdel(this, this.$deleteClick));
					li.appendTo(noteList);
					index++;
				}
			}
		},
		$addClick: function() {
			var dlg = new $Chriz_Serene_Northwind_NoteDialog();
			dlg.set_dialogTitle('Add Note');
			dlg.okClick = ss.mkdel(this, function() {
				var text = Q.trimToNull(dlg.get_text());
				if (ss.isNullOrUndefined(text)) {
					return;
				}
				this.$items = this.$items || [];
				ss.insert(this.$items, 0, { Text: text, InsertUserDisplayName: $Chriz_Serene_Authorization.get_userDefinition().DisplayName, InsertDate: Q.formatISODateTimeUTC(new Date()) });
				this.$updateContent();
				dlg.dialogClose();
				this.set_isDirty(true);
				if (!ss.staticEquals(this.get_onChange(), null)) {
					this.get_onChange()();
				}
			});
			dlg.dialogOpen();
		},
		$editClick: function(e) {
			e.preventDefault();
			var index = $(e.target).data('index');
			var old = this.$items[index];
			var dlg = new $Chriz_Serene_Northwind_NoteDialog();
			dlg.set_dialogTitle('Edit Note');
			dlg.set_text(old.Text);
			dlg.okClick = ss.mkdel(this, function() {
				var text = Q.trimToNull(dlg.get_text());
				if (ss.isNullOrUndefined(text)) {
					return;
				}
				this.$items[index].Text = text;
				this.$updateContent();
				dlg.dialogClose();
				this.set_isDirty(true);
				if (!ss.staticEquals(this.get_onChange(), null)) {
					this.get_onChange()();
				}
			});
			dlg.dialogOpen();
		},
		$deleteClick: function(e) {
			e.preventDefault();
			var index = $(e.target).data('index');
			Q.confirm('Delete this note?', ss.mkdel(this, function() {
				ss.removeAt(this.$items, index);
				this.$updateContent();
				this.set_isDirty(true);
				if (!ss.staticEquals(this.get_onChange(), null)) {
					this.get_onChange()();
				}
			}));
		},
		get_value: function() {
			return this.$items;
		},
		set_value: function(value) {
			this.$items = value || [];
			this.set_isDirty(false);
			this.$updateContent();
		},
		getEditValue: function(property, target) {
			target[property.name] = this.get_value();
		},
		setEditValue: function(source, property) {
			this.set_value(ss.cast(source[property.name], Array));
		},
		get_isDirty: function() {
			return this.$6$IsDirtyField;
		},
		set_isDirty: function(value) {
			this.$6$IsDirtyField = value;
		},
		get_onChange: function() {
			return this.$6$OnChangeField;
		},
		set_onChange: function(value) {
			this.$6$OnChangeField = value;
		}
	}, Serenity.TemplatedWidget, [Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($Chriz_Serene_Northwind_OrderDetailDialog, $asm, {}, ss.makeGenericType($Chriz_Serene_Common_GridEditorDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Chriz_Serene_Northwind_OrderDetailForm, $asm, {
		get_productID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'ProductID');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_quantity: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Quantity');
		},
		get_discount: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'Discount');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_OrderDetailsEditor, $asm, {
		validateEntity: function(row, id) {
			row.ProductID = Serenity.IdExtensions.toInt32(row.ProductID);
			var sameProduct = Enumerable.from(this.view.getItems()).firstOrDefault(function(x) {
				return ss.referenceEquals(x.ProductID, row.ProductID);
			}, ss.getDefaultValue(Object));
			if (ss.isValue(sameProduct) && !ss.referenceEquals(this.id(sameProduct), id)) {
				Q.alert('This product is already in order details!');
				return false;
			}
			row.ProductName = Q.getLookup('Northwind.Product').get_itemById()[row.ProductID].ProductName;
			row.LineTotal = ss.coalesce(row.Quantity, 0) * ss.coalesce(row.UnitPrice, 0) - ss.coalesce(row.Discount, 0);
			return true;
		}
	}, ss.makeGenericType($Chriz_Serene_Common_GridEditorBase$1, [Object]), [Serenity.IDataGrid, Serenity.ISetEditValue, Serenity.IGetEditValue]);
	ss.initClass($Chriz_Serene_Northwind_OrderForm, $asm, {
		get_customerID: function() {
			return this.byId($Chriz_Serene_Northwind_CustomerEditor).call(this, 'CustomerID');
		},
		get_orderDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'OrderDate');
		},
		get_requiredDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'RequiredDate');
		},
		get_employeeID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'EmployeeID');
		},
		get_detailList: function() {
			return this.byId($Chriz_Serene_Northwind_OrderDetailsEditor).call(this, 'DetailList');
		},
		get_shippedDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'ShippedDate');
		},
		get_shipVia: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'ShipVia');
		},
		get_freight: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'Freight');
		},
		get_shipName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipName');
		},
		get_shipAddress: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipAddress');
		},
		get_shipCity: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipCity');
		},
		get_shipRegion: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipRegion');
		},
		get_shipPostalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipPostalCode');
		},
		get_shipCountry: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipCountry');
		}
	}, Serenity.PrefixedContext);
	ss.initEnum($Chriz_Serene_Northwind_OrderShippingState, $asm, { NotShipped: 0, Shipped: 1 });
	ss.initClass($Chriz_Serene_Northwind_PhoneEditor, $asm, {
		formatValue: function() {
			this.element.val(this.getFormattedValue());
		},
		getFormattedValue: function() {
			var value = this.element.val();
			if (this.get_multiple()) {
				return $Chriz_Serene_Northwind_PhoneEditor.$formatMulti(value, $Chriz_Serene_Northwind_PhoneEditor.$formatPhone);
			}
			return $Chriz_Serene_Northwind_PhoneEditor.$formatPhone(value);
		},
		get_multiple: function() {
			return this.$5$MultipleField;
		},
		set_multiple: function(value) {
			this.$5$MultipleField = value;
		},
		get_value: function() {
			return this.getFormattedValue();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, Serenity.StringEditor, [Serenity.IStringValue]);
	ss.initClass($Chriz_Serene_Northwind_ProductDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_ProductForm, $asm, {
		get_productName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ProductName');
		},
		get_productImage: function() {
			return this.byId(Serenity.MultipleImageUploadEditor).call(this, 'ProductImage');
		},
		get_discontinued: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'Discontinued');
		},
		get_supplierID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'SupplierID');
		},
		get_categoryID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'CategoryID');
		},
		get_quantityPerUnit: function() {
			return this.byId(Serenity.StringEditor).call(this, 'QuantityPerUnit');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_unitsInStock: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'UnitsInStock');
		},
		get_unitsOnOrder: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'UnitsOnOrder');
		},
		get_reorderLevel: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ReorderLevel');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_ProductGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Supplier';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'SupplierID', null, $t1, null, null, null);
			var $t2 = Serenity.LookupEditorOptions.$ctor();
			$t2.lookupKey = 'Northwind.Category';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'CategoryID', null, $t2, null, null, null);
		},
		getButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.getButtons.call(this);
			buttons.push($Chriz_Serene_Common_ExcelExportHelper.createToolButton(this, 'Northwind/Product/ListExcel', ss.mkdel(this, this.onViewSubmit), 'Excel'));
			buttons.push({ title: 'Save Changes', cssClass: 'apply-changes-button', onClick: ss.mkdel(this, function(e) {
				this.$saveClick();
			}) });
			return buttons;
		},
		onViewProcessData: function(response) {
			ss.clearKeys(this.$pendingChanges);
			this.$setSaveButtonState();
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewProcessData.call(this, response);
		},
		$inputFormatter: function(ctx) {
			var klass = 'edit';
			var item = ctx.item;
			var pending = this.$pendingChanges[ss.unbox(item.ProductID)];
			if (!!(ss.isValue(pending) && ss.isValue(pending[ctx.column.field]))) {
				klass += ' dirty';
			}
			var value = this.$getEffectiveValue(item, ctx.column.field);
			return "<input type='text' class='" + klass + "'" + " value='" + Q.formatNumber(value, '0.##') + "'" + '/>';
		},
		$getEffectiveValue: function(item, field) {
			var pending = this.$pendingChanges[ss.unbox(item.ProductID)];
			if (ss.isValue(pending)) {
				var $t1 = pending[field];
				if (ss.isNullOrUndefined($t1)) {
					$t1 = item[field];
				}
				return ss.cast($t1, Number);
			}
			return ss.cast(item[field], Number);
		},
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			Enumerable.from(columns).single(function(x) {
				return x.field === 'UnitPrice';
			}).format = ss.mkdel(this, this.$inputFormatter);
			Enumerable.from(columns).single(function(x1) {
				return x1.field === 'UnitsInStock';
			}).format = ss.mkdel(this, this.$inputFormatter);
			Enumerable.from(columns).single(function(x2) {
				return x2.field === 'UnitsOnOrder';
			}).format = ss.mkdel(this, this.$inputFormatter);
			Enumerable.from(columns).single(function(x3) {
				return x3.field === 'ReorderLevel';
			}).format = ss.mkdel(this, this.$inputFormatter);
			return columns;
		},
		$inputsChange: function(e) {
			var cell = this.slickGrid.getCellFromEvent(e);
			var item = this.get_items()[cell.row];
			var field = this.getColumns()[cell.cell].field;
			var input = $(e.target);
			var text = ss.coalesce(Q.trimToNull(input.val()), '0');
			var pending = this.$pendingChanges[ss.unbox(item.ProductID)];
			var oldText = Q.formatNumber(this.$getEffectiveValue(item, field), '0.##');
			var value;
			if (field === 'UnitPrice') {
				value = Q.parseDecimal(text);
				if (ss.isNullOrUndefined(value) || isNaN(ss.unbox(value))) {
					Q.notifyError(Q.text('Validation.Decimal'));
					input.val(oldText);
					input.focus();
					return;
				}
			}
			else {
				var i = {};
				if (!ss.Int32.tryParse(text, i) || i.$ > 32767 || i.$ < 0) {
					Q.notifyError(Q.text('Validation.Integer'));
					input.val(oldText);
					input.focus();
					return;
				}
				value = i.$;
			}
			if (ss.isNullOrUndefined(pending)) {
				this.$pendingChanges[ss.unbox(item.ProductID)] = pending = {};
			}
			pending[field] = value;
			input.val(Q.formatNumber(value, '0.##')).addClass('dirty');
			this.$setSaveButtonState();
		},
		$setSaveButtonState: function() {
			this.toolbar.findButton('apply-changes-button').toggleClass('disabled', ss.getKeyCount(this.$pendingChanges) === 0);
		},
		$saveClick: function() {
			if (ss.getKeyCount(this.$pendingChanges) === 0) {
				return;
			}
			// this calls save service for all modified rows, one by one
			// you could write a batch update service
			var enumerator = new ss.ObjectEnumerator(Q.deepClone(this.$pendingChanges));
			var saveNext = null;
			saveNext = ss.mkdel(this, function() {
				if (!enumerator.moveNext()) {
					this.refresh();
					return;
				}
				var pair = enumerator.current();
				var entity = Q.deepClone(pair.value);
				entity.ProductID = pair.key;
				Q.serviceRequest('Northwind/Product/Update', { EntityId: pair.key, Entity: entity }, ss.mkdel(this, function(response) {
					delete this.$pendingChanges[pair.key];
					saveNext();
				}), null);
			});
			saveNext();
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Chriz_Serene_Northwind_RegionDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_RegionForm, $asm, {
		get_regionID: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'RegionID');
		},
		get_regionDescription: function() {
			return this.byId(Serenity.StringEditor).call(this, 'RegionDescription');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_RegionGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_ShipperDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_ShipperForm, $asm, {
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_phone: function() {
			return this.byId($Chriz_Serene_Northwind_PhoneEditor).call(this, 'Phone');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_ShipperFormatter, $asm, {
		format: function(ctx) {
			return "<span class='shipper-symbol shipper-" + ss.replaceAllString(ss.coalesce(ss.safeCast(ctx.value, String), ''), ' ', '') + "'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initClass($Chriz_Serene_Northwind_ShipperGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_SupplierDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_SupplierForm, $asm, {
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_contactName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactName');
		},
		get_contactTitle: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactTitle');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_fax: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Fax');
		},
		get_homePage: function() {
			return this.byId(Serenity.StringEditor).call(this, 'HomePage');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_SupplierGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Supplier.Country') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.SupplierCountry';
			this.$country = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$country, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('Country', this.$country.get_value());
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_TerritoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Chriz_Serene_Northwind_TerritoryForm, $asm, {
		get_territoryID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryID');
		},
		get_territoryDescription: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryDescription');
		},
		get_regionID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'RegionID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Chriz_Serene_Northwind_TerritoryGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Territory.RegionDescription') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Region';
			this.$region = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$region, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('RegionID', Serenity.IdExtensions.convertToId(this.$region.get_value()));
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serenity_HtmlBasicContentEditor, $asm, {
		getConfig: function() {
			var config = Serenity.HtmlContentEditor.prototype.getConfig.call(this);
			config.removeButtons += ',Cut,Copy,Paste,BulletedList,NumberedList,Indent,Outdent,SpecialChar,Subscript,Superscript,Styles,PasteText,PasteFromWord,Strike,Link,Unlink,CreatePlaceholder,Image,Table,HorizontalRule,Source,Maximize,Format,Font,FontSize,Anchor,Blockquote,CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Superscript,RemoveFormat';
			config.removePlugins += ',elementspath';
			return config;
		}
	}, Serenity.HtmlContentEditor, [Serenity.IStringValue]);
	ss.setMetadata($Chriz_Serene_Administration_LanguageDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.FormKeyAttribute('Administration.Language'), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($Chriz_Serene_Administration_LanguageGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Language'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.DialogTypeAttribute($Chriz_Serene_Administration_LanguageDialog), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($Chriz_Serene_Administration_PermissionCheckEditor, { attr: [new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('Key')] });
	ss.setMetadata($Chriz_Serene_Administration_PermissionModuleEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($Chriz_Serene_Administration_RoleCheckEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($Chriz_Serene_Administration_RoleDialog, { attr: [new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.FormKeyAttribute('Administration.Role'), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($Chriz_Serene_Administration_RoleGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Role'), new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.DialogTypeAttribute($Chriz_Serene_Administration_RoleDialog), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($Chriz_Serene_Administration_TranslationGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Translation'), new Serenity.IdPropertyAttribute('Key'), new Serenity.LocalTextPrefixAttribute('Administration.Translation'), new Serenity.ServiceAttribute('Administration/Translation')] });
	ss.setMetadata($Chriz_Serene_Administration_UserDialog, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.FormKeyAttribute('Administration.User'), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($Chriz_Serene_Administration_UserGrid, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.DialogTypeAttribute($Chriz_Serene_Administration_UserDialog), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($Chriz_Serene_Common_GridEditorBase$1, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('__id')] });
	ss.setMetadata($Chriz_Serene_Common_GridEditorDialog$1, { attr: [new Serenity.IdPropertyAttribute('__id')] });
	ss.setMetadata($Chriz_Serene_Membership_ChangePasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ChangePassword')] });
	ss.setMetadata($Chriz_Serene_Membership_ForgotPasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ForgotPassword')] });
	ss.setMetadata($Chriz_Serene_Membership_LoginPanel, { attr: [new Serenity.FormKeyAttribute('Membership.Login')] });
	ss.setMetadata($Chriz_Serene_Membership_ResetPasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ResetPassword')] });
	ss.setMetadata($Chriz_Serene_Membership_SignUpPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.SignUp')] });
	ss.setMetadata($Chriz_Serene_Modules_MovieDB_Movie_MovieKind, { attr: [new Serenity.EnumKeyAttribute('MovieDB.MovieKind')] });
	ss.setMetadata($Chriz_Serene_MovieDB_GenreDialog, { attr: [new Serenity.IdPropertyAttribute('GenreId'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('MovieDB.Genre'), new Serenity.LocalTextPrefixAttribute('MovieDB.Genre'), new Serenity.ServiceAttribute('MovieDB/Genre')] });
	ss.setMetadata($Chriz_Serene_MovieDB_GenreGrid, { attr: [new Serenity.ColumnsKeyAttribute('MovieDB.Genre'), new Serenity.IdPropertyAttribute('GenreId'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($Chriz_Serene_MovieDB_GenreDialog), new Serenity.LocalTextPrefixAttribute('MovieDB.Genre'), new Serenity.ServiceAttribute('MovieDB/Genre')] });
	ss.setMetadata($Chriz_Serene_MovieDB_MovieDialog, { attr: [new Serenity.IdPropertyAttribute('MovieId'), new Serenity.NamePropertyAttribute('Title'), new Serenity.FormKeyAttribute('MovieDB.Movie'), new Serenity.LocalTextPrefixAttribute('MovieDB.Movie'), new Serenity.ServiceAttribute('MovieDB/Movie')] });
	ss.setMetadata($Chriz_Serene_MovieDB_MovieGrid, { attr: [new Serenity.ColumnsKeyAttribute('MovieDB.Movie'), new Serenity.IdPropertyAttribute('MovieId'), new Serenity.NamePropertyAttribute('Title'), new Serenity.DialogTypeAttribute($Chriz_Serene_MovieDB_MovieDialog), new Serenity.LocalTextPrefixAttribute('MovieDB.Movie'), new Serenity.ServiceAttribute('MovieDB/Movie')] });
	ss.setMetadata($Chriz_Serene_Northwind_CategoryDialog, { attr: [new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.FormKeyAttribute('Northwind.Category'), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($Chriz_Serene_Northwind_CategoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Category'), new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_CategoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($Chriz_Serene_Northwind_CustomerCustomerDemoDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FormKeyAttribute('Northwind.CustomerCustomerDemo'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($Chriz_Serene_Northwind_CustomerCustomerDemoGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_CustomerCustomerDemoDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($Chriz_Serene_Northwind_CustomerDemographicDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.FormKeyAttribute('Northwind.CustomerDemographic'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($Chriz_Serene_Northwind_CustomerDemographicGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_CustomerDemographicDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($Chriz_Serene_Northwind_CustomerDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Customer'), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($Chriz_Serene_Northwind_CustomerGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Customer'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_CustomerDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($Chriz_Serene_Northwind_CustomerOrdersGrid, { attr: [new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_CustomerOrderDialog)] });
	ss.setMetadata($Chriz_Serene_Northwind_EmployeeDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.FormKeyAttribute('Northwind.Employee'), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($Chriz_Serene_Northwind_EmployeeFormatter, { members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'GenderProperty', type: 16, returnType: String, getter: { name: 'get_GenderProperty', type: 8, sname: 'get_genderProperty', returnType: String, params: [] }, setter: { name: 'set_GenderProperty', type: 8, sname: 'set_genderProperty', returnType: Object, params: [String] } }] });
	ss.setMetadata($Chriz_Serene_Northwind_EmployeeGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_EmployeeDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($Chriz_Serene_Northwind_EmployeeTerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.EmployeeTerritory'), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($Chriz_Serene_Northwind_EmployeeTerritoryGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_EmployeeTerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($Chriz_Serene_Northwind_Gender, { attr: [new Serenity.EnumKeyAttribute('Chriz.Serene.Northwind.Entities.Gender')] });
	ss.setMetadata($Chriz_Serene_Northwind_NotesEditor, { attr: [new Serenity.EditorAttribute(), new Serenity.ElementAttribute('<div/>')] });
	ss.setMetadata($Chriz_Serene_Northwind_OrderDetailDialog, { attr: [new Serenity.FormKeyAttribute('Northwind.OrderDetail'), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail')] });
	ss.setMetadata($Chriz_Serene_Northwind_OrderDetailsEditor, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.OrderDetail'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_OrderDetailDialog), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail')] });
	ss.setMetadata($Chriz_Serene_Northwind_OrderDialog, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.NamePropertyAttribute('OrderID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Order'), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($Chriz_Serene_Northwind_OrderGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Order'), new Serenity.IdPropertyAttribute('OrderID'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_OrderDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($Chriz_Serene_Northwind_OrderShippingState, { attr: [new Serenity.EnumKeyAttribute('Northwind.OrderShippingState')] });
	ss.setMetadata($Chriz_Serene_Northwind_PhoneEditor, { attr: [new Serenity.EditorAttribute()], members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'Multiple', type: 16, returnType: Boolean, getter: { name: 'get_Multiple', type: 8, sname: 'get_multiple', returnType: Boolean, params: [] }, setter: { name: 'set_Multiple', type: 8, sname: 'set_multiple', returnType: Object, params: [Boolean] } }] });
	ss.setMetadata($Chriz_Serene_Northwind_ProductDialog, { attr: [new Serenity.IdPropertyAttribute('ProductID'), new Serenity.NamePropertyAttribute('ProductName'), new Serenity.FormKeyAttribute('Northwind.Product'), new Serenity.LocalTextPrefixAttribute('Northwind.Product'), new Serenity.ServiceAttribute('Northwind/Product')] });
	ss.setMetadata($Chriz_Serene_Northwind_ProductGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Product'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ProductID'), new Serenity.NamePropertyAttribute('ProductName'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_ProductDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Product'), new Serenity.ServiceAttribute('Northwind/Product')] });
	ss.setMetadata($Chriz_Serene_Northwind_RegionDialog, { attr: [new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.FormKeyAttribute('Northwind.Region'), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($Chriz_Serene_Northwind_RegionGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Region'), new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_RegionDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($Chriz_Serene_Northwind_ShipperDialog, { attr: [new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Shipper'), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($Chriz_Serene_Northwind_ShipperGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Shipper'), new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_ShipperDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($Chriz_Serene_Northwind_SupplierDialog, { attr: [new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Supplier'), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($Chriz_Serene_Northwind_SupplierGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Supplier'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_SupplierDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($Chriz_Serene_Northwind_TerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.Territory'), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	ss.setMetadata($Chriz_Serene_Northwind_TerritoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Territory'), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($Chriz_Serene_Northwind_TerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	ss.setMetadata($Serenity_HtmlBasicContentEditor, { attr: [new Serenity.EditorAttribute(), new System.ComponentModel.DisplayNameAttribute('Html Content (Basic Set)'), new Serenity.OptionsTypeAttribute(Serenity.HtmlContentEditorOptions), new Serenity.ElementAttribute('<textarea />')] });
	(function() {
		Q$Config.rootNamespaces.push('Chriz.Serene');
	})();
})();
