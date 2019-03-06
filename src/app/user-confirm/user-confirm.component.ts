import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { keys as AUTH_CONFIG } from '../../../env-config';

@Component({
	selector: 'app-user-confirm',
	templateUrl: './user-confirm.component.html',
	styleUrls: ['./user-confirm.component.scss']
})
export class UserConfirmComponent {

constructor(
	public dialogRef: MatDialogRef<UserConfirmComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any,
	){ }

	authorizeStrava() {
		window.location.href = "https://www.strava.com/oauth/authorize?client_id=" 
		+ AUTH_CONFIG.STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" 
		+ AUTH_CONFIG.DEV_URL + "?scope=write&state=mystate&approval_prompt=force";
	}
  
	onNoClick(): void {
		this.dialogRef.close();
	}

}
