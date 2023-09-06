<?php 
$banner= get_stylesheet_directory_uri().'/email_templates/images/event_not_recorded.png';
include(locate_template('templates/email_templates/structure/email_header.php'));
$site_url               =   get_site_url();

?>



                <!-- section : User Welcoming -->
                <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tr>
                    <td style="padding: 0px;">
                      <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr>
                          <td class="col px-sm-16 " align="left" width="352" style="background-color:#ffffff; padding: 48px 24px 32px 24px!important; border-radius: 2px!important; ">

                            <h3 mc:edit='PreHeading' class="quicksand" style="color: #718096;font-size: 16px; font-weight: 400; line-height: 20px ;"><?php esc_html_e('Hello there,','wprentals');?></h3>
                            <h1 mc:edit='Heading' class="quicksand" style="color: #222;font-size: 24px!important; font-weight: 600!important;line-height: 30px ; margin-bottom: 7px;">
                              <?php esc_html_e('New Message','wprentals');?>
                            </h1>
                            <p mc:edit='Text 1' class="source" style="color: #718096;font-size: 15px!important; font-weight: 300; line-height: 21px ; margin-bottom: 15px;"> 
                                <?php 
                                    esc_html_e('You have received a new contact message from ','wprentals');echo ' '.esc_url($site_url);
                                
                                ?>
                            </p>
                            <p mc:edit='Text 1' class="source wpestate_email_paragraph" style="color: #718096;font-size: 15px!important; font-weight: 300; line-height: 1.6em!important; margin-bottom: 15px;"> 
                                <?php 
                                    esc_html_e('These are the details:','wprentals');
                                
                                ?>
                            </p>
                            <p mc:edit='Text 1' class="source wpestate_email_paragraph" style="color: #718096;font-size: 15px!important; font-weight: 300; line-height: 1.6em!important ; margin-bottom: 15px;"> 
                                <?php 
                                    echo '<strong>'.esc_html__('Name','wprentals').':</strong> {name} <br>';
                                    echo '<strong>'.esc_html__('Email','wprentals').':</strong> {email} <br>';
                                    echo '<strong>'.esc_html__('Phone','wprentals').':</strong> {phone} <br>';
                                    echo '<strong>'.esc_html__('Subject','wprentals').':</strong> {subject} <br>';
                                    echo '<strong>'.esc_html__('Message','wprentals').':</strong> <br>{content} <br>';
                                
                                ?>
                            </p>
                            <p mc:edit='Text 1' class="source wpestate_email_paragraph" style="color: #718096;font-size: 15px!important; font-weight: 300; line-height: 1.6em!important ; margin-bottom: 15px;"> 
                                <?php 
                                   echo esc_html__('Sent From','wprentals').': {sent_from}</br>';
                                
                                ?>
                            </p>


                       
                        
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!-- End User Welcoming -->


                

                  <!--  ----------------------------------------------------------------------
                  Copy the Template Above
                ------------------------------------------------------------------------- -->  

               
               
 <?php include(locate_template('templates/email_templates/structure/email_footer.php')); ?>               