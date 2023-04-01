import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
//Importar los componentes desde react hook form
import { useForm, Controller } from "react-hook-form";


export default function App() {
  //Definicion del form con sus respectivos estados para la validacion de los datos
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone:'',
      password:'',
      age:''
    }
  });

  const onSubmit = (dataform) =>{
    console.log(dataform)
    const {fullname,email,phone} = dataform;
    console.log(fullname)
    console.log(email)
    console.log(phone)
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:2,
         pattern:  /^[A-Za-zÑñÁÉÍÓÚáéíóú ]+$/g
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="nombre completo"
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type=='required' && <Text style={{color:'red'}}>El nombre completo es obligatorio</Text>}
      {errors.fullname?.type=='maxLength' && <Text style={{color:'red'}}>El nombre completo tiene un maximo de 30 chars</Text>}
      {errors.fullname?.type=='minLength' && <Text style={{color:'red'}}>El nombre completo tiene un minimo de 2 chars</Text>}
      {errors.fullname?.type=='pattern' && <Text style={{color:'red'}}>El nombre completo debe tener letras y/o espacios</Text>}

      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:5,
         pattern:  /^([a-z0-9_\.-]+)@([\da-z-]+)\.([a-z\.]{2,6})$/

        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="email"
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type=='required' && <Text style={{color:'red'}}>El email es obligatorio</Text>}
      {errors.email?.type=='maxLength' && <Text style={{color:'red'}}>El email tiene un maximo de 30 chars</Text>}
      {errors.email?.type=='minLength' && <Text style={{color:'red'}}>El email  tiene un minimo de 5 chars</Text>}
      {errors.email?.type=='pattern' && <Text style={{color:'red'}}>El nombre completo debe tener letras y no espacios</Text>}
      
      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:12,
         minLength:1,
         pattern:  /^[0-9+]+$/g 

        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="phone"
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phone"
      />
      {errors.phone?.type=='required' && <Text style={{color:'red'}}>El phone es obligatorio</Text>}
      {errors.phone?.type=='maxLength' && <Text style={{color:'red'}}>El phone tiene un maximo de 12 chars</Text>}
      {errors.phone?.type=='minLength' && <Text style={{color:'red'}}>El phone  tiene un minimo de 5 chars</Text>}
      {errors.phone?.type=='pattern' && <Text style={{color:'red'}}>El phone completo debe tener letras y no espacios</Text>}

      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:12,
         minLength:1,
         pattern:  /^[a-zA-Z0-9\.$!]$/ 

        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="password"
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password?.type=='required' && <Text style={{color:'red'}}>El password es obligatorio</Text>}
      {errors.password?.type=='maxLength' && <Text style={{color:'red'}}>El password tiene un maximo de 12 chars</Text>}
      {errors.password?.type=='minLength' && <Text style={{color:'red'}}>El password tiene un minimo de 5 chars</Text>}
      {errors.password?.type=='pattern' && <Text style={{color:'red'}}>El password completo debe tener letras y no espacios</Text>}
    

      <Button 
      icon="send" 
      mode="contained" 
      onPress={handleSubmit(onSubmit)}>
      Enviar
    </Button>


     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
