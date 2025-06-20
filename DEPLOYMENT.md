# Vercel Deployment Guide

This guide will help you deploy your Angular portfolio to Vercel with optimal performance and configuration.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Your project should be in a Git repository (GitHub, GitLab, or Bitbucket)
3. **Node.js**: Ensure you have Node.js 18+ installed locally for testing

## Deployment Steps

### 1. Prepare Your Project

Before deploying, ensure your project is ready:

```bash
# Install dependencies
npm install

# Test the build locally
npm run build

# Test the production build
npm run serve:prod
```

### 2. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect it's an Angular project
5. Configure the following settings:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/portfolio`
   - **Install Command**: `npm install`

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts and deploy
```

### 3. Environment Variables (if needed)

If your app uses environment variables, add them in the Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add any required variables

### 4. Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Configure DNS settings as instructed

## Configuration Files

### vercel.json
The `vercel.json` file is configured for optimal performance:
- Uses Vercel v3 configuration
- Implements proper SPA routing
- Adds caching headers for static assets
- Optimizes for Angular framework

### Build Optimization
The project is configured with:
- Production build optimizations
- Asset compression and minification
- Proper bundle splitting
- Source map generation disabled for production

## Performance Optimizations

### 1. Asset Optimization
- Images are optimized and cached
- CSS and JS files are minified
- Fonts are preloaded for better performance

### 2. Caching Strategy
- Static assets cached for 1 year
- JavaScript and CSS files cached with immutable headers
- Proper cache invalidation on updates

### 3. Loading Performance
- Critical resources preloaded
- Font Awesome and Google Fonts optimized
- Loading indicator for better UX

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (should be 18+)
   - Ensure all dependencies are installed
   - Check for TypeScript errors

2. **Routing Issues**
   - Ensure `vercel.json` has proper rewrites
   - Check that Angular router is configured correctly

3. **Performance Issues**
   - Verify build optimization is enabled
   - Check bundle sizes in build output
   - Monitor Core Web Vitals in Vercel Analytics

### Debug Commands

```bash
# Check build locally
npm run build

# Analyze bundle size
npm run build -- --stats-json
npx webpack-bundle-analyzer dist/portfolio/stats.json

# Test production build
npm run serve:prod
```

## Monitoring and Analytics

### Vercel Analytics
Enable Vercel Analytics in your project dashboard for:
- Performance monitoring
- Core Web Vitals tracking
- User behavior insights

### Performance Monitoring
- Monitor Core Web Vitals
- Track bundle sizes
- Monitor loading times

## Security Considerations

1. **Environment Variables**: Never commit sensitive data
2. **Dependencies**: Regularly update dependencies
3. **HTTPS**: Vercel provides automatic HTTPS
4. **Headers**: Security headers are configured in `vercel.json`

## Continuous Deployment

Once deployed, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Rollback to previous versions if needed

## Support

For issues with:
- **Vercel Deployment**: Check [Vercel Documentation](https://vercel.com/docs)
- **Angular Build**: Check [Angular Documentation](https://angular.dev)
- **Performance**: Use Vercel Analytics and Lighthouse

## Next Steps

After successful deployment:
1. Set up custom domain (optional)
2. Configure analytics
3. Set up monitoring
4. Optimize based on performance metrics 