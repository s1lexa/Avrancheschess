const translations = {
    'fr': {
        'title': 'Club d\'échecs d\'Avranches',
        'home': "Accueil",
        'about-heading': 'À propos',
        'event': 'Événements',
        'membres': 'Membres',
        'exercice': 'Exercice',
        'blog': 'Blog',
        'galerie': 'Galerie',
        'contact': 'Contact',
        'about_text1': "Envie de pratiquer le jeu d'échecs au sein d'un club ?",
        'about_text2': "L'association Avranches-échecs Pays de la baie invite les amateurs, débutant et expert à partager le plaisir du jeu, en loisirs et pourquoi pas en compétition. Une idée née à l'initiative de deux Avranchinais, François Codet, et Stéphane Gallon.",
        'about_text3': "Tout logiquement donc baptisé Avranches-échecs Pays de la baie, le nouveau club accueillera toutes celles et ceux, de tous âges qui souhaitent partager un moment convivial avec d'autres joueurs.",
        'about_text4': "Un jeu accessible à tous.",
        'about_text5': "Mémorisation, raisonnement logique, concentration, imagination, anticipation... La pratique du jeu d'échecs permet de développer de nombreuses capacités.",
        'about_text6': "C'est un jeu accessible à tous, à n'importe quel âge, et dont les règles, que l'on peut apprendre seul, n'ont rien de compliqué. Des règles qu'il faudra néanmoins connaître avant de rejoindre le club.",
    
    },
    'en': {
        'title': 'Avranches Chess Club',
        'home': 'Home',
        'about-heading': 'About Us',
        'event': 'Events',
        'members': 'Members',
        'exercice': 'Exercice',
        'blog': 'Blog',
        'galerie': 'Gallery',
        'contact': 'Contact',
        'about_text1': "Want to play chess within a club?",
        'about_text2': "The Avranches-échecs Pays de la baie association invites enthusiasts, both beginners and experts, to share the joy of the game, whether for leisure or even in competition. The idea was born from the initiative of two Avranches locals, François Codet, and Stéphane Gallon.",
        'about_text3': "Naturally named Avranches-échecs Pays de la baie, the new club welcomes everyone of all ages who wishes to share a friendly moment with other players.",
        'about_text4': "A game accessible to all.",
        'about_text5': "Memory, logical reasoning, concentration, imagination, anticipation... Practicing chess helps develop numerous skills.",
        'about_text6': "It is a game accessible to everyone, at any age, and the rules, which one can learn independently, are not complicated. Rules that, nonetheless, need to be known before joining the club.",
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll('[id^="title"], [id^="home"], [id^="about-heading"], [id^="event"], [id^="membres"], [id^="exercice"], [id^="blog"], [id^="galerie"], [id^="contact"], [id^="about_text1"], [id^="about_text2"], [id^="about_text3"], [id^="about_text4"], [id^="about_text5"], [id^="about_text6"]');
   
    elements.forEach(element => {
        const key = element.id;
        const translation = translations[language]?.[key];
        element.textContent = translation || element.textContent;
    });
}
