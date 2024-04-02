import { Component } from '@angular/core';
import { NotifcationServiceService } from './notifcation-service.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  notifications: any[] = [];
  notificationsCount: string = ''; 

  constructor(private notificationService: NotifcationServiceService) { }

  ngOnInit(): void {

    this.notificationService.notificationListener().subscribe({
      
      next: (notification: any) => {
        this.notificationService.getNotifications().subscribe({
          next: (notifications) => {
            this.notifications = notifications;
            // Mettez à jour ici pour compter seulement les notifications non vues
            this.updateNotificationsCount();
          },
          error: (err) => console.error(err)
        });
        this.notifications.unshift(notification); // Add the new notification to the beginning of the list
        this.updateNotificationsCount(true);
        console.log("jjbhuftf")
      },
      error: (err) => console.error(err)
    });
    
  }

  openNotifications() {
    this.notificationsCount = ''; // Réinitialise le compteur à une chaîne vide
    // Marquer toutes les notifications comme vues ici
    this.markNotificationsAsSeen();
  }

  updateNotificationsCount(isNew: boolean = false) {
    if(isNew) {
      // Incrémenter le compteur pour une nouvelle notification
      const count = parseInt(this.notificationsCount || '0', 10);
      this.notificationsCount = (count + 1).toString();
    } else {
      // Compter seulement les notifications non vues pour l'initialisation
      const unseenCount = this.notifications.filter(not => !not.isSeen).length;
      this.notificationsCount = unseenCount > 0 ? unseenCount.toString() : '';
    }
  }

  markNotificationsAsSeen() {
    // Mettez à jour vos notifications pour les marquer comme vues, par exemple, en faisant une requête PATCH au serveur
    // Supposons que le serveur marque toutes les notifications comme vues et renvoie le total des notifications mises à jour
    this.notificationService.updateUnseenNotificationByIds({notifications_ids: this.notifications.filter(not => !not.isSeen).map(not => not._id)}).subscribe(() => {
      this.notifications.forEach(not => not.isSeen = true);
      this.notificationsCount = ''; // Assurez-vous que le compteur est réinitialisé après la mise à jour
    });
  }
}
