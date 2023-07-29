import InputElement from "@/components/formElements/InputElement";

const Login = () => {
	return (
		<form action='' method='post' className='my-20 max-w-md mx-auto grid gap-6'>
			<h1 className='heading-2 mb-6'>Login</h1>
			<InputElement
				type='email'
				name='email'
				id='email'
				required
				label='Email'
				value=''
				placeholder='alexei@mail.com'
			/>
			<InputElement
				type='password'
				name='password'
				id='password'
				required
				label='Password'
				value=''
				placeholder='....'
			/>
			<button className='btn btn-orange'>Login</button>
		</form>
	);
};
export default Login;
