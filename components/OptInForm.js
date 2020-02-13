import { useForm } from '@statickit/react';
import React from 'react';
import tw from 'tailwind.macro';

const OptInForm = ({
  className,
  title = "Web Development",
  subtitle = "Subscribe to our newsletter for updates.",
}) => {
  const [state, handleSubmit] = useForm('optInForm');

  if (state.succeeded) {
    return <div css={tw`mt-8`}>Thank you for signing up!</div>;
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <p css={tw`text-center font-bold text-lg tracking-wider font-mono`}>
        {title}
      </p>
      <p css={tw`text-center mt-6 font-sans`}>
        {subtitle}
      </p>
      <div css={tw`flex flex-col flex-wrap items-center`}>
        <label css={tw`hidden`} htmlFor="email">
          Email Address
        </label>
        <input
          // css={tw`flex-grow mr-3 mb-3 p-3 rounded-lg bg-gray-200 border border-gray-200 focus:outline-none focus:border-gray-500 focus:bg-white`}
          css={tw`mb-2 mt-6 py-3 px-4 rounded-lg border-1 border-gray-500 font-bold text-center shadow-sm`}
          id="email"
          type="email"
          name="email"
          placeholder="Your e-mail address..."
          required
        />
        <button
          css={tw`px-5 py-3 rounded-lg border-2 border-gray-500 bg-red-400 text-lg font-bold text-white shadow-sm`}
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default OptInForm;
