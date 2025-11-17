# Contact Form Setup Guide

## Web3Forms Configuration

To get your contact form working, you need to set up a Web3Forms access key:

### Step 1: Get Your Free Access Key

1. Go to [Web3Forms.com](https://web3forms.com/)
2. Click "Get Started" or "Create Form"
3. Enter your email address (this is where you'll receive form submissions)
4. You'll get a free access key

### Step 2: Configure Environment Variable

1. Open the `.env.local` file in your project root
2. Replace `your_web3forms_access_key_here` with your actual access key:
   ```
   WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

### Step 3: Restart Development Server

After updating the `.env.local` file:

```bash
npm run dev
```

### Example .env.local Content:

```
WEB3FORMS_ACCESS_KEY=abcd1234-5678-90ef-ghij-klmnopqrstuv
```

## Features Included:

- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Automatic form reset on success
- ✅ Server-side processing
- ✅ Responsive design
- ✅ Proper error handling

## Troubleshooting:

- Make sure to restart the dev server after changing `.env.local`
- Verify your access key is correct (no extra spaces)
- Check browser console for any error messages
- Test with a simple message first
