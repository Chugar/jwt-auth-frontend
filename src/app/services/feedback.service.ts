import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _snackBar: MatSnackBar) { }

  public feedbackSucess(message: string, action: string) {

    this._snackBar.open(message, action,
      { duration: 2500,
        horizontalPosition: 'right',
        panelClass: ['success-snackbar']
      }
    )
  }

  public feedbackError(message: string, action: string) {

    this._snackBar.open(message, action,
      { duration: 2500,
        horizontalPosition: 'right',
        panelClass: ['error-snackbar']
      }
    )
  }




}
