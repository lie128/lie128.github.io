var showDialog = new ShowDialog();

function ShowDialog() {
	function dialogInit(){
		$("body").append('<div id="dialog" style="display:none" title="Basic dialog"></div>');
		$('[id="dialog"]').append('<pre id="dialogMsg">This is the dialogMsg</pre>');
	}
	this.showConfirmDialog = function showConfirmDialog(args){
		if ($('[id="dialog"]').length == 0){
			dialogInit();
		}else{
			$('[id="dialog"]').dialog( "destroy");
		}
		var width = args.width || 260;
		var title = args.title;
		var msgInfo = args.msgInfo;
		var btnOk = args.btnOk;
		var btnCancel = args.btnCancel;
		var btnOkTxt = args.btnOkTxt || "确定";
		var btnCancelTxt = args.btnCancelTxt || "取消";
		var btnOkClass = 'dialog_btn_ok';
		var btnCancelClass = 'dialog_btn_cancel';
		$('[id="dialog"]').dialog({
			autoOpen:false,
			modal:true,//模式对话框
			dialogClass:'showConfirmDialog',
			width:width,
			title:title,
			buttons:[
				{
					text:btnOkTxt,
					// class:btnOkClass,
					click:function(){
				       $(this).dialog("close");
				       if(btnOk != undefined){
						  btnOk();
					  	}
				    }
				},
				{
					text:btnCancelTxt,
					// class:btnCancelClass,
					click:function(){
				       $(this).dialog("close");
				       if (btnCancel != undefined){
						  btnCancel();
					  	}
				    }
				}
			]
		});
		
		$('[id="dialogMsg"]').html(msgInfo);
		$('[id="dialog"]').dialog("open");
	}
	
	this.showInfoDialog = function showInfoDialog(args){
		if ($('[id="dialog"]').length == 0){
			dialogInit();
		}else{
			$('[id="dialog"]').dialog( "destroy");
		}
		var width = args.width || 260;
		var title = args.title;
		var msgInfo = args.msgInfo;
		var btnOk = args.btnOk;
		var btnCancel = args.btnCancel;
		var btnOkTxt = args.btnOkTxt || "确定";
		var btnOkClass = args.btnOkClass;
		$('[id="dialog"]').dialog({
			autoOpen:false,
			modal:true,//模式对话框
			width:width,
			title:title,
			buttons:[
				{
					text:btnOkTxt,
					// class:btnOkClass,
				    click:function(){
				       $(this).dialog("close");
				       if (btnOk != undefined){
						  btnOk();
					  }
				    }
				}
			]
		});
		
		$('[id="dialogMsg"]').html(msgInfo);
		$('[id="dialog"]').dialog("open");
	}

	this.showMultiBtnDialog = function showConfirmDialog(args){
		if ($('[id="dialog"]').length == 0){
			dialogInit();
		}else{
			$('[id="dialog"]').dialog( "destroy");
		}
		var width = args.width || 260;
		var title = args.title;
		var msgInfo = args.msgInfo;
		var btnOk = args.btnOk;
		var btnCancel = args.btnCancel;
		var btnMulti = args.btnMulti;
		var btnOkTxt = args.btnOkTxt || "确定";
		var btnOkClass = args.btnOkClass;
		var btnCancelClass = args.btnCancelClass;
		var btnMultiClass = args.btnMultiClass;
		
		$('[id="dialog"]').dialog({
			autoOpen:false,
			modal:true,//模式对话框
			width:width,
			title:title,
			buttons:[
				{
					text:btnOkTxt,
					// class:btnOkClass,
					click:function(){
				       $(this).dialog("close");
				       if(btnOk != undefined){
						  btnOk();
					  	}
				    }
				},
				{
					text:btnMultiTxt,
					// class:btnMultiClass,
					click:function(){
				       $(this).dialog("close");
				       if (btnMulti != undefined){
						  btnMulti();
					  	}
				    }
				},
				{
					text:btnCancelTxt,
					// class:btnCancelClass,
					click:function(){
				       $(this).dialog("close");
				       if (btnCancel != undefined){
						  btnCancel();
					  	}
				    }
				}
			]
		});
		
		$('[id="dialogMsg"]').html(msgInfo);
		$('[id="dialog"]').dialog("open");
	}
	
	this.closeDialog = function closeDialog(){
		$('[id="dialog"]').dialog( "close" );
	}
}