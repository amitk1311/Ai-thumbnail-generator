import React, { useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for casual creators',
      price: billingCycle === 'monthly' ? 9 : 7,
      yearlyPrice: 84,
      icon: Star,
      features: [
        '50 thumbnails per month',
        'Basic templates',
        '720p resolution',
        '1 user account',
        'Email support'
      ],
      color: 'from-gray-600 to-gray-700',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Most popular for content creators',
      price: billingCycle === 'monthly' ? 19 : 15,
      yearlyPrice: 180,
      icon: Zap,
      features: [
        'Unlimited thumbnails',
        'Premium templates',
        '4K resolution',
        'Advanced AI features',
        'Priority support',
        'Custom branding',
        'Team collaboration (up to 3)'
      ],
      color: 'from-purple-600 to-indigo-600',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For agencies and large teams',
      price: billingCycle === 'monthly' ? 49 : 39,
      yearlyPrice: 468,
      icon: Crown,
      features: [
        'Everything in Pro',
        'Unlimited users',
        'API access',
        'Custom templates',
        'White-label options',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations'
      ],
      color: 'from-indigo-600 to-blue-600',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include our core AI thumbnail generation.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-800 border border-gray-700 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gray-800 border ${
                  plan.popular
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20'
                    : 'border-gray-700'
                } rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}>
                    <PlanIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-gray-400 mt-2">
                      Billed annually (${plan.yearlyPrice}/year)
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">
              Not sure which plan is right for you?
            </h4>
            <p className="text-gray-300 mb-6">
              Start with our free 7-day trial. No credit card required. Upgrade or downgrade anytime.
            </p>
            <button className="btn-secondary">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
