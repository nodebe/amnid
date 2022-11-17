import { Avatar, Box , Button, HStack, Text, Flex, Input, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, useToast} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import usersLayout from '../../../components/HOC/usersLayout'
import {updateProfile} from "../../../../utils/services"

const index = () => {
 
       
  const [user, setUser] = useState({})
  const toast = useToast()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    const [email, setEmail] = useState('')
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [instagram, setInstagram] = useState('')


    const setDetails = (user)=>{
      
      setFirstName(user?.first_name)
      setLastName(user?.last_name)
      setEmail(user?.email)
     
    }

    
    const savChanges = async ()=>{

      const user = JSON.parse(localStorage.getItem('user'))
       
    
      const values = {
        user_id : user.user_id,
        first_name : firstName,
        last_name: lastName,
        email: email
      }
      
    
     try {
       console.log(values,"valueeeeeeee")
       const data = await updateProfile(values)
       console.log(data, "dataaaaaaaa")
       localStorage.setItem("user", JSON.stringify(values))
       toast({
        position: "top-right",
        title: "User Info ",
        description: "user Info updated successfully",
         status: "success",
        isClosable: true,
      });
     } catch (error) {
      console.log(error)
     }
      
    }

    const saveSocial = ()=>{

    }
   useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('user'))
        console.log(userData, "userrrrrrrrrrrr")
        setUser(userData)
        console.log(userData.first_name)
        setDetails(userData)
   },[])

    

  return (
    <Box mb="40px">
       <Text color="#747474" fontSize="25px" fontWeight="500">Dashboard</Text>
       <Text pt="5px" color="#747474" fontSize="16px" fontWeight="600">Profile</Text>
       
       
      <Tabs>
      <Box mt="100px" pos="relative" >
         <Flex bg="#008565" alignItems="center" h="50px" borderRadius={6}>
           <Box pos="absolute" bottom="0px">
              <HStack align="flex-end">
                <Avatar  w="100px" h="100px"/>
                <Box p="10px">
                  <Text  borderBottom="1px solid white" color="white">Edit Picture</Text>
                </Box>
             </HStack>
           </Box >
           <TabList ml="250px">
             <Tab color="#008565" fontSize="14px" w="150px" h="36px" bg="white" fontWeight="400" variant='unstyled' _selected={{ color: 'white', bg: '#008565' , border:"1px solid #008565"}}> User Profile</Tab>
             <Tab color="white" fontSize="14px" w="150px" h="36px" bg="#008565" fontWeight="400" variant='unstyled' border="1px solid white"   _selected={{ color: 'white', bg: '#008565' }}> Edit Socials</Tab>
         </TabList>
         </Flex>
       </Box>
        
        <TabPanels>
          <TabPanel>
             <VStack mt="80px" w="100%" spacing="7">
                <HStack w="100%" spacing="7" >
                   <Text w="20%" color="#747474" fontWeight="600" fontSize="18px">Full Name</Text>
                   <HStack w="50%" spacing={5}>
                      <Input border="1px solid #ABAAAA" p="10px" variant='unstyled' value={firstName} onChange={(e)=>setFirstName(e.currentTarget.value)} placeholder='first name'/>
                     <Input border="1px solid #ABAAAA" p="10px" variant='unstyled' placeholder='last name' value={lastName} onChange={(e)=>setLastName(e.currentTarget.value)}/>
                  </HStack>
              </HStack>
              <HStack w="100%" spacing="7" >
                <Text  w="20%" color="#747474" fontWeight="600" fontSize="18px">Email address</Text>
                <Input w="50%" border="1px solid #ABAAAA" p="10px" variant='unstyled' placeholder='Email address' value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
              </HStack>
              
           </VStack>
           <Flex justifyContent="center" mt="30px">
                  <Button bg="#008565" color="white" fontSize="14px" w="300px" h="50px" onClick={savChanges}>Save Changes</Button>
          </Flex>
          </TabPanel>
          <TabPanel>
             <VStack mt="80px" w="100%" spacing="7">
               <HStack w="100%" spacing="7" >
                  <Text  w="20%" color="#747474" fontWeight="600" fontSize="18px">Twitter</Text>
                  <Input w="50%" border="1px solid #ABAAAA" p="10px" variant='unstyled' placeholder='Twitter' value={twitter} onChange={(e)=>setTwitter(e.currentTarget.value)}/>
                </HStack>
                <HStack w="100%" spacing="7" >
                 <Text  w="20%" color="#747474" fontWeight="600" fontSize="18px">Tiktok</Text>
                <Input w="50%" border="1px solid #ABAAAA" p="10px" variant='unstyled' placeholder='Tiktok' value={tiktok} onChange={(e)=>setTiktok(e.currentTarget.value)}/>
              </HStack>
              <HStack w="100%" spacing="7" >
                <Text  w="20%" color="#747474" fontWeight="600" fontSize="18px">Instagram</Text>
                <Input w="50%" border="1px solid #ABAAAA" p="10px" variant='unstyled' placeholder='instagram' value={instagram} onChange={(e)=>setInstagram(e.currentTarget.value)}/>
              </HStack>
              <HStack w="100%" spacing="7" >
                <Text  w="20%" color="#747474" fontWeight="600" fontSize="18px">Facebook</Text>
                <Input w="50%" border="1px solid #ABAAAA" p="10px" variant='unstyled' placeholder='faceboook' value={facebook} onChange={(e)=>setFacebook(e.currentTarget.value)}/>
               </HStack>
             </VStack>
             <Flex justifyContent="center" mt="30px">
               <Button bg="#008565" color="white" fontSize="14px" w="300px" h="50px" onClick={saveSocial}>Save Changes</Button>
           </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </Box>
  )
}

export default usersLayout(index)
