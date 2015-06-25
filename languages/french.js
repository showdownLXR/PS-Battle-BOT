exports.translations = {
	commands: {
		/*
		* Basic Commands
		*/
		time: {'time': 'Temps de Bot'},
		uptime: {
			'week': 'semaine',
			'day': 'jour',
			'hour': 'heure',
			'minute': 'minute',
			'second': 'seconde',
			'and': 'et'
		},
		seen: {
			'inv': 'Nom d\'utilisateur invalide',
			'bot': 'Vous pourriez être aveugle ou analphabètes. Peut-être envie d\'obtenir ce check-out.',
			'self': 'Avez-vous regardé dans le miroir dernièrement? ',
			's1': 'a été vu la dernière fois il ya',
			's2': '',
			'n1': 'L\'utilisateur',
			'n2': 'n\'a jamais été vu, au moins depuis la dernière réinitialisation de bo',
			'j': 'joindre',
			'l': 'laissant',
			'c': 'chat in',
			'n': 'changer de nick à'
		},
		language: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'nolang': 'Vous devez spécifier une langue',
			'v': 'Les langues possibles sont',
			'l': 'Langue de la salle est maintenant Français'
		},
		set: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'denied': 'Accès refusé',
			'u1': 'Usage',
			'u2': '[permission], [rank]',
			'ps': 'Permissions',
			'p': 'Permission',
			'd': 'dans cette salle est maintenant handicapé',
			'a': 'dans cette salle est maintenant avaliable pour tous les utilisateurs',
			'r': 'dans cette salle est maintenant avaliable pour les utilisateurs ayant rang',
			'r2': 'ou haut',
			'not1': 'Rank',
			'not2': 'non trouvé'
		},
		/*
		* Dyn Commands
		*/
		dyn: {
			'nocmds': 'Il n\'y à pas de commandes',
			'list': 'Commandes dynamiques',
			'c': 'Commande',
			'notexist': 'ne pas existe'
		},
		delcmd: {
			'c': 'Commande',
			'd': 'a été supprimé',
			'n': 'ne pas existe'
		},
		setcmd: {
			'notemp': 'Il n\'y a aucune chaîne temporaire pour définir, utiliser **stemp** avant de faire cela',
			'c': 'Commande',
			'modified': 'a été modifié',
			'created': 'a été créé'
		},
		setcmdalias: {
			'u1': 'Usage',
			'u2': '[alias], [cmd]',
			'n': 'est pas une commande dynamique',
			'c': 'Commande',
			'alias': 'est maintenant un alias de',
			'already': 'est un alias. Vous ne pouvez pas définir des alias d\'un autre alias'
		},
		/*
		* Misc Commands
		*/
		pick: {'err': 'Vous devez donner au moins 2 choix valides'},
		randomanswer: {
			'answers': [
				'Signes soulignent oui.',
				'Oui.',
				'Réponse floue, essayez à nouveau. ',
				'Sans aucun doute.',
				'Mes sources disent pas.',
				'Comme je le vois, oui.',
				'Vous pouvez compter sur elle.',
				'Concentrez-vous et demander à nouveau.',
				'Perspectives pas si bon.',
				'Il est donc décidément. ',
				'Mieux vaut ne pas vous dire maintenant.',
				'Très douteux.',
				'Oui définitivement.',
				'Il est certain.',
				'Vous ne pouvez pas prévoir maintenant. ',
				'Probablement.',
				'Demandez à nouveau plus tard. ',
				'Ma réponse est non.',
				'Perspectives bonne.',
				'Ne pas compter sur elle.'
			]
		},
		youtube: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'u': 'Usage',
			'ae': 'YouTube link recognition is already avaliable for room',
			'e': 'YouTube link recognition is now avaliable for this room',
			'ad': 'YouTube link recognition is already disabled for room',
			'd': 'YouTube link recognition is now disabled for this room'
		},
		/*
		* Pokemon Commands
		*/
		randompokemon: {'err': 'An error ocurred, try again later'},
		gen: {
			'err': 'An error ocurred, try again later',
			'err2': 'You must specify a pokemon, move, item or ability',
			'nfound': 'Pokemon, item, move or ability not found',
			'g': 'Generation of'
		},
		randommoves: {
			'err': 'An error ocurred, try again later',
			'err2': 'You must specify a pokemon',
			'r': 'Random singles moves',
			'rd': 'Random doubles/triples moves',
			'nfound': 'Pokemon not found'
		},
		heavyslam: {
			'err': 'An error ocurred, try again later',
			'err2': 'You must specify 2 pokemon',
			'n1': 'Attacker Pokemon not found',
			'n2': 'Defender Pokemon not found',
			's': 'Heavy slam/Heat crash base power'
		},
		prevo: {
			'err': 'An error ocurred, try again later',
			'p1': 'Pokemon',
			'p2': 'has not preevo',
			'nfound': 'Pokemon not found'
		},
		priority: {
			'err': 'An error ocurred, try again later',
			'err2': 'Pokemon not found',
			'err3': 'No moves found'
		},
		boosting: {
			'err': 'An error ocurred, try again later',
			'err2': 'Pokemon not found',
			'err3': 'No moves found'
		},
		recovery: {
			'err': 'An error ocurred, try again later',
			'err2': 'Pokemon not found',
			'err3': 'No moves found'
		},
		hazard: {
			'err': 'An error ocurred, try again later',
			'err2': 'Pokemon not found',
			'err3': 'No moves found'
		},
		/*
		* Battle Commands
		*/
		reloadteams: {'s': 'Teams reloaded', 'e': 'An error ocurred, could not reload teams'},
		blockchallenges: {
			'b': 'Challenges bloqued',
			'nb': 'Challenges no longer blocked'
		},
		move: {'notbattle': 'This command is only avaliable for battle rooms'},
		jointours: {
			'notchat': 'This command is only avaliable for chat rooms',
			'ad': 'Mode "tour autojoin" already disabled for room',
			'd': 'Mode "tour autojoin" disabled for room',
			'ae': 'Mode "tour autojoin" already enabled for room',
			'e': 'Mode "tour autojoin" enabled for room'
		},
		searchbattle: {
			'e1': 'You must specify a format',
			'e21': 'Format',
			'e22': 'is not valid for searching battle',
			'e31': 'I do not have teams for searching battle in format',
			'e32': 'Edit teams.js to add more bot teams'
		},
		ladderstart: {
			'stop': 'Laddering stopped',
			'start': 'Now laddering in format',
			'e1': 'You must specify a format',
			'e21': 'Format',
			'e22': 'is not valid for searching battle',
			'e31': 'I do not have teams for searching battle in format',
			'e32': 'Edit teams.js to add more bot teams'
		},
		challenge: {
			'e11': 'Usage',
			'e12': '[user], [format]',
			'e21': 'Format',
			'e22': 'is not valid for challenging',
			'e31': 'I do not have teams for challenging in format',
			'e32': 'Edit teams.js to add more bot teams'
		},
		jointour: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'e1': 'There is not a tournament in this room',
			'e2': 'Error: Already joined',
			'e3': 'Error: Tournament has already started',
			'e41': 'I do not have teams for joining a tornament in format',
			'e42': 'Edit teams.js to add more bot teams'
		},
		leavetour: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'e1': 'There is not a tournament in this room',
			'e2': 'Error: Not joined'
		},
		battleset: {
			'u1': 'Usage',
			'u2': '[permission], [rank]',
			'ps': 'Permissions',
			'p': 'Permission',
			'd': 'in battles is now disabled',
			'a': 'in battles is now avaliable for all users',
			'r': 'in battles is now avaliable for users with rank',
			'r2': 'or highter',
			'not1': 'Rank',
			'not2': 'not found'
		},
		team: {
			'u1': 'Usage',
			'u2': '[add/delete], [name], [format], [Exportable in Hastebin]',
			'format': 'Format',
			'notexists': 'does not exists',
			'download': 'Dowloading and parsing team',
			'team': 'Team',
			'added': 'added sucessfully to bot teams list',
			'err1': 'Error: Hastebin document not found',
			'err2': 'Error: Invalid team data',
			'err3': 'Error: There was already a team with that name, use another name or delete the other team',
			'err4': 'Error: Failed to get data from Hastebin',
			'removed': 'removed sucessfully from teams list'
		},
		teamlist: {
			'list': 'Bot teams list',
			'empty': 'Bot teams list is empty',
			'id': 'Id',
			'format': 'Format',
			'pokemon': 'Pokemon',
			'err': 'Error: failed to upload teams list to Hastebin'
		},
		/*
		* Moderation Commands
		*/
		autoban: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'notmod': 'requires moderator rank (@) or highter to ban users',
			'notarg': 'You must specify at least one user to blacklist',
			'bu': 'Blacklisted user',
			'u': 'User(s)',
			'added': 'added to blacklist successfully.',
			'already': 'already present in blacklist.',
			'all': 'All',
			'other': 'other',
			'illegal': 'users had illegal nicks and were not blacklisted.'
		},
		unautoban: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'notmod': 'requires moderator rank (@) or highter to ban users',
			'notarg': 'You must specify at least one user to unblacklist.',
			'u': 'User(s)',
			'r': 'removed from blacklist successfully.',
			'noother': 'No other',
			'no': 'No',
			'nopresent': 'specified users were present in the blacklist.'
		},
		regexautoban: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'notmod': 'requires moderator rank (@) or highter to ban users',
			'notarg': 'You must specify a regular expression to (un)blacklist.',
			're': 'Regular expression',
			'notadd': 'cannot be added to the blacklist. Don\'t be Machiavellian!',
			'already': 'is already present in the blacklist.',
			'addby': 'was added to the blacklist by user',
			'add': 'was added to the blacklist.'
		},
		unregexautoban: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'notmod': 'requires moderator rank (@) or highter to ban users',
			'norarg': 'You must specify a regular expression to (un)blacklist.',
			'notpresent': 'is not present in the blacklist.',
			're': 'Regular expression',
			'rby': 'was removed from the blacklist user by',
			'r': 'was removed from the blacklist.'
		},
		viewblacklist: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'iu': 'Invalid nickname',
			'u': 'User',
			'currently': 'is currently',
			'not': 'not',
			'b': 'blacklisted in',
			'nousers': 'No users are blacklisted in',
			'listab': 'The following users are banned in',
			'listrab': 'The following regexes are banned in',
			'err': 'upload failure, could not upload blacklist to hastebin'
		},
		banword: {
			'phrase': 'Phrase',
			'already': 'is already banned.',
			'ban': 'is now banned.'
		},
		unbanword: {
			'phrase': 'Phrase',
			'not': 'is not currently banned.',
			'unban': 'is no longer banned.'
		},
		viewbannedwords: {
			'in': 'in',
			'globally': 'globally',
			'phrase': 'Phrase',
			'nowords': 'No phrases are banned in this room.',
			'curr': 'is currently',
			'not': 'not',
			'banned': 'banned',
			'list': 'The following phrases are banned',
			'link': 'Banned phrases',
			'err': 'upload failure, could not upload banwords to hastebin'
		},
		inapword: {
			'phrase': 'Phrase',
			'already': 'is already inapropiate.',
			'ban': 'is now inapropiate.'
		},
		uninapword: {
			'phrase': 'Phrase',
			'not': 'is not currently inapropiate.',
			'unban': 'is no longer inapropiate.'
		},
		viewinapwords: {
			'in': 'in',
			'globally': 'globally',
			'phrase': 'Phrase',
			'nowords': 'No phrases are inapropiate in this room.',
			'curr': 'is currently',
			'not': 'not',
			'banned': 'inapropiate',
			'list': 'The following phrases are inapropiate',
			'link': 'Inapropiate phrases',
			'err': 'upload failure, could not upload inapropiate phrases to hastebin'
		},
		joinphrase: {
			'ae': 'Join phrases already enabled for this room',
			'e': 'Join phrases are now enabled for this room"',
			'ad': 'Join phrases already disabled for this room"',
			'd': 'Join phrases are now disabled for this room',
			'u1': 'Usage',
			'u2': '[set/delete], [user], [phrase]',
			'dis': 'Join phrases are disabled in this room',
			'jpfor': 'Join Phrase for user',
			'modified': 'has been modified',
			'globally': 'globally.',
			'forthis': 'for this room.',
			'del': 'has been deleted',
			'not': 'does not exists'
		},
		viewjoinphrases: {
			'iu': 'Invalid username.',
			'not': 'No Joinphrase set for',
			'empty': 'There are not JoinPhrases in this room.',
			'jp': 'Join Phrases set',
			'globally': 'globally',
			'in': 'in',
			'err': 'upload failure, could not upload joinphrases to hastebin'
		},
		mod: {
			'notchat': 'Cette commande est avaliable seulement pour les salles de chat',
			'u1': 'Usage',
			'u2': '[mod], [on/off]',
			'valid': 'Valid moderations are',
			'mod': 'Moderation for',
			'ae': 'already ON for this room',
			'e': 'is now ON for this room',
			'ad': 'already OFF for this room',
			'd': 'is now OFF for this room'
		},
		/*
		* Tour Commands
		*/
		tourhelp: {'h': 'tour (format), (seconds to start or off), (minutes autodq or off), (max Users or off), (elimination or roundrobin). All arguments are optional.'},
		tournament: {
			'e1': 'requires moderator rank (@) or highter to create tornaments',
			'e2': 'There is already a tournament in this room',
			'e31': 'Format',
			'e32': 'is not valid for tournaments',
			'e4': 'Time to start is not a valid time',
			'e5': 'Autodq is not a valid time',
			'e6': 'Max users number is not valid',
			'e7': 'Tour type is not valid. Valid types are: elimination, roundrobin',
			'notstarted': 'Error: the tournament did not start, probably because I have not permission to create tournaments or commands got changed.'
		}
	},

	/*
	* Features
	*/

	time: {
		'day': 'jour',
		'hour': 'heure',
		'minute': 'minute',
		'second': 'seconde',
		'days': 'jours',
		'hours': 'heures',
		'minutes': 'minutes',
		'seconds': 'secondes'
	},

	youtube: {
		'before': 'Le lien de',
		'after': ''
	},

	moderation: {
		'automod': 'Modération Automatique',
		//mods
		'fs': 'Flood / Spam',
		'sl': 'Link Spam',
		's': 'Spam',
		'f': 'Flood',
		'possible': 'Possible spammeur détecté',
		'caps': 'Capitalisation excessive',
		'stretch': 'Stretching',
		'spoiler': 'Spoilers ne sont pas admis dans cette chat',
		'youtube': 'Filières de Youtube ne sont pas admis dans cette chat',
		'server': 'Serveurs de PS ne sont pas admis dans cette chat',
		'inapword': 'Votre message contenait une phrase inapproprié',
		'banword': 'Votre message contenait une phrase interdit',
		'mult': 'Infarctus Multiples',
		'0tol': '(Tolérance zéro)',
		//avb
		'caps-0': 'Caps',
		'rep-0': 'Redoublement',
		'stretch-0': 'Stretching',
		'flood-0': 'Flood',
		'spoiler-0': 'Spoiler',
		'youtube-0': 'Filières de Youtube',
		'server-0': 'Serveur de PS',
		'inapword-0': 'Inapproprié',
		'banword-0': 'Mots Interdits',
		//autoban
		'ab': 'Utilisateur la liste noire'
	}
};
