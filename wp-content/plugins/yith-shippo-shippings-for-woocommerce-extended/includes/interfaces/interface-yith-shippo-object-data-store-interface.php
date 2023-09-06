<?php
/**
 * General object data store interface
 *
 * @author  YITH <plugins@yithemes.com>
 * @package YITH\Shippo\Interfaces
 * @version 1.0.0
 */

defined( 'ABSPATH' ) || exit;

interface YITH_Shippo_Object_Data_Store_Interface {
	/**
	 * Method to create a new record of a WC_Data based object.
	 *
	 * @param WC_Data $data Data object.
	 */
	public function create( &$data );

	/**
	 * Method to read a record. Creates a new WC_Data based object.
	 *
	 * @param WC_Data $data Data object.
	 */
	public function read( &$data );

	/**
	 * Updates a record in the database.
	 *
	 * @param WC_Data $data Data object.
	 */
	public function update( &$data );

	/**
	 * Deletes a record from the database.
	 *
	 * @param WC_Data $data Data object.
	 *
	 * @return bool result
	 */
	public function delete( &$data );

}
