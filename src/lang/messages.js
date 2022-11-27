import validationMessages from './validationMessages'

const actionsMessages = {
  fr: {
    'error.technicalError': 'Une erreur technique est survenue'
  }
}

const labelMessages = {
  fr: {
    'label.submit.button': 'envoyer',
    'label.close.button': 'fermer',
    'label.confirm.button': 'oui, le supprimer',
    'label.application.nom': "Nom de l'application",
    'label.application.url': "Url de l'application",
    'label.application.version': "Version de l'application",
    'label.application.rotation': 'Angle de rotation',
    'header.application.confirmDelete': "Êtes-vous sûr de vouloir supprimer l' application ?",
    'text.action.irreversible': 'Cette action est irréversible.',
    'label.application.create': 'Créer une nouvelle application',
    'label.application.update': 'Modifier une application',
    'label.routerLinks.raspberrypi': 'raspberryPi',
    'label.routerLinks.application': 'application',
    'label.rowPerPage.dataTable': 'Nombre de ligne affichées',
    'label.raspberry.location': 'Localisation',
    'title.raspberry.form': 'Modifier un raspberry',
    'label.raspberry.hostname': 'Hostname',
    'label.raspberry.search.hostname': 'Cherchez un Raspberry grace à son hostname',
    'label.raspberry.search.ccu': 'Cherchez un Raspberry grace à son code ccu',
    'label.raspberry.search.application': 'Cherchez un Raspberry grace à son application',
    'label.raspberry.search.location': 'Cherchez un Raspberry grace à sa localisation',
    'label.page.403': "Vous n'avez pas accès à cette page",
    'update.raspberry.success': 'La raspberry {hostname} a été mis à jour',
    'update.raspberry.fail': "La raspberry {hostname} n'a pas réussi à se mettre à jour"
  }
}

export default {
  fr: {
    ...actionsMessages.fr,
    ...labelMessages.fr,
    ...validationMessages.fr
  }
}
