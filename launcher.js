/**
 * The worker module handler for the whole applicaitons
 * This is the entry point of the application and it itself
 * handles the clustering at the maximum level.
 * Assigns each child process to the maximum number
 * of available processes in the system.
 * @author gaurav sharma
 * @since Wednesday, December 19, 2018
 */
require('@babel/register');
require('@babel/polyfill');

require('./index');