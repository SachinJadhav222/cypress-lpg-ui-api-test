Feature: Print datat talbe
    As User
    I want to  Print datat table

    Scenario: Print data table using rowHash()
        Given Print using rowHash
            | firstName | Tom                     |
            | lastName  | Jerry                   |
            | phone     | 123456789               |
            | email     | tomandjerry@cartoon.com |

    Scenario: Print data table using rows()
        Given Print using row
            | Fields    | Inputs                  |
            | firstName | Tom                     |
            | lastName  | Jerry                   |
            | phone     | 123456789               |
            | email     | tomandjerry@cartoon.com |


    Scenario: Print data table using hashes()
        Given Print using hashes
            | firstName | Tom                     |
            | lastName  | Jerry                   |
            | phone     | 123456789               |
            | email     | tomandjerry@cartoon.com |

    # Scenario: Print data table using empty Object
    #     Given Print using empty object
    #         | parameter | value                   |
    #         | firstName | Tom                     |
    #         | lastName  | Jerry                   |
    #         | phone     | 123456789               |
    #         | email     | tomandjerry@cartoon.com |

