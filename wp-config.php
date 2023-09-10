<?php

define('DB_NAME', 'movidabesblabla2');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');

define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

define('WP_HOME','http://localhost:94');
define('WP_SITEURL','http://localhost:94');

$_SERVER['HTTPS'] = 'off';

define('AUTH_KEY', 'e8fb0413fc299616e80cb02c4236da3732517993be6c43bcd076e94f363eddce');
define('SECURE_AUTH_KEY', 'b35afa448634c8dbe4eca0448c4b5568962f152c168d6ea1f2fcce93d391ede5');
define('LOGGED_IN_KEY', '0bac1c2a8f4181430a0e3cf70dbc6525a26bed68ceecca5f87f5c244948260a5');
define('NONCE_KEY', '7d808d5a9fca687f2680542aabde87b1d497943bfaa032b2df4b8b7e23435d3d');
define('AUTH_SALT', '70e0e3b16cc663a620b79c7267ae6ed51f8f58a60f9c739e75597ad28cd7177e');
define('SECURE_AUTH_SALT', 'af0045e11fbec1222335b9c9971f43722432dd0775f132de6dfff655effb5188');
define('LOGGED_IN_SALT', 'd8ae5fd20bd0f860df361efc20fe4e505e37a150edcaf84f67c438c780541344');
define('NONCE_SALT', '27a66bbdad917864a773cb1654ec99884e7022f09c0e7a47ed03839cc5fc738d');


/**#@-*/



/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'ryi_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 20);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy blogging. */
define('ENFORCE_GZIP', true);
define('WP_LOCAL_DEV', false);
define('WP_DEBUG', false);


define('WP_POST_REVISIONS', 25);
/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH'))
    define('ABSPATH', dirname(__FILE__) . '/');
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';




/* Add any custom values between this line and the "stop editing" line. */







/* That's all, stop editing! Happy publishing. */



/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}



/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

